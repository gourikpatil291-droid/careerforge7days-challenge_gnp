# Commander Decision Brief

Student: Gourik Narendra Patil

LaunchRoom report file/link: `g:\Challenge\day 6\Submission\launchroom-final-report.md`

## 1. Top Priority

What did you protect first?
Customer money and trust.

Why?
Taking payments without confirming orders or issuing duplicate charges creates severe financial and reputational damage that takes significantly more effort to clean up later.

## 2. Second Priority

What mattered next?
System state integrity and engineering containment.

Why did it come second?
Once the bleeding (failed payments) was paused, we had to fix the root cause—webhook lag and idempotency—so we didn't just resume taking broken orders or worsen the inventory drift.

## 3. Intentional Deferral

What did you intentionally not solve during the pressure window?
Analytics dashboard visibility.

Why was deferring it acceptable?
Dashboard visibility is a cosmetic issue. It does not stop duplicate charges or repair database state, and allocating an engineer to it during a crisis is a misprioritization.

## 4. Accepted Risk

What risk did you knowingly accept?
Increased founder pressure and lost revenue on the affected drop.

Why was that risk better than the alternative?
It is always better to lose potential revenue than to fraudulently or accidentally charge customers for products they will not receive, which leads to costly chargebacks and brand destruction.

## 5. Stakeholder Communication

Who needed communication first?
The support team and the public (customers).

What would you tell them?

```text
We are currently experiencing an issue with checkout payments resulting in delays and some duplicate charges. We have disabled the affected payment gateway to prevent further errors. If you were charged in duplicate, we are already processing auto-refunds. Thank you for your patience as we investigate.
```

## 6. Next 30-Minute Plan

List the next three actions after the simulation window.

1. Reconcile all remaining suspected duplicate charges that didn't meet the auto-refund criteria.
2. Complete an inventory count reconciliation to ensure no overselling occurred on the isolated SKU.
3. Conduct a blameless post-mortem on the webhook lag and scaling issues.

## 7. One Decision I Would Change

Which decision would you change?
I might have published the transparent delay message slightly earlier.

What would you do differently?
Communicate the delay as soon as the first duplicate charges surfaced, rather than waiting for support to become fully overwhelmed by screenshots.

What did you learn?
Silence in a crisis fills with customer panic. Early, transparent communication gives support cover and de-escalates tension.

## 8. Final Command Rationale

In 5-7 lines, defend your overall incident command approach.
My approach was fundamentally rooted in protecting customer trust and containing the financial blast radius. I prioritized stopping the bleeding by disabling payments and focusing engineering on the root webhook cause, rather than chasing cosmetic dashboard fixes. I successfully resisted pressure to prioritize short-term revenue and modified the AI's overly risky rollback suggestion. The result was a controlled incident that preserved system integrity at the acceptable cost of founder pressure and isolated revenue loss.
