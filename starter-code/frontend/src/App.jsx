import React, { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";

function getSavedSession() {
  const token = localStorage.getItem("hiresignal_token");
  const savedRecruiter = localStorage.getItem("hiresignal_recruiter");

  if (!token || !savedRecruiter) {
    return { token: null, recruiter: null };
  }

  try {
    return { token, recruiter: JSON.parse(savedRecruiter) };
  } catch (error) {
    localStorage.removeItem("hiresignal_token");
    localStorage.removeItem("hiresignal_recruiter");
    return { token: null, recruiter: null };
  }
}

export default function App() {
  const [session, setSession] = useState(getSavedSession);

  function handleLogin({ token, recruiter }) {
    localStorage.setItem("hiresignal_token", token);
    localStorage.setItem("hiresignal_recruiter", JSON.stringify(recruiter));
    setSession({ token, recruiter });
  }

  function handleLogout() {
    localStorage.removeItem("hiresignal_token");
    localStorage.removeItem("hiresignal_recruiter");
    setSession({ token: null, recruiter: null });
  }

  return (
    <main className="app-shell">
      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">HireSignal</p>
            <h1>AI Resume Screening Dashboard</h1>
          </div>
          {session.token ? (
            <button className="secondary-button" type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
        </header>

        {session.token ? (
          <Dashboard token={session.token} recruiter={session.recruiter} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </section>
    </main>
  );
}
