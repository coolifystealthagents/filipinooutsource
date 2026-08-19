import { repairedAugust18Details } from '../app/august18-repaired.ts';

const expected = [
  'filipino-returns-processing-coordinator', 'filipino-lead-enrichment-research-assistant',
  'filipino-appointment-intake-coordinator', 'filipino-subscription-billing-records-assistant',
  'filipino-claims-documentation-coordinator', 'filipino-content-calendar-editor',
  'filipino-logistics-exception-coordinator', 'filipino-employee-onboarding-records-coordinator',
  'filipino-customer-feedback-tagging-assistant', 'filipino-website-content-inventory-coordinator',
  'filipino-order-entry-quality-assistant', 'filipino-legal-document-indexing-coordinator',
  'filipino-podcast-production-coordinator', 'filipino-salesforce-activity-hygiene-assistant',
  'filipino-property-maintenance-coordinator', 'filipino-training-materials-coordinator',
  'filipino-marketplace-seller-support-coordinator', 'filipino-expense-receipt-review-assistant',
  'filipino-customer-implementation-coordinator', 'filipino-archive-migration-coordinator',
  'filipino-donation-processing-coordinator', 'filipino-product-review-moderation-assistant',
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
