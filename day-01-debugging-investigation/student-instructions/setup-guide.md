# Day 1 Setup Guide

This system is intentionally unstable.

Your job is not only to make it run. Your job is to diagnose what fails and prove the diagnosis using evidence.

## Install Backend Dependencies

```bash
cd backend
npm install
cp .env.example .env
```

## Run Backend

```bash
npm run dev
```

The backend should run locally.

## Install Frontend Dependencies

Open a second terminal:

```bash
cd frontend
npm install
cp .env.example .env
```

## Run Frontend

```bash
npm run dev
```

Open the localhost URL printed by Vite.

## Test Credentials

- Email: `student@careerforge.dev`
- Password: `careerforge123`

## Debugging Warning

The system has been designed to behave inconsistently.

Do not stop at the first error message.

Inspect:

- browser console
- network tab
- backend terminal logs
- environment files
- relevant source code
- localStorage/session state when relevant

## Minimum Setup Evidence

In your Engineering Investigation Report, include:

- backend start command used
- frontend start command used
- backend URL/port observed
- frontend URL observed
- first failure you reproduced

## If Setup Fails

Do not silently ask someone for the answer.

Record:

- command you ran
- error output
- what you checked
- what you changed
- whether the change fixed setup or only moved you to the next failure
