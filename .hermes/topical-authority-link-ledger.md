# FilipinoOutsource topical-authority link ledger

This is a source-only planning ledger. It maps existing Philippines-only service pillars to existing research that answers the buyer's next question. It does not publish new pages, make ranking claims, or authorize an automatic reader-facing link.

| Service pillar | Existing supporting research | Buyer question answered | Controlled next handoff |
| --- | --- | --- | --- |
| `/services/executive-assistance` | `/research/philippines-calendar-coordination-research-2026` | Who may move a meeting, and when should they ask the executive? | Delivered locally; one route-local handoff is present. Do not duplicate it. |
| `/services/customer-support-operations` | `/research/philippines-customer-complaint-taxonomy-research-2026` | Which complaint details must reach the reviewer before a reply or escalation? | Delivered locally; one route-local handoff is present. Do not duplicate it. |
| `/services/bookkeeping-support` | `/research/philippines-cash-application-evidence-research-2026` | Which source records let a bookkeeper prepare a payment match without approving money movement? | Delivered locally; one route-local handoff is present. Do not duplicate it. |
| `/services/recruitment-coordination` | `/research/philippines-candidate-interview-coordination-research-2026` | What interview details should a coordinator record so the hiring owner can make the decision? | Delivered locally in `966497c7fa029d91d348234d760af82e523ac1fe`; one route-local handoff is present. `deployment_pending_public_verification / public_stale`: apex and www still omit it. Do not duplicate it. |
| `/services/digital-marketing-support` | `/research/philippines-website-source-review-research-2026` | Which source and approval details should be checked before a marketing page changes? | Delivered locally in the pending rendered-source release: one route-local handoff is present. Do not duplicate it; public delivery requires separate verification. |
| `/services/ecommerce-operations` | `/research/philippines-ecommerce-shipment-traceability-research-2026` | Which order and shipment fields make an exception safe to hand to the store owner? | Audit a short link only if the research still lacks this exact service path. |
| `/services/sales-development-support` | `/research/philippines-crm-field-definition-research-2026` | Which CRM fields need a written meaning before staff update a lead record? | Audit a short link only if the research still lacks this exact service path. |
| `/services/data-processing-support` | `/research/philippines-data-access-request-research-2026` | Which request details and permissions keep a data handoff limited to its stated purpose? | Audit a short link only if the research still lacks this exact service path. |
| `/services/property-management-support` | `/research/philippines-property-inspection-records-research-2026` | What inspection record lets a coordinator route a property issue without approving repairs? | Audit a short link only if the research still lacks this exact service path. |
| `/services/healthcare-administration` | `/research/philippines-patient-appointment-records-research-2026` | Which appointment details may be handled while clinical and privacy decisions stay with the client? | Audit a short link only if the research still lacks this exact service path. |

## 2026-10-01 verified-absent candidate audit

A fresh production build confirmed the five pairs below use existing, self-canonical research and Philippines-only service routes. Each source route has zero matching links inside its route-local `<main>`, and both routes are present in the sitemap. These are planning candidates, not permission to add multiple CTAs or publish a generic link.

| Existing supporting research | Confirmed destination | Route-local result | Next action |
| --- | --- | --- | --- |
| `/research/philippines-ecommerce-shipment-traceability-research-2026` | `/services/ecommerce-operations` | Delivered in `8c6a731bcbd87282c1129e92b92a5e649ae76f71`: one route-local handoff is present in the fresh local artifact. | `deployment_pending_public_verification / public_stale`: do not duplicate it; the currently served apex and www pages still omit the handoff and modified date. |
| `/research/philippines-crm-field-definition-research-2026` | `/services/sales-development-support` | Verified absent. The CRM definition route has no sales-development-support link in its main content. | Keep as a later candidate after the ecommerce review. |
| `/research/philippines-data-access-request-research-2026` | `/services/data-processing-support` | Verified absent. The access-request route has no data-processing-support link in its main content. | Keep privacy, access, and purpose decisions with the client owner. |
| `/research/philippines-property-inspection-records-research-2026` | `/services/property-management-support` | Verified absent. The inspection-record route has no property-management-support link in its main content. | Keep repair approval, safety, and lease decisions with the property owner. |
| `/research/philippines-patient-appointment-records-research-2026` | `/services/healthcare-administration` | Verified absent. The appointment-record route has no healthcare-administration link in its main content. | Keep clinical, privacy, and scheduling decisions with the authorized healthcare owner. |

## Rules for the next release

## 2026-09-23 research additions

| Service pillar | New supporting research | Buyer question answered | Controlled handoff |
| --- | --- | --- | --- |
| `/services/data-processing-support` | `/research/philippines-outsourcing-generative-ai-tool-intake-research-2026` | What evidence is needed before client data enters a generative-AI tool? | Article-to-service handoff only. |
| `/services/sales-development-support` | `/research/philippines-outsourcing-public-data-scraping-research-2026` | Does public availability permit unrestricted personal-data collection? | Article-to-service handoff only. |
| `/services/digital-marketing-support` | `/research/philippines-outsourcing-ai-likeness-content-review-research-2026` | Who approves synthetic media depicting a real person? | Article-to-service handoff only. |
| `/services/recruitment-coordination` | `/research/philippines-outsourcing-automated-decision-human-review-research-2026` | Where does meaningful human review sit when software ranks people? | Article-to-service handoff only. |
| `/services/data-processing-support` | `/research/philippines-outsourcing-subprocessor-change-control-research-2026` | What evidence should accompany a new onward processor? | Article-to-service handoff only. |

