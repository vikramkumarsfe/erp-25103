import React from 'react';
import Layout from './Layout';
import { Search, Article, Movie, BarChart, Star, StarOutline } from '@mui/icons-material';

/**
 * Data for dynamically rendering the resource cards.
 */
const resourceCardsData = [
  {
    subject: "Mathematics I",
    teacher: "Prof. Sharma",
    status: { label: "New", color: "blue" },
    isStarred: false,
    type1: { icon: "📄 PDF", label: "PDF" },
    type2: { icon: "📝 Notes", label: "Notes" },
    uploaded: "12 Oct 2023",
    delay: '200ms',
  },
  {
    subject: "Physics II",
    teacher: "Prof. Gupta",
    status: null,
    isStarred: false,
    type1: { icon: "🎥 Video", label: "Video" },
    type2: { icon: "📊 PPT", label: "PPT" },
    uploaded: "10 Oct 2023",
    delay: '300ms',
  },
  {
    subject: "Computer Science",
    teacher: "Prof. Verma",
    status: { label: "Updated", color: "green" },
    isStarred: true,
    type1: { icon: "📝 Notes", label: "Notes" },
    type2: null,
    uploaded: "08 Oct 2023",
    delay: '400ms',
  },
  {
    subject: "English Literature",
    teacher: "Prof. Singh",
    status: null,
    isStarred: false,
    type1: { icon: "📄 PDF", label: "PDF" },
    type2: null,
    uploaded: "05 Oct 2023",
    delay: '500ms',
  },
  {
    subject: "Environmental Science",
    teacher: "Prof. Reddy",
    status: null,
    isStarred: false,
    type1: { icon: "📊 PPT", label: "PPT" },
    type2: null,
    uploaded: "02 Oct 2023",
    delay: '600ms',
  },
  {
    subject: "Advanced Algorithms",
    teacher: "Prof. Iyer",
    status: null,
    isStarred: true,
    type1: { icon: "🎥 Video", label: "Video" },
    type2: { icon: "📝 Notes", label: "Notes" },
    uploaded: "01 Oct 2023",
    delay: '700ms',
  },
];

const ResourceCard = ({ data }) => {
  const { subject, teacher, status, isStarred, type1, type2, uploaded, delay } = data;
  const statusClasses = status ? `bg-${status.color}-100 text-${status.color}-800 text-xs font-medium px-2.5 py-0.5 rounded-full` : '';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col card-hover-effect border-2 border-transparent fade-in" style={{ animationDelay: delay }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{subject}</h3>
          <p className="text-sm text-gray-500">{teacher}</p>
        </div>
        <div className="flex items-center gap-2">
          {status && <span className={statusClasses}>{status.label}</span>}
          <button className={`transition ${isStarred ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}>
            {isStarred ? <Star /> : <StarOutline />}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-600 mb-4">
        {type1 && <span className="flex items-center gap-1 text-sm">{type1.icon}</span>}
        {type2 && <span className="flex items-center gap-1 text-sm">{type2.icon}</span>}
      </div>
      <p className="text-xs text-gray-400 mb-6">Uploaded: {uploaded}</p>
      <div className="mt-auto">
        <button className="w-full text-white font-semibold py-2 px-4 rounded-lg gradient-bar hover:shadow-lg hover:shadow-purple-500/20 transition-shadow ripple">
          Download / View
        </button>
      </div>
    </div>
  );
};


const StudentResources = () => {
  // Hardcoded current path for Layout active state check (ideally this comes from useLocation)
  const currentPath = '/student/resources';

  return (
    <Layout currentPath={currentPath}>
      <main className="flex-1 p-4 lg:p-8 main-bg overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">Resources Provided by Your Teachers</h2>
            <p className="text-gray-500 mt-1">Access all study materials uploaded by faculty members.</p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="mb-6 fade-in" style={{ animationDelay: '100ms' }}>
            <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-grow w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent"
                  placeholder="Search resources by subject/teacher"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <select className="border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent">
                  <option>Subject</option>
                  <option>Teacher</option>
                  <option>Type</option>
                  <option>Date</option>
                </select>
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {resourceCardsData.map((data, index) => (
              <ResourceCard key={index} data={data} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-2">
              <a className="px-3 py-2 text-gray-500 hover:bg-gray-200 rounded-md" href="#">Previous</a>
              <a className="px-4 py-2 text-white bg-[var(--gradient-start)] rounded-md" href="#">1</a>
              <a className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-200 rounded-md" href="#">2</a>
              <a className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-200 rounded-md" href="#">3</a>
              <a className="px-3 py-2 text-gray-500 hover:bg-gray-200 rounded-md" href="#">Next</a>
            </nav>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default StudentResources;
