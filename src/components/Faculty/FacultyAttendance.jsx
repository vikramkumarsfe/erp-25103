import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout'; // Assuming Layout.jsx is in the same directory
import { Chart } from 'chart.js';
import 'chart.js/auto';

import {
  Person as PersonIcon,
  Folder as FolderIcon,
  Slideshow as SlideshowIcon,
  EditNote as EditNoteIcon,
  ImportContacts as ImportContactsIcon,
  Checklist as ChecklistIcon,
  TrendingDown as TrendingDownIcon,
  Notifications as NotificationsIcon,
  Download as DownloadIcon,
  ExpandMore as ExpandMoreIcon,
  Upload as UploadIcon,
  Warning as WarningIcon,
  Save as SaveIcon
} from '@mui/icons-material';

// --- Data for Sidebar and Table ---

const sidebarNavItems = [
  { name: 'Profile', icon: PersonIcon, href: '#', isActive: false },
  { name: 'Resource', icon: FolderIcon, href: '#', isActive: false },
  { name: 'Classes', icon: SlideshowIcon, href: '#', isActive: false },
  { name: 'Marks Update', icon: EditNoteIcon, href: '#', isActive: false },
  { name: 'Library', icon: ImportContactsIcon, href: '#', isActive: false },
  { name: 'Attendance', icon: ChecklistIcon, href: '#', isActive: true },
  { name: 'Dropout Prediction', icon: TrendingDownIcon, href: '#', isActive: false },
];

const initialStudentAttendance = [
  { roll: 'CS-121', name: 'Arjun Kumar', branch: 'Computer Science', subject: 'Advanced Algorithms', date: '2023-10-26', isPresent: true },
  { roll: 'CS-122', name: 'Sneha Gupta', branch: 'Computer Science', subject: 'Advanced Algorithms', date: '2023-10-26', isPresent: false },
  { roll: 'CS-123', name: 'Vikram Singh', branch: 'Computer Science', subject: 'Advanced Algorithms', date: '2023-10-26', isPresent: true },
  // Add more students as needed...
];

// --- Custom Component: Attendance Management Page ---

function FacultyAttendance() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [attendanceData, setAttendanceData] = useState(initialStudentAttendance);

  // Function to handle the toggle switch for a single student
  const handleAttendanceChange = (roll, newStatus) => {
    setAttendanceData(prevData =>
      prevData.map(student =>
        student.roll === roll ? { ...student, isPresent: newStatus, isUnsaved: true } : student
      )
    );
  };

  // Function to handle saving attendance for a single student
  const handleSaveStudentAttendance = (roll) => {
    setAttendanceData(prevData =>
      prevData.map(student =>
        student.roll === roll ? { ...student, isUnsaved: false } : student
      )
    );
    // Logic for API call to save attendance would go here
  };
  
  // Function to mark all students present/absent
  const handleMarkAll = (status) => {
    setAttendanceData(prevData =>
      prevData.map(student => ({ ...student, isPresent: status, isUnsaved: true }))
    );
  };

  // Function to save all unsaved attendance
  const handleSaveAll = () => {
    // Logic for API call to save all attendance would go here
    setAttendanceData(prevData =>
      prevData.map(student => ({ ...student, isUnsaved: false }))
    );
    alert('All attendance saved!');
  };

  // Effect for Chart.js initialization
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous instance if it exists
    }

    const total = attendanceData.length;
    const present = attendanceData.filter(s => s.isPresent).length;
    const absent = total - present;
    const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent'],
        datasets: [{
          data: [present, absent],
          backgroundColor: [
            '#10B981', // green-500
            '#EF4444' // red-500
          ],
          borderColor: [
            '#FFFFFF',
            '#FFFFFF'
          ],
          borderWidth: 2,
          cutout: '80%',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [attendanceData]); // Re-run when attendance data changes

  // Separate Components for Layout Props
  const sidebar = (
    <aside className="w-64 bg-[#1E2A38] text-gray-300 flex flex-col fixed h-full">
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          {/* Replaced inline SVG with placeholder and kept university text */}
          <svg className="text-white h-8 w-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
          </svg>
          <h1 className="text-xl font-bold text-white">University</h1>
        </div>
      </div>
      <nav className="flex-grow px-4 py-4 space-y-2">
        {sidebarNavItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.name}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-item transition-colors duration-200 ${item.isActive ? 'active text-white' : ''}`}
              href={item.href}
            >
              <IconComponent className="mr-3 text-2xl" /> {item.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );

  const header = (
    <header className="gradient-bg h-20 flex items-center justify-between px-8 text-white">
      <div>
        <h2 className="text-2xl font-bold">Attendance Management</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <NotificationsIcon />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
        <div className="relative group">
          <button className="flex items-center gap-2">
            <img alt="Profile Avatar" className="size-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDORpaKJVoP5aXm1QgKiEPccR6q8k6nKdld7Ztf8ipWdhR3UloqCbXsSsGnR6fk7V_BzHvgiXqKhmO4Y0BopFkEhPajF5BGtK0H5pHEM7azY2Jgk92SMQDsmxl1g1mDWJSiTabmDT1EJOczXgwbqgg-0ERjKNIHpc086R614F99R0qNSOrxT6kDDvKaPtY8JSUi1FsfmXu9jNDO6KukAowD903HLLNLrcpLAoW3cQvnGLbso3BfkyV0sugkl29LZg0YpuzlULpAln8" />
            <span className="font-semibold">Prof. Sharma</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 hidden group-hover:block">
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Settings</a>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
  
  const totalStudents = attendanceData.length;
  const totalPresent = attendanceData.filter(s => s.isPresent).length;
  const totalAbsent = totalStudents - totalPresent;
  const presentPercentage = totalStudents > 0 ? Math.round((totalPresent / totalStudents) * 100) : 0;

  // Main Content
  const MainContent = (
    <main className="flex-1 p-8 bg-[#FFFFFF] overflow-y-auto">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Attendance Management</h3>
          <p className="text-gray-500 mt-1">Mark and track attendance subject-wise & branch-wise.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
              <DownloadIcon fontSize="small" /> Download Report <ExpandMoreIcon fontSize="small" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-10 hidden group-hover:block">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Export as Excel</a>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Export as PDF</a>
            </div>
          </div>
          <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
            <UploadIcon fontSize="small" /> Bulk Upload Attendance
          </button>
        </div>
      </div>

      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-sm mb-6" role="alert">
        <div className="flex items-center">
          <div className="py-1"><WarningIcon className="mr-3" /></div>
          <div>
            <p className="font-bold">Overdue Submission</p>
            <p className="text-sm">Attendance for 'Advanced Algorithms (CS-301)' on 2023-10-25 is pending.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 @container/main lg:grid-cols-3 gap-6 mb-8">
        {/* Filter Panel */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 lg:col-span-2">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Filter Panel</h4>
          <div className="grid grid-cols-1 @md/main:grid-cols-2 @xl/main:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-branch">Select Branch</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-branch">
                <option>Computer Science</option>
                <option>Mechanical</option>
                <option>Electronics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-semester">Select Semester</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-semester">
                <option>5th Semester</option>
                <option>6th Semester</option>
                <option>7th Semester</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-subject">Select Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-subject">
                <option>Advanced Algorithms</option>
                <option>Compiler Design</option>
                <option>Database Systems</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-date">Date</label>
              <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-date" type="date" defaultValue="2023-10-26" />
            </div>
            <div className="flex justify-end">
              <button className="gradient-bg text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 w-full @xl/main:w-auto">Apply Filter</button>
            </div>
          </div>
        </div>
        {/* Attendance Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-2 text-center">Attendance Summary</h4>
          <div className="flex justify-around items-center text-center">
            <div>
              <p className="text-2xl font-bold text-gray-800">{totalStudents}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{totalPresent}</p>
              <p className="text-sm text-gray-500">Present</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600">{totalAbsent}</p>
              <p className="text-sm text-gray-500">Absent</p>
            </div>
            <div className="relative size-20">
              <canvas ref={chartRef}></canvas>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">{presentPercentage}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
          <div className="flex items-center gap-4">
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2 text-sm"
              onClick={() => handleMarkAll(true)}
            >
              Mark All Present
            </button>
            <button
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center gap-2 text-sm"
              onClick={() => handleMarkAll(false)}
            >
              Mark All Absent
            </button>
          </div>
          <button
            className="gradient-bg text-white font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center gap-2"
            onClick={handleSaveAll}
          >
            <SaveIcon fontSize="small" /> Save All Attendance
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3" scope="col">Roll No.</th>
                <th className="px-6 py-3" scope="col">Student Name</th>
                <th className="px-6 py-3" scope="col">Branch</th>
                <th className="px-6 py-3" scope="col">Subject</th>
                <th className="px-6 py-3" scope="col">Date</th>
                <th className="px-6 py-3 text-center" scope="col">Status</th>
                <th className="px-6 py-3 text-center" scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((student) => (
                <tr key={student.roll} className="bg-white border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">{student.roll}</td>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{student.name}</th>
                  <td className="px-6 py-4">{student.branch}</td>
                  <td className="px-6 py-4">{student.subject}</td>
                  <td className="px-6 py-4">{student.date}</td>
                  <td className="px-6 py-4 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={student.isPresent}
                        className="sr-only peer"
                        type="checkbox"
                        value=""
                        onChange={(e) => handleAttendanceChange(student.roll, e.target.checked)}
                      />
                      <div className={`w-20 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-9 after:transition-all dark:border-gray-600 ${student.isPresent ? 'peer-checked:bg-green-500' : 'peer-checked:bg-red-500'} flex items-center justify-between px-2 text-white font-medium text-xs`}>
                        <span className="ml-1">✔ Present</span>
                        <span className="mr-1">❌ Absent</span>
                      </div>
                    </label>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className={`transition-colors duration-200 ${student.isUnsaved ? 'text-blue-600 animate-pulse hover:text-blue-800' : 'text-gray-400 hover:text-gray-600'}`}
                      title="Save"
                      onClick={() => handleSaveStudentAttendance(student.roll)}
                      disabled={!student.isUnsaved}
                    >
                      <SaveIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );

  return (
    <>
      {/* Custom Styles from HTML <style> block and Tailwind classes */}
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
        .sidebar-item:hover,
        .sidebar-item.active {
            background-color: #2D3A4B;
        }
        .sidebar-item.active {
            border-left: 3px solid var(--gradient-start);
            color: white;
        }
        /* The complex peer/checked styles for the toggle are best kept as-is 
           or managed by a custom Tailwind config if possible, but are converted 
           to inline Tailwind classes in JSX with dynamic background changes 
           to simulate the effect, as the original CSS relies heavily on peer/checked state.
           We are removing the extra toggle-checkbox and toggle-label custom classes 
           as the inline Tailwind logic in the JSX handles the color change.
        */
      `}</style>
      
      <Layout sidebar={sidebar} header={header}>
        {MainContent}
      </Layout>
    </>
  );
}


export default FacultyAttendance;
