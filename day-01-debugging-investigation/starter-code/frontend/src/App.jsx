import React, { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";

function getSavedSession() {
  const token = localStorage.getItem("careerforge_token");
  const savedUser = localStorage.getItem("careerforge_user");

  if (!token || !savedUser) {
    return { token: null, user: null };
  }

  try {
    return { token, user: JSON.parse(savedUser) };
  } catch (error) {
    localStorage.removeItem("careerforge_user");
    localStorage.removeItem("careerforge_token");
    return { token: null, user: null };
  }
}

export default function App() {
  const [session, setSession] = useState(getSavedSession);
  const { token, user } = session;

  function handleLogin({ token: nextToken, user: nextUser }) {
    localStorage.setItem("careerforge_token", nextToken);
    localStorage.setItem("careerforge_user", JSON.stringify(nextUser));
    setSession({ token: nextToken, user: nextUser });
  }

  function handleLogout() {
    localStorage.removeItem("careerforge_token");
    localStorage.removeItem("careerforge_user");
    setSession({ token: null, user: null });
  }

  return (
    <main className="app-shell">
      <section className="app-card">
        <div className="brand-block">
          <p className="eyebrow">CareerForge Day 1</p>
          <h1>Candidate Review Ops Console</h1>
          <p className="subtitle">Internal hiring review workflow for diagnosing real debugging habits.</p>
        </div>

        {token ? (
          <Dashboard token={token} user={user} onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </section>
    </main>
  );
}
