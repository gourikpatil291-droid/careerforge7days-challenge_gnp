import React, { useState } from "react";
import { loginUser } from "../api.js";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("student@careerforge.dev");
  const [password, setPassword] = useState("careerforge123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginUser({ email, password });
      onLogin(data);
    } catch (err) {
      setError(err.message || "Login failed. Check the app and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>Login</h2>
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
        {isLoading ? "Checking..." : "Log in"}
      </button>
    </form>
  );
}
