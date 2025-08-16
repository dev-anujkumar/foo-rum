import React, { memo } from 'react';
import InteractionButton from '../common/InteractionButton';
import likeIcon from '../../assets/icons/heart.svg';
import commentIcon from '../../assets/icons/comment-text.svg';
import shareIcon from '../../assets/icons/send-2.svg';

interface PostActionsProps {
  likes: number;
  comments: number;
  shares: number;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  className?: string;
}

const PostActions: React.FC<PostActionsProps> = memo(({
  likes,
  comments,
  shares,
  onLike,
  onComment,
  onShare,
  className = ''
}) => {
  return (
    <div className={`flex items-center space-x-4 pt-3 border-t border-gray-100 ${className}`}>
      <InteractionButton
        icon={likeIcon}
        count={likes}
        onClick={onLike}
        hoverColor="hover:text-red-500"
        alt="Like"
      />
      
      <InteractionButton
        icon={commentIcon}
        count={comments}
        onClick={onComment}
        hoverColor="hover:text-blue-500"
        alt="Comment"
      />
      
      <InteractionButton
        icon={shareIcon}
        count={shares}
        onClick={onShare}
        hoverColor="hover:text-green-500"
        alt="Share"
      />
    </div>
  );
});

export default PostActions;
