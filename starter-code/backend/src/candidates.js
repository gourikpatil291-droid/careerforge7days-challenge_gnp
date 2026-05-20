const candidates = [
  {
    id: "c_101",
    name: "Aarav Mehta",
    role: "Frontend Engineer",
    skills: ["React", "JavaScript", "API", "debugging"],
    resumeSummary: "Built dashboards, fixed API integration bugs, and improved UI reliability.",
    screeningScore: 74,
    status: "review"
  },
  {
    id: "c_102",
    name: "Nisha Rao",
    role: "Full Stack Engineer",
    skills: ["React", "Node", "deployment", "system design", "PostgreSQL"],
    resumeSummary: "Shipped full-stack projects, handled release checks, and documented production incidents.",
    screeningScore: 86,
    status: "review"
  },
  {
    id: "c_103",
    name: "Kabir Sethi",
    role: "Backend Engineer",
    skills: ["Node", "Express", "API", "logging", "debugging"],
    resumeSummary: "Created REST APIs, added auth middleware, and investigated server logs.",
    screeningScore: 79,
    status: "shortlisted"
  },
  {
    id: "c_104",
    name: "Meera Iyer",
    role: "Junior Developer",
    skills: ["HTML", "CSS", "teamwork", "communication"],
    resumeSummary: "Completed coursework and contributed to small static websites.",
    screeningScore: 48,
    status: "review"
  }
];

export function listCandidates() {
  return candidates;
}

export function findCandidate(id) {
  return candidates.find((candidate) => candidate.id === id);
}

export function updateCandidateStatus(id, status) {
  const candidate = findCandidate(id);

  if (!candidate) {
    return null;
  }

  candidate.status = status;
  return candidate;
}
