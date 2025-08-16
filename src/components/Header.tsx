import React, { memo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import signInIcon from '../assets/icons/signInIcon.svg';
import mouseIcon from '../assets/icons/mouse.svg';
import { TEXT, ROUTES } from '../constants';
import { Avatar, Tooltip } from './common';

const Header: React.FC = memo(() => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleBackToHome = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  const isAuthPage = location.pathname === ROUTES.SIGN_IN || location.pathname === ROUTES.SIGN_UP;

  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="px-4 py-4 flex justify-between items-center">
        <Link to={ROUTES.HOME} className="flex items-center space-x-2">
          <img src={mouseIcon} alt="mouse-icon" className="w-8 h-8" />
          <span className="text-xl font-bold text-black">{TEXT.HEADER.LOGO_TEXT}</span>
        </Link>

        <div className="flex items-center space-x-4">
          {isAuthPage ? (
            <button
              onClick={handleBackToHome}
              className="text-black-600 font-bold hover:text-gray-800 transition-colors"
            >
              {TEXT.HEADER.BACK_TO_HOME}
            </button>
          ) : (
            <>
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Avatar 
                      src={user?.avatar} 
                      alt={user?.name || 'User'} 
                      name={user?.name}
                      size="md"
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-700">{user?.name}</span>
                  </div>
                  <Tooltip content={TEXT.HEADER.LOGOUT_TEXT} position="bottom">
                    <button
                      onClick={handleLogout}
                      className="text-black-600 font-bold hover:text-gray-800 transition-colors p-1 rounded"
                    >
                      <img src={signInIcon} alt="Logout" className="w-4 h-4" />
                    </button>
                  </Tooltip>
                </div>
              ) : (
                <Link 
                  to={ROUTES.SIGN_IN} 
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <span>{TEXT.HEADER.LOGIN_TEXT}</span>
                  <img src={signInIcon} alt="Login" className="w-4 h-4" />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
