
import React from 'react';

interface SchoolMascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const SchoolMascot: React.FC<SchoolMascotProps> = ({ 
  className = "", 
  size = "md",
  animate = true 
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-32 h-32"
  };

  const animationClass = animate ? "animate-bounce" : "";

  return (
    <div className={`${sizeClasses[size]} ${animationClass} ${className}`}>
      {/* Simple owl mascot SVG */}
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FEF7CD" />
        <circle cx="35" cy="40" r="10" fill="white" />
        <circle cx="65" cy="40" r="10" fill="white" />
        <circle cx="35" cy="40" r="5" fill="#343A40" />
        <circle cx="65" cy="40" r="5" fill="#343A40" />
        <path d="M50 55 Q 40 65 50 75 Q 60 65 50 55" fill="#FF6B00" />
        <path d="M20 25 L 35 30 L 30 15 Z" fill="#FEF7CD" />
        <path d="M80 25 L 65 30 L 70 15 Z" fill="#FEF7CD" />
        <ellipse cx="50" cy="85" rx="15" ry="5" fill="#1A5DAD" opacity="0.2" />
      </svg>
    </div>
  );
};

export default SchoolMascot;
