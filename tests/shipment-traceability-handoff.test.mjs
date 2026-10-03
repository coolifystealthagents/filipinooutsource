import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const record = fs.readFileSync('app/research-august18/shipment-traceability.ts', 'utf8');
const types = fs.readFileSync('app/research-august18/types.ts', 'utf8');
const mapper = fs.readFileSync('app/research-august18/index.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('shipment traceability research keeps a bounded ecommerce handoff', () => {
  assert.match(record, /dateModified: '2026-10-03'/);
  assert.match(record, /heading: 'Prepare the shipment handoff'/);
  assert.match(record, /href: '\/services\/ecommerce-operations'/);
  assert.match(record, /merchant owner who decides a refund, replacement, delivery promise, or policy exception/);
  assert.match(types, /serviceHandoff\?: \{ heading: string; copy: string; label: string; href: string \}/);
  assert.match(mapper, /dateModified: article\.dateModified/);
  assert.match(mapper, /serviceHandoff: article\.serviceHandoff/);
  assert.match(renderer, /post\.serviceHandoff\.href/);
});