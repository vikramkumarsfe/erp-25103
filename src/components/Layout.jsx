import React from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GradingIcon from "@mui/icons-material/Grading";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Link } from 'react-router-dom';

// Map string keys to imported MUI components
export const iconMap = {
    school: SchoolIcon,
    menu_book: MenuBookIcon,
    calendar_month: CalendarMonthIcon,
    grading: GradingIcon,
    history_edu: HistoryEduIcon,
    local_library: LocalLibraryIcon,
};

// Data for the Header Navigation
const mainNavLinks = [
    { label: 'Home', link: '#' },
    { label: 'About Us', link: '#' },
    { label: 'Departments', link: '#' },
    { label: 'Student Life', link: '#' },
    { label: 'Research', link: '#' },
    { label: 'Placements', link: '#' },
];

const academicsMegaMenuData = [
    {
        title: 'Programs & Curriculum',
        links: [
            { label: 'Programs Offered (UG, PG, PhD)', icon: 'school', link: '#' },
            { label: 'Curriculum & Syllabus', icon: 'menu_book', link: '#' },
            { label: 'Academic Calendar', icon: 'calendar_month', link: '#' },
        ]
    },
    {
        title: 'Exams & Resources',
        links: [
            { label: 'Examination Section (Timetable, Results)', icon: 'grading', link: '#' },
            { label: 'Question Papers Archive', icon: 'history_edu', link: '#' },
            { label: 'Resources (Library, E-Learning, Labs)', icon: 'local_library', link: '#' },
        ]
    },
];

// Data for the Footer Quick Links
const quickLinksData = [
    { label: 'Admissions', link: '#' },
    { label: 'Departments', link: '#' },
    { label: 'Placements', link: '#' },
    { label: 'Contact Us', link: '#' },
    { label: 'Sitemap', link: '#' },
];


const Layout = ({ children }) => {
    return (
        <>
            {/* Custom CSS for Tailwind-dependent styles like .nav-link, .glassmorphism, etc. */}
            <style>{`
                :root {
                    --primary-purple: #8B5CF6;
                    --primary-blue: #3B82F6;
                }
                body {
                    font-family: 'Poppins', sans-serif;
                }
                .gradient-bar {
                    background: linear-gradient(90deg, var(--primary-blue), var(--primary-purple));
                }
                .hero-gradient-overlay {
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
                }
                .footer-gradient {
                    background: linear-gradient(180deg, #111827, #1F2937);
                }
                .glassmorphism {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .nav-link {
                    position: relative;
                    padding: 1rem 0;
                    color: #374151;
                    font-weight: 600;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: var(--primary-purple);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: var(--primary-purple);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .group:hover .group-hover\\:block {
                    display: block;
                }
                .mega-menu-link {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    transition: background-color 0.3s ease, color 0.3s ease;
                    color: #E5E7EB;
                }
                .mega-menu-link:hover {
                    background-color: rgba(139, 92, 246, 0.2);
                    color: white;
                }
                .mega-menu-link .material-symbols-outlined {
                    color: var(--primary-purple);
                    margin-right: 0.75rem;
                }
                .news-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .news-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
                }
                .neumorphism-btn {
                    background: #e0e5ec;
                    box-shadow: 6px 6px 12px #c1c9d2, -6px -6px 12px #ffffff;
                    transition: all 0.2s ease-in-out;
                }
                .neumorphism-btn:hover {
                    box-shadow: inset 4px 4px 8px #c1c9d2, inset -4px -4px 8px #ffffff;
                }
            `}</style>
            
            <div className="w-full bg-gray-100 text-gray-800 antialiased">
                {/* ======================= HEADER / NAVIGATION ======================= */}
                <div className="gradient-bar text-white text-center py-2 px-4 text-sm font-semibold">
                    <p>Admissions Open for Academic Year 2024-25. Apply Now!</p>
                </div>
                
                <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-4">
                            <div className="flex items-center space-x-4">
                                <img alt="College Logo" className="h-16 w-16" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3e_1OExAglzg_8SJGnCYqWu04C4tp4L8TS_EAJCeKxaRzTPLngBfHr4D3FJT5VOvKcYUL5ckGwXA0WMJe6gJm-voKTJogq6N3OeQ3tzDRnJjA2lFUL_YbJPbN8snAn5VbUnvQiAyCspGVOcNvfG0vMfpjPhYnTm229o_Dob6xPaAg6q6QlFuzrt5su-iAvo5xTS7w0AsZvsMXijG7XgdJtvMmYcmg9d5g7qRydTFldWyRtuS-wO_IgJf_Q_DthHrKeZX7Zr-Z6JM" />
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900 leading-tight">अभियांत्रिकी महाविद्यालय / Engineering College</h1>
                                    <p className="text-sm font-medium text-gray-600">A Premier Institute of Technology</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-4 px-3 py-1.5 rounded-full shadow-sm border border-green-200">A+ Grade Engineering College</span>
                            </div>
                        </div>
                    </div>
                    <nav className="border-t border-gray-200">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                            <ul className="flex items-center space-x-8">
                            
                                {/* Dynamically generated main links */}
                                {mainNavLinks.map((item, index) => (
                                    <li key={`nav-${index}`}>
                                        <a className="nav-link" href={item.link}>{item.label}</a>
                                    </li>
                                ))}
                                
                                {/* Academics Link with Mega Menu */}
                                <li className="group relative">
                                    <a className="nav-link flex items-center" href="#">Academics <ExpandMoreIcon className="text-xl ml-1" /></a>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] hidden group-hover:block pt-4">
                                        <div className="glassmorphism rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-x-10" style={{ background: 'rgba(20, 20, 40, 0.8)', border: '1px solid rgba(139, 92, 246, 0.4)' }}>
                                            
                                            {/* Dynamically generated Mega Menu Columns */}
                                            {academicsMegaMenuData.map((column, colIndex) => (
                                                <div key={`mega-col-${colIndex}`}>
                                                    <h3 className="text-lg font-bold text-white mb-4 border-b-2 border-purple-400 pb-2">{column.title}</h3>
                                                    <div className="space-y-2">
                                                        {column.links.map((link, linkIndex) => {
                                                            const IconComponent = iconMap[link.icon]; // Find correct icon
                                                            return (
                                                                <a key={`mega-link-${linkIndex}`} className="mega-menu-link" href={link.link}>
                                                                    {IconComponent && <IconComponent className="text-purple-400 mr-3" fontSize="small" />}
                                                                    {link.label}
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                
                                {/* Login Button */}
                                <li>
                                    <Link
                                        to="/login"
                                        className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                                    >
                                        Login
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>

                {/* ======================= MAIN CONTENT (CHILDREN) ======================= */}
                {children}

                {/* ======================= FOOTER ======================= */}
                <footer className="footer-gradient text-gray-300">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">About</h3>
                                <p className="text-sm text-gray-400">A premier institution committed to fostering academic excellence, cutting-edge research, and holistic student development in engineering.</p>
                                <div className="flex space-x-4 mt-6">
                                    <a className="text-gray-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg></a>
                                    <a className="text-gray-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
                                    <a className="text-gray-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.29 20.29H3.71A1.71 1.71 0 012 18.58V5.42A1.71 1.71 0 013.71 3.71h16.58A1.71 1.71 0 0122 5.42v13.16a1.71 1.71 0 01-1.71 1.71zM8.57 16.86h2.86v-5.72H8.57v5.72zM10 9.71a1.43 1.43 0 100-2.86 1.43 1.43 0 000 2.86zm7.14 7.15h2.86v-4.1c0-2.22-1.19-3.21-2.93-3.21a2.53 2.53 0 00-2.39 1.34h-.07v-1.15H11.7v7.12h2.86v-3.57c0-.95.18-1.86 1.34-1.86s1.17.91 1.17 1.92v3.51z"></path></svg></a>
                                </div>
                            </div>
                            
                            {/* Quick Links using map() */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                                <ul className="space-y-3 text-sm">
                                    {quickLinksData.map((linkItem, index) => (
                                        <li key={`footer-link-${index}`}>
                                            <a className="text-gray-400 hover:text-white transition-colors flex items-center" href={linkItem.link}>
                                                <ChevronRightIcon className="text-gray-400 mr-2" style={{ fontSize: '1rem' }} /> {/* Replaced the old style and class for consistency */}
                                                {linkItem.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Enquiry Form</h3>
                                <form className="space-y-4">
                                    <input className="w-full bg-gray-800/50 border-gray-600 rounded-md text-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500 transition-colors" placeholder="Your Name" type="text" />
                                    <input className="w-full bg-gray-800/50 border-gray-600 rounded-md text-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500 transition-colors" placeholder="Your Email" type="email" />
                                    <textarea className="w-full bg-gray-800/50 border-gray-600 rounded-md text-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500 transition-colors" placeholder="Your Message" rows="3"></textarea>
                                    <button className="w-full px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                            <p>© 2024 Modern Engineering College. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout;