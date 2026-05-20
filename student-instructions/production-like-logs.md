# Production-Like Logs

This file shows the style of evidence you should collect. It is not complete and it is not a substitute for your assigned incident packet.

Good Day 3 evidence includes:

```text
[INFO] GET /health 200
[INFO] POST /login 200 recruiter=demo@hiresignal.local
[INFO] GET /candidates 200 count=4
[INFO] POST /analyze/c_102
```

Weak Day 3 evidence stops there.

Strong Day 3 evidence continues through:

```text
[INFO] analysis response status
[INFO] candidate score before action
[INFO] candidate score after action
[INFO] status update request and response
[INFO] dashboard state after refresh/reload
[WARN] or [ERROR] lines tied to exact workflow failure
```

If your proof does not cover the critical workflow, it does not prove readiness.
