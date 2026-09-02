# FilipinoOutsource topical-authority map

## Scope and evidence boundary

This execution map uses only routes already defined in the repository. FilipinoOutsource serves businesses planning Philippines-based staffing. It does not make wage, speed, placement, ranking, or guaranteed-outcome claims.

The primary planning pillar is `/blog/Filipino-outsource-staffing-planning`. Its supporting paths should answer the next question a buyer has before they request a staffing discussion.

## Pillars, supporting paths, and service destinations

| Buyer question and supporting path | Reader need | Contextual destination | Reason for the link |
| --- | --- | --- | --- |
| `/blog/Filipino-outsource-staffing-planning` | Define the first role, review owner, access limits, and schedule. | `/services/customer-support-operations` when the queue is customer messages; `/services/executive-assistance` when it is calendar or follow-up work. | Moves a broad role plan to the matching service lane. |
| `/blog/Filipino-outsource-staffing-tasks-to-outsource` | Choose a first task that has examples and a clear finish point. | `/services/data-processing-support` for structured record work; `/services/bookkeeping-support` for record preparation that stays outside payment approval. | Keeps service choices tied to task risk and review needs. |
| `/blog/Filipino-outsource-staffing-onboarding-checklist` | Launch a small queue with named access and a review path. | `/services/executive-assistance` for calendar and follow-up access; `/services/customer-support-operations` for reply and escalation access. | Gives the launch checklist a role-specific next step. |
| `/blog/Filipino-outsource-staffing-provider-questions` | Check screening, launch review, replacement, and access ownership. | `/services/customer-support-operations` only where the buyer is evaluating a customer queue. | Avoids a generic service link when the article is about provider diligence. |
| `/blog/filipino-customer-support-assistant-guide` and customer-escalation articles | Define reply boundaries and exception routing. | `/services/customer-support-operations`. | This is the service page that matches the reader's support-queue intent. |
| `/blog/filipino-bookkeeping-support-guide`, invoice, reconciliation, and close articles | Prepare records and flag exceptions without payment authority. | `/services/bookkeeping-support`. | Keeps the finance boundary visible and prevents a generic staffing CTA. |
| Executive calendar, inbox, travel, meeting, and board-pack articles | Prepare schedules, follow-ups, and source records for an owner. | `/services/executive-assistance`. | The destination matches executive support rather than broad admin language. |
| Data cleanup, document control, dashboard, reporting-definition, and access-record articles | Prepare structured records and surface missing or conflicting fields. | `/services/data-processing-support`. | Links to the service built for controlled data work. |
| Recruitment interview, employee records, leave, and onboarding articles | Coordinate records and scheduling while the employer keeps employment decisions. | `/services/recruitment-coordination`. | Preserves the recruitment decision boundary. |
| Catalog, order, return, address-change, and marketplace articles | Maintain ecommerce records and route customer-impacting exceptions. | `/services/ecommerce-operations`. | Gives ecommerce readers a matching operating-service path. |
| Lead, quote-preparation, renewal-record, and pipeline articles | Prepare approved inputs while sales leadership keeps commercial decisions. | `/services/sales-development-support`. | Keeps sales preparation distinct from a promise of sales results. |
| Property request, maintenance-vendor, and lease-record articles | Coordinate requests and records without property, safety, or lease decisions. | `/services/property-management-support`. | Connects the operating task to its relevant service. |
| Patient appointment, registration, and healthcare-record articles | Coordinate only necessary records and stop before clinical decisions. | `/services/healthcare-administration`. | Maintains the care, privacy, and clinical-boundary context. |
| Content brief, accessibility-review, social-content, and website-audit articles | Prepare approved marketing work and route final choices to the owner. | `/services/digital-marketing-support`. | Maps marketing-support intent to a named service lane. |

## Research assets and credible use

Existing research routes must remain transparent about what they measure and what they do not prove. The market-data pages may lead readers to the staffing-plan pillar, while role-specific research should link only to the service route that matches its stated boundary.

- `/research/philippines-service-exports-outsourcing-statistics-2026` → staffing-plan pillar, then role-specific service selection.
- `/research/philippines-services-workforce-remote-support-statistics-2026` → staffing-plan pillar, then executive assistance or customer support only when the reader's stated queue matches.
- Customer-support research → `/services/customer-support-operations`.
- Finance-record research → `/services/bookkeeping-support`.
- Access and data-record research → `/services/data-processing-support`.

Do not present existing regulator, market, or statistical sources as evidence that a particular worker, provider, or workflow will produce a result. A new original-research release needs a documented method, a source list, a clear sample boundary, and a visible limitation before publication.

## Verified link ledger

The checks below use the generated route-local `<main>` rather than shared navigation. They are planning records, not a reason to add links until the source page and the next decision still match.

| Source route | Existing destination | Route-local result | Next action |
| --- | --- | --- | --- |
| `/research/philippines-cash-application-evidence-research-2026` | `/services/bookkeeping-support` | Delivered. The generated research article has one bookkeeping-support link in its main content. | Do not add another CTA for this pair. |
| `/research/philippines-data-processing-quality-research-2026` | `/services/data-processing-support` | Delivered through the existing research content. The generated main contains two matching links. | Keep the current reader path; do not duplicate it. |
| `/research/philippines-customer-support-operations-research-2026` | `/services/customer-support-operations` | Delivered locally in rendered source `e1fa87a527468bf80ab3633235877f14535295de`: the generated main has one matching handoff, canonical URL, Article publication/update dates, and sitemap entry. | Do not add another CTA. Public delivery is pending because both hosts still serve the prior route without this handoff. |
| `/research/philippines-executive-assistance-workflow-research-2026` | `/services/executive-assistance` | Absent from the generated main. Both routes have a generated H1, canonical URL, and sitemap entry. | Hold as the next candidate after the customer-support route. |

## Implementation order

1. Use the customer-support research candidate first. Store its destination and link copy with the route data, then place the link in the sentence that explains the reader's next decision.
2. Do not add sitewide or unrelated service links merely to increase link counts. Keep customer commitments, policy changes, and exception decisions with the buyer's named owner.
3. Verify the rendered article has the exact intended href, the service route resolves, and Article metadata, title, H1, canonical, and sitemap entry remain intact.
4. After the first typed-link release, audit byline and `BlogPosting` author/publisher fields together. Use only the existing organization identity unless a real named author and evidence are already published on the site.

## Release status — 2026-09-02

- Rendered source: `e1fa87a527468bf80ab3633235877f14535295de` added the customer-support research handoff, original publication date, updated date, Open Graph modified date, and Article modified date.
- Local artifact evidence: the exact research page has the expected H1 and canonical URL, one `Plan the support queue` marker, one `/services/customer-support-operations` link in `<main>`, Article dates `2026-08-07` and `2026-09-02`, and a canonical sitemap `<loc>`; this sitemap intentionally has no `<lastmod>`.
- Public evidence: cache-busted apex and www each returned HTTP 200 `text/html` with the expected H1 and apex canonical URL, but neither route-local main contains the new marker or service link and neither response contains `article:modified_time`. The canonical sitemap contains the route but no `<lastmod>` by contract.
- Lifecycle: `deployment_pending_public_verification / public_stale`. A source push is not deployment proof, and no repository-approved deployment target was available to trigger or monitor.
