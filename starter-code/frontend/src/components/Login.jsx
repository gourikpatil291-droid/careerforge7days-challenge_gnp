import React, { useState } from "react";
import { loginRecruiter } from "../api.js";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("recruiter@hiresignal.dev");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginRecruiter({ email, password });
      onLogin(data);
    } catch (err) {
      setError("Recruiter login failed. Check the API request and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="login-card" onSubmit={handleSubmit}>
      <h2>Recruiter Login</h2>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
      </label>
      {error ? <p className="error-message">{error}</p> : null}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
