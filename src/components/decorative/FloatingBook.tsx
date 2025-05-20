
import React from 'react';

interface FloatingBookProps {
  className?: string;
  delay?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const FloatingBook: React.FC<FloatingBookProps> = ({ 
  className = "", 
  delay = "0s", 
  size = "sm", // Changed default to sm
  color = "#1A5DAD"
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20"
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${className} opacity-70`} // Added opacity
      style={{ animationDelay: delay }}
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-subtle-float" // Changed to subtle float
      >
        <path 
          d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="white"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
};

export default FloatingBook;
