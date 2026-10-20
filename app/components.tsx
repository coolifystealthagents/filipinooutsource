import * as data from './data';
import { fleetServices } from './fleet-data';

const site = (data as any).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg?v=20261020-v3" alt="" /><span className="logo-text"><span className="logo-name"><span>Filipino</span><span>Outsource</span></span><span className="logo-sub">Philippines-based staffing</span></span></span>;
}

function PoweredBy() {
  return <a className="powered-by" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, opens in a new tab"><span>Powered by StealthAgents</span><img src="/stealth-agents-logo.png" alt="StealthAgents" /></a>;
}

export function Header() {
  return <header className="nav site-header"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><nav className="links fleet-nav" aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us" id="cta-global-header-contact">Contact Us</a></nav><PoweredBy /></div></header>;
}

export function Footer() {
  return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/"><LogoMark /></a><p>Explore Philippines-based {site.primary || 'business operations'} support designed around documented scope and accountable handoffs.</p><PoweredBy /><p className="footer-note">We recruit and hire talent only in the Philippines. Your request may be routed to the StealthAgents staffing team for follow-up.</p></div><div><h3>Services</h3><div className="footer-links">{fleetServices.slice(0, 6).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>)}</div></div><div><h3>Explore</h3><div className="footer-links"><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a><a href="/cancellation-policy">Refund Policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta fleet-final"><p className="eyebrow">Philippines-based staffing</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us" id="cta-global-final-contact">Contact Us</a></section>;
}
