import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Menu } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Campus Connect
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/clubs"
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Clubs
                  </Link>
                  <Link
                    to="/events"
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Events
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </>
              )}
              {!user && (
                <Link
                  to="/login"
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
                >
                  Dashboard
                </Link>
                <Link
                  to="/clubs"
                  className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
                >
                  Clubs
                </Link>
                <Link
                  to="/events"
                  className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
                >
                  Events
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-white hover:bg-indigo-500 w-full text-left px-3 py-2 rounded-md flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </>
            )}
            {!user && (
              <Link
                to="/login"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}