# Incident Simulation Evidence Log

Student: Gourik Narendra Patil

LaunchRoom report file/link: `g:\Challenge\day 6\Submission\launchroom-final-report.md`

## Simulation Signals

| Signal / Metric | What It Showed | Decision It Influenced |
| --- | --- | --- |
| Failed Payments / Duplicate Charges | Checkout issues rising, failed payments spiked. | Disable payments only |
| Support Tickets / Confusion | Customers stuck in checkout, support needed a script. | Auto-refund exact duplicates and publish FAQ |
| Inventory Mismatch / Queue Lag | Webhook lag and systemic state risk from duplicate events. | Webhook idempotency and duplicate suppression |
| AI Recommendation Risk | AI suggested full rollback, which was overly risky. | Modify AI: narrow refunds, isolate affected SKU |

## Stakeholder Pressure

| Stakeholder Pressure | Risk If Ignored | My Response |
| --- | --- | --- |
| Founder push to preserve revenue | Customer trust damage, reputation loss, support crisis. | Protected customer trust first, disabling payments to stop bleeding. |
| Customer / Public panic (screenshots) | Brand reputation damage and increased ticket volume. | Published transparent delay + refund message. |
| Support team drowning | Support collapse, agents overwhelmed by angry customers. | Published FAQ and auto-refunded exact duplicate IDs. |

## Customer / Money Risk

What customer or financial risk was most urgent?
Duplicate charges and payment success without order confirmation.

Evidence:
At T+04, duplicate charges and failed payments became critical, prompting the auto-refund of exact duplicates and webhook idempotency fixes.

## Systems Risk

What system risk was most urgent?
Webhook queue lag and duplicate event handling creating database state inconsistency (inventory mismatch).

Evidence:
Webhook retries and duplicate events led to inventory drift and overselling risk, requiring SKU isolation at T+08.

## Evidence Summary

List the 3 strongest pieces of simulation evidence behind your final command decision.

1. Payment success without order confirmation created immediate, unacceptable customer harm.
2. Webhook lag and duplicate events risked cascading state inconsistency (inventory oversell).
3. Public exposure (screenshots and support tickets) indicated transparent communication was necessary immediately.
