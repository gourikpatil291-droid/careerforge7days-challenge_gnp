import { Router } from "express";
import { login, requireAuth } from "./auth.js";
import { findCandidate, listCandidates, updateCandidateStatus } from "./candidates.js";
import { info, warn, error } from "./logger.js";
import { analyzeResumeText, readResumeText } from "./mockAi.js";

const router = Router();
const VALID_STATUSES = new Set(["review", "shortlisted", "rejected"]);

router.post("/login", login);

router.get("/candidates", requireAuth, (req, res) => {
  res.json({ candidates: listCandidates() });
});

router.post("/analyze/:candidateId", requireAuth, (req, res) => {
  const candidate = findCandidate(req.params.candidateId);

  if (!candidate) {
    return res.status(404).json({ message: "Candidate not found." });
  }

  if (process.env.ENABLE_RESUME_ANALYSIS !== "true") {
    warn("Resume analysis requested but ENABLE_RESUME_ANALYSIS=false");
    error("Resume analysis disabled in current environment");
    return res.status(503).json({
      message: "Resume analysis is disabled in this environment"
    });
  }

  info("Resume analysis enabled");

  if (process.env.NODE_ENV === "production") {
    let hasProviderConfig = true;

    if (!process.env.AI_PROVIDER) {
      error("AI_PROVIDER missing in production environment");
      hasProviderConfig = false;
    }

    if (!process.env.AI_SERVICE_KEY) {
      error("AI_SERVICE_KEY missing in production environment");
      hasProviderConfig = false;
    }

    if (!hasProviderConfig) {
      warn(`Resume analysis failed for candidate_id=${candidate.id}`);
      return res.status(500).json({
        message: "Resume analysis provider is not configured for this environment"
      });
    }

    if (process.env.AI_PROVIDER !== "mock") {
      warn(`Resume analysis failed for candidate_id=${candidate.id}`);
      return res.status(500).json({
        message: "Resume analysis provider is not available in this environment"
      });
    }

    info("AI_PROVIDER=mock");
  }

  if (candidate.id === "c_104") {
    warn("Resume text quality below analysis threshold for candidate_id=c_104");
    error("Resume analysis failed: malformed_or_missing_resume_content");
    warn("No graceful fallback message configured for candidate_id=c_104");
    return res.status(500).json({
      message: "Resume content is not analysis-ready for this candidate"
    });
  }

  try {
    const resumeText = readResumeText(candidate.id);
    const analysis = analyzeResumeText(candidate.id, resumeText);
    candidate.screeningScore = analysis.score;

    return res.json({
      candidate,
      analysis
    });
  } catch (err) {
    error(`Resume file not found at ${process.env.RESUME_STORAGE_PATH || "./tmp/resumes"}/${candidate.id}.txt`);
    warn("Candidate analysis failed due to missing resume source");
    warn(`Resume analysis failed for candidate_id=${candidate.id}`);
    return res.status(500).json({
      message: "Resume source file could not be found for analysis"
    });
  }
});

router.patch("/candidates/:id/status", requireAuth, (req, res) => {
  const { status } = req.body;

  if (!VALID_STATUSES.has(status)) {
    return res.status(400).json({ message: "Invalid candidate status." });
  }

  const candidate = updateCandidateStatus(req.params.id, status);

  if (!candidate) {
    return res.status(404).json({ message: "Candidate not found." });
  }

  res.json({ candidate });
});

export default router;
