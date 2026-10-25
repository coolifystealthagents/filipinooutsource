import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const record = fs.readFileSync('app/research-august18/property-inspection-records.ts', 'utf8');
const types = fs.readFileSync('app/research-august18/types.ts', 'utf8');
const mapper = fs.readFileSync('app/research-august18/index.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('property inspection research keeps a bounded property-management handoff', () => {
  assert.match(record, /dateModified: '2026-10-25'/);
  assert.match(record, /heading: 'Prepare the inspection record for owner review'/);
  assert.match(record, /href: '\/services\/property-management-support'/);
  assert.match(record, /property owner who decides whether repairs, access, safety action, or lease action is approved/);
  assert.match(types, /serviceHandoff\?: \{ heading: string; copy: string; label: string; href: string \}/);
  assert.match(mapper, /dateModified: article\.dateModified/);
  assert.match(mapper, /serviceHandoff: article\.serviceHandoff/);
  assert.match(renderer, /post\.serviceHandoff\.href/);
});
