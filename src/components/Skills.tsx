import { Cpu } from 'lucide-react';
import { skills } from '@/data/skills';
import { useReveal } from '@/hooks/useReveal';

export function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-3xl" />
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">
            <Cpu className="h-3.5 w-3.5" />
            Capabilities
          </span>
          <h2 className="section-title mt-4">Seven specializations, one ecosystem</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            From geospatial intelligence to avionics simulation — each capability powers a family of
            products across the Auxano Tech stack.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                style={{ animationDelay: `${i * 70}ms` }}
                className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/50 p-6 transition hover:border-brand-400/30 hover:bg-ink-800/60`}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300 transition group-hover:border-brand-400/40 group-hover:text-brand-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-base font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  {skill.summary}
                </p>
                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {skill.highlights.map((h) => (
                    <span key={h} className="chip !py-0.5 !text-[11px] text-slate-400">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
