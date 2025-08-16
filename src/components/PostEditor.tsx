import React, { useState, useCallback, memo } from 'react';
import { useAuth } from '../context/AuthContext';
import { Post } from '../types';
import { TEXT, ALERTS } from '../constants';
import emotionSmileIcon from '../assets/icons/emotion-smile.svg';
import { EditorToolbar, EmojiPicker, EditorFooter } from './editor';

interface PostEditorProps {
  onPostCreated: (post: Post) => void;
  onUnauthenticatedAction: () => void;
  isAuthenticated: boolean;
}

const PostEditor: React.FC<PostEditorProps> = memo(({ 
  onPostCreated, 
  onUnauthenticatedAction, 
  isAuthenticated 
}) => {
  const [content, setContent] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { user } = useAuth();

  const handlePublish = () => {
    if (!isAuthenticated) {
      onUnauthenticatedAction();
      return;
    }

    if (!content.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      content: content.trim(),
      emoji: selectedEmoji || '😊',
      author: user!,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      shares: 0
    };

    onPostCreated(newPost);
    setContent('');
    setSelectedEmoji('');
  };

  const handleToolbarAction = (action: string) => {
    if (!isAuthenticated) {
      onUnauthenticatedAction();
      return;
    }
    alert(ALERTS.FUNCTION_NOT_IMPLEMENTED);
  };

  const handleInputInteraction = () => {
    if (!isAuthenticated) {
      onUnauthenticatedAction();
    }
  };

  const handleEmojiButtonClick = () => {
    if (!isAuthenticated) {
      onUnauthenticatedAction();
      return;
    }
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = useCallback((emoji: string) => {
    setSelectedEmoji(emoji);
    setShowEmojiPicker(false);
  }, []);

  const emojis = ['😊', '😢', '😎', '😂', '😍', '😭', '🤣', '😅', '😆', '😉'];

  return (
    <div className="bg-[#F8F8F8] rounded-lg shadow-sm p-2 mb-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <EditorToolbar onToolbarAction={handleToolbarAction} />

        <div className="mb-4">
          <div className="flex items-start space-x-3">
            <div className="flex flex-col items-center space-y-2 relative">
              <button 
                onClick={handleEmojiButtonClick}
                className="hover:scale-110 transition-transform w-8 h-8 flex items-center justify-center"
              >
                {selectedEmoji ? (
                  <span className="text-2xl">{selectedEmoji}</span>
                ) : (
                  <img src={emotionSmileIcon} alt="Emoji" className="w-6 h-6" />
                )}
              </button>
              {isAuthenticated && showEmojiPicker && (
                <EmojiPicker
                  emojis={emojis}
                  selectedEmoji={selectedEmoji}
                  onEmojiSelect={handleEmojiSelect}
                />
              )}
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={handleInputInteraction}
              placeholder={TEXT.POST_EDITOR.PLACEHOLDER}
              className="flex-1 min-h-[100px] p-1 rounded-lg resize-none focus:outline-none focus:border-transparent disabled:bg-white"
            />
          </div>
        </div>
            
        <EditorFooter
          onToolbarAction={handleToolbarAction}
          onPublish={handlePublish}
        />
      </div>
    </div>
  );
});

export default PostEditor;
