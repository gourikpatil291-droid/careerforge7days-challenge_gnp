# Setup Guide

This guide helps you run HireSignal in production-like mode.

Do not stop when the dashboard opens. Day 3 is about verifying the critical Analyze Resume workflow.

## Install Backend Dependencies

```bash
cd backend
npm install
copy .env.example .env
```

## Install Frontend Dependencies

Open a second terminal:

```bash
cd frontend
npm install
copy .env.example .env
```

## Run Backend in Production-Like Mode

Windows PowerShell:

```powershell
cd backend
$env:NODE_ENV="production"; node src/server.js
```

macOS/Linux:

```bash
cd backend
NODE_ENV=production node src/server.js
```

## Run Frontend

```bash
cd frontend
npm run dev
```

You can also test build/preview:

```bash
npm run build
npm run preview
```

## Test Health Endpoint

Open:

```text
http://localhost:5000/health
```

Expected shape:

```json
{
  "status": "ok",
  "service": "hiresignal-api"
}
```

## Test Recruiter Login

- Email: `recruiter@hiresignal.dev`
- Password: `demo123`

## Production-Like Verification

Verify:

- backend starts correctly
- `/health` returns ok
- recruiter login works
- candidate list loads
- Analyze Resume works
- candidate status update works

If Analyze Resume fails, collect evidence from backend logs and environment files before changing code.

## Incident Packet

Your founder will provide one incident packet for your run.

Use only that packet. Do not search for alternate packets or assumed answer keys. The task is to verify the product in front of you, not to compare hidden failure modes.
