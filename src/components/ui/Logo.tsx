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

// Signature-style B outlined from "Mrs Saint Delafield" (SIL Open Font License),
// in font units at 100 px size with the baseline at y = 0.
const SIGNATURE_B =
  'M58.80-39.40L58.80-39.40Q58.80-39.40 63.20-39.70L63.20-39.70Q70.30-39.70 73.75-37.05Q77.20-34.40 77.20-29.55Q77.20-24.70 72.80-18.20Q68.40-11.70 61.40-6.40L61.40-6.40L67.10-6.40Q70.60-6.40 72-6.70Q73.40-7 73.60-7L73.60-7Q75-7 75-5.50Q75-4 73-3.90L73-3.90Q65.30-3.90 58.20-4.10L58.20-4.10Q47 3 36.20 3L36.20 3Q31.10 3 28.10 1.10Q25.10-0.80 25.10-2.75Q25.10-4.70 26.75-5.80Q28.40-6.90 31.40-6.90L31.40-6.90Q43.10-6.90 57.60-6.40L57.60-6.40Q63.60-11.30 67.20-17.75Q70.80-24.20 70.80-29.40L70.80-29.40Q70.80-37.70 61.90-37.70L61.90-37.70Q58.40-37.70 54.65-36.60Q50.90-35.50 50.15-35.05Q49.40-34.60 49.20-34.60L49.20-34.60Q48.60-34.60 48.60-35.45Q48.60-36.30 51.20-37.50L51.20-37.50Q62.60-43 73.50-52.15Q84.40-61.30 84.40-65.20L84.40-65.20Q84.40-67 81.60-67L81.60-67Q70.20-66.90 50.30-49.90L50.30-49.90Q46.30-39.60 37.15-24.60Q28-9.60 18 2.25Q8 14.10 3.10 14.10L3.10 14.10Q0.10 14.10 0.10 11L0.10 11Q0.10 3.90 13.55-14.30Q27-32.50 44-47.80L44-47.80Q47-55.10 47-58.45Q47-61.80 45.40-63.75Q43.80-65.70 40.70-66.60L40.70-66.60Q35.80-67.90 30.35-67.90Q24.90-67.90 22-67.65Q19.10-67.40 14.95-66.65Q10.80-65.90 8.20-64.05Q5.60-62.20 5.60-59.35Q5.60-56.50 8.40-54.95Q11.20-53.40 15.25-52.80Q19.30-52.20 23.30-51.50Q27.30-50.80 30.10-48.75Q32.90-46.70 32.90-43L32.90-43Q32.90-42 32.45-42Q32-42 31.75-42.30Q31.50-42.60 30.90-43.50L30.90-43.50Q30-44.80 28.25-45.50Q26.50-46.20 22.85-46.85Q19.20-47.50 15.95-48.25Q12.70-49 9.40-50.20Q6.10-51.40 4.10-53.60Q2.10-55.80 2.10-58.75Q2.10-61.70 4.60-64Q7.10-66.30 11.20-67.60L11.20-67.60Q19.60-70.10 28.70-70.10L28.70-70.10Q52.30-70.10 52.30-57.70L52.30-57.70Q52.30-56.60 51.80-54.40L51.80-54.40Q72-70.70 84.60-70.70L84.60-70.70Q90.20-70.70 90.20-67.30L90.20-67.30Q90.20-62.40 79.95-53.40Q69.70-44.40 58.80-39.40ZM5.60 11.20L5.60 11.20Q8.50 11.20 21.15-7.35Q33.80-25.90 41.40-41.90L41.40-41.90Q26.40-27.60 14.85-12.15Q3.30 3.30 3.30 8.90L3.30 8.90Q3.30 11.20 5.60 11.20ZM54.50-4.20L54.50-4.20L36.40-4.60Q28.70-4.60 28.70-2.30L28.70-2.30Q28.70-1 31.30 0.15Q33.90 1.30 37.30 1.30L37.30 1.30Q46.20 1.30 54.50-4.20Z';

export const LogoSymbol: React.FC<{ height?: number }> = ({ height = 36 }) => {
  const accent = '#D71920';
  // Aspect ratio of viewBox is 60:48 — width must be proportional
  const width = Math.round(height * (60 / 48));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 48"
      height={height}
      width={width}
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/*
        BI Mark — 60×48 grid, baseline y ≈ 40.

        B (red): signature glyph scaled 0.52, x 1–48, y 2–46.
          The thin outline stroke keeps hairlines visible at 16–28 px.
        I (red): sharp-edged slanted stem, x 48–57.5, y 8–40.
      */}

      <path
        transform="translate(1 38.8) scale(0.52)"
        d={SIGNATURE_B}
        fill={accent}
        stroke={accent}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />

      <path d="M53.5 8 L57.5 8 L52 40 L48 40 Z" fill={accent} />
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
      <LogoSymbol height={symbol} />
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
