import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout'; // Assuming an existing Layout component
import {
    Search,
    Download,
    ExpandMore,
    Campaign,
    Warning,
    Message,
    Visibility,
} from '@mui/icons-material';

// Assuming Chart.js is installed and available globally or imported via script tag 
// (or you'd use 'import Chart from "chart.js/auto";' if using a module bundler like Webpack/Vite)

// --- Data Extraction ---

const studentsData = [
    {
        rollNo: 'CS-121',
        name: 'Arjun Kumar',
        branch: 'Computer Science',
        semester: '5th',
        attendance: '65%',
        lastExamMarks: '45%',
        riskLevel: 'High',
        riskColorClass: 'bg-red-100 text-red-800',
        parentName: 'Mr. Ramesh Kumar',
        parentContact: '+91-9876543210',
    },
    {
        rollNo: 'ME-205',
        name: 'Priya Sharma',
        branch: 'Mechanical',
        semester: '7th',
        attendance: '82%',
        lastExamMarks: '78%',
        riskLevel: 'Low',
        riskColorClass: 'bg-green-100 text-green-800',
        parentName: 'Mrs. Suman Sharma',
        parentContact: '+91-9988776655',
    },
    {
        rollNo: 'EC-310',
        name: 'Rahul Verma',
        branch: 'Electronics',
        semester: '3rd',
        attendance: '76%',
        lastExamMarks: '62%',
        riskLevel: 'Medium',
        riskColorClass: 'bg-orange-100 text-orange-800',
        parentName: 'Mr. Vivek Verma',
        parentContact: '+91-9123456789',
    },
];

const chartData = {
    riskPie: {
        labels: ['High Risk', 'Medium Risk', 'Low Risk'],
        data: [15, 35, 50],
        colors: ['#FCA5A5', '#FDBA74', '#86EFAC'],
    },
    branchBar: {
        labels: ['CS', 'ME', 'EC', 'Civil', 'IT'],
        data: [10, 5, 8, 3, 7],
        // Using a single color for the bar chart as per original
        backgroundColor: '#FCA5A5', 
        borderColor: '#EF4444', 
    },
};

// --- Sub-Components (Modal) ---

const ParentMessageModal = ({ student, onClose, onSend }) => {
    if (!student) return null;

    const defaultMessage = `Dear ${student.parentName}, This is to inform you that your ward, ${student.name}, has been identified as being at ${student.riskLevel.toLowerCase()} risk of dropping out due to low attendance and poor academic performance. We request you to schedule a meeting with us to discuss this matter urgently.`;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md transform scale-100 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Send Parent Message</h3>
                <p className="text-sm text-gray-600 mb-2">Student: <span className="font-semibold">{student.name}</span></p>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="parent-name">Parent Name</label>
                    <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="parent-name" readOnly type="text" value={student.parentName} />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="parent-contact">Contact</label>
                    <input className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="parent-contact" readOnly type="text" value={student.parentContact} />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="alert-message">Predefined Alert Message</label>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="alert-message" rows="4" defaultValue={defaultMessage}></textarea>
                    <div className="flex items-center mt-2">
                        <input defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="sms-integration" type="checkbox" />
                        <label className="ml-2 block text-sm text-gray-900" htmlFor="sms-integration">Send via SMS</label>
                        <input className="ml-4 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" id="email-integration" type="checkbox" />
                        <label className="ml-2 block text-sm text-gray-900" htmlFor="email-integration">Send via Email</label>
                    </div>
                </div>
                <div className="flex justify-end space-x-4">
                    <button 
                        className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                        type="button" 
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white gradient-bg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                        type="button"
                        onClick={onSend}
                    >
                        Send Now
                    </button>
                </div>
            </div>
            <div className="fixed inset-0 cursor-pointer" onClick={onClose} aria-hidden="true"></div>
        </div>
    );
};


// --- Main Component ---

