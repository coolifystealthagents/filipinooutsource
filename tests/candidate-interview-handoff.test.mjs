import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const record = fs.readFileSync('app/research-august19/candidate-interview-coordination.ts', 'utf8');
const types = fs.readFileSync('app/research-august19/types.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('candidate interview research keeps its recruitment handoff and hiring boundary', () => {
  assert.match(record, /dateModified: '2026-09-12'/);
  assert.match(record, /heading: 'Prepare the interview record'/);
  assert.match(record, /href: '\/services\/recruitment-coordination'/);
  assert.match(record, /The client hiring team still decides who advances, receives an offer, or needs an exception\./);
  assert.match(types, /serviceHandoff\?: \{ heading: string; copy: string; label: string; href: string \}/);
  assert.match(renderer, /post\.serviceHandoff\.href/);
});