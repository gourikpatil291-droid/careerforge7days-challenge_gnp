# Stakeholder Decision Update

Student: 
Variant ID: D4-B

## Decision

- [ ] Proceed
- [x] Proceed conditionally
- [ ] Block pending clarification

## Message To Founder / Stakeholder

```text
We will implement manual shortlist for recruiters before the pilot. However, we will not send candidate notifications yet because the communication behavior after manual changes is not defined.

For now:
- Recruiters can override AI scores
- AI score will still be visible
- All changes will be logged
- No candidate notifications will be sent

This ensures recruiters get control without risking confusing candidate communication.
```

## Key Ambiguity

When a recruiter manually changes a candidate status, should the candidate be notified immediately or only after final confirmation?

## Clarification Question

Should manual shortlist trigger immediate candidate notification, or only after final recruiter confirmation?

## Safe Assumptions

| Assumption | Why It Is Safe Enough | What Could Break It |
| --- | --- | --- |
| Manual shortlist is internal only | Reduces risk | Stakeholders may expect notifications |
| No notifications in V1 | Prevents confusion | Feature expectation mismatch |
| AI score remains visible | Maintains trust | UI expectation mismatch |
| Changes are logged | Ensures tracking | More audit needs later |

## Scope Boundary

What will you not build yet?
- Notification systems
- Approval workflows
- Permission systems
- Audit dashboards

Why?
Because communication rules are not yet defined.
