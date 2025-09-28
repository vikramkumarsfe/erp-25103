import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Person,
  Folder,
  Slideshow,
  EditNote,
  ImportContacts,
  Checklist,
  TrendingDown,
  Notifications,
  Settings,
  Logout,
} from '@mui/icons-material';

// Sidebar Nav Items
const navItems = [
  { icon: Person, label: 'Profile', href: '/faculty' },
  { icon: Folder, label: 'Resource', href: '/faculty/resource' },
  { icon: Slideshow, label: 'Classes', href: '/faculty/classes' },
  { icon: EditNote, label: 'Marks Update', href: '/faculty/marks' },
  { icon: ImportContacts, label: 'Library', href: '/faculty/library' },
  { icon: Checklist, label: 'Attendance', href: '/faculty/attendance' },
  { icon: TrendingDown, label: 'Dropout Prediction', href: '/faculty/dropout' },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Styling for sidebar
  const styleBlock = `
    :root {
        --gradient-start: #3660E1;
        --gradient-end: #8737E0;
    }
    .gradient-bg {
        background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
    }
    .sidebar-item:hover,
    .sidebar-item.active {
        background-color: #2D3A4B;
    }
    .sidebar-item.active {
        border-left: 3px solid var(--gradient-start);
        color: white;
    }
  `;

  return (
    <div className="flex min-h-screen">
      <style>{styleBlock}</style>

      {/* Sidebar */}
      <aside className="w-64 bg-white text-black flex flex-col fixed h-full z-20">
        <div className="h-20 flex items-center px-6">
          <div className="flex items-center gap-3">
            <svg
              className="text-black h-8 w-8"
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
            </svg>
            <h1 className="text-xl font-bold text-black">University</h1>
          </div>
        </div>

        <nav className="flex-grow px-4 py-4 space-y-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                to={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-item transition-colors duration-200 ${
                  isActive ? 'active' : ''
                }`}
              >
                <IconComponent fontSize="small" className="mr-3" /> {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <header className="gradient-bg h-20 flex items-center justify-between px-8 text-white shadow-lg z-10">
          <div>
            <h2 className="text-2xl font-bold">
              {pathname.split('/').slice(-1)[0] || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center gap-4 relative">
            <button className="relative" title="Notifications">
              <Notifications />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </button>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2"
              >
                <img
                  alt="Profile Avatar"
                  className="size-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDORpaKJVoP5aXm1QgKiEPccR6q8k6nKdld7Ztf8ipWdhR3UloqCbXsSsGnR6fk7V_BzHvgiXqKhmO4Y0BopFkEhPajF5BGtK0H5pHEM7azY2Jgk92SMQDsmxl1g1mDWJSiTabmDT1EJOczXgwbqgg-0ERjKNIHpc086R614F99R0qNSOrxT6kDDvKaPtY8JSUi1FsfmXu9jNDO6KukAowD903HLLNLrcpLAoW3cQvnGLbso3BfkyV0sugkl29LZg0YpuzlULpAln8"
                />
                <span className="font-semibold">Prof. Sharma</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="#"
                  >
                    <Settings fontSize="small" className="mr-2" /> Settings
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <Logout fontSize="small" className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
