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
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Warning as WarningIcon
} from '@mui/icons-material';

// --- Data for Sidebar and Table ---

const sidebarNavItems = [
  { name: 'Profile', icon: PersonIcon, href: '#', isActive: false },
  { name: 'Resource', icon: FolderIcon, href: '#', isActive: true },
  { name: 'Classes', icon: SlideshowIcon, href: '#', isActive: false },
  { name: 'Marks Update', icon: EditNoteIcon, href: '#', isActive: false },
  { name: 'Library', icon: ImportContactsIcon, href: '#', isActive: false },
  { name: 'Attendance', icon: ChecklistIcon, href: '#', isActive: false },
  { name: 'Dropout Prediction', icon: TrendingDownIcon, href: '#', isActive: false },
];

const resourceData = [
  {
    name: 'Quantum Physics Lecture Notes',
    subject: 'Physics',
    type: { label: 'PDF', color: 'blue' },
    uploaded: '2023-10-01',
    updated: '2023-10-25',
  },
  {
    name: 'Intro to Astrophysics Video',
    subject: 'Astrophysics',
    type: { label: 'Video', color: 'red' },
    uploaded: '2023-09-15',
    updated: '2023-10-20',
  },
  {
    name: 'Lab Safety Guidelines',
    subject: 'General',
    type: { label: 'PPT', color: 'green' },
    uploaded: '2023-09-01',
    updated: '2023-09-01',
  },
  {
    name: 'Classical Mechanics Problem Set',
    subject: 'Physics',
    type: { label: 'PDF', color: 'blue' },
    uploaded: '2023-10-05',
    updated: '2023-10-18',
  },
];

// --- Custom Component: Resource Management Page ---

function FacultyResource() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(null); // 'success' or 'delete'

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdateModalOpen(false);
    setShowAlert('success');
    setTimeout(() => setShowAlert(null), 5000);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteModalOpen(false);
    setShowAlert('delete');
    setTimeout(() => setShowAlert(null), 5000);
  };

  const typeColorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
  };

  const MainContent = (
    <main className="flex-1 p-8 bg-[#F9FAFB] overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Manage Teaching Resources</h3>
          <p className="text-gray-500 mt-1">Upload, Update or Delete your resources easily.</p>
        </div>
        <button
          className="gradient-bg text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          onClick={() => setIsUpdateModalOpen(true)} // Can be used for 'Add New'
        >
          <AddIcon />
          Add New Resource
        </button>
      </div>

      {showAlert === 'success' && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-md shadow" role="alert">
          <p className="font-bold">Success!</p>
          <p>Resource has been updated successfully.</p>
        </div>
      )}

      {showAlert === 'delete' && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md shadow" role="alert">
          <p className="font-bold">Warning!</p>
          <p>Resource has been deleted.</p>
        </div>
      )}

      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3" scope="col">Resource Name</th>
                <th className="px-6 py-3" scope="col">Subject</th>
                <th className="px-6 py-3" scope="col">Type</th>
                <th className="px-6 py-3" scope="col">Uploaded Date</th>
                <th className="px-6 py-3" scope="col">Last Updated</th>
                <th className="px-6 py-3 text-center" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {resourceData.map((resource, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'table-row-dark' : 'table-row-light'} border-b hover:bg-gray-50 transition-colors`}
                >
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{resource.name}</th>
                  <td className="px-6 py-4">{resource.subject}</td>
                  <td className="px-6 py-4">
                    <span className={`${typeColorClasses[resource.type.color]} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                      {resource.type.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">{resource.uploaded}</td>
                  <td className="px-6 py-4">{resource.updated}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 transform hover:scale-110"
                      onClick={() => setIsUpdateModalOpen(true)}
                    >
                      <EditIcon fontSize="small" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 transform hover:scale-110"
                      onClick={() => setIsDeleteModalOpen(true)}
                    >
                      <DeleteIcon fontSize="small" />
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

  const sidebar = (
    <aside className="w-64 bg-[#1E2A38] text-gray-300 flex flex-col fixed h-full">
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          {/* Original SVG converted to a standard component placeholder for simplicity */}
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
              <IconComponent className="mr-3" /> {item.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );

  const header = (
    <header className="gradient-bg h-20 flex items-center justify-between px-8 text-white">
      <div>
        <h2 className="text-2xl font-bold">Resource Management</h2>
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

  return (
    <>
      {/* Custom Styles */}
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
        }
        .table-row-light {
            background-color: #F9FAFB;
        }
        .table-row-dark {
            background-color: #FFFFFF;
        }
      `}</style>
      
      <Layout sidebar={sidebar} header={header}>
        {MainContent}
      </Layout>

      {/* Update Modal */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isUpdateModalOpen ? '' : 'hidden'}`}>
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-8 m-4 transform transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Resource</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="resource-title">Resource Title</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                id="resource-title"
                type="text"
                defaultValue="Quantum Physics Lecture Notes"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="subject" defaultValue="Physics">
                <option>Physics</option>
                <option>Astrophysics</option>
                <option>General</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">File Upload</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      htmlFor="file-upload"
                    >
                      <span>Upload a file</span>
                      <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, PPT, MP4 up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">Description</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                id="description"
                rows="3"
                defaultValue="Updated lecture notes for Chapter 3."
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="px-6 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                type="button"
                onClick={() => setIsUpdateModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 text-sm font-semibold text-white gradient-bg rounded-lg shadow-md hover:opacity-90 transition-opacity"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Delete Modal */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isDeleteModalOpen ? '' : 'hidden'}`}>
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 m-4 transform transition-all duration-300 ease-in-out">
          <div className="text-center">
            <WarningIcon className="text-red-500 text-6xl mx-auto" style={{ fontSize: '3.75rem' }} />
            <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Delete Resource</h3>
            <p className="text-gray-500 mb-6">Are you sure you want to delete this resource? This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-colors"
                type="button"
                onClick={handleDeleteConfirm}
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyResource;