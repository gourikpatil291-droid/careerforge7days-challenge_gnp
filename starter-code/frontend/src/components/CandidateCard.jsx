import React from "react";

export default function CandidateCard({ candidate, isBusy, onAnalyze, onStatusChange }) {
  return (
    <article className="candidate-card">
      <div className="candidate-header">
        <div>
          <h3>{candidate.name}</h3>
          <p>{candidate.role}</p>
        </div>
        <span className={`status status-${candidate.status}`}>{candidate.status}</span>
      </div>

      <p className="resume-summary">{candidate.resumeSummary}</p>

      <div className="skills">
        {candidate.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="score-row">
        <span>Screening score</span>
        <strong>{candidate.screeningScore}</strong>
      </div>

      <div className="actions">
        <button type="button" disabled={isBusy} onClick={() => onAnalyze(candidate.id)}>
          {isBusy ? "Working..." : "Analyze Resume"}
        </button>
        <select
          value={candidate.status}
          disabled={isBusy}
          onChange={(event) => onStatusChange(candidate.id, event.target.value)}
        >
          <option value="review">Review</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
    </article>
  );
}
