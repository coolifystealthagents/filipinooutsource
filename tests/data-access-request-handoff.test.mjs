import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const record = fs.readFileSync('app/research-august19/data-access-request-research.ts', 'utf8');
const types = fs.readFileSync('app/research-august19/types.ts', 'utf8');
const mapper = fs.readFileSync('app/research-august19/types.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('data-access request research keeps a bounded data-processing handoff', () => {
  assert.match(record, /dateModified: '2026-10-06'/);
  assert.match(record, /heading: 'Set up a controlled request record'/);
  assert.match(record, /href: '\/services\/data-processing-support'/);
  assert.match(record, /The client privacy or data owner still decides identity, scope, disclosure, and any exception/);
  assert.doesNotMatch(record, /support staff decide identity|support staff decide scope|support staff disclose records/);
  assert.match(types, /serviceHandoff\?: \{ heading: string; copy: string; label: string; href: string \}/);
  assert.match(mapper, /dateModified: c\.dateModified/);
  assert.match(mapper, /serviceHandoff: c\.serviceHandoff/);
  assert.match(renderer, /post\.serviceHandoff\.href/);
});