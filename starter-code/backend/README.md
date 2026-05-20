# Backend

Express API for the CareerForge Day 1 Candidate Review Ops Console.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

The backend runs on `http://localhost:5000`.

## API

- `POST /api/login`
- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`

The task routes represent candidate review items and require a bearer token.
