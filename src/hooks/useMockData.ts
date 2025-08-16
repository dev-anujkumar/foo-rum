import { useMemo } from 'react';
import { Post, User } from '../types';
import { TEXT } from '../constants';

export const useMockData = () => {
  const mockUsers: User[] = useMemo(() => [
    {
      id: '1',
      name: TEXT.MOCK_DATA.USERS.THERESA.NAME,
      email: TEXT.MOCK_DATA.USERS.THERESA.EMAIL,
      avatar: undefined // Will use local avatar generation
    },
    {
      id: '2',
      name: TEXT.MOCK_DATA.USERS.JOHN.NAME,
      email: TEXT.MOCK_DATA.USERS.JOHN.EMAIL,
      avatar: undefined // Will use local avatar generation
    },
    {
      id: '3',
      name: TEXT.MOCK_DATA.USERS.JANE.NAME,
      email: TEXT.MOCK_DATA.USERS.JANE.EMAIL,
      avatar: undefined // Will use local avatar generation
    }
  ], []);

  const mockPosts: Post[] = useMemo(() => [
    {
      id: '1',
      content: TEXT.MOCK_DATA.POSTS.POST_1,
      emoji: '😢',
      author: mockUsers[0],
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      likes: 12,
      comments: 3,
      shares: 1
    },
    {
      id: '2',
      content: TEXT.MOCK_DATA.POSTS.POST_2,
      emoji: '✌️',
      author: mockUsers[1],
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      likes: 8,
      comments: 2,
      shares: 0
    },
    {
      id: '3',
      content: TEXT.MOCK_DATA.POSTS.POST_3,
      emoji: '💀',
      author: mockUsers[2],
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      likes: 25,
      comments: 7,
      shares: 3
    }
  ], [mockUsers]);

  return { mockUsers, mockPosts };
};