1. Recheck the source page and this ledger before adding a link. Do not duplicate a verified path.
2. Keep the link inside the paragraph where the buyer's question appears. A generic footer or sidebar link does not count.
3. Keep the reader-facing sentence unique to FilipinoOutsource.com. Do not promise placement, savings, outcomes, or clinical, legal, or financial decisions.
4. A public link release needs its own source, target, canonical, sitemap, and dual-host proof. This ledger alone does not need a deployment because it produces no route output.

## 2026-10-03 shipment traceability delivery status

- Rendered source: `8c6a731bcbd87282c1129e92b92a5e649ae76f71`
- Preserve rendered-source commit `8c6a731bcbd87282c1129e92b92a5e649ae76f71`; it adds the typed Ecommerce Operations handoff and refreshes only this research record's modified date.
- Local artifact: `research/philippines-ecommerce-shipment-traceability-research-2026.html` has the expected H1, one self-canonical URL, `article:modified_time` `2026-10-03`, the visible `Prepare the shipment handoff` section, one `/services/ecommerce-operations` link in route-local main, and the canonical sitemap location. This sitemap intentionally has no `lastmod` values.
- Deployment: no repository-owned deployment configuration or approved application identifier was available. No deployment was guessed or triggered.
- Public evidence: cache-busted apex and www responses were HTML 200 with the expected H1 and apex canonical, but both omit the visible marker, the Ecommerce Operations link, and the modified-date metadata. The canonical public sitemap XML includes the route. Classification: `deployment_pending_public_verification / public_stale`.

## 2026-09-23 Blog decision-support expansion

Twelve new buyer guides extend the staffing-decision pillar across commercial planning, candidate assessment, work trials, equipment, communication, quality sampling, capacity, continuity, offboarding, and delivery-model transitions. Their canonical slugs and publication evidence are recorded in `.paperclip/daily-content/2026-09-23/blog.json`; future batches must treat those topics and slugs as occupied.

## 2026-09-27 September research reconciliation

The five September 25 research records were added in rendered-source commit `1073fff9ff9a4e573b41fbdcc282b4323d98c362`. A fresh local build confirms that each route has its stated route-local handoff, one canonical URL, and a sitemap entry. These are delivered reader paths, not new candidates.

| Existing supporting research | Confirmed destination | Route-local result | Next action |
| --- | --- | --- | --- |
| `/research/philippines-outsourcing-online-transaction-record-research-2026` | `/services/ecommerce-operations` | Delivered. The main content has the Ecommerce Operations handoff. | Do not duplicate it. |
| `/research/philippines-outsourcing-invoice-evidence-handoff-research-2026` | `/services/bookkeeping-support` | Delivered. The main content has the Bookkeeping Support handoff. | Do not duplicate it. |
| `/research/philippines-outsourcing-sss-contribution-handoff-research-2026` | `/services/bookkeeping-support` | Delivered. The main content has the payroll-evidence handoff. | Do not duplicate it. |
| `/research/philippines-outsourcing-remote-device-custody-research-2026` | `/services/data-processing-support` | Delivered. The main content has the Data Processing Support handoff. | Do not duplicate it. |
| `/research/philippines-outsourcing-provider-exit-evidence-research-2026` | `/blog/Filipino-outsource-staffing-planning` | Delivered. The main content sends the buyer to the staffing planning guide. | Do not replace it with a generic service CTA. |

## 2026-09-28 research handoff reconciliation

A fresh production artifact review confirmed that each new source-backed route already has one scoped service handoff in its route-local main. These are delivered reader paths, not candidates for a second CTA.

| Existing supporting research | Confirmed destination | Route-local result | Next action |
| --- | --- | --- | --- |
| `/research/philippines-outsourcing-philhealth-remittance-handoff-research-2026` | `/services/bookkeeping-support` | Delivered. The main content has one bookkeeping-support handoff for approved payroll, EPRS evidence, and exception ownership. | Do not duplicate it. |
| `/research/philippines-outsourcing-pagibig-contribution-reconciliation-research-2026` | `/services/bookkeeping-support` | Delivered. The main content has one bookkeeping-support handoff for approved records, payment controls, and posting checks. | Do not duplicate it. |
| `/research/philippines-outsourcing-work-accident-evidence-handoff-research-2026` | `/services/administrative-support` | Delivered. The main content has one administrative-support handoff for protected intake and safety-owner escalation. | Do not add a generic staffing CTA. |
| `/research/philippines-outsourcing-consent-withdrawal-operations-research-2026` | `/services/customer-support-operations` | Delivered. The main content has one customer-support handoff for approved purpose changes and privacy-owner decisions. | Do not duplicate it. |
| `/research/philippines-outsourcing-compensation-withholding-tax-handoff-research-2026` | `/services/bookkeeping-support` | Delivered. The main content has one bookkeeping-support handoff for controlled payroll evidence and authorized tax decisions. | Do not duplicate it. |

## 2026-09-28 Blog operating-design expansion

Twelve new buyer guides extend the Filipino outsourcing decision path across pilot acceptance, client management capacity, knowledge transfer, exception routing, tool access, data minimization, output specifications, feedback cadence, backup coverage, instruction change control, demand baselines, and governance meetings. Canonical slugs, source URLs, content hashes, and route inventory are recorded in `.paperclip/daily-content/2026-09-28/blog.json`; future batches must treat these topics and slugs as occupied.
