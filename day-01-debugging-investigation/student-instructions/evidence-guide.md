# Day 1 Evidence Guide

Evidence is the product on Day 1.

A working Candidate Review Ops Console with weak evidence is not enough.

## Required Evidence Types

Collect at least one item from each category.

## 1. Browser Evidence

Examples:

- screenshot of console error
- screenshot of failed review queue state
- screenshot of localStorage/session state
- short note explaining what the browser showed

## 2. Network Evidence

Examples:

- failed request URL
- status code
- request method
- response body
- missing or incorrect authorization header

## 3. Backend Evidence

Examples:

- terminal log line
- health check response
- auth failure log
- token expiry log
- route status log

## 4. Configuration Evidence

Examples:

- frontend API URL value
- backend port value
- environment file mismatch
- command used to start frontend/backend

## 5. Source Code Evidence

Examples:

- exact file where the root cause exists
- function involved
- line or block inspected
- why this code explains the symptom

## 6. Verification Evidence

After fixing, prove the critical workflow works.

Include:

- successful reviewer login evidence
- successful review queue load evidence
- successful review item creation evidence
- successful review status update evidence
- explanation of any remaining limitation

## Evidence Rules

- Do not paste huge logs.
- Use short excerpts.
- Every screenshot/log must have a one-line explanation.
- Every root cause must connect to at least one evidence item.
- Every fix must have verification evidence.

## Weak Evidence

These are weak and may be rejected:

- "I changed it and it worked."
- "ChatGPT told me the issue."
- "The error was in backend."
- "It was a port problem."
- "I restarted and it worked."

## Strong Evidence

Strong evidence sounds like:

> The frontend called `http://localhost:8000/api/login`, but the backend log showed the server was running on port `5000`. The network tab showed `ERR_CONNECTION_REFUSED`. I inspected `frontend/.env` and found `VITE_API_URL=http://localhost:8000`. After changing it to the running backend port, login returned `200 OK`.
