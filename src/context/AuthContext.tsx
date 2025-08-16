import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType, Credential } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}



const DEFAULT_CREDENTIALS: Credential[] = [
  { email: 'demo@example.com', password: 'password123', name: 'Demo User' },
  { email: 'test@user.com', password: 'testpass', name: 'Test User' }
];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState<Credential[]>(DEFAULT_CREDENTIALS);

  useEffect(() => {
    const savedCredentials = localStorage.getItem('credentials');
    if (savedCredentials) {
      const credentialsData = JSON.parse(savedCredentials);
      setCredentials([...DEFAULT_CREDENTIALS, ...credentialsData]);
    }

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const existingUser = credentials.find(
      cred => cred.email === email && cred.password === password
    );
    
    if (existingUser) {
      const mockUser: User = {
        id: '1',
        name: existingUser.name,
        email: existingUser.email,
        avatar: ''
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (name && email && password) {
      const emailExists = credentials.some(cred => cred.email === email);
      if (emailExists) {
        return false;
      }

      const newCredential: Credential = {
        email,
        password,
        name
      };

      const updatedCredentials = [...credentials, newCredential];
      setCredentials(updatedCredentials);

      const userCredentials = updatedCredentials.filter(cred => 
        !DEFAULT_CREDENTIALS.some(defaultCred => defaultCred.email === cred.email)
      );
      localStorage.setItem('credentials', JSON.stringify(userCredentials));

      const mockUser: User = {
        id: '1',
        name: name,
        email: email,
        avatar: ''
      };

      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
