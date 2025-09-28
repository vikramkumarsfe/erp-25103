import React from 'react';
import Layout from './Layout'; // The external Layout component handles the sidebar and header
import {
  Person as PersonIcon,
  MapsHomeWork as MapsHomeWorkIcon,
  Bed as HotelIcon,
  Checklist as ChecklistIcon,
  Notifications as NotificationsIcon,
  MeetingRoom as MeetingRoomIcon,
  CheckCircle as CheckCircleIcon,
  PendingActions as PendingActionsIcon,
  FileDownload as FileDownloadIcon,
  SyncAlt as SyncAltIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Payment as PaymentIcon,
  Build as BuildIcon,
  Luggage as LuggageIcon,
} from '@mui/icons-material';

// --- Data Arrays for Dynamic Rendering ---

// Data for sidebar navigation items (used by Layout)
const sidebarNav = [
  { name: 'Profile', icon: PersonIcon, href: '#', active: false },
  { name: 'Room Allocation', icon: MapsHomeWorkIcon, href: '#', active: true },
  { name: 'Room Availability', icon: HotelIcon, href: '#', active: false },
  { name: 'Hostel Requests', icon: ChecklistIcon, href: '#', active: false },
  { name: 'Notifications', icon: NotificationsIcon, href: '#', active: false },
];

const statsCards = [
  { label: 'Total Rooms', value: '250', icon: MeetingRoomIcon, iconBg: 'bg-blue-100', iconColor: 'text-blue-500', valueColor: 'text-gray-900' },
  { label: 'Occupied Rooms', value: '225', icon: PersonIcon, iconBg: 'bg-blue-100', iconColor: 'text-blue-500', valueColor: 'text-blue-600' },
  { label: 'Vacant Rooms', value: '25', icon: CheckCircleIcon, iconBg: 'bg-green-100', iconColor: 'text-green-500', valueColor: 'text-green-600' },
  { label: 'Pending Requests', value: '12', icon: PendingActionsIcon, iconBg: 'bg-orange-100', iconColor: 'text-orange-500', valueColor: 'text-orange-600' },
];

const roomAllocationData = [
  { roomNo: 'A-101', type: 'AC', occupantName: 'Rahul Kumar', branch: 'CSE', year: '3rd', status: 'Occupied', actionIcon: SyncAltIcon, statusBg: 'bg-blue-100', statusText: 'text-blue-800' },
  { roomNo: 'A-102', type: 'AC', occupantName: '-', branch: '-', year: '-', status: 'Vacant', actionIcon: AddCircleOutlineIcon, statusBg: 'bg-green-100', statusText: 'text-green-800' },
  { roomNo: 'B-205', type: 'Non-AC', occupantName: 'Priya Sharma', branch: 'ECE', year: '2nd', status: 'Occupied', actionIcon: SyncAltIcon, statusBg: 'bg-blue-100', statusText: 'text-blue-800' },
];

const pendingRequestsData = [
  { reqId: 'REQ-015', studentName: 'Amit Singh', rollNo: 'CS12345', roomType: 'AC', status: 'Pending', statusBg: 'bg-orange-100', statusText: 'text-orange-800' },
  { reqId: 'REQ-018', studentName: 'Sneha Gupta', rollNo: 'ME54321', roomType: 'Non-AC', status: 'Pending', statusBg: 'bg-orange-100', statusText: 'text-orange-800' },
];

const notifications = [
  { icon: PaymentIcon, iconColor: 'text-red-500', bgColor: 'bg-red-50 hover:bg-red-100', title: 'Overdue Hostel Fees', description: '5 students have not paid for July.', titleColor: 'text-red-800', descriptionColor: 'text-red-600' },
  { icon: BuildIcon, iconColor: 'text-yellow-600', bgColor: 'bg-yellow-50 hover:bg-yellow-100', title: 'Room Maintenance', description: 'Room B-301 plumbing issue reported.', titleColor: 'text-yellow-800', descriptionColor: 'text-yellow-600' },
  { icon: LuggageIcon, iconColor: 'text-blue-500', bgColor: 'bg-blue-50 hover:bg-blue-100', title: 'Upcoming Check-ins', description: '2 new students arriving on Aug 1st.', titleColor: 'text-blue-800', descriptionColor: 'text-blue-600' },
];

// --- Main Component ---

