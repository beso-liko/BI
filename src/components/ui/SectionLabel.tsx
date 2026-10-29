import React from 'react';

interface SectionLabelProps {
  number?: string;
  label: string;
  light?: boolean;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  light = true,
  className = '',
}) => {
  const textColor = light ? 'text-bi-muted-lt' : 'text-bi-muted';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {number && (
        <span className={`font-body text-[11px] font-medium tracking-widest ${textColor}`}>
          {number}
        </span>
      )}
      <span className={`block w-8 h-px bg-bi-red flex-shrink-0`} aria-hidden="true" />
      <span className={`font-body text-[11px] font-medium tracking-[0.2em] uppercase ${textColor}`}>
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;
