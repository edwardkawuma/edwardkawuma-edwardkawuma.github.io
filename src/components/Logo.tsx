interface LogoProps {
  size?: number;
  variant?: 'icon' | 'full';
  className?: string;
}

export function Logo({ size = 44, variant = 'icon', className = '' }: LogoProps) {
  const logoSrc = `${import.meta.env.BASE_URL}auxano.png`;

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={logoSrc}
          alt="Auxano Tech"
          className="h-auto w-full max-w-[720px] object-contain"
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
            src={logoSrc}
            alt=""
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt="Auxano Tech logo"
      className={`h-auto object-contain ${className}`}
      style={{ height: size, width: 'auto', maxWidth: size * 2.5 }}
    />
  );
}
