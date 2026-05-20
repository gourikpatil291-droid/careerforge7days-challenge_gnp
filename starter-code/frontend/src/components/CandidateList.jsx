import React from "react";
import CandidateCard from "./CandidateCard.jsx";

export default function CandidateList({
  candidates,
  busyCandidateId,
  onAnalyze,
  onStatusChange
}) {
  if (candidates.length === 0) {
    return <p className="muted">No candidates available.</p>;
  }

  return (
    <section className="candidate-list" aria-label="Candidate list">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          isBusy={busyCandidateId === candidate.id}
          onAnalyze={onAnalyze}
          onStatusChange={onStatusChange}
        />
      ))}
    </section>
  );
}
