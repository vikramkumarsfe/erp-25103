import React, { useState } from 'react';
import {
  Cottage,
  Person,
  MapsHomeWork,
  Bed,
  Checklist,
  Notifications,
  Menu,
  Settings,
  Logout,
  Help,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// --- Static Data for Navigation with proper routes ---
const navItems = [
  { name: 'Dashboard', icon: Person, href: '/hostel' },
  { name: 'Profile', icon: Person, href: '/hostel/profile' },
  { name: 'Total Rooms', icon: MapsHomeWork, href: '/hostel/total-rooms' },
  { name: 'Room Availability', icon: Bed, href: '/hostel/available-rooms' },
  { name: 'Hostel Requests', icon: Checklist, href: '/hostel/room-request' },
  { name: 'Alloted Rooms', icon: Person, href: '/hostel/alloted-rooms' },
  { name: 'Notifications', icon: Notifications, href: '/hostel/notification' },
];

// --- NavItem Component ---
const NavItem = ({ name, icon: Icon, href, isActive }) => {
  const baseClasses =
    'flex items-center gap-3 px-4 py-3 rounded-lg font-medium group transition-colors duration-200';
  const activeClasses =
    'bg-gradient-to-r from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/10 text-transparent bg-clip-text gradient-text font-bold';
  const inactiveClasses = 'hover:bg-gray-100 text-gray-500';
  const iconClasses = isActive
    ? 'text-[var(--gradient-start)]'
    : 'text-gray-500 group-hover:text-[var(--gradient-start)]';

  return (
    <Link
      to={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <Icon className={iconClasses} />
      {name}
    </Link>
  );
};

// --- Layout Component ---
const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // clear token
    navigate('/login'); // redirect to login
  };

  return (
    <div className="font-sans bg-[#F5F6FA] text-gray-800 min-h-screen">
      <style>{`
        :root {
            --gradient-start: #3660E1;
            --gradient-end: #8737E0;
        }
        .gradient-text {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
        .shadow-subtle {
            box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
        }
        .hover\\:shadow-gradient:hover {
            box-shadow: 0 10px 15px -3px rgba(54, 96, 225, 0.2), 0 4px 6px -2px rgba(135, 55, 224, 0.1);
        }
        .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 20;
            transition: opacity 0.3s;
        }
      `}</style>

      <div className="flex min-h-screen">
        {isSidebarOpen && (
          <div
            className="sidebar-overlay lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-white p-6 flex-col border-r border-[#F5F6FA] transition-transform duration-300 lg:static lg:flex ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-lg gradient-bg text-white">
              <Cottage />
            </div>
            <h1 className="text-xl font-bold">Hostel ERP</h1>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                {...item}
                isActive={location.pathname === item.href}
              />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between p-6 border-b border-[#F5F6FA] bg-white z-10">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-1 rounded-lg hover:bg-gray-100"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-bg text-white lg:hidden">
                  <Cottage />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 hidden sm:block">
                  Welcome, Mr. Sharma
                </h2>
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none"
              >
                <img
                  alt="Warden Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-[var(--gradient-start)] transition-all"
                  src="https://lh3.googleusercontent.com/a/ACg8ocKwB-kE3nSMCYdC4X3BwIjp-t2y7r2Gk_Ccr4T78t4Qk9g=s96-c"
                />
              </button>
              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-20 border border-gray-100 transition-all duration-300 ${
                  isDropdownOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible'
                }`}
              >
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <Settings
                    style={{ fontSize: 20, marginRight: 8, verticalAlign: 'middle' }}
                  />
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Logout
                    style={{ fontSize: 20, marginRight: 8, verticalAlign: 'middle' }}
                  />
                  Logout
                </button>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                  <Help
                    style={{ fontSize: 20, marginRight: 8, verticalAlign: 'middle' }}
                  />
                  Help
                </a>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-6 md:p-8">
            <div className="max-w-8xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
