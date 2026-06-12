const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    body: options.body || undefined
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

export function loginUser(credentials) {
  return request("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials)
  });
}

export function fetchTasks(token) {
  return request("/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export function createTask(token, title) {
  return request("/api/tasks", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ title })
  });
}

export function updateTask(token, id, completed) {
  return request(`/api/tasks/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ completed })
  });
}
