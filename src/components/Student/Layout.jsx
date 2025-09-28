import React, { useState } from 'react';
import {
  Person,
  Checklist,
  Storage,
  Class,
  Payment,
  LocalLibrary,
  Dashboard,
  Menu,
  Settings,
  Logout,
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ icon: Icon, title, href = '#', isActive = false, onClick }) => {
  const baseClasses =
    'flex items-center gap-4 px-4 py-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all';
  const activeClasses = 'active-link';

  return (
    <a
      className={isActive ? `${baseClasses} ${activeClasses}` : baseClasses}
      href={href}
      onClick={onClick}
    >
      <Icon className="material-symbols-outlined" />
      <span>{title}</span>
    </a>
  );
};

const navLinksData = [
  { icon: Dashboard, title: 'Dashboard', href: '/student' },
  { icon: Checklist, title: 'Attendance', href: '/student/attendance' },
  { icon: Storage, title: 'Resources', href: '/student/resource' },
  { icon: Class, title: 'Classes', href: '/student/classes' },
  { icon: Payment, title: 'Payment', href: '/student/payment' },
  { icon: LocalLibrary, title: 'Library', href: '/student/library' },
  { icon: Person, title: 'Profile', href: '/student/profile' },
];

/**
 * Sidebar Component: Houses the logo and navigation links.
 */
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  // Dynamic classes for mobile sidebar visibility and transition
  const sidebarClasses = `
    fixed inset-y-0 left-0 w-64 sidebar-bg p-6 flex-col flex-shrink-0 border-r border-gray-200 
    transform transition-transform duration-300 ease-in-out z-50 lg:static 
    ${isSidebarOpen ? 'translate-x-0 flex' : '-translate-x-full lg:translate-x-0 hidden lg:flex'} 
  `;

  // Overlay for mobile view
  const overlayClasses = `
    fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300
    ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `;

  return (
    <>
      {/* Mobile Overlay to close sidebar when clicking outside */}
      <div className={overlayClasses} onClick={toggleSidebar} />

      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="flex items-center gap-3 mb-12">
          <img
            alt="College Logo"
            className="h-10 w-10 rounded-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWugqg7PuPoqixgpfE3cb5PzcBR3K2iqsktthQf1P55ry2pkWl9u8xL3jC6JJD57ClE5XuS74nIRaeWPq9ePipAHh3pWao9yHk68TwUJpZLRcLSfMOhh5Dg5-CU2AZ-z7X5Gn-CwZHLyDEynomjiYAGZD4042qPRyMs12kv8t6FgdRFVWsYcqewk7L2-SWSOxlmHGZelv1E3XFEctj_OZs1Si5NHC9ghPTd6wKnXp5gqa41WoZAFlM3hgmrSDBHSGd3CKvVnCmMYM"
          />
          <span className="text-xl font-bold text-gray-800">
            Student Dashboard
          </span>
        </div>

        <nav className="space-y-3">
          {navLinksData.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <NavLink
                key={index}
                {...link}
                isActive={isActive}
                onClick={toggleSidebar} // Close sidebar on navigation click
              />
            );
          })}
        </nav>
      </aside>
    </>
  );
};

/**
 * Header Component: Uses useState and onClick to toggle the visibility of the profile dropdown.
 */
const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate()
  // State to manage the visibility of the profile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle Handler (Click to open, click again to close)
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Tailwind classes for visibility control
  const dropdownClasses = `
    absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100
    transition-opacity duration-300
    ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
  `;

    const handleLogout = () => {
      localStorage.removeItem("authToken");
      navigate("/login");
    };

  return (
    <header className="header-bg sticky top-0 z-40">
      <div className="p-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Menu button to toggle the sidebar on small screens */}
          <button className="lg:hidden text-gray-600" onClick={toggleSidebar}>
            <Menu fontSize="large" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 hidden sm:block">
            Jessica Pearson
          </h1>
        </div>
        
        {/* The main profile container */}
        <div className="relative">
          {/* Attach onClick to the button */}
          <button 
            className="flex items-center gap-3"
            onClick={toggleDropdown} // Toggle the dropdown state on click
          >
            <img
              alt="Student Profile Photo"
              className="h-10 w-10 rounded-full object-cover border-2 border-transparent hover:border-[var(--gradient-start)] transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7029qKIWns62aaxTKcooKjrXzHbvHQBVn57-VLbj9n_gXsOKpBOPgKDeCkQQgv0tGIZwKSYvvaRc8EuzDUzgCCWBezt1UaEvdSeWObybP1qy5uMMh2-BjHxWPUay995RkVOmxuUQwk6FGOvpycpPCxzAtb9Uev0cF5U2CC-JFJX0SUeAaBeqMEjqG8A2PrYLQWXmweX-dcKGE8UCiSVT06kluPuDhjdb0UsCNMGGlHNVj6Q0A82wZxpyMpq1xmRO_QJrFFbbo4kY"
            />
          </button>
          
          {/* Dropdown container uses the state-controlled classes */}
          <div className={dropdownClasses}>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              href="#"
            >
              <Settings
                style={{ fontSize: 20, marginRight: 8, verticalAlign: 'middle' }}
              />
              Settings
            </a>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <Logout
                style={{ fontSize: 20, marginRight: 8, verticalAlign: 'middle' }}
              />
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="gradient-bar h-1" />
    </header>
  );
};

/**
 * Footer Component: Contains copyright and site links.
 */
const Footer = () => (
  <footer className="footer-bg text-gray-500 mt-auto">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">
          © 2024 University Portal. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a className="hover:text-gray-900 transition-colors" href="#">
            About College
          </a>
          <a className="hover:text-gray-900 transition-colors" href="#">
            Quick Links
          </a>
          <a className="hover:text-gray-900 transition-colors" href="#">
            Contact
          </a>
          <a className="hover:text-gray-900 transition-colors" href="#">
            Support
          </a>
        </div>
      </div>
    </div>
  </footer>
);

/**
 * Layout Component: The main wrapper for all standard content pages.
 */
const Layout = ({ children }) => {
  // State to manage the mobile sidebar's open/closed state.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Static CSS including custom properties, gradients, and animations
  const customStyles = `
    :root {
      --gradient-start: #3660E1;
      --gradient-end: #8737E0;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #FFFFFF;
    }
    .sidebar-bg { background-color: #FFFFFF; }
    .header-bg { background-color: #FFFFFF; }
    .main-bg { background-color: #F5F6FA; }
    .footer-bg {
      background-color: #FFFFFF;
      border-top: 1px solid #F5F6FA;
    }
    .gradient-bar {
      background-image: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
    }
    .active-link {
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      color: white !important;
      font-weight: 600;
    }
    .active-link .material-symbols-outlined {
      color: white;
    }
    .btn-gradient {
      background-image: linear-gradient(to right, var(--gradient-start) 0%, var(--gradient-end) 100%);
      color: white;
      border-radius: 9999px;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .btn-gradient:hover {
      box-shadow: 0 10px 20px rgba(138, 55, 224, 0.25);
      transform: translateY(-2px);
    }
    .profile-card {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease-in-out;
      animation: fadeInSlideUp 0.7s ease-out forwards;
    }
    .info-card {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      animation: fadeInSlideUp 0.5s ease-out forwards;
    }
    @keyframes fadeInSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .ripple-effect {
      position: relative;
      overflow: hidden;
    }
    .ripple-effect:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .3s, opacity 1s;
    }
    .ripple-effect:active:after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="flex min-h-screen text-gray-800">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-6 lg:p-10 main-bg">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;