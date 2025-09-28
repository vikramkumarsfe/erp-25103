import React from 'react';
import Layout from './Layout'; // Assuming an existing Layout component
import {
    Add,
    Notifications,
    PlayArrow,
    Description,
    Remove,
    Warning,
    UploadFile, // Using UploadFile for the file icon
    CalendarToday, // Placeholder for date/time input icon
} from '@mui/icons-material';

// --- Data Extraction ---

const classStats = [
    { label: "Upcoming Classes", value: 5, color: "text-blue-600" },
    { label: "Cancelled Classes", value: 2, color: "text-red-600" },
];

const classesData = [
    {
        title: "Quantum Mechanics II",
        subject: "Physics",
        dateTime: "2024-10-05, 10:00 AM",
        mode: "Online",
        status: "Scheduled",
        statusColor: "bg-blue-100 text-blue-800",
        joinButton: true,
        canAct: true,
    },
    {
        title: "Introduction to Black Holes",
        subject: "Astrophysics",
        dateTime: "2024-10-03, 02:00 PM",
        mode: "Offline: Room 301, Science Bldg.",
        status: "Completed",
        statusColor: "bg-green-100 text-green-800",
        joinButton: false,
        canAct: false,
    },
    {
        title: "Advanced Thermodynamics",
        subject: "Physics",
        dateTime: "2024-10-01, 11:00 AM",
        mode: "Online",
        status: "Cancelled",
        statusColor: "bg-red-100 text-red-800",
        joinButton: false,
        canAct: false,
    },
];

// Custom SVG Path (for file upload icon) - Replacing the complex SVG with a simpler MUI icon is cleaner,
// but for fidelity to the original design style, the SVG path is retained here.
const FileUploadSVG = () => (
    <svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    </svg>
);


// --- Components ---

/**
 * Placeholder Modal Component (Schedule New Class)
 * In a real React app, state logic (e.g., using useState) would control visibility and form submission.
 */
const ScheduleModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden" id="schedule-modal">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 m-4 transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule New Class</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="class-title">Class Title</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="class-title" placeholder="e.g., Introduction to Quantum Physics" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Subject</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="subject">
                        <option>Physics</option>
                        <option>Astrophysics</option>
                        <option>General</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mode</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input defaultChecked className="form-radio text-blue-600" name="mode" type="radio" value="online" />
                            <span className="ml-2 text-gray-700">Online</span>
                        </label>
                        <label className="flex items-center">
                            <input className="form-radio text-blue-600" name="mode" type="radio" value="offline" />
                            <span className="ml-2 text-gray-700">Offline</span>
                        </label>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date-time">Date & Time</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="date-time" type="datetime-local" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Class Material (Optional)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <FileUploadSVG />
                            <div className="flex text-sm text-gray-600">
                                <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" htmlFor="file-upload">
                                    <span>Upload a file</span>
                                    <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, PPT, DOCX up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <button className="px-6 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" type="button">Cancel</button>
                    <button className="px-6 py-2 text-sm font-semibold text-white gradient-bg rounded-lg shadow-md hover:opacity-90 transition-opacity" type="submit">Schedule Class</button>
                </div>
            </form>
        </div>
    </div>
);

/**
 * Placeholder Modal Component (Cancel Class Confirmation)
 */
const CancelModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden" id="cancel-modal">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 m-4 transform transition-all duration-300 ease-in-out">
            <div className="text-center">
                <Warning className="text-red-500 text-6xl mx-auto" style={{ fontSize: '3rem' }} />
                <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Cancel Class</h3>
                <p className="text-gray-500 mb-6">Are you sure you want to cancel this class?</p>
                <div className="flex justify-center gap-4">
                    <button className="px-6 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors" type="button">No</button>
                    <button className="px-6 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-colors" type="button">Yes, Cancel</button>
                </div>
            </div>
        </div>
    </div>
);


// --- Main Component ---

const FacultyClass = () => {
    // CSS rules involving pseudo-selectors and gradients from the HTML <style> block
    const styleBlock = `
        .gradient-bg {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
        .sidebar-item:hover {
            background-color: #2D3A4B;
        }
        .sidebar-item.active {
            border-left: 3px solid var(--gradient-start);
        }
    `;

    return (
        <Layout>
            {/* The main content area, assuming Layout provides the necessary parent wrappers */}
            <main className="flex-1 p-8 bg-[#FFFFFF] overflow-y-auto">
                <style jsx="true">{styleBlock}</style>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800">Manage Your Classes</h3>
                        <p className="text-gray-500 mt-1">Schedule, start or cancel your classes.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="gradient-bg text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center gap-2">
                            <Add /> Schedule New Class
                        </button>
                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300">View Past Classes</button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {classStats.map((stat) => (
                        <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</h4>
                            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Alert Banners (Initially hidden) */}
                <div className="hidden bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md shadow" id="success-alert" role="alert">
                    <p className="font-bold">Success!</p>
                    <p>New class has been scheduled successfully.</p>
                </div>
                <div className="hidden bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md shadow" id="cancel-alert" role="alert">
                    <p className="font-bold">Cancelled!</p>
                    <p>The class has been cancelled.</p>
                </div>

                {/* Classes Table */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3" scope="col">Class Title</th>
                                    <th className="px-6 py-3" scope="col">Subject</th>
                                    <th className="px-6 py-3" scope="col">Date & Time</th>
                                    <th className="px-6 py-3" scope="col">Mode</th>
                                    <th className="px-6 py-3" scope="col">Status</th>
                                    <th className="px-6 py-3 text-center" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classesData.map((classItem, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{classItem.title}</th>
                                        <td className="px-6 py-4">{classItem.subject}</td>
                                        <td className="px-6 py-4">
                                            {classItem.dateTime}
                                        </td>
                                        <td className="px-6 py-4">
                                            {classItem.mode}
                                            {classItem.joinButton && (
                                                <button className="ml-2 text-blue-600 hover:underline text-xs">Join Live Class</button>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`${classItem.statusColor} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                                                {classItem.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center space-x-2">
                                            {/* Start/Play Button */}
                                            <button 
                                                className={`text-green-600 hover:text-green-800 transition-colors duration-200 transform hover:scale-110 ${!classItem.canAct ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={!classItem.canAct}
                                            >
                                                <PlayArrow />
                                            </button>
                                            {/* Notes/Description Button */}
                                            <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200 transform hover:scale-110">
                                                <Description />
                                            </button>
                                            {/* Cancel/Remove Button */}
                                            <button 
                                                className={`text-red-600 hover:text-red-800 transition-colors duration-200 transform hover:scale-110 ${!classItem.canAct ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                disabled={!classItem.canAct}
                                            >
                                                <Remove />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            
            {/* Modals are rendered as fixed, top-level elements, typically outside <main> in HTML, 
                but placed inside the Layout wrapper for React composition. */}
            <ScheduleModal />
            <CancelModal />
        </Layout>
    );
};

export default FacultyClass;