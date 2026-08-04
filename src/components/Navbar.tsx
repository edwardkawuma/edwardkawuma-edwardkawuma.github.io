import { useEffect, useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;

        const topMost = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        const id = topMost.target.getAttribute('id');
        if (id) setActive(`#${id}`);
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-2xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex items-center">
          <Logo size={44} variant="icon" />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? 'page' : undefined}
              className={`link-underline inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium transition ${
                active === l.href ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://edwardkawuma.github.io/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !py-2 !px-4"
          >
            <Github className="h-4 w-4" />
            Website
          </a>
        </div>

        <button
          className="tap-target rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="glass border-t border-white/10 md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`tap-target rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  active === l.href
                    ? 'bg-brand-500/15 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://edwardkawuma.github.io/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost mt-2"
            >
              <Github className="h-4 w-4" />
              Website
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
