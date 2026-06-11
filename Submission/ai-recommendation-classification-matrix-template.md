# AI Recommendation Classification Matrix

Student: Gourik Narendra Patil
Variant ID: D5-B

Classify each AI recommendation as Trust, Modify, Block, or Needs Proof.

| AI Recommendation | Classification | Evidence / Risk | Safer Boundary |
| --- | --- | --- | --- |
| Payment success as order truth | Modify | Ignores inventory constraints | Validate reservation first |
| Store gateway event IDs | Trust | Prevents duplicates | DB unique constraint |
| Retry webhook processing | Modify | Can repeat side effects | Idempotent retry only |
| Queue processing | Needs Proof | Does not ensure correctness | Prove idempotent consumer |
| Ignore out-of-order events | Modify | Valid events may be lost | State machine logic |
| Payment ID as only key | Block | Skips lifecycle events | Use event_id |

## Useful AI Ideas

What did AI get usefully right?
- Event-based deduplication
- Retry mechanism concept
- Async processing consideration

## Unsafe AI Claims

What sounded confident but was unsafe or incomplete?
- Payment success equals order finality
- payment_id alone ensures idempotency
- Event order can be ignored safely

## Proof Required

What evidence would be required before trusting the recommendation?
- Queue failure simulation tests
- Duplicate webhook injection tests
- Event ordering behavior documentation
