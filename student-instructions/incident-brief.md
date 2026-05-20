# Day 1 Incident Brief

## Product

Candidate Review Ops Console

## Situation

The startup hiring team uses this internal console to review student applicants before interview shortlisting.

The console looks simple:

- reviewer logs in
- candidate review queue loads
- reviewer adds a review item or note
- reviewer marks review work complete
- session should remain usable long enough to finish review

But the product is behaving inconsistently during a live review window.

## Reported Symptoms

Reviewers and internal operators reported:

1. "I clicked login but the console did not open."
2. "After logging in, the review queue loads for a while and then says something went wrong."
3. "I added review notes earlier, but after restart they disappeared."
4. "It works on one reviewer's laptop but fails on another."
5. "The console randomly logs me out while I am still reviewing candidates."

## Founder Assumption

The founder thinks this is probably a small frontend issue.

Do not accept that assumption without evidence.

## Your Job

You are the engineer on call.

Your job is to:

- reproduce the failures
- identify root causes
- separate symptoms from causes
- make minimal fixes
- verify the critical review workflow
- explain your reasoning clearly

## Critical Workflow

After your fixes, this workflow must be verified:

1. backend health check works
2. frontend opens
3. reviewer can log in
4. candidate review queue loads
5. reviewer can add a review item
6. reviewer can mark an item complete
7. session behavior is explained
8. review data persistence behavior is explained

## What Not To Do

Do not rewrite the product.

Do not add a database unless the challenge instructions explicitly ask you to.

Do not redesign the UI.

Do not submit a generic debugging essay.

Do not claim a fix works unless you verified the workflow.

## Test Account

- Email: `student@careerforge.dev`
- Password: `careerforge123`
