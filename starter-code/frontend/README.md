# Frontend

HireSignal recruiter dashboard frontend.

## Setup

```bash
npm install
copy .env.example .env
npm run dev
```

## Build and Preview

```bash
npm run build
npm run preview
```

The frontend should call the backend at `http://localhost:5000`.

If candidate cards do not appear, inspect the CandidateList rendering flow.

If the score does not change after analysis, review the dashboard refresh path.

For Day 3, the main investigation starts after the dashboard loads: verify the Analyze Resume workflow.

## Incident Notes

The founder may provide additional incident context separately. Do not assume API success proves the recruiter workflow is trustworthy.
