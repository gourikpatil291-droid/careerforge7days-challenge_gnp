# Day 1 Engineering Investigation Report

Name: Gourik Narendra Patil
College: Vidyalankar Polytechnic
Branch / Year: CO5KC
Variant ID: 
Repo: https://github.com/gourikpatil291-droid/careerforge7days_challenge_gnp/tree/Day-01-reality-check
Branch: day-1-reality-check

## 1. Failure Summary

The Candidate Review Ops Console was failing during normal reviewer operations. Login requests were being sent to an incorrect backend port, causing connection failures. After fixing the API configuration, review item creation still failed with a 400 Bad Request response. Investigation of frontend configuration, network requests, backend logs, and source code helped identify the root causes and verify the critical workflow.

## 2. Evidence Table

Give every evidence item an ID such as `E1`, `E2`, `E3`.

| ID | Evidence Type | What I Saw | What It Proved |
|---|---|---|---|
| E1 | Browser / UI | Login screen displayed errors and failed to proceed correctly | User workflow was broken |
| E2 | Network | Login request sent to http://localhost:8000/api/login | Frontend was targeting the wrong backend |
| E3 | Backend Log | Backend terminal showed "Backend running on port 5000" | Backend was healthy and listening on port 5000 |
| E4 | Config / Env | VITE_API_URL=http://localhost:8000 in frontend .env.example | Frontend configuration mismatch |
| E5 | Source Code | API configuration referenced port 8000 while backend used port 5000 | Root cause located in configuration |
| E6 | Network Verification | POST /api/tasks returned 400 Bad Request | Review item creation request was failing |
| E7 | Source Code | Authentication token generation and task request handling reviewed | Confirmed request validation behavior |
| E8 | Backend Log | "In-memory task store initialized" | Data persistence is temporary and resets after restart |
| E9 | Verification | Login, queue loading and review workflow worked after fixes | Fixes successfully resolved critical workflow |

## 3. Hypothesis Trail

Show how your thinking changed.

| Observation | Hypothesis | Test Performed | Result |
|---|---|---|---|
| Login failed | Backend server is down | Checked backend terminal and health status | Rejected |
| Login failed | Frontend calling wrong API endpoint | Inspected Network tab and .env file | Accepted |
| Review item creation failed | Authentication token missing | Checked request headers | Rejected |
| Review item creation failed | Invalid request handling in API flow | Inspected request and response data | Accepted |
| Data disappeared after restart | Database connection issue | Reviewed backend startup logs | Rejected |
| Data disappeared after restart | Application uses in-memory storage | Inspected backend logs and behavior after restart | Accepted |

You must include at least one rejected hypothesis.

## 4. Root Causes

| Root Cause | Evidence ID | Fix Commit | Why The Fix Works |
|---|---|---|---|
| Frontend API URL pointed to port 8000 while backend ran on port 5000 | E2, E3, E4, E5 | fix: correct ops console API target | Requests are now sent to the active backend |
| Review item request handling caused 400 Bad Request errors | E6, E7 | fix: correct review item request flow | API now receives valid request data |
| Application uses in-memory task storage | E8 | verify: document persistence behavior | Behavior is understood and documented |

## 5. Verification

| Workflow | Before Fix | After Fix | Evidence ID |
|---|---|---|---|
| Backend health check | Pass | Pass | E3 |
| Reviewer login | Failed | Pass | E9 |
| Candidate review queue loads | Failed | Pass | E9 |
| Review item creation | Failed with 400 | Pass | E9 |
| Review item update | Unreliable | Pass | E9 |
| Session behavior | Functional | Functional | E9 |
| Persistence behavior | Data lost after restart | Documented limitation | E8 |

## 6. AI Verification

AI suggested:
The frontend might be targeting the wrong backend port.

AI assumed:
The login failures were caused by an API configuration mismatch.

I verified by:
Checking the Network tab, backend logs, and frontend environment configuration.

I accepted / rejected / modified the suggestion because:
I accepted the suggestion because: The frontend was sending requests to localhost:8000 while the backend was running on localhost:5000. After correcting the API URL, login requests succeeded.

## 7. Debugging Self-Diagnosis

My weakest debugging behavior today was:
Initially assuming the login problem was caused by backend code before checking runtime evidence.

Evidence:
The backend was healthy, but the Network tab showed requests were being sent to the wrong port.

Tomorrow I need to improve:
Checking runtime evidence first before making assumptions.

## Final Checklist

- [x] I included runtime evidence.
- [x] I included at least one rejected hypothesis.
- [x] Every root cause connects to evidence.
- [x] Every fix connects to a commit.
- [x] I verified the critical workflow after fixing.
- [x] I can defend this report live.
