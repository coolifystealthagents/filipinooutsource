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

## Implementation order

1. Replace the generated two-service rotation in `app/daily-blog-batch.ts` with an explicit, typed destination field per published article. Start with a single customer-support or bookkeeping article where the destination already exists.
2. Keep link text in the sentence that explains the reader's next decision. Do not add sitewide or unrelated service links merely to increase link counts.
3. Verify the rendered article has the exact intended href, the service route resolves, and Article metadata, title, H1, canonical, and sitemap entry remain intact.
4. After the first typed-link release, audit byline and `BlogPosting` author/publisher fields together. Use only the existing organization identity unless a real named author and evidence are already published on the site.
