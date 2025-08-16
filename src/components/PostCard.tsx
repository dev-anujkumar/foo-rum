import React, { memo, useCallback } from 'react';
import { Post } from '../types';
import { ALERTS } from '../constants';
import { PostHeader, PostContent, PostActions } from './posts';

interface PostCardProps {
  post: Post;
  onUnauthenticatedAction?: () => void;
  isAuthenticated?: boolean;
}

const PostCard: React.FC<PostCardProps> = memo(({ 
  post, 
  onUnauthenticatedAction,
  isAuthenticated = false 
}) => {
  const handleInteraction = useCallback((action: string) => {
    if (!isAuthenticated && onUnauthenticatedAction) {
      onUnauthenticatedAction();
      return;
    }
    alert(ALERTS.FUNCTION_NOT_IMPLEMENTED);
  }, [isAuthenticated, onUnauthenticatedAction]);

  const handleLike = useCallback(() => handleInteraction('like'), [handleInteraction]);
  const handleComment = useCallback(() => handleInteraction('comment'), [handleInteraction]);
  const handleShare = useCallback(() => handleInteraction('share'), [handleInteraction]);

  return (
    <div className="bg-[#F8F8F8] rounded-lg shadow-sm p-2 mb-4">
      <div className="bg-white rounded-lg p-4">
        <PostHeader 
          author={post.author} 
          timestamp={post.timestamp} 
        />
        <PostContent 
          emoji={post.emoji} 
          content={post.content} 
        />
      </div>
      <PostActions
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
      />
    </div>
  );
});

export default PostCard;
