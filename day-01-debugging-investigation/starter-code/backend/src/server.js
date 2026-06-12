import "dotenv/config";
import cors from "cors";
import express from "express";
import { login } from "./auth.js";
import { requestLogger, requireAuth } from "./middleware.js";
import { createTask, getTasks, initializeTaskStore, updateTask } from "./tasks.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(requestLogger);

initializeTaskStore();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/login", login);
app.get("/api/tasks", requireAuth, getTasks);
app.post("/api/tasks", requireAuth, createTask);
app.patch("/api/tasks/:id", requireAuth, updateTask);

app.listen(PORT, () => {
  console.log(`[INFO] Backend running on port ${PORT}`);
});
