import React, { memo } from 'react';
import { TEXT } from '../../constants';

interface TimeAgoProps {
  date: Date;
  className?: string;
}

const TimeAgo: React.FC<TimeAgoProps> = memo(({ date, className = '' }) => {
  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return TEXT.POST_CARD.TIME_AGO.JUST_NOW;
    if (diffInMinutes < 60) return `${diffInMinutes} ${TEXT.POST_CARD.TIME_AGO.MINUTES_AGO}`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} ${TEXT.POST_CARD.TIME_AGO.HOURS_AGO}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} ${TEXT.POST_CARD.TIME_AGO.DAYS_AGO}`;
  };

  return (
    <span className={`text-xs text-gray-500 ${className}`}>
      {formatTimeAgo(date)}
    </span>
  );
});

export default TimeAgo;
