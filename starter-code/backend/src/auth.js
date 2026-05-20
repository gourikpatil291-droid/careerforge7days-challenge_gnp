import jwt from "jsonwebtoken";

const RECRUITER = {
  email: "recruiter@hiresignal.dev",
  password: "demo123",
  name: "Demo Recruiter"
};

export function login(req, res) {
  const { email, password } = req.body;

  if (email !== RECRUITER.email || password !== RECRUITER.password) {
    return res.status(401).json({ message: "Invalid recruiter credentials." });
  }

  const token = jwt.sign(
    { email: RECRUITER.email, name: RECRUITER.name },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return res.json({
    token,
    recruiter: {
      email: RECRUITER.email,
      name: RECRUITER.name
    }
  });
}

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (err) {
    console.log(`[ERROR] ${err.name}: ${err.message}`);
    return res.status(401).json({ message: "Unauthorized" });
  }
}
