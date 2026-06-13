# CAPABILITY SCORECARD

Student: Gourik Narendra Patil

Use this as your self-score before the live defense. Founder/evaluator scoring may differ.

| Capability              | Evidence From The Week                                                    | Self-Rating: Strong / Adequate / Weak | Defense Risk |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------- | ------------ |
| Debugging discipline    | Day 1 investigation using network tabs instead of guessing                | Adequate                              | Low          |
| Systems reasoning       | Day 2 tracing UI bugs back to cache invalidation failures                 | Strong                                | Low          |
| Production verification | Day 3 full workflow validation before declaring readiness                 | Strong                                | Low          |
| Ambiguity ownership     | Day 4 delivering a minimal safe v1 and blocking undefined notifications   | Strong                                | Low          |
| AI engineering judgment | Day 5 modifying unsafe AI recommendations around idempotency              | Strong                                | Low          |
| Pressure prioritization | Day 6 containing the checkout failure and protecting customer trust       | Strong                                | Medium       |
| Engineering defense     | Ability to explain tradeoffs and back up decisions from Days 1-6          | Strong                                | Medium       |

Strongest Capability

Capability:
Systems Reasoning and Risk Containment

Evidence:
On Day 2 and Day 6, I correctly identified failure boundaries (cache poisoning and checkout drift) and made hard tradeoffs to protect data integrity and customer trust over short-term metrics.

Most Exposed Capability

Capability:
Debugging speed at the onset of an incident

Evidence:
On Day 1, I spent too much time assuming the business logic was broken before actually checking the runtime network evidence to see it was a simple port mismatch.

Defense Preparation Notes

What should you be ready to defend live?

• Why I prioritized customer trust over revenue on Day 6.
• Why I rejected the AI's use of payment_id for idempotency on Day 5.
• Why I blocked candidate notifications on Day 4 instead of building them.
• How I diagnosed the Redis cache issue on Day 2.
• Why it took me a while to find the port mismatch on Day 1 and what I learned from it.
• What tradeoffs were accepted across the week and why they were justified.
