# CareerForge Day 1 V2 - The Reality Check

## Product: Candidate Review Ops Console

## Core Lesson

Tutorial followers change random things until the app works.

Engineers investigate, form hypotheses, collect evidence, apply minimal fixes, and verify the result.

Day 1 is not a coding contest. It is a debugging investigation.

## Product Scenario

You have joined a startup hiring operations team as a junior engineer.

The team uses an internal Candidate Review Ops Console to review student applicants before interview shortlisting. Reviewers log in, load candidate review items, add review notes, and mark review work complete.

The console is failing during a live review window.

The founder says:

> "It is probably a small frontend issue. Just fix it quickly."

Your job is not to obey that assumption. Your job is to prove what is actually broken.

## Student Mission

Run the product locally, reproduce failures, inspect frontend and backend evidence, identify root causes, apply minimal fixes, and defend your reasoning.

You must prove:

- what failed
- where you looked
- which hypotheses were wrong
- what root causes you found
- why your fixes work
- how you verified the critical review workflow after fixing it
- how you used AI without blindly trusting it

## Variant System

Your founder may assign you a private variant ID such as `D1-A`, `D1-B`, `D1-C`, `D1-D`, or `D1-E`.

Do not assume your friend's bug is your bug.

Your evidence must match your assigned variant.

## What Makes This Different

You do not pass Day 1 by submitting polished writing.

You pass by showing evidence.

Founder reviewers will check your repo, your Engineering Investigation Report, your evidence video, and your ability to answer live questions about your own work.

## Provided To Solve The Case

- Broken Candidate Review Ops Console repo
- Setup guide
- Incident brief
- Evidence guide
- Backend README
- Frontend README
- Assigned Day 1 variant

## Outcome Artifacts You Get

- Fixed engineering repository
- Engineering Investigation Report
- Evidence Defense Video
- Founder review outcome

## Setup

- [Setup Guide](./docs/setup-guide.md)
- [Incident Brief](./docs/incident-brief.md)
- [Evidence Guide](./docs/evidence-guide.md)
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

## Final Submission Pack

Submit only these 3 items:

1. GitHub repo link with fixed Day 1 branch
2. Engineering Investigation Report
3. 3-minute Evidence Defense Video

Founder reviewers may also run a 5-minute live viva.

## Branch And Commit Rules

Create a branch named:

```bash
day-1-reality-check
```

Minimum 3 meaningful commits:

- one diagnosis/evidence commit
- one fix commit
- one verification/report commit

Good commit examples:

- `diagnosis: capture failing candidate review request`
- `fix: correct ops console API target`
- `fix: handle expired reviewer session`
- `verify: document post-fix review workflow checks`

Bad commit examples:

- `final`
- `done`
- `fixed everything`
- `chatgpt fix`

## AI Policy

AI is allowed.

Blind AI is not.

Your Engineering Investigation Report must include one AI verification note. If AI gives a suggestion, verify it using browser evidence, network requests, backend logs, environment files, or source code.

The goal is not to avoid AI.

The goal is to become the engineer who can tell when AI is guessing.

## Pass Standard

Day 1 outcomes:

- `Strong Pass`
- `Pass`
- `Revision Required`
- `Incomplete`

Hard fail conditions:

- no runtime evidence
- copied or generic report
- cannot explain your own fix
- final code works but root cause reasoning is fake
- AI-generated claims with no verification

## Day 1 Closing Realization

You should finish Day 1 thinking:

> "I used to debug by guessing. Now I know how to prove what is broken."
