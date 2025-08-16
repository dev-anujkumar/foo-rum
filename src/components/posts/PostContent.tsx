import React, { memo } from 'react';

interface PostContentProps {
  emoji: string;
  content: string;
  className?: string;
}

const PostContent: React.FC<PostContentProps> = memo(({ 
  emoji, 
  content, 
  className = '' 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-start space-x-2">
        <span className="text-2xl">{emoji}</span>
        <p className="text-gray-800 leading-relaxed ">
          {content}
        </p>
      </div>
    </div>
  );
});

export default PostContent;
