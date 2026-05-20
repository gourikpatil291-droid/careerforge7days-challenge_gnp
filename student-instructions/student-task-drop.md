# Day 3 Student Challenge Brief

## Day 3 - Beyond Localhost

You are the Release Verification Engineer for HireSignal.

The founder thinks the recruiter pilot demo is ready.

The evidence so far:

- backend starts
- `/health` passes
- recruiter login works
- dashboard loads
- candidates appear

The founder's message:

> Health is green. Login works. Candidate data loads. We're good. Demo starts in 90 minutes.

That is not a readiness decision. That is optimism.

## Your Mission

Decide whether the recruiter pilot demo should proceed.

You must verify this critical workflow:

```text
Recruiter selects candidate
-> clicks Analyze Resume
-> sees score/signals
-> updates candidate status
-> dashboard reflects result
```

You are not being graded for pretty documentation. You are being graded for whether you can prove readiness under pressure.

## What You Must Do

1. Open your assigned incident packet.
2. Run the product in production-like mode.
3. Declare the critical workflow before fixing anything.
4. Capture before-fix evidence.
5. Identify root causes, not just symptoms.
6. Apply minimal fixes.
7. Verify the workflow after fixes.
8. Decide: `Ship`, `Block`, or `Conditional`.
9. Submit your readiness brief and video.
10. Defend your decision in viva.

## What Fails

- "Health is green so it is ready."
- "I fixed the error but did not retest the full workflow."
- "The API returned success, so the product works."
- "I tested one candidate, so the demo is safe."
- "AI said this is the fix."

## What Strong Work Looks Like

Strong work contains:

- exact failure reproduction
- before and after evidence
- minimal fix reasoning
- verification of the full recruiter workflow
- honest remaining risks
- a clear readiness decision

## Submission

Submit:

1. GitHub branch
2. Demo Readiness Verification Brief
3. 4-minute readiness defense video
4. Live founder viva
