import React, { memo } from 'react';

interface InteractionButtonProps {
  icon: string;
  count: number;
  onClick: () => void;
  hoverColor?: string;
  alt: string;
  className?: string;
}

const InteractionButton: React.FC<InteractionButtonProps> = memo(({
  icon,
  count,
  onClick,
  hoverColor = 'hover:text-gray-700',
  alt,
  className = ''
}) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center space-x-2 text-gray-500 ${hoverColor} transition-colors ${className}`}
    >
      <img src={icon} alt={alt} className="w-4.5 h-4.5" />
      <span className="text-sm">{count}</span>
    </button>
  );
});

export default InteractionButton;
