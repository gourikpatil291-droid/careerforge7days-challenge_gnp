# D5-B AI Recommendation Pack - Payment Webhook AI Plan

## Assigned Pack

Payment Webhook AI Plan

## Founder Message

> AI gave us a production fix plan for payment webhooks. It sounds solid. Can we use this for v1?

## AI Recommendation 1 - Trust Payment Success Webhook As Order Truth

The payment gateway is the most reliable source of payment state. If a `payment_success` webhook arrives, mark the checkout as paid and create the order.

## AI Recommendation 2 - Store Gateway Event IDs

Store every gateway event ID in a `payment_events` table. If the same event ID arrives again, skip processing. This prevents duplicate webhook side effects.

Suggested fields:

- event_id
- payment_id
- event_type
- received_at
- processed_at

## AI Recommendation 3 - Retry Failed Webhook Processing Three Times

If webhook processing fails due to a temporary database or network issue, retry it with exponential backoff.

Suggested delays:

- 5 seconds
- 30 seconds
- 2 minutes

## AI Recommendation 4 - Process Webhooks In A Queue

The webhook handler should immediately acknowledge the gateway and push the event into a queue. A worker can update checkout and order state asynchronously. This prevents gateway timeouts.

## AI Recommendation 5 - Ignore Out-Of-Order Events

If a failure event arrives after a success event, ignore the failure because the payment has already succeeded. If a success event arrives after a failure event, update the order to paid because success is the final useful state.

## AI Recommendation 6 - Use Payment ID As The Only Idempotency Key

Use `payment_id` as the unique key for webhook handling. Since each payment has one payment ID, it is enough to prevent duplicate order creation.

## AI Confidence Summary

This plan makes webhook processing reliable by trusting the gateway, adding retries, and using asynchronous processing. Event storage and payment IDs prevent duplicate work.
