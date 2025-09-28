import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

// Student Imports (Case-Correct)
import StudentProfile from './components/student/StudentProfile';
import StudentResources from './components/student/StudentResource';
import StudentPayment from './components/student/StudentPayment';
import StudentLibrary from './components/student/StudentLibrary';
import StudentAttendance from './components/student/StudentAttendance';
import StudentDashboard from './components/student/StudentDashboard';
import StudentClasses from './components/student/StudentClasses';

// Faculty Imports (Corrected to use lowercase 'faculty' directory)
import FacultyDashboard from './components/faculty/FacultyDashboard';
import FacultyClass from './components/faculty/FacultyClasses';
import FacultyDropoutPrediction from './components/faculty/FacultyDropout';
import FacultyLibrary from './components/faculty/FacultyLibrary'; // Case corrected
import FacultyMarksUpdate from './components/faculty/FacultyMarksUpdate'; // Case corrected
import FacultyResource from './components/faculty/FacultyResource'; // Case corrected
import FacultyAttendance from './components/faculty/FacultyAttendance'; // Case corrected

// Hostel Warden Imports (Case-Correct)
import WardenDashboard from './components/HostelWarden/WardenDashboard';
import WardenTotalRooms from './components/HostelWarden/WardenTotalRooms';
import WardenProfile from './components/HostelWarden/WardenProfile';
import WardenNotifications from './components/HostelWarden/WardenNotification';
import HostelRequests from './components/HostelWarden/WardenHostenRequest';
import RoomAvailability from './components/HostelWarden/WardenAvailableRooms';
import AllottedRooms from './components/HostelWarden/WardenAllotedRooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Student Routes */}
        <Route path='/student' element={<StudentDashboard/>}/>
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/resource" element={<StudentResources />} />
        <Route path="/student/payment" element={<StudentPayment />} />
        <Route path="/student/library" element={<StudentLibrary />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/classes" element={<StudentClasses />} />
        
        {/* Faculty Routes */}
        <Route path='/faculty' element={<FacultyDashboard/>}/>
        <Route path='/faculty/classes' element={<FacultyClass/>}/>
        <Route path='/faculty/dropout' element={<FacultyDropoutPrediction/>}/>
        <Route path='/faculty/library' element={<FacultyLibrary/>}/>
        <Route path='/faculty/marks' element={<FacultyMarksUpdate/>}/>
        <Route path='/faculty/resource' element={<FacultyResource/>}/>
        <Route path='/faculty/attendance' element={<FacultyAttendance/>}/>
        
        {/* Hostel Warden Routes */}
        <Route path='/hostel' element={<WardenDashboard/>}/>
        <Route path='/hostel/total-rooms' element={<WardenTotalRooms/>}/>
        <Route path='/hostel/profile' element={<WardenProfile/>}/>
        <Route path='/hostel/notification' element={<WardenNotifications/>}/>
        <Route path='/hostel/room-request' element={<HostelRequests/>}/>
        <Route path='/hostel/available-rooms' element={<RoomAvailability/>}/>
        <Route path='/hostel/alloted-rooms' element={<AllottedRooms/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
