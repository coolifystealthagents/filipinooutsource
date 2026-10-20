import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});

const components = read('app/components.tsx');
const booking = read('app/booking-components.tsx');
const contact = read('app/contact-us/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const nextConfig = read('next.config.mjs');
const middleware = read('middleware.ts');
const home = read('app/page.tsx');
const services = read('app/services/page.tsx');
const serviceDetail = read('app/services/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');

const sourceFiles = walk(path.join(root, 'app')).filter((file) => /\.(?:ts|tsx|md|mdx)$/.test(file));
const appSource = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

test('shared header and footer expose exact navigation and readable StealthAgents attribution', () => {
  assert.match(components, /<a href="\/">Home<\/a><a href="\/services">Services<\/a><a href="\/contact-us"[^>]*>Contact Us<\/a>/);
  assert.equal((components.match(/Powered by StealthAgents/g) || []).length, 2);
  assert.match(components, /stealth-agents-logo/);
});

test('review marquee contains at least ten unique approved records and no playback controls', () => {
  const names = [...booking.matchAll(/name:\s*["']([^"']+)["']/g)].map((match) => match[1]);
  assert.ok(names.length >= 10, `expected at least 10 reviews, found ${names.length}`);
  assert.equal(new Set(names).size, names.length);
  assert.doesNotMatch(booking, /Play testimonials|Pause testimonials|sa-testimonial-toggle|useState/);
  assert.match(booking, /StealthAgents reviews/);
});

test('contact page places official StealthAgents team section directly after first fold', () => {
  const heroEnd = contact.indexOf('</section>', contact.indexOf('contact-trust-hero'));
  const officialTeam = contact.indexOf('Official team, Bacolod');
  const nextSection = contact.indexOf('<section', heroEnd + 10);
  assert.ok(officialTeam > 0);
  assert.equal(nextSection, contact.lastIndexOf('<section', officialTeam));
  assert.match(contact, /stealth-agents-team-bacolod/);
  assert.match(contact, /stealth-agents-logo/);
  assert.ok(contact.indexOf('<TestimonialsRail contact') < heroEnd, 'reviews must be inside first fold');
});

test('required conversion journey is implemented', () => {
  assert.match(read('app/contact-us/StandardContactForm.tsx'), /window\.location\.assign\(["']\/thank-you["']\)/);
  assert.match(thankYou, /go\.oncehub\.com\/StealthAgentsTeam/);
  const confirmation = read('app/thanks-whats-next/page.tsx');
  assert.match(confirmation, /consultation is booked/i);
  assert.doesNotMatch(confirmation, /ScheduleOnceIframe|go\.oncehub\.com/);
});

test('main commercial pages do not use decorative zero-padded labels', () => {
  for (const [name, source] of [['home', home], ['services', services], ['service detail', serviceDetail], ['contact', contact]]) {
    assert.doesNotMatch(source, /padStart\(2|['"]0[1-9]['"]/, `${name} still has decorative labels`);
  }
});

test('article layouts provide complete sticky navigation hooks and meaningful hero fallback', () => {
  assert.match(read('app/blog/[slug]/page.tsx'), /ActiveTableOfContents/);
  assert.match(research, /ActiveTableOfContents/);
  assert.match(research, /service-handoff/);
  assert.match(research, /sources/);
  assert.doesNotMatch(research, /className="research-hero-image"[^>]+alt=""/);
});

test('security headers and canonical redirects are configured', () => {
  for (const header of ['Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.match(nextConfig, new RegExp(header));
  }
  assert.match(nextConfig, /www\.filipinooutsource\.com/);
  assert.match(middleware, /x-forwarded-proto/);
  assert.match(middleware, /cf-visitor/);
  assert.match(middleware, /"scheme"\\s\*:\\s\*"http"/);
  assert.match(middleware, /NextResponse\.redirect\(url, 308\)/);
});

test('visible source content contains no forbidden dash characters', () => {
  assert.doesNotMatch(appSource, /[—–]/);
});

test('design registry records the site-specific direction', () => {
  const registry = JSON.parse(read('design-registry.json'));
  const record = registry.find((item) => item.domain === 'filipinooutsource.com');
  assert.ok(record);
  assert.equal(record.designFamily, 'documentary editorial operations');
});
