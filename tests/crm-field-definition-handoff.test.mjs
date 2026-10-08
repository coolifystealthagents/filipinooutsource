import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const records = fs.readFileSync('app/fleet-data.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('CRM field-definition research keeps a bounded sales-development handoff', () => {
  const start = records.indexOf("slug: 'philippines-crm-field-definition-research-2026'");
  const end = records.indexOf("slug: 'philippines-remote-support-coverage-research-2026'", start);
  assert.ok(start >= 0 && end > start, 'CRM research record must remain in the August research batch');
  const record = records.slice(start, end);

  assert.match(record, /dateModified: '2026-10-08'/);
  assert.match(record, /heading: 'Prepare CRM records for owner review'/);
  assert.match(record, /href: '\/services\/sales-development-support'/);
  assert.match(record, /The client sales or CRM owner approves field definitions, reporting-impacting changes, customer-contact decisions, and exceptions/);
  assert.doesNotMatch(record, /support staff approve field definitions|support staff approve reporting-impacting changes|support staff make customer-contact decisions/);
  assert.match(records, /serviceHandoff\?: \{ heading: string; copy: string; label: string; href: string \}/);
  assert.match(records, /dateModified: config\.dateModified/);
  assert.match(records, /serviceHandoff: config\.serviceHandoff/);
  assert.match(renderer, /post\.serviceHandoff\.href/);
});
