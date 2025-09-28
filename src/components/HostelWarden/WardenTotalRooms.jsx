import React from 'react';
// Assuming the Layout component provides the structural wrapper for standard pages
import Layout from './Layout'; 

// --- MUI Icon Imports (Placeholders - adjust names as necessary) ---
import CottageIcon from '@mui/icons-material/Cottage'; 
import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import HotelIcon from '@mui/icons-material/Hotel';
import GridViewIcon from '@mui/icons-material/GridView';
import ChecklistIcon from '@mui/icons-material/Checklist';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonCheckIcon from '@mui/icons-material/HowToReg'; // Assuming person_check is for occupied
import NoMeetingRoomIcon from '@mui/icons-material/MeetingRoomOutlined'; // Assuming no_meeting_room is for vacant
import ConstructionIcon from '@mui/icons-material/Construction';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SyncIcon from '@mui/icons-material/Sync';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';

const statsCards = [
  { label: 'Total Rooms', value: '250', icon: MeetingRoomIcon, iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
  { label: 'Occupied Rooms', value: '210', icon: PersonCheckIcon, iconBg: 'bg-green-100', iconColor: 'text-green-500' },
  { label: 'Vacant Rooms', value: '35', icon: NoMeetingRoomIcon, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-500' },
  { label: 'Maintenance / Blocked', value: '5', icon: ConstructionIcon, iconBg: 'bg-red-100', iconColor: 'text-red-500' },
];

const roomDetailsData = [
  { roomNo: 'A-101', type: 'Double', capacity: '2', occupantName: 'Rahul Kumar', branch: 'Computer Science', year: '3rd', status: 'Occupied', statusBg: 'bg-blue-100', statusText: 'text-blue-800', action: 'Reassign', actionIcon: SyncIcon, actionColor: 'text-purple-600 hover:text-purple-900' },
  { roomNo: 'A-102', type: 'Double', capacity: '2', occupantName: '-', branch: '-', year: '-', status: 'Vacant', statusBg: 'bg-green-100', statusText: 'text-green-800', action: 'Assign', actionIcon: AddIcon, actionColor: 'text-green-600 hover:text-green-900' },
  { roomNo: 'B-205', type: 'Single', capacity: '1', occupantName: '-', branch: '-', year: '-', status: 'Maintenance', statusBg: 'bg-orange-100', statusText: 'text-orange-800', action: 'Update', actionIcon: WarningIcon, actionColor: 'text-orange-600 hover:text-orange-900' },
  { roomNo: 'C-310', type: 'Triple', capacity: '3', occupantName: 'Amit Singh', branch: 'Mechanical Eng.', year: '2nd', status: 'Occupied', statusBg: 'bg-blue-100', statusText: 'text-blue-800', action: 'Reassign', actionIcon: SyncIcon, actionColor: 'text-purple-600 hover:text-purple-900' },
];

// --- Main Component ---

const WardenTotalRooms = () => {
  // Extract CSS from the <style> block
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
    .group:hover .group-hover\\:block {
      display: block;
    }
    .shadow-subtle {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    }
  `;

  // Content that was originally inside <body>
  const fullPageContent = (
    <div className="flex min-h-screen">
      <style>{style}</style>
      <div className="flex-1 flex flex-col bg-[#F5F6FA]">
        {/* Main Content (originally inside <main>) */}
        <main className="flex-1 p-3 md:p-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Total Rooms Overview</h1>
              <p className="text-gray-500 mt-1">View all rooms and their current status</p>
            </div>
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statsCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-subtle flex items-center gap-4">
                    <div className={`p-3 rounded-full ${card.iconBg}`}>
                      <IconComponent className={card.iconColor} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{card.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Filters/Search Block */}
            <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Room Filters / Search</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="search">Search</label>
                  <div className="relative mt-1">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      id="search"
                      placeholder="Room No / Branch / Occupant Name"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="status">Status</label>
                  <select className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" id="status">
                    <option>All</option>
                    <option>Occupied</option>
                    <option>Vacant</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <div className="lg:col-start-4">
                  <button className="w-full px-4 py-2.5 text-sm font-semibold text-white gradient-bg rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                    Apply Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Room Details Table */}
            <div className="bg-white rounded-xl shadow-subtle overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Room Details Table</h3>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                    <FileDownloadIcon className="text-base" /> Export Report
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupant Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roomDetailsData.map((room, index) => {
                      const ActionIcon = room.actionIcon;
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.roomNo}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.capacity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.occupantName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.branch}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.year}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${room.statusBg} ${room.statusText}`}>
                              {room.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className={`${room.actionColor} flex items-center gap-1`}>
                              <ActionIcon className="text-base" /> {room.action}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                <p className="text-sm text-gray-500">Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">250</span> results</p>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">Previous</button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  return (
    // Wrap the entire component content in the Layout
    <Layout>
      {fullPageContent}
    </Layout>
  );
};

export default WardenTotalRooms;