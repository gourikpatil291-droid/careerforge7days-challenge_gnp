# Decision Consequence Trail

Student: Gourik Narendra Patil

LaunchRoom report file/link: `g:\Challenge\day 6\Submission\launchroom-final-report.md`

Day 6 is decision-dependent. Use this artifact to show what you chose and what happened because of those choices.

## Decision Timeline

| Time / Event | Decision Made | Why I Chose It | Immediate Consequence | Later Consequence |
| --- | --- | --- | --- | --- |
| T+01 | Disable payments only | Stop the bleeding on failed payments without fully pausing the site. | Payment creation disabled, refund exposure slowed. | Customer confusion rose for active checkouts. |
| T+04 | Auto-refund only exact duplicate IDs | Manual review was too slow; obvious duplicates needed immediate attention. | Targeted refund rule applied. | Contained obvious duplicate charges safely. |
| T+04 | Webhook idempotency and duplicate suppression | Stop duplicate payment side-effects at the source. | Engineering focused on duplicate side effects. | Payment/order inconsistency improved. |
| T+06 | Protect customer trust first | Taking broken orders creates a bigger mess. | Customer trust prioritized. | Business pressure rose, but public harm reduced. |
| T+07 | Modify AI recommendation | Full rollback was too broad and risky. | AI recommendation modified for safety. | Containment improved without irreversible broad side effects. |

## Protected First

What did you protect first?
Customer trust and financial integrity.

Why?
Allowing duplicate charges and broken checkouts to continue would cause compounding damage to support load, finance reconciliation, and brand reputation.

## Got Worse

What got worse because of your decision or delay?
Founder pressure and immediate drop revenue.

Was that acceptable? Why?
Yes. Short-term revenue loss is acceptable to prevent taking money for orders we cannot fulfill, which would result in chargebacks and severe reputational harm.

## Tradeoff Accepted

| Tradeoff | Who Was Protected | Who Still Had Pain | Why This Was Defensible |
| --- | --- | --- | --- |
| Disable payments only | Future customers from duplicate charges | Active checkout users | Stopped new financial harm immediately. |
| Isolate affected SKU | Customers buying unaffected items | Customers wanting the affected SKU | Narrowed the blast radius without dropping the entire site. |
| Defer analytics | Customer data integrity | Data/Analytics teams | Cosmetic dashboard fixes matter less than stopping duplicate charges. |

## AI / Pressure Moment

What did AI, the founder, or pressure push you toward?
The AI strongly recommended an immediate, full checkout rollback and auto-refund of all suspected duplicates. The founder pushed for preserving revenue.

Did you follow it, modify it, or reject it?
Modified the AI recommendation to narrow refunds and isolate the affected SKU. Rejected the founder's push to prioritize revenue over trust.

Evidence:
"Blindly trusting a massive automated rollback is too risky... We should isolate the broken SKU and do targeted refunds." (T+07)

## Final Consequence Judgment

In 5-7 lines, explain whether your decision path was defensible.
My decision path was highly defensible because it consistently prioritized customer financial safety and system integrity over short-term revenue and cosmetic fixes. By disabling payments early and focusing engineering on webhook idempotency, I contained the immediate bleeding. Modifying the AI's overly broad rollback advice and transparently communicating the issue helped stabilize support and public trust. The accepted tradeoffs (founder pressure and revenue impact) were necessary and appropriate for a critical payment incident.
