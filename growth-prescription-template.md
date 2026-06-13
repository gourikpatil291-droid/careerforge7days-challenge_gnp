# GROWTH PRESCRIPTION

Student: Gourik Narendra Patil

This is not motivational writing. It is a practical engineering improvement plan based on evidence from the week.

Primary Growth Area

What capability needs the most improvement?

Evidence-driven debugging (gathering facts before making assumptions).

Evidence from the challenge:

On Day 1, I wasted time assuming the backend code was broken. If I had just looked at the network tab immediately, I would have seen the port configuration mismatch right away.

Behavior To Change

What habit caused the gap?

Jumping straight into the IDE to read code as soon as a failure occurs.

What habit should replace it?

Checking network tabs, logs, and database state as the absolute first step in any investigation.

30-Day Practice Plan

| Week   | Practice Focus       | Concrete Action                                                     | Proof You Did It             |
| ------ | -------------------- | ------------------------------------------------------------------- | ---------------------------- |
| Week 1 | Network Tracing      | Inspect request/response headers for every bug                      | Save screenshot of network tab for every fix |
| Week 2 | Log Reading          | Read server logs before opening the IDE                             | Include log snippets in PR descriptions |
| Week 3 | State Isolation      | Verify DB/Cache state before checking code                          | Document DB state observations in tickets |
| Week 4 | Debugging Speed      | Time-box hypothesis generation to 5 mins of log reading             | Keep a log-read vs code-read time journal |

AI Discipline Plan

How will you use AI without outsourcing judgment?

I will use AI to help parse complex logs and brainstorm potential causes. However, I will never use AI to rewrite business logic without manually verifying the state boundaries, idempotency rules, and testing the critical path myself.

Final Growth Commitment

Write one specific commitment you can actually follow for 30 days.

For the next 30 days, I commit to spending the first 5 minutes of any bug investigation exclusively reading logs and network traces before I am allowed to open my IDE.
