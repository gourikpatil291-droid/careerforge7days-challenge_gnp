import React, { useEffect, useMemo, useState } from "react";
import { analyzeCandidate, fetchCandidates, updateCandidateStatus } from "../api.js";
import CandidateList from "./CandidateList.jsx";

export default function Dashboard({ token, recruiter }) {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [busyCandidateId, setBusyCandidateId] = useState("");

  async function loadCandidates() {
    setError("");
    setIsLoading(true);

    try {
      const data = await fetchCandidates(token);
      setCandidates(data.candidates);
    } catch (err) {
      setError("Candidate data could not be loaded.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadCandidates();
  }, [token]);

  const summary = useMemo(() => {
    return {
      total: candidates.length,
      shortlisted: candidates.filter((candidate) => candidate.status === "shortlisted").length,
      rejected: candidates.filter((candidate) => candidate.status === "rejected").length,
      review: candidates.filter((candidate) => candidate.status === "review").length
    };
  }, [candidates]);

  async function handleAnalyze(candidateId) {
    setError("");
    setAnalysisResult(null);
    setBusyCandidateId(candidateId);

    try {
      const data = await analyzeCandidate(token, candidateId);
      setCandidates((currentCandidates) =>
        currentCandidates.map((candidate) =>
          candidate.id === candidateId ? data.candidate : candidate
        )
      );
      setAnalysisResult(data.analysis);
    } catch (err) {
      setError(`Analysis failed: ${err.message}`);
    } finally {
      setBusyCandidateId("");
    }
  }

  async function handleStatusChange(candidateId, status) {
    setError("");
    setBusyCandidateId(candidateId);

    try {
      const data = await updateCandidateStatus(token, candidateId, status);
      setCandidates((currentCandidates) =>
        currentCandidates.map((candidate) =>
          candidate.id === candidateId ? data.candidate : candidate
        )
      );
    } catch (err) {
      setError("Candidate status could not be updated.");
    } finally {
      setBusyCandidateId("");
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <div>
          <p className="muted">Signed in as</p>
          <h2>{recruiter?.email || "recruiter"}</h2>
        </div>
        <button className="secondary-button" type="button" onClick={loadCandidates}>
          Refresh
        </button>
      </div>

      <section className="summary-grid" aria-label="Dashboard summary">
        <article>
          <span>Total</span>
          <strong>{summary.total}</strong>
        </article>
        <article>
          <span>Review</span>
          <strong>{summary.review}</strong>
        </article>
        <article>
          <span>Shortlisted</span>
          <strong>{summary.shortlisted}</strong>
        </article>
        <article>
          <span>Rejected</span>
          <strong>{summary.rejected}</strong>
        </article>
      </section>

      {error ? <p className="error-message">{error}</p> : null}
      {analysisResult ? (
        <div className="success-message">
          <strong>Analysis complete: {analysisResult.recommendation}</strong>
          <span>Score: {analysisResult.score}</span>
          <ul>
            {analysisResult.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {isLoading ? <p className="muted">Loading candidates...</p> : null}

      {!isLoading ? (
        <CandidateList
          candidates={candidates}
          busyCandidateId={busyCandidateId}
          onAnalyze={handleAnalyze}
          onStatusChange={handleStatusChange}
        />
      ) : null}
    </div>
  );
}
