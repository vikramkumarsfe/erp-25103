import React from 'react';
import Layout from './Layout'; // Assuming the Layout component is available
import {
  Download,
  Upload,
  Save,
  Edit,
  ExpandMore,
  CheckCircleOutline,
  ErrorOutline,
  CheckCircle, // For Toast Success
  Warning, // For Toast Error
} from '@mui/icons-material';

// Data for Filter Section Selects
const filterOptions = {
  subjects: ['All Subjects', 'Physics', 'Astrophysics', 'Chemistry', 'Mathematics'],
  examTypes: ['All Types', 'Internal Assessment', 'Mid Term', 'Final Exam'],
  sessions: ['2023-2024', '2022-2023', '2021-2022'],
};

// Data for student marks table rows (extracted from HTML <tbody>)
const studentMarksData = [
  {
    rollNo: 'PH-101',
    studentName: 'Ananya Sharma',
    subject: 'Physics',
    examType: 'Internal Assessment',
    maxMarks: 20,
    marksObtained: 18,
    status: 'Saved',
    statusClass: 'bg-green-100 text-green-800',
    remarks: '',
    rowClass: 'bg-white border-b hover:bg-gray-50 transition-colors',
    error: null,
  },
  {
    rollNo: 'PH-102',
    studentName: 'Rohan Verma',
    subject: 'Physics',
    examType: 'Internal Assessment',
    maxMarks: 20,
    marksObtained: 21,
    status: 'Pending',
    statusClass: 'bg-orange-100 text-orange-800',
    remarks: '',
    rowClass: 'bg-gray-50 border-b hover:bg-gray-100 transition-colors',
    error: 'Marks cannot be greater than Max Marks.',
  },
  {
    rollNo: 'AS-201',
    studentName: 'Priya Singh',
    subject: 'Astrophysics',
    examType: 'Mid Term',
    maxMarks: 50,
    marksObtained: 45,
    status: 'Saved',
    statusClass: 'bg-green-100 text-green-800',
    remarks: 'Good progress',
    rowClass: 'bg-white border-b hover:bg-gray-50 transition-colors',
    error: null,
  },
];

const FacultyMarksUpdate = () => {
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

  // Toast Component (simplified placeholder for visibility)
  const ToastMessage = ({ id, type, message }) => {
    const isSuccess = type === 'success';
    const Icon = isSuccess ? CheckCircle : Warning;
    const textClass = isSuccess ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100';

    return (
      <div id={id} className="hidden fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-lg" role="alert">
        <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${textClass}`}>
          <Icon className="w-5 h-5" />
          <span className="sr-only">{type} icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
      </div>
    );
  };

  return (
    <Layout>
      <style>{styleBlock}</style>
      <ToastMessage id="toast-success" type="success" message="Marks updated successfully!" />
      <ToastMessage id="toast-error" type="error" message="Upload failed, please recheck file." />

      <div className="flex-1 p-8 bg-[#FFFFFF] overflow-y-auto">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Marks Update (Subject Wise)</h3>
            <p className="text-gray-500 mt-1">Update internal/exam marks for students easily.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
              <Download fontSize="small" /> Download Template
            </button>
            <button className="gradient-bg text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center gap-2">
              <Upload fontSize="small" /> Upload Marks File
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Filter Section</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-subject">Select Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-subject">
                {filterOptions.subjects.map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="select-exam">Select Exam Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="select-exam">
                {filterOptions.examTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="session-batch">Session/Batch</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" id="session-batch">
                {filterOptions.sessions.map((session) => (
                  <option key={session}>{session}</option>
                ))}
              </select>
            </div>
            <button className="gradient-bg text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 w-full md:w-auto">Apply Filter</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3" scope="col">Roll No.</th>
                  <th className="px-6 py-3" scope="col">Student Name</th>
                  <th className="px-6 py-3" scope="col">Subject</th>
                  <th className="px-6 py-3" scope="col">Exam Type</th>
                  <th className="px-6 py-3" scope="col">Max Marks</th>
                  <th className="px-6 py-3" scope="col">Marks Obtained</th>
                  <th className="px-6 py-3" scope="col">Status</th>
                  <th className="px-6 py-3" scope="col">Remarks</th>
                  <th className="px-6 py-3 text-center" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentMarksData.map((student, index) => (
                  <tr key={index} className={student.rowClass}>
                    <td className="px-6 py-4">{student.rollNo}</td>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">{student.studentName}</th>
                    <td className="px-6 py-4">{student.subject}</td>
                    <td className="px-6 py-4">{student.examType}</td>
                    <td className="px-6 py-4">{student.maxMarks}</td>
                    <td className="px-6 py-4">
                      <div>
                        <input
                          className={`w-20 px-2 py-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                            student.error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'
                          }`}
                          type="number"
                          defaultValue={student.marksObtained}
                        />
                        {student.error && (
                          <p className="text-red-600 text-xs mt-1">{student.error}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`${student.statusClass} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        className="w-32 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add remarks..."
                        type="text"
                        defaultValue={student.remarks}
                      />
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200" title="Save Marks">
                        <Save fontSize="small" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200" title="Edit Marks">
                        <Edit fontSize="small" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap justify-end items-center mt-6 gap-4">
            <button className="gradient-bg text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-all duration-300">Save All</button>
            <div className="relative group">
              <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center gap-2">
                Export Marks <ExpandMore fontSize="small" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 bottom-full mb-2 w-40 bg-white rounded-lg shadow-xl z-10 hidden group-hover:block">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Export as Excel</a>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Export as PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacultyMarksUpdate;