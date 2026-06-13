# CareerForge Day 6 Launch Incident Report

Generated from LaunchRoom simulation decisions.

Date: 6/12/26
Time: 11:45 PM

Student: Gourik Narendra Patil
Email: aartigaurik251@gmail.com
Discord: GNP_29😎

## Completion Status

Ended by student before timer ended

## Decision Timeline

| Time | Category | Prompt | Decision | Latency | Mode | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| T+01 | Traffic control | Checkout issues are rising, but the drop is still converting. Do we pause checkout? | Disable payments only | 67s | chosen | We need to stop the bleeding on failed payments. Leaving the site up but temporarily disabling the payment gate prevents us from taking customer money we can't properly fulfill, while buying us time to figure out what's breaking the orders. |
| T+04 | Refund handling | Duplicate charge reports are real. Do we auto-refund suspected duplicates or wait for reconciliation? | Auto-refund only exact duplicate payment IDs | 69s | chosen | Manual review is way too slow right now and support is drowning. Automatically refunding the obvious 1-to-1 duplicates cools down the angriest customers without opening finance up to massive blind refund risk. |
| T+04 | Engineering prioritization | We can only put one engineer on the hot path right now. What do we prioritize? | Webhook idempotency and duplicate suppression | 21s | chosen | The duplicate charges are the biggest risk to customer trust right now. Fixing webhook idempotency stops the actual duplicate payment side-effects at the source instead of just playing whack-a-mole with dashboard symptoms. |
| T+06 | Founder escalation | I need a leadership recommendation. Are we protecting revenue or trust first? | Protect customer trust first | 21s | chosen | f we keep taking orders that are broken, we're just creating a bigger mess for support and finance to clean up later. Taking a short-term revenue hit hurts, but losing customer trust over missing money is way harder to recover from. |
| T+06 | Support containment | Support cannot keep up. What do we publish for customers right now? | Publish FAQ with refund/order status guidance | 31s | chosen | Silence just makes people panic and flood the queue even more. We need to give the support team a unified script so customers at least know we're actively looking into the missing orders and getting their refunds sorted. |
| T+07 | AI pressure check | AI suggests: rollback checkout immediately and auto-refund all suspected duplicates. Do you trust, modify, or ignore this recommendation? | Modify AI: narrow refunds, isolate affected SKU, keep state checks | 33s | chosen | Blindly trusting a massive automated rollback is too risky and might corrupt more order states. We should isolate the broken SKU and do targeted refunds instead of ripping the whole checkout system down blindly. |
| T+07 | Customer communication | Customers are posting screenshots. What do we communicate now? | Publish transparent delay + refund message | 16s | chosen | People are already posting screenshots online, so trying to hide behind a generic error message just looks shady. Being upfront about the payment delay builds a bit of trust back and stops the public speculation. |
| T+08 | Ops uncertainty | Rollback is available, but queued payment events may still land. Do we rollback, hotfix, or isolate the affected SKU? | Isolate affected SKU only | 35s | chosen | A full rollback while events are still in the queue might actually cause more database drift. Isolating just the affected SKU acts like a tourniquet—it protects the rest of the drop without making the current order mismatch worse. |
| T+09 | Containment strategy | Final call: what are we containing, what are we not fixing, and what risk are we accepting? | Contain payments/orders, defer analytics | 31s | chosen | We can fix the dashboards and reporting metrics tomorrow. Right now, ensuring the integrity of the payment data and stopping any further duplicate charges is the absolute top priority to protect our customers. |

## Consequence Summary

