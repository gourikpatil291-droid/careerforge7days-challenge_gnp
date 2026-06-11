# Safer Engineering Action Plan

Student: Gourik Narendra Patil
Variant ID: D5-B

## Recommended V1 Action

What should the engineering team do now?
Implement: 
- event-level idempotency
- inventory reservation before payment confirmation
- strict state transitions
- safe retry handling
- relational DB as single source of truth

## Modify / Block List

| AI Suggestion | Action | Why |
| --- | --- | --- |
| Payment success creates order | Modify | Inventory must be verified first |
| Retry processing | Modify | Needs idempotency |
| Queue processing | Needs Proof | Does not ensure correctness |
| Ignore out-of-order events | Modify | Can lose valid transitions |
| Payment ID as key | Block | Breaks lifecycle tracking |

## Production Failure Prevented

What exact production failure are you preventing?
Two users buy last item simultaneously. Both payments succeed. Two orders are created. Inventory goes negative. System shows inconsistent state.

## Verification Required

| Check | Evidence Needed |
| --- | --- |
| Queue safety | Load + duplicate tests |
| Retry safety | Idempotency validation |
| Event ordering | Gateway documentation |

## Founder-Ready Recommendation

Write the final trust recommendation in 5-7 lines.
The AI plan contains useful operational improvements, but it is not safe for direct production use. Event-based deduplication is valid and should be implemented. However, payment success must not directly create orders without inventory verification. Queue processing requires proof of correctness under duplicate and failure conditions. For v1, the system should prioritize inventory protection, event-level idempotency, transactional safety, and clear state transitions.
