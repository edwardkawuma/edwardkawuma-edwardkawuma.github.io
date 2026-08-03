import { Target, Compass, Rocket, Quote } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const specializations = [
  'GIS',
  'AI Engineering',
  'SEO',
  'UI/UX',
  'BPMN Modeling',
  'Software Architecture',
  'Aviation Simulation & Avionics',
];

const pillars = [
  {
    icon: Compass,
    title: 'Mission',
    text: 'To engineer modular, cloud-ready systems that turn complex spatial, logistical, and operational challenges into elegant, scalable software.',
  },
  {
    icon: Rocket,
    title: 'Approach',
    text: 'Every product ships with documentation, tests, CI/CD, and a live demo — built for transparency, collaboration, and long-term maintainability.',
  },
  {
    icon: Target,
    title: 'Vision',
    text: 'A unified ecosystem where GIS, AI, aviation, and enterprise architecture converge to push the boundaries of what technology can do.',
  },
];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-400" />
            About
          </span>
          <h2 className="section-title mt-4">The architect behind the ecosystem</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Bio card */}
          <div className="glass-card animate-fade-up p-7 lg:col-span-3">
            <div className="flex items-start gap-5">
              <div className="relative shrink-0">
                <img 
                  src="/picture.jpeg" 
                  alt="Eng. Kawuma Edward" 
                  className="h-20 w-20 rounded-2xl object-cover border-2 border-brand-400/30"
                />
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success-500 text-[10px] font-bold text-ink-950">
                  ✓
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Eng. Kawuma Edward</h3>
                <p className="text-sm text-brand-300">Technological Architect & Founder</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Eng. Kawuma Edward is an Operations professional and technological architect with 3+ years of experience in development, programming, and IT project management. Based in Kampala, Uganda, he specializes in building systems at the intersection of spatial intelligence, artificial intelligence, and mission-critical simulation.
              </p>
              <p>
                Currently pursuing a Master of Information Systems at Makerere University, Edward brings proven expertise in GIS analytics, IT operations scaling, and complex project delivery. His career spans innovative ventures including the TAFUTA ID system (National Youth Graduate Program), aquaponic farming initiatives, and KFC operational expansion from 4 to 9 branches.
              </p>
              <p>
                From PostGIS-powered mapping platforms to ML dispatch engines and enterprise workflow automation, each Auxano Tech product is designed as a modular, documented, and deployment-ready component of a larger ecosystem—engineering that compounds in value.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            <figure className="mt-6 rounded-xl border border-white/10 bg-ink-900/50 p-4">
              <Quote className="h-4 w-4 text-brand-400" />
              <blockquote className="mt-2 font-display text-sm italic text-slate-200">
                "Innovation beyond limits means building systems that don't just solve today's
                problem — they scale to meet the one you haven't imagined yet."
              </blockquote>
            </figure>
          </div>

          {/* Mission pillars */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{ animationDelay: `${i * 100}ms` }}
                className="glass-card animate-fade-up group p-5 transition hover:border-brand-400/30 hover:shadow-glow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 transition group-hover:bg-brand-500/25">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-white">{p.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
