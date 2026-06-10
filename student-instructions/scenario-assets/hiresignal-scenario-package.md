# HireSignal Scenario Package

## Startup Context

HireSignal is a small recruiting workflow startup selling an AI-assisted resume screening dashboard to hiring teams.

The product promise is simple:

> Recruiters can quickly review candidates, run a resume analysis, see score/signals, update candidate status, and trust the dashboard state during review.

The startup has its first recruiter pilot demo today.

## Founder Pressure

The founder has sent this message:

> Health is green. Login works. Candidate data loads. We're good. Demo starts in 90 minutes.

This is the trap.

The founder is using system liveness as proof of product readiness. Your role is to verify the workflow that matters to the user.

## Recruiter Pilot Stakes

The pilot recruiter is not evaluating whether the backend starts. They care whether they can complete the screening flow without losing trust.

If the demo fails, the recruiter will assume:

- the AI screening is unreliable
- candidate decisions are not trustworthy
- the dashboard cannot be used during a real hiring deadline
- HireSignal is not ready for pilot usage

## Business Constraints

- No paid AI service is available.
- The product must use mock AI logic.
- There is no time for a redesign.
- Only minimal fixes are acceptable.
- The demo can be blocked if the core workflow cannot be trusted.
- A conditional demo is acceptable only if risks are clearly stated.

## System Overview

HireSignal has:

- recruiter login
- dashboard summary
- candidate list
- candidate cards
- resume analysis workflow
- score and signal display
- candidate status update
- backend health check

The health endpoint only proves that the backend process is alive. It does not prove that the recruiter workflow is ready.

## Expected Critical Workflow

```text
Login as recruiter
-> dashboard loads candidates
-> choose a candidate
-> click Analyze Resume
-> score/signals are generated
-> candidate card reflects updated score
-> recruiter changes status
-> dashboard summary reflects status change
-> refresh/reload does not create a misleading state
```

## Team Assumptions

The team believes:

- if `/health` passes, the app is ready
- if login works, the demo is safe
- if candidates appear, the recruiter flow is usable
- if one happy path works, the demo can proceed
- if the API returns success, the UI is correct

Your job is to attack those assumptions with evidence.
