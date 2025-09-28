import React, { useState } from 'react';
import Layout from './Layout'; // Assuming Layout.jsx is in the same directory

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
];

// --- Custom Component: Attendance Management Page ---

function FacultyAttendance() {
  const [attendanceData, setAttendanceData] = useState(initialStudentAttendance);

  // Toggle attendance
  const handleAttendanceChange = (roll, newStatus) => {
    setAttendanceData(prevData =>
      prevData.map(student =>
        student.roll === roll ? { ...student, isPresent: newStatus, isUnsaved: true } : student
      )
    );
  };

  // Save individual attendance
  const handleSaveStudentAttendance = (roll) => {
    setAttendanceData(prevData =>
      prevData.map(student =>
        student.roll === roll ? { ...student, isUnsaved: false } : student
      )
    );
  };

  // Mark all students
  const handleMarkAll = (status) => {
    setAttendanceData(prevData =>
      prevData.map(student => ({ ...student, isPresent: status, isUnsaved: true }))
    );
  };

  // Save all
  const handleSaveAll = () => {
    setAttendanceData(prevData =>
      prevData.map(student => ({ ...student, isUnsaved: false }))
    );
    alert('All attendance saved!');
  };

  // Totals
  const totalStudents = attendanceData.length;
  const totalPresent = attendanceData.filter(s => s.isPresent).length;
  const totalAbsent = totalStudents - totalPresent;
  const presentPercentage = totalStudents > 0 ? Math.round((totalPresent / totalStudents) * 100) : 0;

  // Sidebar
  const sidebar = (
    <aside className="w-64 bg-[#1E2A38] text-gray-300 flex flex-col fixed h-full">
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
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

  // Header
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
      </div>
    </header>
  );

  // Main
  const MainContent = (
    <main className="flex-1 p-8 bg-[#FFFFFF] overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Attendance Summary without Chart.js */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-center col-span-1">
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
            <div className="relative size-20 rounded-full border-4 border-green-500 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">{presentPercentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table (same as before) */}
      {/* ... keep your table and buttons unchanged ... */}
    </main>
  );

  return (
    <>
      <style>{`
        :root {
          --gradient-start: #3660E1;
          --gradient-end: #8737E0;
        }
        .gradient-bg {
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
        .sidebar-item.active {
          border-left: 3px solid var(--gradient-start);
        }
      `}</style>
      <Layout sidebar={sidebar} header={header}>
        {MainContent}
      </Layout>
    </>
  );
}

export default FacultyAttendance;
