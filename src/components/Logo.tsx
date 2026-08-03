interface LogoProps {
  size?: number;
  variant?: 'icon' | 'full';
  className?: string;
}

export function Logo({ size = 44, variant = 'icon', className = '' }: LogoProps) {
  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/auxano.png"
          alt="Auxano Tech"
          className="max-h-24 w-auto object-contain"
          style={{ minHeight: Math.max(56, size * 0.9) }}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
            const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = 'inline-flex';
          }}
        />
        <div
          className="hidden items-center gap-3"
          style={{ display: 'none' }}
          aria-hidden="true"
        >
          <img
            src="/auxano.png"
            alt=""
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src="/auxano.png"
      alt="Auxano Tech logo"
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
