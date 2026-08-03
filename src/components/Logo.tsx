interface LogoProps {
  size?: number;
  variant?: 'icon' | 'full';
  className?: string;
}

export function Logo({ size = 44, variant = 'icon', className = '' }: LogoProps) {
  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div
          className="relative rounded-2xl border border-brand-400/40 bg-ink-900/80"
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-brand-400/50 to-accent-500/40" />
          <div className="absolute inset-0 flex items-center justify-center font-display text-white" style={{ fontSize: Math.max(14, size * 0.3) }}>
            A
          </div>
        </div>
        <div className="text-left">
          <p className="font-display text-lg font-bold text-white leading-tight">Auxano Tech</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Innovation Beyond Limits</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-xl border border-brand-400/40 bg-ink-900/80 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Auxano Tech"
    >
      <div className="absolute inset-1.5 rounded-lg bg-gradient-to-br from-brand-400/50 to-accent-500/40" />
      <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-white" style={{ fontSize: Math.max(13, size * 0.34) }}>
        A
      </div>
    </div>
  );
}
