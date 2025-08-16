import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import signInIcon from '../assets/icons/signInIcon.svg';
import { TEXT, ROUTES } from '../constants';

interface SignInProps {
  onClose?: () => void;
  onSwitchToSignUp?: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        if (onClose) {
          onClose();
        } else {
          navigate(ROUTES.HOME);
        }
      } else {
        setError(TEXT.AUTH.ERRORS.INVALID_CREDENTIALS);
      }
    } catch (err) {
      setError(TEXT.AUTH.ERRORS.GENERIC_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const isModal = !!onClose;

  return (
    <div className={`${isModal ? '' : 'min-h-[calc(100vh-4rem)] flex items-center justify-center px-4'}`}>
      <div className={`${isModal ? '' : 'max-w-md w-full'}`}>
        <div className="bg-[#F8F8F8] rounded-lg p-6">
          <div className="bg-[#FFFFFF] rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-10 h-10 bg-[#F8F8F8] rounded-lg flex items-center justify-center mx-auto mb-3">
                <img src={signInIcon} alt="Sign In" className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">{TEXT.AUTH.SIGN_IN.TITLE}</h1>
              <p className="text-gray-600 mt-1 text-sm">{TEXT.AUTH.SIGN_IN.SUBTITLE}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {TEXT.AUTH.SIGN_IN.EMAIL_LABEL}
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={TEXT.AUTH.SIGN_IN.EMAIL_PLACEHOLDER}
                  className="w-full px-3 py-2 bg-[#F4F4F4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {TEXT.AUTH.SIGN_IN.PASSWORD_LABEL}
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={TEXT.AUTH.SIGN_IN.PASSWORD_PLACEHOLDER}
                  className="w-full px-3 py-2 bg-[#F4F4F4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                {isLoading ? TEXT.AUTH.SIGN_IN.LOADING_TEXT : TEXT.AUTH.SIGN_IN.BUTTON_TEXT}
              </button>
            </form>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              {TEXT.AUTH.SIGN_IN.SWITCH_TEXT}{' '}
              {isModal ? (
                <button
                  onClick={onSwitchToSignUp}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {TEXT.AUTH.SIGN_IN.SWITCH_LINK}
                </button>
              ) : (
                <Link to={ROUTES.SIGN_UP} className="text-blue-600 hover:text-blue-700 font-medium">
                  {TEXT.AUTH.SIGN_IN.SWITCH_LINK}
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
