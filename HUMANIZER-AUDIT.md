# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the public marketing and editorial copy across the homepage, shared site data, service template, guide index and detail template, contact page, thank-you page, shared header, CTA, footer, and site metadata.

## Files reviewed

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/layout.tsx`
- `app/globals.css` (copy-fit and contrast check)

## What changed

- Replaced the corporate phrase "operating system" and the stiff phrase "review rhythm" with direct wording about ownership and review.
- Removed repetitive, brand-led guide titles and rewrote them around the question each guide answers.
- Replaced the shared generic body on three guides with page-specific advice about role planning, first tasks, and first-week onboarding.
- Replaced generic service-card lists with task, quality-control, and first-week details for operations, customer support, admin support, and reporting work.
- Reworded a vague reporting proof point so it describes the actual report and work examples a buyer should expect.
- Kept the Philippines-only hiring model clear in visible copy and metadata.
- Shortened two homepage headings during visual QA until neither left an orphaned word at desktop width, and raised the contrast of the hero disclosure.

## Final anti-AI pass

The remaining copy was checked for inflated claims, corporate filler, forced contrasts, repetitive templates, em-dash habits, chatbot phrases, vague conclusions, and unsupported proof. The site now uses plain instructions, concrete work examples, and natural sentence lengths. Short card lists remain where they help a buyer scan real tasks; they are not decorative slogan groups.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were not edited. No legal meaning was changed. The audit did not add testimonials, client stories, statistics, prices, credentials, or performance claims. Existing source citations in the provider-question guide were preserved.
