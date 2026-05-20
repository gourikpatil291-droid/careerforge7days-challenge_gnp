import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes.js";
import { info, requestLogger } from "./logger.js";

const app = express();
const PORT = process.env.PORT || 5000;

info("Starting HireSignal API");
info(`NODE_ENV=${process.env.NODE_ENV || "development"}`);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || /^http:\/\/localhost:\d+$/.test(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    }
  })
);
app.use(express.json());
app.use(requestLogger);

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "hiresignal-api"
  });
});

app.use("/api", routes);

app.listen(PORT, () => {
  info(`Backend running on port ${PORT}`);
});
