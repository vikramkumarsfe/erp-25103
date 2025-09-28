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
  ListAlt,
  PendingActions,
  TaskAlt,
  Cancel,
  Search,
  Download,
  CheckCircle,
  Visibility,
} from '@mui/icons-material';

// --- Static Data Arrays for Dynamic Rendering ---

const navItems = [
  { icon: Person, text: 'Profile', href: '#' },
  { icon: MapsHomeWork, text: 'Room Allocation', href: '#' },
  { icon: Bed, text: 'Available Rooms', href: '#' },
  { icon: DoorSliding, text: 'Allotted Rooms', href: '#' },
  { icon: GridView, text: 'Total Rooms', href: '#' },
  { icon: Checklist, text: 'Hostel Requests / Approvals', href: '#', active: true },
  { icon: Notifications, text: 'Notifications', href: '#' },
];

const dashboardStats = [
  { icon: ListAlt, color: 'blue', label: 'Total Requests', value: '125' },
  { icon: PendingActions, color: 'yellow', label: 'Pending Approvals', value: '15' },
  { icon: TaskAlt, color: 'green', label: 'Approved Requests', value: '105' },
  { icon: Cancel, color: 'red', label: 'Rejected Requests', value: '5' },
];

const requestData = [
  { id: '#REQ001', name: 'Amit Verma', rollNo: '21CS101', issue: 'Double Room', type: 'Allocation', date: '2024-07-25', status: 'Pending' },
  { id: '#REQ002', name: 'Sneha Patel', rollNo: '20EE205', issue: 'B-301: Leaky Faucet', type: 'Maintenance', date: '2024-07-24', status: 'Approved' },
  { id: '#REQ003', name: 'Rajesh Kumar', rollNo: '22ME110', issue: 'Single Room', type: 'Allocation', date: '2024-07-23', status: 'Rejected' },
  { id: '#REQ004', name: 'Deepika Iyer', rollNo: '23CE050', issue: 'Guest Room Booking', type: 'Others', date: '2024-07-22', status: 'Pending' },
];

// Map status to Tailwind/CSS classes
const getStatusClasses = (status) => {
  switch (status) {
    case 'Pending':
      return 'status-pending';
    case 'Approved':
      return 'status-approved';
    case 'Rejected':
      return 'status-rejected';
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

const RequestRow = ({ id, name, rollNo, issue, type, date, status }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{name}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rollNo}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{type}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{date}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`status-badge ${getStatusClasses(status)}`}>{status}</span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-green-100 text-green-600 transition-colors"><CheckCircle className="text-lg" /></button>
        <button className="p-2 rounded-full hover:bg-red-100 text-red-600 transition-colors"><Cancel className="text-lg" /></button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"><Visibility className="text-lg" /></button>
      </div>
    </td>
  </tr>
);

// --- Main Component ---

const HostelRequests = () => {
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
    .active-nav-item {
        background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        color: white;
        box-shadow: 0 4px 15px -3px rgba(54, 96, 225, 0.4), 0 2px 8px -2px rgba(135, 55, 224, 0.3);
    }
    .active-nav-item .MuiSvgIcon-root {
        color: white !important;
    }
    .group:hover .group-hover\\:block {
        display: block;
    }
    .shadow-subtle {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    }
    .status-badge {
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1.25;
        display: inline-flex;
        align-items: center;
    }
    .status-pending {
        background-color: #FFF3E0;
        color: #FB8C00;
    }
    .status-approved {
        background-color: #E8F5E9;
        color: #4CAF50;
    }
    .status-rejected {
        background-color: #FFEBEE;
        color: #F44336;
    }
  `;

  const mainContent = (
    <main className="flex-1 p-2 md:p-3 bg-[#F5F6FA]">
      <style>{staticStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hostel Requests & Approvals</h1>
          <p className="text-gray-500 mt-1">Review and manage all student requests for hostel rooms and services</p>
        </div>

        {/* --- Stats Cards --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* --- Filter Section --- */}
        <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="search">Search</label>
              <div className="relative mt-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" sx={{ fontSize: 20 }} />
                <input
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  id="search"
                  placeholder="Student Name / Roll No"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="request-type">Request Type</label>
              <select className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" id="request-type">
                <option>All</option>
                <option>Allocation</option>
                <option>Maintenance</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="status">Status</label>
              <select className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" id="status">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <div className="lg:col-start-4 md:col-start-2">
              <button className="w-full px-4 py-2.5 text-sm font-semibold text-white gradient-bg rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/* --- Requests Table --- */}
        <div className="bg-white rounded-xl shadow-subtle overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Requests Table</h3>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <Download fontSize="small" /> Export Report
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type / Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Submitted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requestData.map((request, index) => (
                  <RequestRow key={index} {...request} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">15</span> results
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

export default HostelRequests;