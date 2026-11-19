import type { CSSProperties, ReactNode } from 'react';
import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as any).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return (
    <span className="logo-mark-wrap">
      <img className="logo-img" src="/logo.svg?v=20261020-v3" alt="" />
      <span className="logo-text">
        <span className="logo-name"><span>Filipino</span><span>Outsource</span></span>
        <span className="logo-sub">Powered by StealthAgents</span>
      </span>
    </span>
  );
}

function PoweredBy({ className = '' }: { className?: string }) {
  return (
    <a
      className={`powered-by ${className}`.trim()}
      href="https://stealthagents.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Powered by StealthAgents, opens in a new tab"
    >
      <span>Powered by StealthAgents</span>
      <img src="/stealth-agents-logo.png" alt="StealthAgents" />
    </a>
  );
}

export function Header() {
  return (
    <header className="fo-header">
      <div className="fo-nav-inner">
        <a className="fo-brand" href="/" aria-label={`${site.brand || 'Filipino Outsource'} home`}>
          <LogoMark />
        </a>
        <nav className="fo-nav-links" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us" id="cta-global-header-contact">Contact Us</a>
        </nav>
        <a className="fo-nav-cta" href="/contact-us" id="cta-global-header-plan">
          Plan your team <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="fo-footer">
      <div className="fo-footer-inner container">
        <div className="fo-footer-top">
          <div className="fo-footer-brand">
            <a className="fo-brand" href="/" aria-label={`${site.brand || 'Filipino Outsource'} home`}>
              <LogoMark />
            </a>
            <p>
              Dedicated Philippines-based support for the recurring work that keeps a business moving.
              Start with one role, a clear brief, and a review process your team can actually keep.
            </p>
            <p className="fo-footer-note">
              We recruit and hire talent only in the Philippines. Your request may be routed to the
              StealthAgents staffing team for follow-up.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <div className="fo-footer-links">
              {fleetServices.slice(0, 7).map((service) => (
                <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="fo-footer-links">
              <a href="/services">All services</a>
              <a href="/blog">Blog</a>
              <a href="/research">Research</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cancellation-policy">Refund Policy</a>
            </div>
          </div>
        </div>

        <div className="fo-footer-parent">
          <a
            className="fo-footer-parent-logo"
            href="https://stealthagents.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="StealthAgents parent company"
          >
            <img src="/stealth-agents-logo.png" alt="StealthAgents" />
          </a>
          <div>
            <h3>Parent company</h3>
            <p>
              StealthAgents recruits, employs, and supports the Philippines-based professionals who
              deliver this work. Filipino Outsource is a StealthAgents subsidiary.
            </p>
            <a className="fo-footer-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">
              Powered by StealthAgents ↗
            </a>
          </div>
        </div>

        <div className="fo-footer-bottom">
          <span>© {year} {site.brand || 'Filipino Outsource'}. All rights reserved.</span>
          <span>{site.domain || 'FilipinoOutsource.com'}</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageCaption,
  actions,
  compact = false,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  actions?: ReactNode;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`fo-hero fo-hero--page${compact ? ' fo-hero--compact' : ''}`}>
      <div className="fo-hero-bg" aria-hidden="true">
        <span className="fo-aurora fo-aurora--a" />
        <span className="fo-aurora fo-aurora--b" />
        <span className="fo-aurora fo-aurora--c" />
        <span className="fo-ring fo-ring--1" />
        <span className="fo-ring fo-ring--2" />
        <span className="fo-grid-lines" />
      </div>
      <div className="container fo-pagehero-grid">
        <div className="fo-pagehero-copy">
          <p className="fo-eyebrow fo-eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="fo-hero-lead">{lead}</p>
          {actions ? <div className="fo-actions">{actions}</div> : null}
          {children}
        </div>
        {image ? (
          <figure className="fo-pagehero-media" data-tilt data-tilt-strength="4">
            <img src={image} alt={imageAlt || ''} />
            {imageCaption ? <figcaption>{imageCaption}</figcaption> : null}
          </figure>
        ) : (
          <div className="fo-pagehero-orbit" aria-hidden="true">
            <div className="fo-orbit-mark">
              <span className="fo-orbit-word">Philippines<br />based<br />talent</span>
              <span className="fo-pin" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="fo-marquee" aria-hidden="true">
      <div className="fo-marquee-track">
        {[0, 1].map((group) => (
          <div className="fo-marquee-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`fo-head${light ? ' fo-head--light' : ''}`} data-reveal>
      <div>
        {eyebrow ? <p className={`fo-eyebrow${light ? ' fo-eyebrow--light' : ''}`}>{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function CTA() {
  return (
    <section className="fo-cta">
      <div className="container fo-cta-inner">
        <div data-reveal>
          <p className="fo-eyebrow fo-eyebrow--light">One role, clear boundaries</p>
          <h2>What should your Philippines team own first?</h2>
          <p>
            Share the work, tools, schedule, and decisions that stay with your team. We will turn
            that into a practical role brief and a focused staffing conversation.
          </p>
        </div>
        <div className="fo-cta-actions" data-reveal style={{ '--fo-delay': '120ms' } as CSSProperties}>
          <a className="fo-btn fo-btn--sun" href="/contact-us" id="cta-global-final-contact">
            Plan my team <span aria-hidden="true">↗</span>
          </a>
          <a className="fo-link" href="/services">Compare every service</a>
        </div>
      </div>
    </section>
  );
}
