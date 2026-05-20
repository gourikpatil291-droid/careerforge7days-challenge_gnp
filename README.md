# CareerForge Day 3 - Beyond Localhost

Product: HireSignal - Recruiter Pilot Demo Readiness Gate

Role: Release Verification Engineer

Core lesson:

> A healthy app is not a ready product.

## Why Day 3 Exists

Day 1 taught you to debug broken systems.

Day 2 taught you to reason about cascading failures.

Day 3 asks a sharper question:

> Would you let a real user touch this product today?

HireSignal is 90 minutes away from a recruiter pilot demo. The founder believes the product is ready because the backend starts, `/health` is green, login works, and candidate data loads.

That is not enough.

The business-critical workflow is:

```text
Recruiter selects candidate
-> clicks Analyze Resume
-> sees score and signals
-> updates candidate status
-> dashboard reflects the result
```

Your job is not to make the app look alive. Your job is to decide whether the demo should ship, be blocked, or proceed conditionally.

## Mission

1. Read the scenario package.
2. Use the incident packet assigned by the founder.
3. Run HireSignal in a production-like mode.
4. Declare the critical workflow before touching fixes.
5. Capture before-fix evidence.
6. Diagnose the real readiness failure.
7. Apply minimal fixes.
8. Verify the full workflow after fixes.
9. Make a readiness decision: `Ship`, `Block`, or `Conditional`.
10. Defend your decision in a short video and live viva.

## Hard Fail

This answer fails:

> Health passed, login works, so it is ready.

Day 3 is designed to kill that habit.

## Setup

Use:

- [Setup Guide](./student-instructions/setup-guide.md)
- [Backend README](./starter-code/backend/README.md)
- [Frontend README](./starter-code/frontend/README.md)
- [HireSignal Scenario Package](./scenario-assets/hiresignal-scenario-package.md)

Your founder will give you one assigned incident packet.

Do not ask for other incident packets. In real release work, you do not get every possible failure mode in advance. You get the incident in front of you and you prove readiness from evidence.

## Submission Pack

Submit only:

1. GitHub branch
2. [Demo Readiness Verification Brief](./submission-templates/demo-readiness-verification-brief-template.md)
3. [4-minute Readiness Defense Video](./submission-templates/readiness-defense-video-guide.md)
4. Live founder viva

No separate checklist. No reflection. No AI usage log. Evidence goes inside the readiness brief.

## Branch Rule

Create a branch:

```bash
day-3-beyond-localhost
```

Minimum 3 meaningful commits.

Good examples:

- `test: capture failing recruiter analysis workflow`
- `fix: restore readiness config for resume analysis`
- `fix: refresh candidate state after workflow action`
- `docs: add demo readiness decision brief`

Bad examples:

- `final`
- `done`
- `fixed`
- `works`

## AI Policy

AI is allowed. Blind AI is not.

You may use AI to generate hypotheses, inspect error messages, or suggest checks. You may not submit AI confidence as engineering evidence.

Every AI-assisted claim must be verified through the actual workflow, logs, network/API behavior, UI state, or code inspection.
