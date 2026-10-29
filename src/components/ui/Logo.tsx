import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'symbol';
  light?: boolean; // true = white logo on dark; false = dark logo on light
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { symbol: 28, text: 'text-sm' },
  md: { symbol: 36, text: 'text-base' },
  lg: { symbol: 48, text: 'text-xl' },
};

export const LogoSymbol: React.FC<{ light?: boolean; height?: number }> = ({
  light = true,
  height = 36,
}) => {
  const fg = light ? '#F5F5F5' : '#111111';
  const accent = '#D71920';
  // Aspect ratio of viewBox is 50:48 — width must be proportional
  const width = Math.round(height * (50 / 48));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 48"
      height={height}
      width={width}
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/*
        BI Mark — geometric construction on 50×48 grid, 4 px margins.

        B letterform (white / dark):
          Spine ............ x 4–10,  y 4–44  (6 px wide)
          Top bar .......... x 4–30,  y 4–10  (6 px tall)
          Mid bar .......... x 4–30,  y 20–26 (6 px tall)
          Bot bar .......... x 4–30,  y 38–44 (6 px tall)
          Upper-right wall . x 24–30, y 10–20 (closes upper counter, 10 px tall)
          Lower-right wall . x 24–30, y 26–38 (closes lower counter, 12 px tall)
          Upper counter .... x 10–24, y 10–20 (14 × 10 px — negative space)
          Lower counter .... x 10–24, y 26–38 (14 × 12 px — larger, per B anatomy)

        Gap ................ x 30–34  (4 px transparent — intentional breath)

        I letterform (red):
          Stem ............. x 36–44, y 4–44  (8 px wide — slightly heavier than B spine)
          Top serif ........ x 34–46, y 4–10  (2 px overhang each side of 8 px stem)
          Bot serif ........ x 34–46, y 38–44
      */}

      {/* ── B (fg) ── */}
      <rect x="4"  y="4"  width="6"  height="40" fill={fg} />  {/* spine */}
      <rect x="4"  y="4"  width="26" height="6"  fill={fg} />  {/* top bar */}
      <rect x="4"  y="20" width="26" height="6"  fill={fg} />  {/* mid bar */}
      <rect x="4"  y="38" width="26" height="6"  fill={fg} />  {/* bot bar */}
      <rect x="24" y="10" width="6"  height="10" fill={fg} />  {/* upper-right wall */}
      <rect x="24" y="26" width="6"  height="12" fill={fg} />  {/* lower-right wall */}

      {/* ── I (accent) ── */}
      <rect x="36" y="4"  width="8"  height="40" fill={accent} />  {/* stem */}
      <rect x="34" y="4"  width="12" height="6"  fill={accent} />  {/* top serif */}
      <rect x="34" y="38" width="12" height="6"  fill={accent} />  {/* bot serif */}
    </svg>
  );
};

const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  light = true,
  className = '',
  size = 'md',
}) => {
  const { symbol, text } = sizes[size];
  const textColor = light ? 'text-bi-white' : 'text-bi-black';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bi-red focus-visible:ring-offset-2 focus-visible:ring-offset-bi-black ${className}`}
      aria-label="BI Holding Group — Home"
    >
      <LogoSymbol light={light} height={symbol} />
      {variant === 'full' && (
        <div className={`flex flex-col leading-none ${textColor}`}>
          <span
            className={`font-display font-bold tracking-widest uppercase ${text}`}
            style={{ letterSpacing: '0.15em' }}
          >
            BI Holding
          </span>
          <span
            className="font-body font-medium text-[0.6em] tracking-[0.35em] uppercase text-bi-muted-lt"
          >
            Group
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
