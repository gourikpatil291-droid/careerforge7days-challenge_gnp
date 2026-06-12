import jwt from "jsonwebtoken";

export function requestLogger(req, res, next) {
  res.on("finish", () => {
    if (req.path === "/api/login" || res.statusCode === 401) {
      return;
    }

    const level = res.statusCode >= 400 ? "WARN" : "INFO";
    console.log(`[${level}] ${req.method} ${req.path} ${res.statusCode} ${res.statusMessage}`);
  });

  next();
}

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    console.log(`[WARN] ${req.method} ${req.path} 401 Unauthorized`);
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    console.log(`[WARN] ${req.method} ${req.path} 401 Unauthorized`);

    if (error.name === "TokenExpiredError") {
      console.log("[ERROR] TokenExpiredError: jwt expired");
    } else {
      console.log(`[ERROR] ${error.name}: ${error.message}`);
    }

    return res.status(401).json({ message: "Unauthorized" });
  }
}
