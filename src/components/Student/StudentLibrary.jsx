import React from 'react';
import Layout from './Layout'; // Assuming a Layout component handles the overall page structure (sidebar, header, footer)
import {
//   Person as PersonIcon,
//   Checklist as ChecklistIcon,
//   SourceEnvironment as ResourcesIcon,
//   Class as ClassIcon,
//   Payment as PaymentIcon,
//   LocalLibrary as LocalLibraryIcon,
  Schedule as ScheduleIcon,
  Error as ErrorIcon,
  Search as SearchIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';


const summaryCards = [
  {
    icon: '📚',
    iconBgClass: 'bg-blue-100',
    title: 'Issued Books',
    value: '3',
    valueColorClass: 'text-gray-900',
    delay: '100ms',
  },
  {
    icon: <ScheduleIcon className="text-2xl text-yellow-600" />,
    iconBgClass: 'bg-yellow-100',
    title: 'Due Soon',
    value: '1',
    valueSuffix: <span className="text-base font-medium text-gray-500"> in 3 days</span>,
    valueColorClass: 'text-gray-900',
    delay: '200ms',
  },
  {
    icon: <ErrorIcon className="text-2xl text-red-600" />,
    iconBgClass: 'bg-red-100',
    title: 'Overdue Fine',
    value: '₹25.00',
    valueColorClass: 'text-red-600',
    delay: '300ms',
  },
];

const issuedBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    issuedDate: 'Oct 15, 2023',
    dueDate: 'Nov 15, 2023',
    status: 'On Time',
    statusBgClass: 'bg-[#E8F9EE]',
    statusTextColor: 'text-[#1E8A4D]',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    issuedDate: 'Sep 20, 2023',
    dueDate: 'Oct 05, 2023',
    status: 'Overdue',
    statusBgClass: 'bg-[#FFEAEA]',
    statusTextColor: 'text-[#D32F2F]',
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    issuedDate: 'Oct 25, 2023',
    dueDate: 'Nov 10, 2023',
    status: 'On Time',
    statusBgClass: 'bg-[#E8F9EE]',
    statusTextColor: 'text-[#1E8A4D]',
  },
];

const exploreBooks = [
  {
    coverSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzhFS6iiHyjgN0Fngu0baPS77jABbcy9ctDmNJlDonNpxIFmbiV4zB5KcfQ48CL7hvbOUOBn7daylwLlUmRW_PRU9c_E0ymMwHOAmHF4mwOAO4P97a8chWnwiPQ85HtFB-b0SnssD0aUpONfTWenEk2ui8RJC2kFLbleO6JgBcEYdPZ1Fcksk3cln9wj3-yXs2UHuH4E4S9jyrZSiGk-xceMM7VexG-027xnMqVxm_nPlu-kG_jenV6ncY55ZxKkqdXUkkosbiQyw',
    title: 'Sapiens: A Brief History',
    author: 'Yuval Noah Harari',
    available: true,
    statusText: 'Available',
    statusBgClass: 'bg-[#E8F9EE]',
    statusTextColor: 'text-[#1E8A4D]',
  },
  {
    coverSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkiiub-vtCTsbsRsUU8c3PG2ejndc6hoyybDKfZtc1ezTguYSQn5ihRswHt5dYgrtVvz2z1P7_RXdhV-HDB4YZdPZ8rFXpYZ-ppaktFJqkx1cZH9nZH8xz51lxIL6l_Vt86yQ8w4Uy_1FDzUzTI2-FrcRhZzdnYaihpJ-Jeo4Lg9CfzJFBqojBwiYQkh9D4aFr-jj78Pt9DwF_xXnz5qdf3jkVFbXDvUKWuGMgWMyj-yHDcWglgi6BMklm0AENBLYlmqCUjax6XY8',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    available: false,
    statusText: 'Not Available',
    statusBgClass: 'bg-[#FFEAEA]',
    statusTextColor: 'text-[#D32F2F]',
  },
  {
    coverSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5-R9wbb3OCXAOB6X1kZt8Fdz4Jcyq9mmBPBMV33gCy4QqFrDbRhZDoAxbKLpbvcIaJyNEnumYzovlCqjuaVvwiHUbpaP_F9JnY98L1FNaknMJ1F7e-Lf1Use0ZV2FrIBYVwfTqOwLYnyoJg1XnpWYAU8dE3iHkFbUs_jwGawHJQcCMDyVpaUF0yupO3Joa3mPGC6bzLkgQbtAA3xXE0K8pZc5RGgNrnSNpQL38tVZekNzEhp7-jZZaJ00i1nVQu-_cv_LQmuiIys',
    title: 'The Laws of Human Nature',
    author: 'Robert Greene',
    available: true,
    statusText: 'Available',
    statusBgClass: 'bg-[#E8F9EE]',
    statusTextColor: 'text-[#1E8A4D]',
  },
  {
    coverSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBii7PLQuV5ZIyjgn-WXVyGovc51cPV4fzPmkcBax5VU3aCfY-3icKfPjOpy5SAtNW0waXPV2eHF-pPAXoLXX3nhCZ9NPPBsYPCpAlU_l8znjW61PFsz6qCZs8xIuOjy1Oh9MnxTQJtMNk38Zod80dznDaBJGg9jj5YFNZQpWqS2X1HEuxwgBfkLAsjM_yR6Uu_U5l8dMKKjp9aoqp6fxLASXsk3sX6vJa5r_rEwEkjO0_tvjYmUVoOJobxwd8tmCuKpCLP8ZM7sfU',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    available: true,
    statusText: 'Available',
    statusBgClass: 'bg-[#E8F9EE]',
    statusTextColor: 'text-[#1E8A4D]',
  },
];

