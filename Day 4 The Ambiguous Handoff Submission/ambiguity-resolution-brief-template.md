# Ambiguity Resolution Brief

Student: 

Assigned packet: D4-B (Notification Ambiguity)

## 1. Founder Request

The founder wants recruiters to be able to override AI scores and manually shortlist candidates before the pilot. This gives recruiters more control over hiring decisions. However, it is not clearly defined what should happen to candidate notifications after this manual change.

## 2. Known Facts

List facts you can safely rely on.

| Known Fact | Source |
|---|---|
| Recruiters want manual shortlist option | Recruiter Feedback |
| Founder wants quick feature for pilot | Founder Message |
| AI scoring already exists | Product Context |
| Status changes may cause confusion | Engineering Note |
| Recruiters want to avoid early notifications | Recruiter Feedback |
| Minimal safe version is allowed | Business Constraint |

## 3. Open Ambiguities

List the unclear points that could change implementation.

| Ambiguity | Why It Matters | Risk If Ignored |
|---|---|---|
| Should candidates be notified after manual shortlist? | Defines communication behavior | Wrong or premature candidate messages |
| Is manual shortlist final or temporary? | Affects status clarity | Confusion in candidate expectations |
| What if recruiter changes decision later? | Affects update flow | Multiple conflicting messages |
| Should system auto-notify or wait for confirmation? | Defines system logic | Broken candidate experience |

## 4. One Clarification Question

Should manual shortlist trigger candidate notifications immediately, or only after final recruiter confirmation?

Why this was the highest-leverage question:
This is important because it decides how and when candidates are informed.

Founder response received:

## 5. Bounded Assumptions

If some uncertainty remains, state what you are assuming for v1.

| Assumption | Why It Is Reasonable | Risk If Wrong |
|---|---|---|
| Manual shortlist is internal action in V1 | Keeps system simple | Stakeholders may expect notifications |
| No notifications in V1 | Avoids confusion | Recruiters may expect updates |
| AI score stays visible | Maintains trust | UI expectations may differ |
| Override is logged | Ensures tracking | Extra audit needs later |

## 6. Minimal Safe V1

What can safely move forward now?

| V1 Behavior | Why It Is Safe Enough |
|---|---|
| Manual shortlist feature | Gives recruiter control |
| Show AI score + manual decision | Keeps transparency |
| Log all overrides | Ensures accountability |
| No candidate notifications | Prevents communication mistakes |

## 7. What Not To Build Yet

List scope you are rejecting for now.

| Not In V1 | Why Not Now | Risk Of Building It Now |
|---|---|---|
| Email notifications | Because we have not defined when or how candidate communication should happen after changes. | |
| WhatsApp notifications | Because we have not defined when or how candidate communication should happen after changes. | |
| In-app notifications | Because we have not defined when or how candidate communication should happen after changes. | |
| Approval workflows | Because we have not defined when or how candidate communication should happen after changes. | |
| Role-based permissions | Because we have not defined when or how candidate communication should happen after changes. | |
| Audit dashboards | Because we have not defined when or how candidate communication should happen after changes. | |

## 8. Minimal Interface Expectation

Keep this light. No full API spec.

Describe the smallest product/interface expectation needed to support your v1 decision.

Example format:

```text
Action:
Required fields:
Visible result:
Error/blocked state:
Audit/risk note:
```

## 9. AI / Founder Assumption Challenge

Founder assumption you challenged:

AI recommendation you rejected or modified:

Why:

## 10. Founder-Ready Decision

Choose one:

- Proceed
- Proceed conditionally
- Block pending clarification

Decision: Proceed conditionally

Founder update:

```text
We allow manual shortlist, but we do NOT send candidate notifications yet until communication rules are defined.
```
