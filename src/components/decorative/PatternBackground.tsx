
import React from 'react';

interface PatternBackgroundProps {
  color?: string;
  opacity?: string;
  patternType?: 'books' | 'pencils' | 'chalkboard' | 'mixed';
  className?: string;
}

const PatternBackground: React.FC<PatternBackgroundProps> = ({ 
  color = "#1A5DAD", 
  opacity = "0.05", 
  patternType = "mixed",
  className = "" 
}) => {
  // Pattern depends on the type requested
  let patternSvg;
  
  switch(patternType) {
    case 'books':
      patternSvg = `
        <pattern id="bookPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 20h30v40h-30z" />
          <path d="M60 30h30v40h-30z" />
          <path d="M35 50h30v30h-30z" />
        </pattern>
      `;
      break;
    case 'pencils':
      patternSvg = `
        <pattern id="pencilPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M20 10l5 5-15 15-5-5z" />
          <path d="M50 40l5 5-15 15-5-5z" />
          <path d="M60 10l5 5-15 15-5-5z" />
        </pattern>
      `;
      break;
    case 'chalkboard':
      patternSvg = `
        <pattern id="chalkPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="80" height="60" rx="2" />
          <path d="M20 30h60M20 50h60" stroke-width="2" stroke-linecap="round" />
        </pattern>
      `;
      break;
    case 'mixed':
    default:
      patternSvg = `
        <pattern id="mixedPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M20 20h30v40h-30z" />
          <path d="M120 30l5 5-15 15-5-5z" />
          <path d="M80 100h60v40h-60z" rx="2" />
          <path d="M30 130l8 8-20 20-8-8z" />
          <circle cx="150" cy="160" r="15" />
          <rect x="150" y="30" width="30" height="40" rx="2" />
        </pattern>
      `;
      break;
  }

  const patternId = `${patternType}Pattern`;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {patternSvg}
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity={opacity} />
      </svg>
    </div>
  );
};

export default PatternBackground;
