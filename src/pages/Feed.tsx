import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import PostEditor from '../components/PostEditor';
import PostCard from '../components/PostCard';
import { Modal } from '../components/common';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Post } from '../types';
import { useMockData } from '../hooks/useMockData';

const Feed: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { mockPosts } = useMockData();

  useEffect(() => {
    setPosts(mockPosts);
  }, [mockPosts]);

  const handlePostCreated = useCallback((newPost: Post) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  }, []);

  const handleUnauthenticatedAction = useCallback(() => {
    setAuthMode('signin');
    setShowAuthModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowAuthModal(false);
  }, []);

  const handleSwitchToSignUp = useCallback(() => {
    setAuthMode('signup');
  }, []);

  const handleSwitchToSignIn = useCallback(() => {
    setAuthMode('signin');
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto px-1 py-2">
        <PostEditor 
          onPostCreated={handlePostCreated} 
          onUnauthenticatedAction={handleUnauthenticatedAction}
          isAuthenticated={isAuthenticated}
        />

        <div className="space-y-4">
          {posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              onUnauthenticatedAction={handleUnauthenticatedAction}
              isAuthenticated={isAuthenticated}
            />
          ))}
        </div>
      </div>

      <Modal isOpen={showAuthModal} onClose={handleCloseModal}>
        {authMode === 'signin' ? (
          <SignIn 
            onClose={handleCloseModal} 
            onSwitchToSignUp={handleSwitchToSignUp}
          />
        ) : (
          <SignUp 
            onClose={handleCloseModal} 
            onSwitchToSignIn={handleSwitchToSignIn}
          />
        )}
      </Modal>
    </div>
  );
};

export default Feed;
