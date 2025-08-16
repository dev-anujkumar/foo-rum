export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: string;
  content: string;
  emoji: string;
  author: User;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
}

export interface Credential {
  email: string;
  password: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}