const DropoutPrediction = () => {
    // State for Modal Management
    const [selectedStudent, setSelectedStudent] = useState(null);

    // Refs for Chart.js
    const riskPieChartRef = useRef(null);
    const branchBarChartRef = useRef(null);

    // Handlers for modal
    const openModal = (student) => setSelectedStudent(student);
    const closeModal = () => setSelectedStudent(null);
    const handleSend = () => {
        alert(`Sending alert to parent of ${selectedStudent.name}.`);
        closeModal();
    };

    // ⚡️ CHART INITIALIZATION useEffect ⚡️
    useEffect(() => {
        let riskPieChartInstance = null;
        let branchBarChartInstance = null;

        // Ensure Chart.js is loaded and available (window.Chart)
        if (typeof window.Chart !== 'function') {
            console.error("Chart.js is not loaded. Please ensure it's imported correctly.");
            return;
        }

        // --- Risk Pie Chart Initialization ---
        if (riskPieChartRef.current) {
            const riskPieCtx = riskPieChartRef.current.getContext('2d');
            riskPieChartInstance = new window.Chart(riskPieCtx, {
                type: 'pie',
                data: {
                    labels: chartData.riskPie.labels,
                    datasets: [{
                        data: chartData.riskPie.data,
                        backgroundColor: chartData.riskPie.colors,
                        borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                        borderWidth: 2,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    }
                },
            });
        }

        // --- Branch Bar Chart Initialization ---
        if (branchBarChartRef.current) {
            const branchBarCtx = branchBarChartRef.current.getContext('2d');
            branchBarChartInstance = new window.Chart(branchBarCtx, {
                type: 'bar',
                data: {
                    labels: chartData.branchBar.labels,
                    datasets: [{
                        label: 'High Risk Students',
                        data: chartData.branchBar.data,
                        backgroundColor: chartData.branchBar.backgroundColor,
                        borderColor: chartData.branchBar.borderColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'No. of Students'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }
            });
        }

        // Cleanup function: Destroy the charts when the component unmounts
        return () => {
            if (riskPieChartInstance) riskPieChartInstance.destroy();
            if (branchBarChartInstance) branchBarChartInstance.destroy();
        };
    }, []); // Empty dependency array ensures it runs only once after mounting

    const styleBlock = `
        .gradient-bg {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
    `;

    return (
        <Layout>
            <main className="flex-1 p-8 bg-[#FFFFFF] overflow-y-auto">
                <style jsx="true">{styleBlock}</style>
                
                {/* Header/Action Bar */}
                <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <h3 className="text-3xl font-bold text-gray-800">AI-based Dropout Prediction</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">AI/ML</span>
                        </div>
                        <p className="text-gray-500 mt-1">Identify at-risk students and take preventive action.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Export Dropdown */}
                        <div className="relative group">
                            <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                                <Download style={{ fontSize: '1rem' }} /> Export Report <ExpandMore style={{ fontSize: '0.9rem' }} />
                            </button>
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-10 hidden group-hover:block">
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Export as Excel</a>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Export as PDF</a>
                            </div>
                        </div>
                        {/* Send Bulk Alert Button */}
                        <button className="gradient-bg text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center gap-2">
                            <Campaign style={{ fontSize: '1rem' }} /> Send Bulk Alert
                        </button>
                    </div>
                </div>

                {/* Filter & Search Card */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Filter & Search</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="search-student">Search Student</label>
                            <div className="relative">
                                <Search className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400" style={{ fontSize: '1.25rem' }} />
                                <input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="search-student" placeholder="Search by Student Name / Roll No." type="text" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-branch">Select Branch</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-branch">
                                <option>All Branches</option>
                                <option>Computer Science</option>
                                <option>Mechanical</option>
                                <option>Electronics</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-semester">Select Semester/Year</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-semester">
                                <option>All Semesters</option>
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option>3rd Year</option>
                                <option>4th Year</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="risk-level">Risk Level</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="risk-level">
                                <option>All Levels</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                        <div className="flex justify-end lg:col-start-5">
                            <button className="gradient-bg text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 w-full">Apply Filter</button>
                        </div>
                    </div>
                </div>

                {/* Students Table */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3" scope="col">Roll No.</th>
                                    <th className="px-6 py-3" scope="col">Student Name</th>
                                    <th className="px-6 py-3" scope="col">Branch</th>
                                    <th className="px-6 py-3" scope="col">Semester</th>
                                    <th className="px-6 py-3" scope="col">Attendance %</th>
                                    <th className="px-6 py-3" scope="col">Last Exam Marks</th>
                                    <th className="px-6 py-3" scope="col">Risk Level</th>
                                    <th className="px-6 py-3 text-center" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsData.map((student, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">{student.rollNo}</td>
                                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{student.name}</th>
                                        <td className="px-6 py-4">{student.branch}</td>
                                        <td className="px-6 py-4">{student.semester}</td>
                                        <td className="px-6 py-4">{student.attendance}</td>
                                        <td className="px-6 py-4">{student.lastExamMarks}</td>
                                        <td className="px-6 py-4">
                                            <span className={`${student.riskColorClass} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                                                {student.riskLevel}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center space-x-2">
                                            <button 
                                                className="cursor-pointer text-blue-600 hover:text-blue-800" 
                                                title="Send Parent Message"
                                                onClick={() => openModal(student)}
                                            >
                                                <Message />
                                            </button>
                                            <a className="text-blue-600 hover:text-blue-800" href="#" title="View Details">
                                                <Visibility />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Charts and Alerts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Risk Distribution Chart */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Risk Distribution</h4>
                            <div className="flex justify-center items-center h-56">
                                {/* The ref connects this canvas element to the initialization script in useEffect */}
                                <canvas ref={riskPieChartRef} id="riskPieChart" role="img" aria-label={`Pie chart showing ${chartData.riskPie.data.join(', ')} distribution across ${chartData.riskPie.labels.join(', ')}`}></canvas>
                            </div>
                        </div>
                        {/* Branch-wise Risk Chart */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-700 mb-4">Branch-wise Risk</h4>
                            <div className="h-56">
                                {/* The ref connects this canvas element to the initialization script in useEffect */}
                                <canvas ref={branchBarChartRef} id="branchBarChart" role="img" aria-label={`Bar chart showing high risk students per branch: ${chartData.branchBar.labels.map((l, i) => `${l}: ${chartData.branchBar.data[i]}`).join(', ')}`}></canvas>
                            </div>
                        </div>
                    </div>
                    {/* High Risk Alert Card */}
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-900 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                        <Warning className="text-5xl mb-3" />
                        <h4 className="text-2xl font-bold">10 Students at High Risk</h4>
                        <p className="mt-1 font-medium">Immediate Action Needed</p>
                    </div>
                </div>
            </main>

            {/* MODAL: Conditionally render the modal if a student is selected */}
            {selectedStudent && (
                <ParentMessageModal 
                    student={selectedStudent} 
                    onClose={closeModal} 
                    onSend={handleSend}
                />
            )}
        </Layout>
    );
};

export default DropoutPrediction;