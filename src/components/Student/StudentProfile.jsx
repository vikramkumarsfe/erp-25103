import React from 'react';
import Layout from './Layout';
import { PhotoCamera, Download } from '@mui/icons-material';

/**
 * Renders a row for an information card.
 */
const InfoRow = ({ label, value, isGreen = false }) => (
  <div className="grid grid-cols-3 gap-4">
    <span className="text-gray-500">{label}</span>
    <span className={`col-span-2 font-medium ${isGreen ? 'text-green-600' : 'text-gray-700'}`}>{value}</span>
  </div>
);

/**
 * Data for the different information cards.
 */
const profileInfoData = [
  {
    title: "Personal Details",
    delay: '100ms',
    details: [
      { label: "Full Name", value: "Jessica Pearson" },
      { label: "Date of Birth", value: "January 15, 2004" },
      { label: "Gender", value: "Female" },
      { label: "Contact Number", value: "+91 98765 43210" },
      { label: "Email Address", value: "jessica.pearson@university.edu" },
      { label: "Address", value: "123, Academic Avenue, Knowledge Park, University City" },
    ]
  },
  {
    title: "Academic Details",
    delay: '200ms',
    details: [
      { label: "Enrollment No.", value: "2023CS101" },
      { label: "Roll No.", value: "CS2-045" },
      { label: "Course", value: "Bachelor of Technology (B.Tech)" },
      { label: "Branch", value: "Computer Science & Engineering" },
      { label: "Semester", value: "4th" },
      { label: "Year of Admission", value: "2023" },
    ]
  },
  {
    title: "Guardian Details",
    delay: '300ms',
    details: [
      { label: "Father's Name", value: "Robert Pearson" },
      { label: "Mother's Name", value: "Laura Pearson" },
      { label: "Contact No.", value: "+91 91234 56789" },
      { label: "Occupation", value: "Software Engineer" },
    ]
  },
  {
    title: "Hostel & Transport",
    delay: '400ms',
    details: [
      { label: "Hostel Room No.", value: "A-305, Girls Hostel 2" },
      { label: "Hostel Fee Status", value: "Paid", isGreen: true },
      { label: "Transport", value: "Bus Route 5" },
      { label: "Transport Fee", value: "Paid", isGreen: true },
    ]
  },
];

const StudentProfile = () => {
  return (
    <Layout>
      <main className="flex-1 p-4 lg:p-8 main-bg overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">My Profile</h2>
            <p className="text-gray-500 mt-1">View and update your personal details here.</p>
          </div>

          {/* Profile Summary Card */}
          <div className="profile-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
            <div className="relative">
              <img
                alt="Student Profile Photo"
                className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7029qKIWns62aaxTKcooKjrXzHbvHQBVn57-VLbj9n_gXsOKpBOPgKDeCkQQgv0tGIZwKSYvvaRc8EuzDUzgCCWBezt1UaEvdSeWObybP1qy5uMMh2-BjHxWPUay995RkVOmxuUQwk6FGOvpycpPCxzAtb9Uev0cF5U2CC-JFJX0SUeAaBeqMEjqG8A2PrYLQWXmweX-dcKGE8UCiSVT06kluPuDhjdb0UsCNMGGlHNVj6Q0A82wZxpyMpq1xmRO_QJrFFbbo4kY"
              />
              <button className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition">
                <PhotoCamera className="text-gray-600" style={{ fontSize: 20 }} />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Jessica Pearson</h3>
              <p className="text-gray-500 mt-1">
                Enrollment No: <span className="font-medium text-gray-600">2023CS101</span>
              </p>
              <p className="text-gray-500">Computer Science & Engineering - 2nd Year</p>
            </div>
            <div className="flex-shrink-0">
              <button className="btn-gradient ripple-effect">Edit Profile</button>
            </div>
          </div>

          {/* Information Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profileInfoData.map((card, index) => (
              <div
                key={index}
                className="info-card p-6"
                style={{ animationDelay: card.delay }}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-4">{card.title}</h4>
                <div className="space-y-4 text-sm">
                  {card.details.map((detail, detailIndex) => (
                    <InfoRow key={detailIndex} {...detail} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions/Updates */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <button className="flex items-center gap-2 hover:text-[var(--gradient-start)] transition-colors">
              <Download />
              Download Profile as PDF
            </button>
            <p className="mt-2 sm:mt-0">Last Updated on: 25th July 2024, 10:30 AM</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default StudentProfile;
