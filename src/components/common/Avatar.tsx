import React, { memo } from 'react';
import AvatarSVG from './AvatarSVG';

interface AvatarProps {
  src?: string;
  alt: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = memo(({ 
  src, 
  alt, 
  name, 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9'
  };

  if (src) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} rounded-lg ${className}`}
      />
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <AvatarSVG 
        name={name || 'User'} 
        size={size}
        alt={alt}
      />
    </div>
  );
});

export default Avatar;
