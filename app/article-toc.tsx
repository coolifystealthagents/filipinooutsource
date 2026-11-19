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
    </div>
  );
}
