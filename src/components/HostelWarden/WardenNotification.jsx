import React from 'react';
import Layout from './Layout'; // Assuming Layout handles the sidebar and main header
import {
  Search,
  DoneAll,
  Delete,
  Drafts,
  MarkEmailUnread,
  ArrowBackIosNew,
  ArrowForwardIos,
} from '@mui/icons-material';

// --- Data for dynamic rendering ---

// Data for Type filter options
const typeOptions = ['All', 'Allocation', 'Maintenance', 'General'];

// Data for Status filter options
const statusOptions = ['All', 'Read', 'Unread'];

// Data for Notification Cards
const notificationsData = [
  {
    date: '2024-07-28',
    status: 'Unread',
    type: 'Important',
    typeClass: 'status-important',
    title: 'Room Allocation Finalized',
    snippet: 'Room allocations for the new semester have been finalized and published. Please review the list.',
    isRead: false,
    actionIcon: Drafts,
    actionTitle: 'Mark as Read',
  },
  {
    date: '2024-07-27',
    status: 'Read',
    type: 'Maintenance',
    typeClass: 'bg-blue-100 text-blue-800',
    title: 'Maintenance Request Approved #MNT056',
    snippet: 'Request for plumbing repair in Room C-102 has been approved and assigned to the maintenance team.',
    isRead: true,
    actionIcon: MarkEmailUnread,
    actionTitle: 'Mark as Unread',
  },
  {
    date: '2024-07-26',
    status: 'Unread',
    type: 'General',
    typeClass: 'bg-green-100 text-green-800',
    title: 'Weekly Warden Meeting',
    snippet: 'Reminder: The weekly meeting with all hostel wardens is scheduled for tomorrow at 10:00 AM in the conference hall.',
    isRead: false,
    actionIcon: Drafts,
    actionTitle: 'Mark as Read',
  },
  {
    date: '2024-07-25',
    status: 'Read',
    type: 'Allocation',
    typeClass: 'bg-purple-100 text-purple-800',
    title: 'New Room Request from Sneha Patel',
    snippet: 'A new room allocation request has been submitted by Sneha Patel (20EE205). Please review it in the requests section.',
    isRead: true,
    actionIcon: MarkEmailUnread,
    actionTitle: 'Mark as Unread',
  },
];

const WardenNotifications = () => {
  // Define custom styles from the original HTML to keep look-and-feel
  const customStyles = `
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
    .status-unread {
        background-color: #FFF3E0;
        color: #FB8C00;
    }
    .status-read {
        background-color: #F5F5F5;
        color: #757575;
    }
    .status-important {
        background-color: #FFEBEE;
        color: #F44336;
    }
    .notification-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }
    .notification-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    }
  `;

  const mainContent = (
    <div className="max-w-7xl mx-auto">
      <style>{customStyles}</style>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        <p className="text-gray-500 mt-1">View all alerts and updates related to hostel management</p>
      </div>

      {/* Filter/Search Section */}
      <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end mb-6">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor="search">
              Search
            </label>
            <div className="relative mt-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                id="search"
                placeholder="Student Name / Room No / Keyword"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="type-filter">
              Type
            </label>
            <select
              className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              id="type-filter"
            >
              {typeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="status-filter">
              Status
            </label>
            <select
              className="w-full mt-1 border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              id="status-filter"
            >
              {statusOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#3660E1] to-[#8737E0] rounded-lg shadow-sm hover:opacity-90 transition-opacity">
              Apply Filters
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
              <DoneAll className="text-base" /> Mark all as read
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition">
              <Delete className="text-base" /> Delete all
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notificationsData.map((notification, index) => {
          const ActionIcon = notification.actionIcon;
          return (
            <div
              key={index}
              className={`notification-card bg-white p-4 rounded-xl shadow-subtle flex items-start gap-4 ${
                notification.isRead ? 'opacity-70' : ''
              }`}
            >
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium text-gray-900">{notification.date}</p>
                    {/* Dynamic status/type badge rendering */}
                    {notification.typeClass === 'status-important' ? (
                      <span className={`status-badge ${notification.typeClass}`}>{notification.type}</span>
                    ) : (
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${notification.typeClass}`}>
                        {notification.type}
                      </span>
                    )}
                  </div>
                  <span className={`status-badge ${notification.isRead ? 'status-read' : 'status-unread'}`}>
                    {notification.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{notification.title}</h3>
                <p className="text-gray-600 text-sm">{notification.snippet}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                  title={notification.actionTitle}
                >
                  <ActionIcon className="text-lg" />
                </button>
                <button
                  className="p-2 rounded-full hover:bg-red-100 text-red-500 transition-colors"
                  title="Delete"
                >
                  <Delete className="text-lg" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="p-4 mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
          <span className="font-medium">25</span> notifications
        </p>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 disabled:opacity-50"
            disabled
          >
            <ArrowBackIosNew style={{ fontSize: '1rem' }} /> Previous
          </button>
          <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">
            Next <ArrowForwardIos style={{ fontSize: '1rem' }} />
          </button>
        </div>
      </div>
    </div>
  );

  return <Layout>{mainContent}</Layout>;
};

export default WardenNotifications;