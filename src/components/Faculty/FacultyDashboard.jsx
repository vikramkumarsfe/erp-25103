import React from 'react';
import Layout from './Layout'; // Import the Layout component
import {
  School,
  PendingActions,
  UploadFile,
  EventNote,
} from '@mui/icons-material';

// --- Data Extraction (retained here as it pertains to main content) ---

const statsCards = [
  { label: "My Classes", value: 4, icon: School },
  { label: "Pending Attendance", value: 1, icon: PendingActions },
  { label: "Resources Uploaded", value: 12, icon: UploadFile },
  { label: "Upcoming Exams", value: 3, icon: EventNote },
];

const todaysClasses = [
  {
    name: "Advanced Quantum Physics",
    details: "10:00 AM - 11:30 AM | Year 3, Sem 2 | Room 404",
    status: "Live",
    statusColor: "text-green-500",
    buttonText: "Start Class",
    showButton: true,
  },
  {
    name: "Intro to Astrophysics",
    details: "01:00 PM - 02:30 PM | Year 1, Sem 1 | Room 101",
    status: "Upcoming",
    statusColor: "text-blue-500",
    buttonText: null,
    showButton: false,
  },
];

const studentPerformance = [
  { name: "Rohan Verma", performance: "85%" },
  { name: "Priya Singh", performance: "92%" },
  { name: "Anjali Mehta", performance: "78%" },
  { name: "Vikram Rao", performance: "65%" },
];

const resourcesList = [
  { title: "Quantum Mechanics Notes", category: "Physics" },
  { title: "Astrophysics Textbook", category: "Astrophysics" },
  { title: "Lab Report Guidelines", category: "General" },
];

const upcomingExams = [
  { course: "Quantum Physics", type: "Mid-Term", date: "Oct 25, 2023" },
  { course: "Astrophysics", type: "Final", date: "Dec 15, 2023" },
];

const dropoutPredictions = [
  {
    name: "Vikram Rao",
    risk: "82%",
    riskLevel: "High risk",
    riskColor: "text-red-500",
    bgColor: "bg-red-500",
    bgLight: "bg-red-100",
    textColor: "text-red-800",
    width: "82%",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7IvCnU4uWwvd3hwQa7mot8D8kMR7KLR_LqcE2lXCWz9aBdeCBoGDLwAUGZkUFvw_0I1CHLh3hv2ONociLxwIkl1U5E58YsEh5MUnw3KY5o5RosBu8K8IicbH1s72CpSh3TgtnLSBu5gt573DZYakASOIjsku2OElvaKaV7EPIAXlmqsH6c0E7_6bZ6XE6X912-kGuuft3GOb5Tfzp5grqBV8U17RfjcGmX7C-MIWbcajhjySHqWfBS6pUd-nDyhQ-z-FqGhEUTRM",
  },
  {
    name: "Anjali Mehta",
    risk: "45%",
    riskLevel: "Medium risk",
    riskColor: "text-yellow-500",
    bgColor: "bg-yellow-500",
    bgLight: "bg-yellow-100",
    textColor: "text-yellow-800",
    width: "45%",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkMknDGn9_AaKOICGiACDGIbDZuJ9jO85nngLC39LRtG9umoF9PkpxwdajB2CyFIa0BooVoyU7h_8QhlVYWMNbtPZbnqhXqO1xrKs_25UyJGDMDXHdBQ-dP0T83U5uMyI3kIRYHj6eaDoBSQFMc0joHnIqAMH0Z2iOh5CeqHYKjAgosTxNYszrViuIWIwPrNdD1uPyUICSCs9vME6OjSwn_wwJSNW6962Ivj_Iia67Ubr7obejOTSQbIBQ7n4NspPSqM56ARJht4",
  },
  {
    name: "Sanjay Gupta",
    risk: "15%",
    riskLevel: "Low risk",
    riskColor: "text-green-500",
    bgColor: "bg-green-500",
    bgLight: "bg-green-100",
    textColor: "text-green-800",
    width: "15%",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_IDmwnivhhtPZD7xBoU6IWhRrC8W0Dl8K3wTyuAsp4Wkfv6PvR2yZ1vXGTsgTlixE7-6I_JMtb5b2_wL1mWxsvtD3f9iQSN_MgzF6XeNadKOGPW3SMYqqSMTbInC1H17KpPxrmkjOSntm1qJUfNaQhDT1fnMZ4yqbOI6XekRSnxurN6cC5E1qNRPyhH1H9KemaxGWfc5w1DB6byNAtQIbF7teBi5F2F2imt5eWei9xtSzxwLQv4jSUMxEAzIjnUTRUy0tx5en1Uo",
  },
];

// --- Main Component ---

const FacultyDashboard = () => {
    return (
        <Layout>
            <main className="flex-1 p-8 bg-[#F5F6FA] overflow-y-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h3>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statsCards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div key={card.label} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full gradient-bg text-white">
                                        <Icon />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">{card.label}</p>
                                        <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 space-y-8">

                        {/* Today's Classes */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Today's Classes</h4>
                            <div className="space-y-4">
                                {todaysClasses.map((cl) => (
                                    <div key={cl.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                                        <div>
                                            <p className="font-semibold text-gray-800">{cl.name}</p>
                                            <p className="text-sm text-gray-500">{cl.details}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`${cl.statusColor} font-semibold text-sm`}>{cl.status}</span>
                                            {cl.showButton && (
                                                <button className="px-4 py-2 text-sm font-semibold text-white gradient-bg rounded-lg shadow-md hover:opacity-90 transition-opacity">
                                                    {cl.buttonText}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Attendance Overview */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Attendance Overview</h4>
                                <div className="h-48 w-full flex items-center justify-center">
                                    <img alt="Attendance chart" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhPG4oHV_e8pHOkpF1jOq72IATJc_NzZq6hQ-t9egrKhyZlo908E5m2ldkoSThxal4yVy1haxLeHVN2GxZQPpYceDp2NadEkrvTegWeOkmcvcRcflcJN-d4pJ8AoXVoRqdV7ld3ptU3yke1J--Eqw5nLUsCYen2icF9ibknDkdf16mZYgJNqXLtd7OPAyr2xDRx3dLULf_HDs0BoCmB24YXMSaBV0_mjLoP-RK3aD9ix5UBRexWYxZ6K8wwo4uE3P203-Wkiq9nLE" />
                                </div>
                                <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                    Attendance pending for <span className="font-bold">Advanced Quantum Physics</span>. <a className="font-bold underline" href="#">Upload Now</a>
                                </div>
                            </div>

                            {/* Students Overview */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Students Overview</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="text-left text-gray-500">
                                                <th className="py-2">Name</th>
                                                <th className="py-2">Performance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {studentPerformance.map((student) => (
                                                <tr key={student.name}>
                                                    <td className="py-2">{student.name}</td>
                                                    <td className="py-2">{student.performance}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <a className="mt-4 inline-block text-sm font-semibold text-purple-600 hover:underline" href="#">View All Students</a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Resources & Library */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Resources & Library</h4>
                                <ul className="space-y-3 text-sm">
                                    {resourcesList.map((resource) => (
                                        <li key={resource.title} className="flex items-center justify-between">
                                            <span>{resource.title}</span>
                                            <span className="text-gray-400">{resource.category}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-4 w-full py-2 text-sm font-semibold text-white gradient-bg rounded-lg shadow-md hover:opacity-90 transition-opacity">Upload / Recommend</button>
                            </div>

                            {/* Upcoming Exams */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Upcoming Exams</h4>
                                <ul className="space-y-3 text-sm">
                                    {upcomingExams.map((exam) => (
                                        <li key={exam.course} className="flex items-center justify-between">
                                            <div>
                                                <p>{exam.course}</p>
                                                <p className="text-xs text-gray-400">{exam.type}</p>
                                            </div>
                                            <span className="text-gray-500">{exam.date}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-4 w-full py-2 text-sm font-semibold text-white gradient-bg rounded-lg shadow-md hover:opacity-90 transition-opacity">Manage Exams</button>
                            </div>
                        </div>
                    </div>

                    {/* Dropout Prediction (AI) */}
                    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">Dropout Prediction (AI)</h4>
                        <div className="space-y-6 flex-grow">
                            {dropoutPredictions.map((student) => (
                                <React.Fragment key={student.name}>
                                    <div className="flex items-center gap-4">
                                        <img alt="Student Avatar" className="size-12 rounded-full" src={student.avatar} />
                                        <div>
                                            <p className="font-semibold">{student.name}</p>
                                            <p className={`${student.riskColor} text-sm font-bold`}>{student.risk} Risk</p>
                                        </div>
                                        <span className={`ml-auto px-2 py-1 text-xs font-semibold ${student.textColor} ${student.bgLight} rounded-full`}>{student.riskLevel}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                                        <div className={`${student.bgColor} h-1.5 rounded-full`} style={{ width: student.width }}></div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                        <button className="mt-6 w-full py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">View Full Report</button>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default FacultyDashboard;