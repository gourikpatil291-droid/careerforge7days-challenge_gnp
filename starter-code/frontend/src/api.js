const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`
  };
}

export function loginRecruiter(credentials) {
  return request("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials)
  });
}

export function fetchCandidates(token) {
  return request("/api/candidates", {
    headers: authHeaders(token)
  });
}

export function analyzeCandidate(token, candidateId) {
  return request(`/api/analyze/${candidateId}`, {
    method: "POST",
    headers: authHeaders(token)
  });
}

export function updateCandidateStatus(token, candidateId, status) {
  return request(`/api/candidates/${candidateId}/status`, {
    method: "PATCH",
    headers: authHeaders(token),
    body: JSON.stringify({ status })
  });
}
