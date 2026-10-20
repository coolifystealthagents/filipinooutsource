'use client';

import { useEffect, useRef, useState } from 'react';

export type TableOfContentsItem = {
  id: string;
  label: string;
};

type ActiveTableOfContentsProps = {
  items: readonly TableOfContentsItem[];
  title: string;
  className?: string;
  titleClassName?: string;
};

export function ActiveTableOfContents({
  items,
  title,
  className = '',
  titleClassName,
}: ActiveTableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!items.length) return;

    const sectionIds = new Set(items.map((item) => item.id));
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const selectFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (sectionIds.has(id)) setActiveId(id);
    };

    selectFromHash();
    window.addEventListener('hashchange', selectFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
          return;
        }

        const passed = sections.filter((section) => section.getBoundingClientRect().top <= window.innerHeight * 0.24);
        setActiveId(passed[passed.length - 1]?.id ?? sections[0].id);
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.01, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', selectFromHash);
    };
  }, [items]);

  const activeLabel = items.find((item) => item.id === activeId)?.label ?? items[0]?.label ?? '';

  const handleLink = (id: string) => {
    setActiveId(id);
    if (detailsRef.current && window.matchMedia('(max-width: 980px)').matches) {
      detailsRef.current.open = false;
    }
  };

  const links = (mobile = false) => (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            aria-current={activeId === item.id ? 'location' : undefined}
            data-active={activeId === item.id ? 'true' : undefined}
            onClick={() => handleLink(item.id)}
          >
            <span className="toc-marker" aria-hidden="true" />
            {item.label}
          </a>
        </li>
      ))}
      {mobile ? <li className="toc-close-note">Choose a section to jump there.</li> : null}
    </ol>
  );

  if (!items.length) return null;

  return (
    <div className={`active-toc ${className}`.trim()} data-toc-sticky="true">
      <nav className="active-toc-desktop" aria-label={title}>
        <h2 className={titleClassName}>{title}</h2>
        {links()}
      </nav>
      <details className="active-toc-mobile" ref={detailsRef}>
        <summary>
          <span>Jump to section</span>
          <strong>{activeLabel}</strong>
        </summary>
        <nav aria-label={title}>{links(true)}</nav>
      </details>
      <style jsx>{`
        .active-toc-desktop { max-height: calc(100vh - 116px); overflow-y: auto; }
        .active-toc-desktop h2 { margin: 0; }
        .active-toc ol { margin: 12px 0 0; padding: 0; list-style: none; }
        .active-toc li { margin: 3px 0; }
        .active-toc a { display: grid; grid-template-columns: 8px 1fr; gap: 9px; align-items: start; padding: 7px 6px; border-radius: 8px; color: #475a6d; font-weight: 750; line-height: 1.35; }
        .active-toc a:hover { background: #f4f8f6; color: #17324d; }
        .toc-marker { width: 5px; height: 5px; margin-top: .5em; border-radius: 999px; background: #c8d2d0; }
        .active-toc a[aria-current='location'] { background: #e9f8f3; color: #087560; }
        .active-toc a[aria-current='location'] .toc-marker { height: 18px; margin-top: 1px; background: #0f8f73; }
        .active-toc-mobile { display: none; }
        .toc-close-note { color: #617083; font-size: 12px; padding: 8px 6px 2px; }
        @media (max-width: 980px) {
          .active-toc { position: sticky; top: 8px; z-index: 20; }
          .active-toc-desktop { display: none; }
          .active-toc-mobile { display: block; border: 1px solid #cad8d4; border-radius: 14px; background: rgba(255,255,255,.97); box-shadow: 0 12px 32px rgba(23,50,77,.13); }
          .active-toc-mobile summary { display: grid; gap: 3px; padding: 12px 15px; cursor: pointer; list-style: none; }
          .active-toc-mobile summary::-webkit-details-marker { display: none; }
          .active-toc-mobile summary span { color: #0f8f73; font-size: 11px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }
          .active-toc-mobile summary strong { overflow: hidden; color: #17324d; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; }
          .active-toc-mobile nav { max-height: min(60vh, 430px); overflow-y: auto; padding: 0 10px 10px; border-top: 1px solid #e2e8e6; }
        }
      `}</style>
    </div>
  );
}
