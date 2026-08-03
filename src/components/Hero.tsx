import { ArrowRight, Github, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { projects } from '@/data/projects';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      {/* floating orbs */}
      <div className="pointer-events-none absolute -top-10 right-[10%] -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-[5%] -z-10 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl animate-float [animation-delay:2s]" />

      <div className="section-shell">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <Logo
              size={96}
              variant="full"
              className="drop-shadow-[0_0_40px_rgba(245,158,11,0.25)] max-w-xs sm:max-w-sm"
            />
          </div>

          <span className="eyebrow mt-8 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            Tech ecosystem by Eng. Kawuma Edward
          </span>

          <h2 className="mt-4 max-w-2xl animate-fade-up text-base font-medium leading-relaxed text-slate-300 sm:text-lg [animation-delay:80ms]">
            Engineering innovation at the intersection of GIS, AI, aviation, and enterprise architecture.
          </h2>

          <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-slate-400 sm:text-lg [animation-delay:160ms]">
            A unified digital ecosystem spanning GIS, AI engineering, aviation simulation, and
            enterprise architecture — engineered for scale, modularity, and cloud deployment.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <a href="#projects" className="btn-primary">
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/edwardkawuma"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          {/* quick repo links */}
          <div className="mt-14 w-full max-w-4xl animate-fade-up [animation-delay:320ms]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              Quick links — repositories
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {projects.slice(0, 6).map((p) => (
                <a
                  key={p.id}
                  href={`https://github.com/${p.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="chip transition hover:border-brand-400/50 hover:text-white hover:shadow-glow-sm"
                >
                  <Github className="h-3.5 w-3.5 text-brand-400" />
                  {p.repo}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="mx-auto mt-20 grid max-w-3xl animate-fade-up grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4 [animation-delay:400ms]">
          {[
            { value: '10+', label: 'Core products' },
            { value: '7', label: 'Specializations' },
            { value: '100%', label: 'Open source' },
            { value: 'CI/CD', label: 'Cloud-ready' },
          ].map((s) => (
            <div key={s.label} className="bg-ink-900/60 px-4 py-6 text-center">
              <div className="font-display text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
