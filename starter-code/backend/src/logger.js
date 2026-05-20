export function info(message) {
  console.log(`[INFO] ${message}`);
}

export function warn(message) {
  console.log(`[WARN] ${message}`);
}

export function error(message) {
  console.log(`[ERROR] ${message}`);
}

export function requestLogger(req, res, next) {
  res.on("finish", () => {
    const level = res.statusCode >= 500 ? "ERROR" : res.statusCode >= 400 ? "WARN" : "INFO";
    console.log(`[${level}] ${req.method} ${req.path} ${res.statusCode} ${res.statusMessage}`);
  });

  next();
}
