import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

// =================================================================================
//                                  DATA DEFINITION
// =================================================================================

// --- News & Events Data ---
const newsData = [
  {
    category: 'Academics',
    categoryColor: 'purple',
    title: 'National Level Hackathon 2024',
    description: 'Our college is proud to host the annual national-level hackathon, bringing together the brightest minds.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnNydoBWVdVwBDa9Zkez7sTVuf1Dwg4aEaAebxFMv0JgsOAFiZ0GLArTzRGTsScGYAj1JUwys0u8ITVCjUYrICeLBeTDKiIVL9ANmB91nHT-xrAXtpYFsUySLMSPO_qvHsRsHKj29T7wThxsbWRyU6nG1IqeTRkjmVN5k1ayRuNa-Zfe7BYKVmR5FUBlYVOTgtEon8R2yq55ccSj-4kYN3C1K_OkFJDkVKNjATEwKDsZRSs1vVAndIhkfDX1AHOIJHM4pCBpPdsaQ',
  },
  {
    category: 'Workshop',
    categoryColor: 'blue',
    title: 'AI & Machine Learning Workshop',
    description: 'A hands-on workshop on the latest trends in Artificial Intelligence and Machine Learning for students.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNKxhsX9uu44gyF6PCuFFk0qJ80_XZdwQw9iht5gahEkVFJLEcjkjdBmHzpdXCvQofFP7vKjkBxJ5f0O68TeTM9wUN9LqFnkFNqXB6h33_EhYgg7FxV_9x6wfPlcKxqYM-fAoZzE7ctKOKf8aCIaXgp_i__G3UiYafiObRiVeD7nqEO3tIgJlyNUttrnXtYjO0_Du3alMBKxZeKFePWWCWW7ahU7iGCt7Bqx4SHdHHY844inTo8T_60iBoRr8lZztKmSfK0p8nd7A',
  },
  {
    category: 'Industry',
    categoryColor: 'green',
    title: 'Industry Collaboration with TechCorp',
    description: 'We are excited to announce our new partnership with TechCorp for internships and joint research projects.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRmqUk_zOsEM-qBF1n36KvJ1_JxL7zgXHwNtGbvt-I14gTv6BmK4PktGfmJTg0LICuOd3LxE5SMs8ZCl_UR8rxWhYOoxCv7mpTwYR7FGXxIYwMsdNRdTnDmD7K1ZiC3KpeIl7amf5l63f00vGQVCCvJEJqpEzmBMGS1OgX8d2tfBK3gDocQ5gkaRQmTv8MHyBL5wnpyOKaT4cMeBSapz3iXN_q6PkrovsPrHn0x1LX5_DddAhsDBtNP1UqYXTM8d82MUZ2c-lxawY',
  },
];

const newsFilters = [
  { label: 'Latest News', active: true, className: 'text-white bg-purple-600 shadow-md' },
  { label: 'Upcoming Events', active: false, className: 'text-gray-600 hover:bg-gray-300/70' },
];

// --- Notice Board Data ---
const noticeData = [
  {
    date: '28 July, 2024',
    title: 'B.Tech First Year Mid-Term Exam Schedule',
    link: '#',
    borderColor: 'purple-500',
    category: 'Examination'
  },
  {
    date: '25 July, 2024',
    title: 'Notice for Scholarship Application 2024-25',
    link: '#',
    borderColor: 'blue-500',
    category: 'Academic'
  },
  {
    date: '22 July, 2024',
    title: 'Updated Holiday List for the Current Semester',
    link: '#',
    borderColor: 'green-500',
    category: 'General'
  },
];

const noticeFilters = [
    { label: 'Academic', color: 'blue' },
    { label: 'Examination', color: 'purple' },
    { label: 'General', color: 'green' },
    { label: 'Tenders', color: 'yellow' },
];


// =================================================================================
//                                  REACT COMPONENT
// =================================================================================

const Home = () => {
  return (
    <Layout>
      <main>
        {/* ======================= HERO SECTION ======================= */}
        <section className="relative h-[calc(100vh-130px)] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMEn49u3T0QxfOscaFQPKMZIaOij7HyDtf5sJdWWp5tbzuiBcNwXs5HvuyqGo_60B4hqY7FITgAprzMoHjmhRV2uAhLrzjndoAmGuuFn3EKuAqSu3oYcN00oCu6w2jJaXA60kvq9bsmXly61tvl5gea-klbXAaPiIwa4DME4DuKGhBz6LfGh9P1adH520d4YB-63url2reZLz_lUlTOg8ZzeYIlC4xyZz9xGci1wNd3k1F1sHF09Uty9LGmdZZPF0kPM_SR3nvP2o')" }}>
          <div className="absolute inset-0 hero-gradient-overlay"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h1 className="text-5xl md:text-7xl font-extrabold !leading-tight" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>Innovate. Educate. Elevate.</h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl font-light">Join a community of thinkers and creators at the forefront of engineering and technology.</p>
            <button className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/80 transform hover:scale-110 transition-all duration-300">Explore Our Campus</button>
          </div>
        </section>

        {/* ======================= NEWS & EVENTS SECTION ======================= */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>News & Events</h2>
              <p className="mt-3 text-lg text-gray-600">Discover the latest updates and upcoming events.</p>
            </div>
            
            {/* Event/News Toggles using map() */}
            <div className="max-w-md mx-auto mb-10 bg-gray-200 rounded-full p-1 flex justify-center space-x-1">
              {newsFilters.map((filter, index) => (
                  <button 
                      key={`news-filter-${index}`} 
                      className={`px-6 py-2.5 text-sm font-semibold rounded-full ${filter.active ? filter.className : filter.className}`}
                  >
                      {filter.label}
                  </button>
              ))}
            </div>

            {/* News Cards using map() */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsData.map((newsItem, index) => (
                <div 
                  key={`news-card-${index}`} 
                  className="news-card bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/80"
                >
                  <img alt={newsItem.title} className="w-full h-56 object-cover" src={newsItem.imageUrl} />
                  <div className="p-6">
                    <span className={`text-xs font-semibold text-${newsItem.categoryColor}-600 bg-${newsItem.categoryColor}-100 px-3 py-1 rounded-full`}>{newsItem.category}</span>
                    <h3 className={`mt-4 text-xl font-bold text-gray-800 hover:text-${newsItem.categoryColor}-600 transition-colors`}>{newsItem.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{newsItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= NOTICE BOARD SECTION ======================= */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>Notice Board</h2>
              <p className="mt-3 text-lg text-gray-600">All important announcements and circulars.</p>
              
              {/* Category Filters using map() */}
              <div className="mt-6 flex justify-center gap-2">
                  {noticeFilters.map((filter, index) => (
                      <span key={`notice-filter-${index}`} className={`bg-${filter.color}-200 text-${filter.color}-800 text-xs font-medium px-3 py-1.5 rounded-full`}>
                          {filter.label}
                      </span>
                  ))}
              </div>
            </div>

            <div className="relative max-w-2xl mx-auto pl-10">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>
              
              {/* Notice Items using map() */}
              {noticeData.map((notice, index) => (
                <div key={`notice-item-${index}`} className="relative mb-8">
                  {/* Circle timeline indicator, dynamically colored */}
                  <div className={`absolute -left-7 top-1 h-6 w-6 rounded-full bg-white border-2 border-${notice.borderColor} flex items-center justify-center`}>
                    <div className={`h-3 w-3 bg-${notice.borderColor} rounded-full`}></div>
                  </div>
                  {/* Notice card, dynamically colored */}
                  <div className={`bg-white p-5 rounded-lg shadow-md border-l-4 border-${notice.borderColor}`}>
                    <p className="text-sm text-gray-500">{notice.date}</p>
                    <a className={`font-semibold text-gray-800 hover:text-${notice.borderColor.split('-')[0]}-600 flex items-center gap-2 mt-1`} href={notice.link}>
                      {notice.title} <span className="material-symbols-outlined text-red-500 text-lg">picture_as_pdf</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;