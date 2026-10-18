import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const records = fs.readFileSync('app/research-october12.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

const expectedHandoffs = [
  ['outsourcing-instruction-ambiguity-agreement-research', '/services/data-processing-support'],
  ['outsourced-handoff-acknowledgment-latency-research', '/services/executive-assistance'],
  ['least-privilege-role-fit-research', '/services/data-processing-support'],
  ['outsourced-work-sample-error-taxonomy-research', '/services/data-processing-support'],
  ['timezone-overlap-exception-concentration-research', '/services/customer-support-operations'],
];

test('October 12 research records keep service handoffs aligned with their service lanes', () => {
  for (const [slug, href] of expectedHandoffs) {
    const start = records.indexOf(`"slug": "${slug}"`);
    const next = records.indexOf('\n  {', start + 1);
    const record = records.slice(start, next === -1 ? undefined : next);

    assert.ok(start >= 0, `${slug} record must be present`);
    assert.match(record, /"datePublished": "2026-10-12"/);
    assert.match(record, /"dateModified": "2026-10-18"/);
    assert.match(record, new RegExp(`"cluster": "${href}"`));
    assert.match(record, new RegExp(`"href": "${href}"`));
  }

  assert.match(renderer, /post\.serviceHandoff\.href/);
});
