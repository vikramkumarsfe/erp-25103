import React from 'react';
import Layout from './Layout'; // Assuming Layout is in the same directory
import {
  Person,
  MapsHomeWork,
  Bed,
  DoorSliding,
  GridView,
  Checklist,
  Notifications,
  MeetingRoom,
  PendingActions,
  BuildCircle,
  Search,
  Download,
  Add,
  Edit,
  Delete,
} from '@mui/icons-material';


const dashboardStats = [
  { icon: MeetingRoom, color: 'blue', label: 'Total Allocated Rooms', value: '215' },
  { icon: Bed, color: 'green', label: 'Vacant Beds Remaining', value: '45' },
  { icon: PendingActions, color: 'yellow', label: 'Pending Requests', value: '12' },
  { icon: BuildCircle, color: 'red', label: 'Blocked / Maintenance Rooms', value: '5' },
];

const roomAllocationData = [
  { roomNo: 'A-101', type: 'Double', capacity: 2, studentName: 'Rohan Sharma', branch: 'Computer Science', year: '2nd', date: '2023-08-15', status: 'Active' },
  { roomNo: 'A-101', type: 'Double', capacity: 2, studentName: 'Priya Singh', branch: 'Mechanical', year: '3rd', date: '2023-08-15', status: 'Active' },
  { roomNo: 'B-205', type: 'Single', capacity: 1, studentName: '-', branch: '-', year: '-', date: '-', status: 'Blocked' },
  { roomNo: 'C-302', type: 'Triple', capacity: 3, studentName: 'Ankit Kumar', branch: 'Civil', year: '1st', date: '2023-09-01', status: 'Pending' },
];

// Map status to Tailwind/CSS classes
const getStatusClasses = (status) => {
  switch (status) {
    case 'Active':
      return 'status-active';
    case 'Pending':
      return 'status-pending';
    case 'Blocked':
      return 'status-blocked';
    default:
      return '';
  }
};

// --- Helper Components for Repetitive Structures ---

const StatCard = ({ icon: Icon, color, label, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-subtle flex items-center gap-4">
    <div className={`p-3 rounded-full bg-${color}-100`}>
      <Icon className={`text-${color}-500`} />
    </div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const AllocationRow = ({ roomNo, type, capacity, studentName, branch, year, date, status }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{roomNo}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{capacity}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{studentName}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{branch}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{year}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`status-badge ${getStatusClasses(status)}`}>{status}</span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <div className="flex items-center gap-2">
        <button className="text-gray-500 hover:text-blue-600 transition-colors"><Edit className="text-lg" /></button>
        <button className="text-gray-500 hover:text-red-600 transition-colors"><Delete className="text-lg" /></button>
      </div>
    </td>
  </tr>
);

// --- Main Component ---

const AllottedRooms = () => {
  // Extract CSS not handled by Tailwind/JSX
  const staticStyles = `
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
    .group:hover .group-hover\\:block {
      display: block;
    }
    .shadow-subtle {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    }
    .status-badge {
      padding: 0.25rem 0.625rem; /* px-2.5 py-0.5 */
      border-radius: 9999px;
      font-size: 0.75rem;
      line-height: 1.25rem; /* leading-5 */
      font-weight: 600; /* font-semibold */
      display: inline-flex;
    }
    .status-active {
      background-color: #E3F2FD; /* bg-blue-100 */
      color: #1565C0; /* text-blue-800 */
    }
    .status-pending {
      background-color: #FFF3E0; /* bg-orange-100 */
      color: #EF6C00; /* text-orange-800 */
    }
    .status-blocked {
      background-color: #FFEBEE; /* bg-red-100 */
      color: #C62828; /* text-red-800 */
    }
  `;

  const mainContent = (
    <main className="flex-1 p-3 md:p-2">
      <style>{staticStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Allotted Rooms Overview</h1>
          <p className="text-gray-500 mt-1">Manage all student room allocations efficiently</p>
        </div>

        {/* --- Stats Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* --- Filter Section --- */}
        <div className="bg-white p-2 rounded-xl shadow-subtle mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="search">Search</label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" sx={{ fontSize: 20 }} />
                <input
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  id="search"
                  placeholder="Student Name / Room No / Branch"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="room-type">Room Type</label>
              <select className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" id="room-type">
                <option>All</option>
                <option>Single</option>
                <option>Double</option>
                <option>Triple</option>
              </select>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="status">Status</label>
                <select className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" id="status">
                  <option>All</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Blocked</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="year">Year</label>
                <select className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" id="year">
                  <option>All</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                </select>
              </div>
            </div>
            <div className="lg:col-start-4 md:col-start-3">
              <button className="w-full px-4 py-2.5 text-sm font-semibold text-white gradient-bg rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* --- Allocated Rooms Table --- */}
        <div className="bg-white rounded-xl shadow-subtle overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Allotted Rooms Table</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <Download fontSize="small" /> Export Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white gradient-bg rounded-lg hover:opacity-90 transition">
                <Add fontSize="small" /> Create Allocation
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocation Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {roomAllocationData.map((room, index) => (
                  <AllocationRow key={index} {...room} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">215</span> results
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">Previous</button>
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <Layout>
      {mainContent}
    </Layout>
  );
};

export default AllottedRooms;