import React from 'react';
import Layout from './Layout'; // Assuming the Layout component is available
import {
  Notifications,
  Download,
  ExpandMore,
  Print,
  ErrorOutline,
  NotificationsActive,
  CheckCircle,
  Warning,
  Search,
} from '@mui/icons-material';

// Data for Chart (kept as is from the script tag)
const chartData = {
  labels: ['Issued', 'Returned', 'Overdue'],
  datasets: [{
    label: 'Book Status',
    data: [120, 350, 5],
    backgroundColor: [
      'rgba(59, 130, 246, 0.7)', // Blue
      'rgba(16, 185, 129, 0.7)', // Green
      'rgba(239, 68, 68, 0.7)',  // Red
    ],
    borderColor: [
      'rgba(59, 130, 246, 1)',
      'rgba(16, 185, 129, 1)',
      'rgba(239, 68, 68, 1)',
    ],
    borderWidth: 1
  }]
};

// Data for dropdown menu items
const exportMenuItems = [
  { label: 'Export as Excel', href: '#' },
  { label: 'Export as PDF', href: '#' },
];

// Data for table rows
const issueDetails = [
  {
    issueId: 'L001',
    studentName: 'Arjun Kumar',
    rollNo: 'CS-121',
    bookTitle: 'Fundamentals of Physics',
    author: 'Halliday, Resnick',
    issueDate: '2023-10-01',
    dueDate: '2023-10-15',
    returnDate: '-',
    status: 'Issued',
    statusClass: 'bg-blue-100 text-blue-800',
    icon: <NotificationsActive className="text-blue-600 hover:text-blue-800 transition-colors duration-200" />,
    iconTitle: 'Send Reminder',
    rowClass: 'bg-white border-b hover:bg-gray-50 transition-colors'
  },
  {
    issueId: 'L002',
    studentName: 'Sneha Gupta',
    rollNo: 'ME-105',
    bookTitle: 'Theory of Machines',
    author: 'R.S. Khurmi',
    issueDate: '2023-09-25',
    dueDate: '2023-10-10',
    returnDate: '2023-10-09',
    status: 'Returned',
    statusClass: 'bg-green-100 text-green-800',
    icon: <CheckCircle className="text-green-600 transition-colors duration-200" />,
    iconTitle: 'Returned on Time',
    rowClass: 'bg-white border-b hover:bg-gray-50 transition-colors'
  },
  {
    issueId: 'L003',
    studentName: 'Vikram Singh',
    rollNo: 'CS-119',
    bookTitle: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    issueDate: '2023-09-15',
    dueDate: '2023-09-30',
    returnDate: '-',
    status: 'Overdue',
    statusClass: 'bg-red-100 text-red-800 border border-red-400',
    icon: <Warning className="text-red-600 hover:text-red-800 transition-colors duration-200 animate-pulse" />,
    iconTitle: 'Send Alert',
    rowClass: 'bg-red-50 border-b border-red-200 hover:bg-red-100 transition-colors'
  },
];

// Dummy component for the Chart since Chart.js rendering requires DOM elements
const BookStatusChart = ({ data }) => {
  // In a real React app, you would use a library like react-chartjs-2
  // and useEffect to initialize the chart on a canvas ref.
  return <canvas id="bookStatusChart" data-chart={JSON.stringify(data)} />;
};

const FacultyLibrary = () => {
  // Retaining the custom CSS for gradients/utility classes defined in the original <style> block
  const styleBlock = `
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
  `;

  return (
    <Layout>
      <style>{styleBlock}</style>
      <div className="flex-1 p-8 bg-[#FFFFFF] overflow-y-auto">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Book Issue Details</h3>
            <p className="text-gray-500 mt-1">View and manage issued/returned books.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <Download fontSize="small" /> Export Report <ExpandMore fontSize="small" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-10 hidden group-hover:block">
                {exportMenuItems.map((item, index) => (
                  <a key={index} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <button className="gradient-bg text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center gap-2">
              <Print fontSize="small" /> Print List
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-sm" role="alert">
            <div className="flex items-center">
              <div className="py-1"><ErrorOutline className="mr-3" /></div>
              <div>
                <p className="font-bold">5 Overdue Books Pending</p>
                <p className="text-sm">Please send reminders or alerts to the students.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Book Status Overview</h4>
            <BookStatusChart data={chartData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Filter & Search</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="search-book">Search</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                id="search-book"
                placeholder="Search by Book Name / Student Name / Roll No."
                type="text"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="filter-status">Filter by Status</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="filter-status">
                <option>All</option>
                <option>Issued</option>
                <option>Returned</option>
                <option>Overdue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="filter-dept">Filter by Department</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="filter-dept">
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Mechanical</option>
                <option>Physics</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range (Issue Date / Return Date)</label>
              <div className="flex items-center space-x-2">
                <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" type="date" />
                <span className="text-gray-500">to</span>
                <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" type="date" />
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-end">
              <button className="gradient-bg text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 w-full md:w-auto mt-4 md:mt-0">Apply Filter</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" id="select-all" type="checkbox" />
              <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="select-all">Select All</label>
            </div>
            <button className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors duration-300 flex items-center gap-2 text-sm">
              <Notifications fontSize="small" /> Send Reminder to Selected
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3 w-12 text-center" scope="col"><input className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" type="checkbox" /></th>
                  <th className="px-6 py-3" scope="col">Issue ID</th>
                  <th className="px-6 py-3" scope="col">Student Name</th>
                  <th className="px-6 py-3" scope="col">Roll No.</th>
                  <th className="px-6 py-3" scope="col">Book Title</th>
                  <th className="px-6 py-3" scope="col">Author</th>
                  <th className="px-6 py-3" scope="col">Issue Date</th>
                  <th className="px-6 py-3" scope="col">Due Date</th>
                  <th className="px-6 py-3" scope="col">Return Date</th>
                  <th className="px-6 py-3" scope="col">Status</th>
                  <th className="px-6 py-3 text-center" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {issueDetails.map((detail, index) => (
                  <tr key={index} className={detail.rowClass}>
                    <td className="px-4 py-4 text-center">
                      <input className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" type="checkbox" />
                    </td>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'font-semibold text-red-800' : ''}`}>{detail.issueId}</td>
                    <th className={`px-6 py-4 font-medium whitespace-nowrap ${detail.status === 'Overdue' ? 'text-red-900' : 'text-gray-900'}`} scope="row">{detail.studentName}</th>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'text-red-800' : ''}`}>{detail.rollNo}</td>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'text-red-800' : ''}`}>{detail.bookTitle}</td>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'text-red-800' : ''}`}>{detail.author}</td>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'text-red-800' : ''}`}>{detail.issueDate}</td>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'text-red-800 font-bold' : ''}`}>{detail.dueDate}</td>
                    <td className={`px-6 py-4 ${detail.status === 'Overdue' ? 'text-red-800' : ''}`}>{detail.returnDate}</td>
                    <td className="px-6 py-4">
                      <span className={`${detail.statusClass} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                        {detail.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="transition-colors duration-200" title={detail.iconTitle}>
                        {detail.icon}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacultyLibrary;