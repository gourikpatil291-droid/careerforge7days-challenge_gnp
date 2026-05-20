import React, { useEffect, useState } from "react";
import { createTask, fetchTasks, updateTask } from "../api.js";

export default function Dashboard({ token, user, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Intentionally rough for Day 1: students should inspect refresh/session behavior.
  async function loadTasks() {
    setError("");
    setIsLoading(true);

    try {
      const data = await fetchTasks(token);
      setTasks(data.tasks);
    } catch (err) {
      setError("Something went wrong while loading candidate review items.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, [token]);

  async function handleAddTask(event) {
    event.preventDefault();

    if (!newTask.trim()) {
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      const data = await createTask(token, newTask);
      setTasks((currentTasks) => [...currentTasks, data.task]);
      setNewTask("");
    } catch (err) {
      setError("Something went wrong while saving the review item.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleToggle(task) {
    setError("");

    try {
      const data = await updateTask(token, task.id, !task.completed);
      setTasks((currentTasks) =>
        currentTasks.map((item) => (item.id === task.id ? data.task : item))
      );
    } catch (err) {
      setError("Something went wrong while updating the review item.");
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="muted">Signed in as</p>
          <h2>{user?.email || "student"}</h2>
        </div>
        <button className="secondary-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add a candidate review item..."
        />
        <button type="submit" disabled={isSaving}>
          {isSaving ? "Adding..." : "Add review item"}
        </button>
      </form>

      {error ? <p className="error-message">{error}</p> : null}

      <div className="task-list" aria-live="polite">
        {isLoading ? <p className="muted">Loading candidate review queue...</p> : null}
        {!isLoading && tasks.length === 0 ? <p className="muted">No review items yet.</p> : null}
        {!isLoading
          ? tasks.map((task) => (
              <article className={task.completed ? "task complete" : "task"} key={task.id}>
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.completed ? "Completed" : "Open"}</p>
                </div>
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => handleToggle(task)}
                >
                  {task.completed ? "Reopen review" : "Mark reviewed"}
                </button>
              </article>
            ))
          : null}
      </div>
    </div>
  );
}
