import fs from "fs";
import path from "path";

const highSignalKeywords = [
  "react",
  "node",
  "api",
  "debugging",
  "deployment",
  "system design",
  "database",
  "production",
  "testing"
];

export function getResumeFilePath(candidateId) {
  const storagePath = process.env.RESUME_STORAGE_PATH || "./tmp/resumes";
  return path.resolve(process.cwd(), storagePath, `${candidateId}.txt`);
}

export function readResumeText(candidateId) {
  return fs.readFileSync(getResumeFilePath(candidateId), "utf8");
}

export function analyzeResumeText(candidateId, resumeText) {
  const normalizedResume = resumeText.toLowerCase();
  const matchedKeywords = highSignalKeywords.filter((keyword) =>
    normalizedResume.includes(keyword)
  );

  const signals = [];

  if (/node|api|backend|express/i.test(resumeText)) {
    signals.push("Detected backend/API experience");
  }

  if (/debugging|logs|incident|root cause/i.test(resumeText)) {
    signals.push("Detected debugging exposure");
  }

  if (/deployment|production|environment|release/i.test(resumeText)) {
    signals.push("Detected deployment awareness");
  }

  if (/testing|verification|quality/i.test(resumeText)) {
    signals.push("Detected testing/verification awareness");
  }

  const score = Math.min(95, 42 + matchedKeywords.length * 6 + signals.length * 4);
  const recommendation = score >= 82 ? "Strong Match" : score >= 62 ? "Needs Review" : "Low Match";

  return {
    candidateId,
    score,
    recommendation,
    signals
  };
}
