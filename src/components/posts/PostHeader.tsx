import React, { memo } from 'react';
import Avatar from '../common/Avatar';
import TimeAgo from '../common/TimeAgo';
import { User } from '../../types';

interface PostHeaderProps {
  author: User;
  timestamp: Date;
  className?: string;
}

const PostHeader: React.FC<PostHeaderProps> = memo(({ 
  author, 
  timestamp, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center space-x-3 mb-3 ${className}`}>
      <Avatar 
        src={author.avatar} 
        alt={author.name} 
        name={author.name}
        size="lg"
      />
      <div className="flex flex-col">
        <span className="font-600 text-sm">{author.name}</span>
        <TimeAgo date={timestamp} />
      </div>
    </div>
  );
});

export default PostHeader;