const digitalResources = [
  {
    title: 'eBooks Collection',
    description: 'Access a vast collection of digital books across various subjects.',
    href: '#',
  },
  {
    title: 'Journals & Articles',
    description: 'Explore academic journals and articles for your research.',
    href: '#',
  },
  {
    title: 'Research Papers',
    description: 'Read papers from conferences and research scholars.',
    href: '#',
  },
];

const StudentLibrary = () => {
  // Define CSS variables and keyframes directly in a style tag within the component
  const style = (
    <style>{`
        :root {
            --gradient-start: #3660E1;
            --gradient-end: #8737E0;
        }
        .gradient-bar {
            background-image: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
        .gradient-text {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .active-link {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            color: white;
            font-weight: 600;
            box-shadow: 0 4px 15px 0 rgba(138, 55, 224, 0.25);
        }
        .active-link .material-symbols-outlined {
            color: white;
        }
        .card-hover-effect {
            transition: all 0.3s ease-in-out;
        }
        .card-hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(54, 96, 225, 0.15);
        }
        .book-card-hover {
            transition: all 0.3s ease-in-out;
        }
        .book-card-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(135, 55, 224, 0.2);
        }
        .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .overdue-badge {
            animation: soft-blink 1.5s infinite;
        }
        @keyframes soft-blink {
            50% {
                box-shadow: 0 0 10px 2px rgba(239, 68, 68, 0.7);
            }
        }
        .btn-gradient {
            background-image: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            color: white;
            font-weight: 600;
        }
    `}</style>
  );

  return (
    <Layout>
      {style}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-8 fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Library Portal</h2>
          <p className="text-gray-500 mt-1">
            Manage your issued books and explore available resources.
          </p>
        </div>

        {/* --- Summary Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {summaryCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4 card-hover-effect fade-in"
              style={{ animationDelay: card.delay }}
            >
              <div className={`${card.iconBgClass} p-3 rounded-full`}>
                {typeof card.icon === 'string' ? (
                  <span className="text-2xl">{card.icon}</span>
                ) : (
                  card.icon
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {card.title}
                </h3>
                <p className={`text-3xl font-bold ${card.valueColorClass}`}>
                  {card.value}
                  {card.valueSuffix}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- My Issued Books Table Section --- */}
        <div
          className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-6 mb-8 fade-in"
          style={{ animationDelay: '400ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            My Issued Books
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Book Title & Author
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {issuedBooks.map((book, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#1E1E2F]">
                        {book.title}
                      </div>
                      <div className="text-sm text-[#555]">{book.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#666]">
                      Issued: {book.issuedDate} | Due: {book.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${book.statusBgClass} ${book.statusTextColor} ${book.status === 'Overdue' ? 'overdue-badge' : ''}`}
                      >
                        {book.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center space-x-2">
                      <button className="btn-gradient py-1.5 px-4 rounded-md text-sm">
                        Renew
                      </button>
                      <button className="btn-gradient py-1.5 px-4 rounded-md text-sm">
                        Return
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Search & Explore Books Section --- */}
        <div
          className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-6 mb-8 fade-in"
          style={{ animationDelay: '500ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Search & Explore Books
          </h3>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[var(--gradient-start)] focus:border-[var(--gradient-start)]"
                placeholder="Search by book title, author, ISBN..."
                type="text"
              />
            </div>
            <select className="border border-gray-300 rounded-lg focus:ring-[var(--gradient-start)] focus:border-[var(--gradient-start)]">
              <option>All Categories</option>
              <option>Computer Science</option>
              <option>Design</option>
              <option>Business</option>
            </select>
            <select className="border border-gray-300 rounded-lg focus:ring-[var(--gradient-start)] focus:border-[var(--gradient-start)]">
              <option>Availability</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {exploreBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden book-card-hover shadow-[0px_4px_12px_rgba(0,0,0,0.08)]"
              >
                <img
                  alt="Book Cover"
                  className="w-full h-48 object-cover"
                  src={book.coverSrc}
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 truncate">
                    {book.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${book.statusBgClass} ${book.statusTextColor} mb-3`}
                  >
                    {book.statusText}
                  </span>
                  {book.available ? (
                    <button className="w-full text-white font-semibold py-2 px-4 rounded-lg gradient-bar hover:shadow-lg transition-shadow text-sm">
                      Request Book
                    </button>
                  ) : (
                    <button
                      className="w-full bg-gray-200 text-gray-500 font-semibold py-2 px-4 rounded-lg cursor-not-allowed text-sm"
                      disabled
                    >
                      Reserve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Digital Library Resources Section --- */}
        <div
          className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-6 fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <h3 className="text-2xl font-bold text-[#1E1E2F] mb-4">
            Digital Library Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 card-hover-effect border border-gray-100"
              >
                <h4 className="font-semibold text-[#1E1E2F]">{resource.title}</h4>
                <p className="text-sm text-[#555] mt-1 mb-3">
                  {resource.description}
                </p>
                <a
                  className="font-medium text-indigo-600 hover:text-indigo-800 flex items-center"
                  href={resource.href}
                >
                  View / Download{' '}
                  <ArrowForwardIcon className="text-base ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentLibrary;