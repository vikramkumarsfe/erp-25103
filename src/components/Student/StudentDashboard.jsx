import React from 'react';
import Layout from './Layout'; // Assuming a Layout component handles the header and footer

// --- Data Arrays for Dynamic Rendering ---

const quickLinks = [
    { icon: 'person', label: 'My Profile', href: '#' },
    { icon: 'checklist', label: 'Attendance', href: '#' },
    { icon: 'payments', label: 'Fees & Payments', href: '#' },
    { icon: 'cottage', label: 'Hostel & Mess', href: '#' },
    { icon: 'calendar_month', label: 'Timetable', href: '#' },
    { icon: 'download', label: 'Downloads', href: '#' },
    { icon: 'support_agent', label: 'Contact', href: '#' },
];

const notices = [
    { title: 'Exam schedule for Sem-VI released', date: '18 March 2024', tag: 'Latest', tagColor: 'text-red-700 bg-red-100', isLatest: true, href: '#' },
    { title: 'Guest lecture on AI & ML', date: '15 March 2024', tag: null, tagColor: null, isLatest: false, href: '#' },
];

const upcomingClasses = [
    { title: 'Advanced Algorithms', time: '10:00 AM - 11:00 AM', facultyImgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR1OIC-BQJruthPctpaAPXqORp8iIiuo6uNiZBY2JTuu8VMoyfkMuXCMydq9HXMFkAUCz1zvgK8gsCxCKTi9yf3o0RlgCfy5XtyM33u66xjQAMH75HHQfr6xvgKE-IFMGDRIVtLiUxpxStzr_GenzrthpUCcQwJx6HcMFsrohwS0VtMEFJ7s5ALkQevtXm-B3-hOJGyneXFXG5sLlk5gsSpPqTPYPx0-L7lzZoQxIvAMCG_0kdgMEVr_DFoTVf-3Vw4HKWDUmQHVU' },
    { title: 'Database Systems', time: '11:30 AM - 12:30 PM', facultyImgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQS8qg9q_eAjPuTvSZYCzCfEsz4EVxlBEwZ-ELMp4ulF0L6ueCgWQxNxJt7jpaii4ZcP4VuQK5Xjy4u6zrM7bo5vFsMaT6eQUHBEyRBpEN_nfYEaHlTgmozB5RcDC013UBDcogSfSW9AAIagOG1xPPo7VAVLdC83212GHBrkaF-fbQ_DL840N_yJ7LRL2dK87QC7PZBLFRRokckyR2zFTMflpQRBEyaRCCSua8Y3B0lM8EeEAYzXTJ555Aks37M0ntds4d9jOfixA' },
];

const assignmentsExams = [
    { title: 'Compiler Design Assignment', deadline: 'Deadline: 25 March 2024', status: 'Pending', statusColor: 'text-red-700 bg-red-100' },
    { title: 'Mid-Term: Operating Systems', deadline: 'Date: 28 March 2024', status: 'Upcoming', statusColor: 'text-yellow-700 bg-yellow-100' },
];

const quickAccessItems = [
    { icon: 'work', label: 'Placements', href: '#' },
    { icon: 'description', label: 'Syllabus', href: '#' },
    { icon: 'local_library', label: 'Library', href: '#' },
    { icon: 'support_agent', label: 'Contact', href: '#' },
];

// --- MUI Icons Imports (Replace all Material Symbols Outlined) ---
import PersonIcon from '@mui/icons-material/Person';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PaymentsIcon from '@mui/icons-material/Payments';
import CottageIcon from '@mui/icons-material/Cottage';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const iconMap = {
    person: PersonIcon,
    checklist: ChecklistIcon,
    payments: PaymentsIcon,
    cottage: CottageIcon,
    calendar_month: CalendarMonthIcon,
    download: DownloadIcon,
    support_agent: SupportAgentIcon,
    work: WorkIcon,
    description: DescriptionIcon,
    local_library: LocalLibraryIcon,
};

const StudentDashboard = () => {
    // Attendance data for the SVG
    const attendancePercentage = 82;
    const strokeDasharray = `${attendancePercentage}, 100`;

    // Static CSS from the HTML style block, minimal to only include necessary unique styles
    const styleBlock = `
        :root {
            --gradient-start: #3660E1;
            --gradient-end: #8737E0;
        }
        .glassmorphism {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .card-hover-glow:hover {
            box-shadow: 0 10px 25px -5px rgba(54, 96, 225, 0.2), 0 8px 10px -6px rgba(135, 55, 224, 0.2);
            transform: translateY(-4px);
            transition: all 0.3s ease-in-out;
        }
        .gradient-text {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
            background: linear-gradient(90deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        .slide-in {
            animation: slideIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;

    return (
        <Layout>
            <style>{styleBlock}</style>
            <div className="flex-grow container mx-auto px-6 pt-4 pb-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* --- Main Content Area --- */}
                    <main className="col-span-12 lg:col-span-9 space-y-8">
                        {/* Welcome Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 fade-in">
                            <h2 className="text-3xl font-bold text-gray-800">Welcome back, Amelia! 👋</h2>
                            <p className="text-gray-500 mt-1">Here's your academic snapshot for today.</p>
                        </div>

                        {/* Notices Board */}
                        <div className="glassmorphism rounded-2xl p-6 card-hover-glow slide-in">
                            <h3 className="text-xl font-semibold mb-5 text-gray-800">Notices Board</h3>
                            <div className="relative pl-6 space-y-6 border-l-2 border-gray-200">
                                {notices.map((notice, index) => (
                                    <div key={index} className="relative">
                                        <span className={`absolute -left-[30px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full ${notice.isLatest ? 'gradient-bg' : 'bg-gray-300'}`}>
                                            {notice.isLatest && <span className="h-2.5 w-2.5 rounded-full bg-white"></span>}
                                        </span>
                                        <div className="flex items-center justify-between">
                                            <p className="font-medium text-gray-700">{notice.title}</p>
                                            {notice.tag && <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${notice.tagColor}`}>{notice.tag}</span>}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
                                        <a className="mt-2 inline-block text-sm font-medium text-[var(--gradient-start)] hover:underline" href={notice.href}>View Details</a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Classes */}
                        <div className="glassmorphism rounded-2xl p-6 card-hover-glow slide-in">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Classes</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {upcomingClasses.map((classItem, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/70">
                                        <img alt="Faculty photo" className="size-12 rounded-full" src={classItem.facultyImgSrc} />
                                        <div>
                                            <p className="font-semibold text-gray-800">{classItem.title}</p>
                                            <p className="text-sm text-gray-500">{classItem.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Assignments / Exams */}
                        <div className="glassmorphism rounded-2xl p-6 card-hover-glow slide-in">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Assignments / Exams</h3>
                            <div className="space-y-4">
                                {assignmentsExams.map((item, index) => (
                                    <div key={index} className="p-4 rounded-xl bg-white/70 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-gray-800">{item.title}</p>
                                            <p className={`text-sm ${item.status === 'Pending' ? 'text-red-600' : 'text-yellow-600'}`}>{item.deadline}</p>
                                        </div>
                                        <span className={`text-xs font-bold py-1 px-3 rounded-full ${item.statusColor}`}>{item.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>

                    {/* --- Right Sidebar (Attendance, Results, Quick Access) --- */}
                    <aside className="col-span-12 lg:col-span-3 space-y-8">
                        {/* Attendance */}
                        <div className="glassmorphism rounded-2xl p-6 flex flex-col items-center card-hover-glow fade-in">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Attendance</h3>
                            <div className="relative size-36">
                                <svg className="size-full" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
                                    {/* Background Circle */}
                                    <circle className="stroke-current text-gray-200" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                    {/* Progress Circle */}
                                    <circle
                                        className="stroke-current text-[var(--gradient-start)]"
                                        cx="18" cy="18" fill="none" r="16" strokeDasharray={strokeDasharray}
                                        strokeLinecap="round" strokeWidth="3" transform="rotate(-90 18 18)"
                                    ></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-bold gradient-text">{attendancePercentage}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Result Snapshot */}
                        <div className="glassmorphism rounded-2xl p-6 card-hover-glow slide-in">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Result Snapshot</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <p className="text-gray-600">Latest SGPA</p>
                                    <p className="text-2xl font-bold gradient-text">8.9</p>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <p className="text-gray-600">Overall CGPA</p>
                                    <p className="text-2xl font-bold gradient-text">8.6</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Access */}
                        <div className="glassmorphism rounded-2xl p-6 card-hover-glow slide-in">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Access</h3>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                {quickAccessItems.map((item) => {
                                    const IconComponent = iconMap[item.icon];
                                    return (
                                        <a key={item.label} className="p-3 rounded-lg bg-white/70 hover:shadow-md transition-shadow" href={item.href}>
                                            {IconComponent && <IconComponent className="text-3xl gradient-text" />}
                                            <span className="block text-sm font-medium text-gray-700 mt-1">{item.label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </Layout>
    );
};

export default StudentDashboard;