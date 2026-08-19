import { august18ReplacementDetails as repairedAugust18Details } from '../app/august18-replacement.ts';

const expected = [
  'filipino-workflow-audit-assistant',
  'filipino-inbox-triage-coordinator',
  'filipino-data-retention-coordinator',
  'filipino-customer-onboarding-records-assistant',
  'filipino-knowledge-transfer-coordinator',
  'filipino-vendor-invoice-matching-assistant',
  'filipino-quality-sample-review-coordinator',
  'filipino-calendar-request-coordinator',
  'filipino-customer-records-cleanup-assistant',
  'filipino-operations-dashboard-coordinator',
  'filipino-employee-file-indexing-assistant',
  'filipino-service-request-routing-coordinator',
  'filipino-customer-renewal-records-assistant',
  'filipino-research-source-log-coordinator',
  'filipino-returns-evidence-assistant',
  'filipino-content-brief-coordinator',
  'filipino-project-action-log-assistant',
  'filipino-contact-preference-coordinator',
  'filipino-document-review-queue-assistant',
  'filipino-product-catalog-check-coordinator',
  'filipino-support-escalation-records-assistant',
  'filipino-appointment-confirmation-coordinator'
];

if (Object.keys(repairedAugust18Details).length !== 22) throw new Error('August 18 route count is not 22');
for (const slug of expected) {
  const detail = repairedAugust18Details[slug];
  const source = detail?.routeSourceSegment || detail?.sourceSegment || '';
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  if (!source.includes(`Route: /blog/${slug}`)) throw new Error(`${slug}: route binding missing`);
  if (!source.includes('Campaign date: 2026-08-18')) throw new Error(`${slug}: campaign date missing`);
  if (detail.sourceDate !== '2026-08-18' || detail.datePublished !== '2026-08-18') throw new Error(`${slug}: date fields missing`);
  if (words < 900) throw new Error(`${slug}: ${words} source words`);
}
console.log(`PASS: ${expected.length} August 18 route source segments, direct date bindings, and 900+ word bodies`);
