import React from 'react';
import Layout from './Layout';
import {
  Schedule as ScheduleIcon, // Not used in this specific content but kept for context if needed
  Error as ErrorIcon, // Not used in this specific content but kept for context if needed
} from '@mui/icons-material';

// --- Data Structures for Dynamic Rendering ---
const subjectAttendance = [
  {
    title: 'Mathematics I',
    attendedPercent: 85,
    attendedFraction: '85/100',
    totalClasses: 40,
    attendedClasses: 34,
    barColor: 'bg-green-500',
    textColor: 'text-green-300',
    delay: '300ms',
  },
  {
    title: 'Physics II',
    attendedPercent: 92,
    attendedFraction: '92/100',
    totalClasses: 40,
    attendedClasses: 37,
    barColor: 'bg-green-500',
    textColor: 'text-green-300',
    delay: '400ms',
  },
  {
    title: 'Computer Science',
    attendedPercent: 68,
    attendedFraction: '68/100',
    totalClasses: 40,
    attendedClasses: 27,
    barColor: 'bg-yellow-500',
    textColor: 'text-yellow-300',
    delay: '500ms',
  },
  {
    title: 'English Literature',
    attendedPercent: 45,
    attendedFraction: '45/100',
    totalClasses: 40,
    attendedClasses: 18,
    barColor: 'bg-red-500',
    textColor: 'text-red-300',
    delay: '600ms',
  },
  {
    title: 'Environmental Science',
    attendedPercent: 80,
    attendedFraction: '80/100',
    totalClasses: 40,
    attendedClasses: 32,
    barColor: 'bg-green-500',
    textColor: 'text-green-300',
    delay: '700ms',
  },
  {
    title: 'Advanced Algorithms',
    attendedPercent: 95,
    attendedFraction: '95/100',
    totalClasses: 40,
    attendedClasses: 38,
    barColor: 'bg-green-500',
    textColor: 'text-green-300',
    delay: '800ms',
  },
];

const StudentAttendance = () => {
  const overallAttendance = 85;
  const strokeDasharray = `${overallAttendance}, 100`;

  // NOTE: This style block is necessary to include the specific styles (like animations and circle progress) 
  // that were not handled by the assumed external Layout/Tailwind setup.
  const customStyles = (
    <style>{`
        .glassmorphism {
            /* Since this component will likely be placed on a light Layout background, we'll simplify 
               the glassmorphism to look good on white/light gray, using shadows instead of blur on a dark background. */
            background: #FFFFFF; 
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        .card-hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(54, 96, 225, 0.15); /* Using the Library Portal's hover shadow for consistency */
            transition: all 0.3s ease-in-out;
        }
        .progress-circle {
            transition: stroke-dashoffset 1s ease-out;
        }
        .progress-circle-bg {
            stroke: #e5e7eb; /* Light gray for contrast on white card */
        }
        .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `}</style>
  );
  
  // NOTE: The original component's text was white due to the dark background. 
  // Since it is now assumed to be on a light background via the Layout, the text color has been adjusted 
  // to black (text-gray-900) for readability, while preserving the color-coded status text.

  return (
    <Layout>
      {customStyles}
      <div className="w-full mx-auto text-gray-900 px-4 py-3">
        <div className="mb-10 fade-in-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-3xl font-bold">
            Attendance – Subject Wise Report
          </h2>
          <p className="text-gray-500 mt-1">
            Hello, Amelia, here’s your attendance summary.
          </p>
        </div>

        {/* Overall Attendance Card */}
        <div
          className="mb-12 glassmorphism rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="relative size-40">
            <svg className="size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <circle
                className="progress-circle-bg"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeWidth="3"
              ></circle>
              <circle
                className="progress-circle text-green-600"
                cx="18"
                cy="18"
                fill="none"
                r="16"
                strokeDasharray={strokeDasharray}
                strokeDashoffset="0"
                strokeLinecap="round"
                strokeWidth="3.5"
                transform="rotate(-90 18 18)"
                style={{ stroke: 'var(--gradient-end)' }} // Use gradient-end color for the progress bar
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-900">
                {overallAttendance}%
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Overall Attendance
            </h3>
            <p className="text-green-600 text-lg mt-1">
              Good job! You’re meeting requirements ✅
            </p>
          </div>
        </div>

        {/* Subject Attendance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {subjectAttendance.map((subject, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-6 flex flex-col justify-between card-hover-effect fade-in-up"
              style={{ animationDelay: subject.delay }}
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {subject.title}
                </h3>
                <div className="relative w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div
                    className={`${subject.barColor} h-2.5 rounded-full`}
                    style={{ width: `${subject.attendedPercent}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mb-4 text-gray-600">
                  <span className={`font-semibold ${subject.textColor}`}>
                    {subject.attendedPercent}% Attended
                  </span>
                  <span>{subject.attendedFraction}</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-auto">
                Total Classes: {subject.totalClasses} | Attended:{' '}
                {subject.attendedClasses}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StudentAttendance;