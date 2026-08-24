import type { ResearchPost } from '../fleet-data';
import sourceScope from './source-scope';
import negativeEvidence from './negative-evidence';
import claimVolatility from './claim-volatility';
import samplingDrift from './sampling-drift';
import researchPacket from './research-packet';

const related = [
  { label: 'Research evidence freshness', href: '/research/philippines-research-evidence-freshness-research-2026' },
  { label: 'Content source attribution', href: '/research/philippines-content-source-attribution-research-2026' },
  { label: 'Build a staffing plan', href: '/blog/Filipino-outsource-staffing-planning' }
] as const;

export const august23ResearchPosts: readonly ResearchPost[] = [sourceScope, negativeEvidence, claimVolatility, samplingDrift, researchPacket].map((post) => ({ ...post, related }));
