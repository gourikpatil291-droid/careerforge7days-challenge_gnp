# Backend

HireSignal API for CareerForge Day 3.

## Setup

```bash
npm install
copy .env.example .env
```

## Run Production-Like Mode

Windows PowerShell:

```powershell
$env:NODE_ENV="production"; node src/server.js
```

macOS/Linux:

```bash
NODE_ENV=production node src/server.js
```

The backend runs on `http://localhost:5000`.

## Health Check

```bash
curl http://localhost:5000/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "hiresignal-api"
}
```

## Test Login

- Email: `recruiter@hiresignal.dev`
- Password: `demo123`

## Critical Workflow

After login and candidate loading work, test `Analyze Resume`.

Use backend logs and `.env` values to diagnose why analysis fails.

## Incident Notes

The founder may provide additional incident context separately. Do not assume `/health`, login, or candidate loading proves readiness.
