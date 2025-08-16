import React, { memo } from 'react';
import { getAvatarColor, getInitials } from '../../utils/avatarGenerator';

interface AvatarSVGProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  alt?: string;
}

const AvatarSVG: React.FC<AvatarSVGProps> = memo(({ 
  name, 
  size = 'md',
  className = '',
  alt 
}) => {
  const sizeInPixels = {
    sm: 24,
    md: 32,
    lg: 36
  };

  const pixelSize = sizeInPixels[size];
  const initials = getInitials(name);
  const color = getAvatarColor(name);
  const fontSize = Math.max(pixelSize * 0.4, 12);
  const borderRadius = pixelSize * 0.2;

  return (
    <svg 
      width={pixelSize} 
      height={pixelSize} 
      viewBox={`0 0 ${pixelSize} ${pixelSize}`} 
      className={`rounded-lg ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt || `Avatar for ${name}`}
    >
      <rect 
        width={pixelSize} 
        height={pixelSize} 
        fill={color} 
        rx={borderRadius}
      />
      <text 
        x="50%" 
        y="50%" 
        fontFamily="Arial, sans-serif" 
        fontSize={fontSize} 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
      >
        {initials}
      </text>
    </svg>
  );
});

export default AvatarSVG;
