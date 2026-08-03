import { useState } from 'react';
import { Github, ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { useReveal } from '@/hooks/useReveal';

const filters = ['All', 'Live', 'Beta', 'R&D'] as const;
type Filter = (typeof filters)[number];

const statusStyles: Record<Project['status'], string> = {
  Live: 'bg-success-500/15 text-success-400 border-success-500/30',
  Beta: 'bg-accent-500/15 text-accent-400 border-accent-500/30',
  'R&D': 'bg-brand-500/15 text-brand-300 border-brand-500/30',
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  return (
    <article
      style={{ animationDelay: `${index * 60}ms` }}
      className="reveal is-visible card-interactive group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6"
    >
      {/* gradient wash */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-300 transition group-hover:border-brand-400/40 group-hover:text-brand-200">
          <Icon className="h-6 w-6" />
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-lg font-bold text-white">{project.name}</h3>
      <p className="relative mt-1 text-xs font-medium text-brand-300">{project.tagline}</p>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="chip !py-0.5 !text-[11px] text-slate-400">
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center gap-4 border-t border-white/10 pt-4">
        <a
          href={`https://github.com/${project.repo}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 transition hover:text-white"
        >
          <Github className="h-4 w-4" />
          {project.repo}
          <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition group-hover:opacity-100" />
        </a>
        <span className="chip !px-2 !py-0.5 !text-[10px] uppercase tracking-wide text-slate-400">
          {project.stack[0]}
        </span>
      </div>

      <div className="relative mt-3 flex items-center gap-3">
        <a
          href={`https://github.com/${project.repo}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 transition hover:text-brand-200"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Repository
        </a>
        <span className="text-slate-600">·</span>
        <span className="font-mono text-[11px] text-slate-500">{project.repoPath}</span>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const { ref, visible } = useReveal();

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}
        >
          <div>
            <span className="eyebrow">
              <FolderGit2 className="h-3.5 w-3.5" />
              Projects
            </span>
            <h2 className="section-title mt-4">Fifteen production projects</h2>
            <p className="mt-3 max-w-xl text-sm text-slate-400">
              A comprehensive portfolio of enterprise systems spanning GIS, agriculture, commerce, and smart technology. Each project links to its GitHub repository with full documentation, source code, and deployment pipeline.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  filter === f
                    ? 'bg-brand-500 text-ink-950 shadow-glow-sm'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-brand-400/40 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900/50 px-5 py-4">
          <p className="text-xs text-slate-400 sm:text-sm">
            Showing {filtered.length} of {projects.length} projects.
          </p>
          <a
            href="https://github.com/edwardkawuma?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !px-4 !py-2"
          >
            <Github className="h-4 w-4" />
            View all repositories
          </a>
        </div>
      </div>
    </section>
  );
}
