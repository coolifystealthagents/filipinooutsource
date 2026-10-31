import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const records = fs.readFileSync('app/fleet-data.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('patient appointment research keeps a bounded healthcare-administration handoff', () => {
  const start = records.indexOf("slug: 'philippines-patient-appointment-records-research-2026'");
  const next = records.indexOf('\n  {', start + 1);
  const record = records.slice(start, next === -1 ? undefined : next);

  assert.ok(start >= 0, 'patient appointment research record must be present');
  assert.match(record, /dateModified: '2026-10-31'/);
  assert.match(record, /heading: 'Set up a safe appointment record handoff'/);
  assert.match(record, /href: '\/services\/healthcare-administration'/);
  assert.match(record, /authorized healthcare owner keeps clinical, privacy, scheduling, and access decisions/);
  assert.match(renderer, /post\.serviceHandoff\.href/);
});
