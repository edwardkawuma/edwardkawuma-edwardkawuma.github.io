import { Github, Linkedin, Youtube, Heart } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/edwardkawuma', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edward-kawuma-6ba81413a', icon: Linkedin },
  { label: 'YouTube', href: 'https://www.youtube.com/@eddykawuma4323', icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80">
      <div className="section-shell py-14">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand-400/20 bg-brand-500/10 px-5 py-5 shadow-card sm:flex-row sm:items-center">
          <p className="text-sm text-slate-200">
            Have a product idea or enterprise challenge? Let's design and ship it.
          </p>
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Start a conversation
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center">
              <Logo size={40} variant="icon" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A unified technology ecosystem led by Eng. Kawuma Edward — engineering innovation
              beyond limits across GIS, AI, aviation, and enterprise architecture.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Ecosystem</h4>
            <ul className="mt-4 space-y-2.5">
              {['GIS Mapping', 'AI Dispatch', 'Aviation Simulation', 'BPMN Engine'].map((p) => (
                <li key={p}>
                  <a
                    href="#projects"
                    className="text-sm text-slate-400 transition hover:text-brand-300"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Auxano Tech. MIT License. All repositories open source.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Built with <Heart className="h-3 w-3 text-brand-400" /> by Eng. Kawuma Edward
          </p>
        </div>
      </div>
    </footer>
  );
}
