import React from 'react';

interface RedLineProps {
  width?: string;
  className?: string;
  vertical?: boolean;
}

const RedLine: React.FC<RedLineProps> = ({
  width = 'w-16',
  className = '',
  vertical = false,
}) => {
  if (vertical) {
    return (
      <span
        className={`block w-px bg-bi-red ${className}`}
        aria-hidden="true"
      />
    );
  }
  return (
    <span
      className={`block h-px bg-bi-red ${width} ${className}`}
      aria-hidden="true"
    />
  );
};

export default RedLine;
