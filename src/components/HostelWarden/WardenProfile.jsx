import React, { useState } from 'react';
import Layout from './Layout'; // The external Layout component handles the sidebar and header
import {
  Person,
  MapsHomeWork,
  Bed,
  Checklist,
  Notifications,
  Call,
  Mail,
  PhotoCamera,
  Download,
} from '@mui/icons-material';
// Data for Personal Details
const personalDetails = [
  { label: 'Full Name', viewValue: 'Arjun Sharma', editType: 'text', editValue: 'Arjun Sharma' },
  { label: 'Date of Birth', viewValue: '15-Aug-1980', editType: 'date', editValue: '1980-08-15' },
  {
    label: 'Gender',
    viewValue: 'Male',
    editType: 'select',
    editOptions: ['Male', 'Female', 'Other'],
    editValue: 'Male',
  },
  { label: 'Phone', viewValue: '+91 98765 43210', editType: 'tel', editValue: '+91 98765 43210' },
  { label: 'Email', viewValue: 'arjun.sharma@college.edu', editType: 'email', editValue: 'arjun.sharma@college.edu' },
];

// Data for Professional Details
const professionalDetails = [
  { label: 'Hostel Assigned', viewValue: 'Nehru Hostel (Boys)', editType: 'text', editValue: 'Nehru Hostel (Boys)' },
  { label: 'Designation / Role', viewValue: 'Chief Warden', editType: 'text', editValue: 'Chief Warden' },
  { label: 'Joining Date', viewValue: '01-July-2015', editType: 'date', editValue: '2015-07-01' },
];

// --- Main Component ---

const WardenProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = (isEdit) => {
    setIsEditMode(isEdit);
  };

  const gradientStart = '#3660E1';
  const gradientEnd = '#8737E0';

  // The custom Tailwind/CSS rules need to be included, with dynamic classes for edit mode
  const customStyles = `
    .gradient-text {
        background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .gradient-bg {
        background: linear-gradient(to right, ${gradientStart}, ${gradientEnd});
    }
    .shadow-subtle {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.07);
    }
    /* Pseudo-classes and dynamic state CSS handling */
    .view-mode {
        display: ${isEditMode ? 'none' : 'block'};
    }
    .edit-mode-item {
        display: ${isEditMode ? 'block' : 'none'};
    }
  `;

  // Content for the <main> tag, extracted from the original HTML
  const mainContent = (
    <main className="flex-1 p-3 md:p-4 bg-[#F5F6FA]">
      {/* Inject custom styles for dynamic class changes */}
      <style>{customStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500 mt-1">View and update your personal details</p>
        </div>
        
        {/* Profile Header Card */}
        <div className="bg-white p-6 rounded-xl shadow-subtle mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <img
                alt="Warden Profile Photo"
                className="w-32 h-32 rounded-full ring-4 ring-offset-2"
                style={{ ringColor: gradientStart, border: 'none' }} // Replaced inline style for ring-4 with JSX style for dynamic color
                src="https://lh3.googleusercontent.com/a/ACg8ocKwB-kE3nSMCYdC4X3BwIjp-t2y7r2Gk_Ccr4T78t4Qk9g=s288-c"
              />
              <label
                className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition edit-mode-item"
                htmlFor="photo-upload"
              >
                <PhotoCamera className="text-gray-600" />
                <input className="hidden" id="photo-upload" type="file" />
              </label>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">Arjun Sharma</h2>
              <p className="text-gray-500 mt-1">
                Employee ID: <span className="font-medium text-gray-700">EMP12345</span>
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Call className="text-lg" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="text-lg" />
                  <span>arjun.sharma@college.edu</span>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className="px-6 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full shadow-sm hover:opacity-90 transition-opacity view-mode"
                  onClick={() => toggleEditMode(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 view-mode">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <Download className="text-base" />
                Download as PDF
              </button>
            </div>
          </div>
        </div>

        {/* Details Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Details Card */}
          <div className="bg-white p-6 rounded-xl shadow-subtle">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">Personal Details</h3>
            <div className="space-y-4">
              {personalDetails.map((detail, index) => (
                <React.Fragment key={detail.label}>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <p className="text-sm text-gray-500 col-span-1">{detail.label}</p>
                    <p className="font-medium text-gray-800 col-span-2 view-mode">{detail.viewValue}</p>

                    {/* Dynamic Edit Mode Input/Select */}
                    {detail.editType === 'select' ? (
                      <select
                        className="col-span-2 edit-mode-item border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        defaultValue={detail.editValue}
                      >
                        {detail.editOptions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        className="col-span-2 edit-mode-item border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        type={detail.editType}
                        defaultValue={detail.editValue}
                      />
                    )}
                  </div>
                  {/* Do not render hr after the last item */}
                  {index < personalDetails.length - 1 && <hr className="border-t border-gray-100" />}
                </React.Fragment>
              ))}

              {/* Address (handled separately due to different structure - textarea) */}
              <hr className="border-t border-gray-100" />
              <div className="grid grid-cols-3 gap-4 items-start">
                <p className="text-sm text-gray-500 col-span-1 mt-2">Address</p>
                <p className="font-medium text-gray-800 col-span-2 view-mode">
                  123, College Campus, Knowledge Park, New Delhi - 110001
                </p>
                <textarea
                  className="col-span-2 edit-mode-item border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  rows="3"
                  defaultValue="123, College Campus, Knowledge Park, New Delhi - 110001"
                />
              </div>
            </div>
          </div>

          {/* Professional Details Card */}
          <div className="bg-white p-6 rounded-xl shadow-subtle">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">Professional Details</h3>
            <div className="space-y-4">
              {professionalDetails.map((detail, index) => (
                <React.Fragment key={detail.label}>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <p className="text-sm text-gray-500 col-span-1">{detail.label}</p>
                    <p className="font-medium text-gray-800 col-span-2 view-mode">{detail.viewValue}</p>
                    <input
                      className="col-span-2 edit-mode-item border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                      type={detail.editType}
                      defaultValue={detail.editValue}
                    />
                  </div>
                  {index < professionalDetails.length - 1 && <hr className="border-t border-gray-100" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons (Edit Mode) */}
        <div className="mt-8 flex justify-end items-center gap-4 edit-mode-item">
          <button
            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            onClick={() => toggleEditMode(false)}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full shadow-sm hover:opacity-90 transition-opacity"
            onClick={() => toggleEditMode(false)} // Simulating save
          >
            Save Changes
          </button>
        </div>

        {/* Last Updated Footer */}
        <div className="text-right mt-6">
          <p className="text-xs text-gray-400">Last Updated on 25-July-2024</p>
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

export default WardenProfile;