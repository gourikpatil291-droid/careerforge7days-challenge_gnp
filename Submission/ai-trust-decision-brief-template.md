# AI Trust Decision Brief

Student: Gourik Narendra Patil

Assigned pack: FlashCart

## 1. Problem Summary

In 4-6 lines, explain the FlashCart production problem and what the AI plan is trying to fix.
FlashCart conducts limited inventory drops, where thousands of users compete for 100-300 units. This has led to production issues such as duplicate webhook processing, negative inventory, multiple customers purchasing the last available item, and inconsistent order states. The AI-generated plan attempts to improve reliability using webhook event tracking, retries, queue-based processing, and idempotency mechanisms. My responsibility is to evaluate which recommendations are safe for a one-week v1 release, which require modification, and which are unsafe without further evidence.

## 2. AI Recommendation Decision Table

Classify each recommendation.

Allowed decisions:

- Trust
- Modify
- Block
- Needs Proof

| # | AI Recommendation | Decision | Why | Concrete Failure If Wrong | Safer Action / Evidence Needed |
|---|---|---|---|---|---|
| 1 | Trust payment_success webhook as order truth | Modify | Payment success does not guarantee inventory availability | Two users can be confirmed for the last item | Reserve inventory before order creation |
| 2 | Store gateway event IDs | Trust | Prevents duplicate webhook processing | Duplicate orders and duplicate inventory deduction | Store event_id with DB unique constraint |
| 3 | Retry failed webhook processing | Modify | Retries are useful but unsafe without idempotency | Same operation executed multiple times | Retry only after idempotent processing |
| 4 | Process webhooks in a queue | Needs Proof | Queue improves throughput but not correctness | Duplicate events still processed | Prove consumer idempotency + failure handling |
| 5 | Ignore out-of-order events | Modify | Some late events are valid state transitions | Refunds or chargebacks may be ignored | Use explicit state machine transitions |
| 6 | Use payment_id as only idempotency key | Block | Different event types share same payment_id | Important events like refund ignored | Use event_id for processing idempotency |

## 3. Most Dangerous Recommendation

Which recommendation is most dangerous?
Use payment_id as the only idempotency key.

Why did it sound correct?
Payment IDs are assumed to be unique per transaction, so it appears safe for deduplication.

What exact failure sequence could it cause?

Write it as a timeline:

```text
First: Payment success webhook is processed with payment_id = P123.
Then: System stores P123 as processed.
Then: A refund or chargeback event arrives with the same payment_id.
Then: System ignores it, assuming it is duplicate.
Production breaks because: Valid financial lifecycle events are skipped.
Customer/support impact: Refunds not reflected in system. Financial records become inconsistent. Support cannot explain payment state mismatch.
```

What would you do instead?
Use event_id for webhook idempotency. Use payment_id for transaction grouping only. Enforce state validation before applying transitions.

## 4. Useful But Incomplete Recommendation

Which recommendation had a useful idea?
Retry failed webhook processing three times.

What was useful?
Retries help recover from temporary network failures and database downtime.

What was missing before it could be trusted?
Retries may repeat side effects if idempotency is not enforced.

How would you modify it?
Retries should only be applied after: event-level idempotency is implemented, state transitions are validated, database transactions are safe.

## 5. One Recommendation Trusted For V1

Which recommendation can be trusted or mostly trusted?
Store gateway event IDs.

Why is it safe enough?
Duplicate webhook delivery is a real and frequent issue in payment systems. Event ID tracking is a proven and lightweight safeguard.

What boundary must remain true?
event_id must be stored in a relational database, must have a UNIQUE constraint, must be checked before processing webhook.

## 6. Safer V1 Plan

Describe your safer v1.

Include:

- inventory ownership: Relational database is the single source of truth.
- checkout/reservation state: CREATED, RESERVED, PAID, FAILED, EXPIRED.
- payment state: PENDING, PAID, FAILED, REFUNDED.
- order confirmation rule: Order is confirmed only if: Payment is successful, Inventory is reserved, Inventory is available.
- duplicate/retry handling: Store unique event_id, Ensure idempotent webhook processing, Use transactional updates for state changes.
- expiration/release behavior: Expired reservations automatically release inventory.
- customer/support failure state: Every checkout must clearly expose: RESERVED, PAID, FAILED, EXPIRED, REFUNDED.

## 7. State / Side Effect Protection

Answer directly.

What exact state or side effect must not happen twice?
Order creation. Inventory deduction. Payment processing.

What exact transition must be protected?
RESERVED -> PAID -> ORDER_CONFIRMED

What key, constraint, transaction, state check, or idempotency rule protects it?
UNIQUE(event_id) constraint. Database transactions. State validation before transitions.

What breaks if two requests/events hit this transition at the same time?
Duplicate orders. Negative inventory. Double payment processing.

## 8. What Not To Build

List scope you are rejecting for v1.

| Not In V1 | Why Not Now | Risk Of Building It Now |
|---|---|---|
| Full microservices architecture | Too complex for 1 week | Delays delivery |
| Event sourcing system | Over-engineering | Hard to maintain |
| Dedicated inventory service | Small team constraint | Operational overhead |
| Cache as source of truth | Unsafe for inventory | Data inconsistency |

## 9. Evidence Needed Before Trust

What proof would you require before implementing or shipping the risky parts?

| Claim | Evidence Needed |
|---|---|
| Queue improves reliability | Duplicate-event load testing |
| Out-of-order events can be ignored | Gateway documentation |
| payment_id prevents duplicates | Tests with refund + chargeback cases |

## 10. Final Founder Recommendation

Choose one:

- Use modified AI plan

Decision: Use modified AI plan

Founder update:

```text
The AI plan contains useful ideas such as event tracking and retry handling. However, it is unsafe as written because it assumes inventory availability, correct event ordering, and idempotency without verification. I recommend a modified v1 system that enforces: event-level idempotency, inventory reservation before order confirmation, explicit state transitions, safe retry handling, clear customer-visible order states.
```

## 11. Final One-Liner

Complete:

AI sounded correct, but it missed state-transition safety and event-level idempotency, so I changed the design to ensure inventory protection, prevent duplicate side effects, and guarantee reliable order processing.
