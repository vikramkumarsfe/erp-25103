import React from 'react';
import Layout from './Layout'; // Assuming a Layout component for consistent header and footer

// --- MUI Icons Imports (Replace Material Symbols Outlined) ---
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import ChecklistIcon from '@mui/icons-material/Checklist';
// import SourceEnvironmentIcon from '@mui/icons-material/SourceEnvironment';
// import PaymentIcon from '@mui/icons-material/Payment';
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import ClassIcon from '@mui/icons-material/Class';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import EmailIcon from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';

// --- Data Arrays for Dynamic Rendering ---
const classes = [
    {
        title: 'Quantum Physics',
        teacher: 'Prof. Evelyn Reed',
        date: 'Mon, Oct 23, 2023 - 10:00 AM',
        status: 'Live',
        statusColor: 'bg-green-100 text-green-700',
        live: true,
        buttonText: 'Join Now',
        buttonClass: 'gradient-bar hover:shadow-lg hover:shadow-purple-500/20 transition-shadow ripple join-now-button',
    },
    {
        title: 'Data Structures',
        teacher: 'Dr. Alan Grant',
        date: 'Mon, Oct 23, 2023 - 02:00 PM',
        status: 'Upcoming',
        statusColor: 'bg-yellow-100 text-yellow-800',
        live: false,
        buttonText: 'Set Reminder',
        buttonClass: 'bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition',
    },
    {
        title: 'Intro to Philosophy',
        teacher: 'Prof. Ian Malcolm',
        date: 'Fri, Oct 20, 2023 - 11:00 AM',
        status: 'Completed',
        statusColor: 'bg-blue-100 text-blue-800',
        live: false,
        buttonText: 'View Recording',
        buttonClass: 'bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition',
    },
    {
        title: 'History of Art',
        teacher: 'Prof. Ellie Sattler',
        date: 'Wed, Oct 18, 2023 - 09:00 AM',
        status: 'Canceled',
        statusColor: 'bg-red-100 text-red-700',
        live: false,
        buttonText: 'Class Canceled',
        buttonClass: 'bg-gray-300 text-gray-500 font-semibold cursor-not-allowed',
        reason: "Teacher's emergency.",
        disabled: true,
        grayedOut: true,
    },
];

const canceledClassesTable = [
    {
        subject: 'History of Art',
        teacher: 'Prof. Ellie Sattler',
        date: 'Oct 18, 2023',
        reason: "Teacher's emergency.",
    },
    {
        subject: 'Calculus II',
        teacher: 'Dr. John Hammond',
        date: 'Oct 15, 2023',
        reason: 'Technical issues.',
    },
];

const StudentClasses = () => {
    // Static CSS from the HTML style block
    const styleBlock = `
        :root {
            --gradient-start: #3660E1;
            --gradient-end: #8737E0;
        }
        .gradient-bar {
            background-image: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
        .gradient-text {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .active-link {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            color: white;
            font-weight: 600;
        }
        .active-link .material-symbols-outlined {
            color: white;
        }
        .card-hover-effect {
            transition: all 0.3s ease-in-out;
        }
        .card-hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
        }
        .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .ripple {
            position: relative;
            overflow: hidden;
        }
        .ripple::after {
            content: '';
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
        .ripple:active::after {
            transform: scale(0, 0);
            opacity: .2;
            transition: 0s;
        }
        .live-glow {
            box-shadow: 0 0 15px rgba(52, 211, 153, 0.6);
        }
        .live-tag-animation {
            animation: soft-blink 2s infinite;
        }
        @keyframes soft-blink {
            50% {
                opacity: 0.6;
            }
        }
        .join-now-button {
            box-shadow: 0 4px 15px 0 rgba(135, 55, 224, 0.35);
        }
        .join-now-button:hover {
            box-shadow: 0 6px 20px 0 rgba(135, 55, 224, 0.45);
        }
    `;

    return (
        <Layout>
            <style>{styleBlock}</style>
            <main className="flex-1 p-4 lg:p-8 bg-gray-50 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    {/* Live Class Alert Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-[var(--gradient-start)] flex items-center justify-between live-glow fade-in">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Quantum Physics is LIVE NOW!</h2>
                            <p className="text-gray-600">Join the class before it ends. Countdown: <span className="font-semibold text-red-500">15:30 min</span></p>
                        </div>
                        <button className="gradient-bar text-white font-bold py-3 px-6 rounded-lg text-lg ripple join-now-button flex items-center gap-2">
                            <VideocamIcon />
                            Join Class Now
                        </button>
                    </div>

                    <div className="mb-8 fade-in">
                        <h2 className="text-3xl font-bold text-gray-900">My Classes</h2>
                        <p className="text-gray-500 mt-1">View your scheduled, live, and canceled classes here.</p>
                    </div>

                    {/* Filter and Search Section */}
                    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4 fade-in" style={{ animationDelay: '100ms' }}>
                        <div className="relative flex-grow w-full md:w-auto">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent" placeholder="Search by subject/teacher..." type="text" />
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <select className="border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent w-full md:w-auto">
                                <option>All</option>
                                <option>Live</option>
                                <option>Upcoming</option>
                                <option>Completed</option>
                                <option>Canceled</option>
                            </select>
                            <input className="border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent" type="date" />
                        </div>
                    </div>

                    {/* Class Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {classes.map((cls, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg shadow-md p-6 flex flex-col card-hover-effect border border-transparent fade-in ${cls.grayedOut ? 'bg-gray-50 shadow-inner' : ''}`}
                                style={{ animationDelay: `${200 + index * 100}ms` }}
                            >
                                <div className={`relative ${cls.grayedOut ? 'z-10' : ''}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className={`text-xl font-bold ${cls.grayedOut ? 'text-gray-500' : 'text-gray-900'}`}>{cls.title}</h3>
                                            <p className={`text-sm ${cls.grayedOut ? 'text-gray-400' : 'text-gray-500'}`}>{cls.teacher}</p>
                                        </div>
                                        <div className="relative group">
                                            <span className={`flex items-center gap-1.5 ${cls.statusColor} text-xs font-semibold px-2.5 py-1 rounded-full ${cls.live ? 'live-tag-animation' : ''} ${cls.grayedOut ? 'cursor-pointer' : ''}`}>
                                                <span className={`w-2 h-2 ${cls.statusColor.replace('bg-', 'bg-').replace('-100', '-500').replace('text-', '')} rounded-full`}></span>
                                                {cls.status}
                                            </span>
                                            {cls.reason && (
                                                <div className="absolute bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
                                                    Reason: {cls.reason}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className={`text-sm mb-6 ${cls.grayedOut ? 'text-gray-400' : 'text-gray-500'}`}>{cls.date}</p>
                                    <div className="mt-auto">
                                        <button disabled={cls.disabled} className={`w-full font-semibold py-2 px-4 rounded-lg transition ${cls.buttonClass}`}>
                                            {cls.buttonText}
                                        </button>
                                    </div>
                                </div>
                                {cls.grayedOut && <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg"></div>}
                            </div>
                        ))}
                    </div>

                    {/* Canceled Classes Table */}
                    <div className="mt-12 fade-in" style={{ animationDelay: '600ms' }}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Canceled Classes</h3>
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Reason for Cancellation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {canceledClassesTable.map((row, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.subject}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.teacher}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.reason}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default StudentClasses;