const WardenDashboard = () => {
  // Extract CSS not handled by Tailwind/JSX
  const style = `
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
    .shadow-subtle {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    }
    .hover\\:shadow-gradient:hover {
      box-shadow: 0 10px 15px -3px rgba(54, 96, 225, 0.2), 0 4px 6px -2px rgba(135, 55, 224, 0.1);
    }
  `;

  const mainContent = (
    <main className="flex-1 p-1 md:p-2 bg-[#F5F6FA]">
      <style>{style}</style>
      <div className="max-w-8xl mx-auto">
        
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-8">
          {statsCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white p-3 rounded-xl shadow-subtle flex items-center justify-between hover:shadow-gradient transition-shadow duration-300"
              >
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className={`text-3xl font-bold ${card.valueColor}`}>{card.value}</p>
                </div>
                <div className={`p-3 rounded-full ${card.iconBg}`}>
                  <IconComponent className={card.iconColor} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Room Allocation Overview Table */}
        <div className="bg-white rounded-xl shadow-subtle mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Room Allocation Overview</h3>
              <div className="flex items-center gap-2">
                <input
                  className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3660E1] transition text-sm"
                  placeholder="Search by Room, Student..."
                  type="text"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3660E1] transition text-sm">
                  <option>All Types</option>
                  <option>AC</option>
                  <option>Non-AC</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3660E1] transition text-sm">
                  <option>All Status</option>
                  <option>Occupied</option>
                  <option>Vacant</option>
                </select>
                <button className="px-4 py-2 text-sm font-semibold text-white gradient-bg rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                  <FileDownloadIcon className="text-base" /> Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3" scope="col">Room No</th>
                    <th className="px-6 py-3" scope="col">Type</th>
                    <th className="px-6 py-3" scope="col">Occupant Name</th>
                    <th className="px-6 py-3" scope="col">Branch</th>
                    <th className="px-6 py-3" scope="col">Year</th>
                    <th className="px-6 py-3" scope="col">Status</th>
                    <th className="px-6 py-3" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {roomAllocationData.map((room, index) => {
                    const ActionIcon = room.actionIcon;
                    return (
                      <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{room.roomNo}</td>
                        <td className="px-6 py-4">{room.type}</td>
                        <td className="px-6 py-4">{room.occupantName}</td>
                        <td className="px-6 py-4">{room.branch}</td>
                        <td className="px-6 py-4">{room.year}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${room.statusBg} ${room.statusText}`}>
                            {room.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            className="hover:text-[#8737E0]"
                            style={{ color: '#3660E1' }} // Apply gradient-start color inline
                          >
                            <ActionIcon className="text-xl" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pending Requests and Notifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pending Requests Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-subtle">
            <div className="p-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Requests</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3" scope="col">Request ID</th>
                      <th className="px-6 py-3" scope="col">Student Name</th>
                      <th className="px-6 py-3" scope="col">Roll No</th>
                      <th className="px-6 py-3" scope="col">Room Type</th>
                      <th className="px-6 py-3" scope="col">Status</th>
                      <th className="px-6 py-3 text-center" scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingRequestsData.map((request, index) => (
                      <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-900">{request.reqId}</td>
                        <td className="px-6 py-4">{request.studentName}</td>
                        <td className="px-6 py-4">{request.rollNo}</td>
                        <td className="px-6 py-4">{request.roomType}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${request.statusBg} ${request.statusText}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex justify-center gap-2">
                          <button className="px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">Approve</button>
                          <button className="px-3 py-1 text-xs font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">Reject</button>
                          <button className="px-3 py-1 text-xs font-semibold text-white gradient-bg rounded-lg hover:opacity-90 transition-opacity">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Notifications / Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-subtle">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Notifications / Alerts</h3>
            <div className="space-y-4">
              {notifications.map((alert, index) => {
                const AlertIcon = alert.icon;
                return (
                  <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${alert.bgColor} transition-colors`}>
                    <AlertIcon className={`${alert.iconColor} mt-1`} />
                    <div>
                      <p className={`font-medium text-sm ${alert.titleColor}`}>{alert.title}</p>
                      <p className={`text-xs ${alert.descriptionColor}`}>{alert.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <Layout
      pageTitle="Warden Dashboard"
      wardenName="Mr. Sharma"
      navItems={sidebarNav}
    >
      {mainContent}
    </Layout>
  );
};

export default WardenDashboard;