| Time | Decision | Consequence | Metric Impact | Stakeholder Reaction |
| --- | --- | --- | --- | --- |
| T+01 | Disable payments only | Payment creation disabled. Refund exposure slows, but customer confusion rises for active checkouts. | active users -260, success rate +3, failed payments -22, duplicate charges -12, webhook lag -30, refund requests -7, support tickets +18, founder pressure +10, support pressure +4 | Disabling payments limits refund exposure, but support needs wording for customers stuck in checkout. |
| T+04 | Auto-refund only exact duplicate payment IDs | Targeted refund rule applied. Some customers still wait, but obvious duplicate charges are contained. | refund requests +18, support tickets -24, support pressure -10, founder pressure +3, duplicate charges -5 | Narrow auto-refund rule is defensible. It will not catch every case, but it limits damage. |
| T+04 | Webhook idempotency and duplicate suppression | Engineering focused on duplicate side effects. Payment/order inconsistency improves. | duplicate charges -16, webhook lag -110, success rate +5, failed payments -28, inventory mismatch -5, support pressure -12 | Duplicate webhook processing is stabilizing. Queue lag still exists, but repeated side effects are down. |
| T+06 | Protect customer trust first | Customer trust prioritized. Business pressure rises, but public harm and support chaos reduce. | founder pressure +14, support pressure -18, support tickets -45, refund requests +10, duplicate charges -8, failed payments -20 | I do not like the revenue hit, but I can stand behind a customer-trust call if the reasoning is clear. |
| T+06 | Publish FAQ with refund/order status guidance | Support gained a consistent script. Some uncertainty remains, but customer handling improves. | support tickets -58, support pressure -22, founder pressure +5, refund requests +8 | FAQ is giving agents cover. Customers still want refunds, but responses are consistent now. |
| T+07 | Modify AI: narrow refunds, isolate affected SKU, keep state checks | AI recommendation modified. Containment improves while avoiding broad irreversible side effects. | refund requests +18, support tickets -36, support pressure -16, founder pressure +6, inventory mismatch -8, duplicate charges -8 | Modified AI advice is safer. We get containment without blindly trusting a broad rollback/refund action. |
| T+07 | Publish transparent delay + refund message | Transparent communication reduces support pressure while accepting reputational discomfort. | support tickets -80, support pressure -24, founder pressure +6, refund requests +8 | Clear message is helping. Tickets are still high, but customers know what will happen next. |
| T+08 | Isolate affected SKU only | Blast radius narrowed. Some revenue is lost on the affected SKU, but the rest of checkout survives. | inventory mismatch -20, failed payments -18, support tickets -35, founder pressure +6, active users -350 | SKU isolation protects the rest of the drop. I can accept that if we explain it cleanly. |
| T+09 | Contain payments/orders, defer analytics | Payment/order safety prioritized. Revenue impact remains, but customer-money harm is contained. | duplicate charges -18, failed payments -45, support tickets -60, error rate -4, founder pressure +8, support pressure -18 | Understood. We will take the revenue hit and explain that payment safety comes first. |

## Incident Prioritization Matrix

| Derived Priority | Evidence | Why It Mattered |
| --- | --- | --- |
| Critical | Payment success without order confirmation and duplicate charge pressure. | Customer money impact required immediate containment and communication. |
| High | Webhook retries, duplicate events, and inventory mismatch appeared together. | Systemic state consistency risk could create repeated side effects. |
| High | Support tickets and screenshots increased during the incident. | Customer-facing communication affected trust and support load. |
| Deferred | Analytics/dashboard visibility was not the core customer-money failure. | Cosmetic visibility work should not outrank payment/order containment. |

## Stakeholder Incident Brief

- Current situation: FlashCart experienced checkout instability during a high-traffic limited drop, including payment/order inconsistencies, webhook lag, and support escalation.
- Actions taken: Disable payments only; Auto-refund only exact duplicate payment IDs; Webhook idempotency and duplicate suppression; Protect customer trust first; Publish FAQ with refund/order status guidance; Modify AI: narrow refunds, isolate affected SKU, keep state checks; Publish transparent delay + refund message; Isolate affected SKU only; Contain payments/orders, defer analytics
- Tradeoffs accepted: Payment creation disabled. Refund exposure slows, but customer confusion rises for active checkouts. Targeted refund rule applied. Some customers still wait, but obvious duplicate charges are contained. Engineering focused on duplicate side effects. Payment/order inconsistency improves. Customer trust prioritized. Business pressure rises, but public harm and support chaos reduce. Support gained a consistent script. Some uncertainty remains, but customer handling improves. AI recommendation modified. Containment improves while avoiding broad irreversible side effects. Transparent communication reduces support pressure while accepting reputational discomfort. Blast radius narrowed. Some revenue is lost on the affected SKU, but the rest of checkout survives. Payment/order safety prioritized. Revenue impact remains, but customer-money harm is contained.
- Remaining risk: Some customer reconciliation and post-incident engineering follow-up may remain depending on decisions made during the simulation.

## Performance Signals

### Strong signals observed

- Early containment decision was made before the crisis fully escalated.
- Customer communication was addressed before the end of the incident.
- At least one decision included substantial tradeoff reasoning.
- Decision latency stayed controlled under pressure.

### Risk signals observed

- None observed

## Leadership Signals

### Leadership strengths

- Owned difficult tradeoffs instead of only preserving launch momentum.
- Prioritized engineering containment over cosmetic visibility work.
- Maintained decision pace under timer pressure.
- Communicated clearly under uncertainty.

### Leadership risks

- None observed

## Portfolio Summary

During this LaunchRoom simulation, Gourik Narendra Patil made 9 operational incident decisions, experienced 9 consequence events, and produced a stakeholder-ready incident brief under time pressure.
