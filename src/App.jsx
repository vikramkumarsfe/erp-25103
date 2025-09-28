import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

import StudentProfile from './components/Student/StudentProfile';
import StudentResources from './components/Student/StudentResource';
import StudentPayment from './components/Student/StudentPayment';
import StudentLibrary from './components/Student/StudentLibrary';
import StudentAttendance from './components/Student/StudentAttendance';
import StudentDashboard from './components/Student/StudentDashboard';
import StudentClasses from './components/Student/StudentClasses';
import FacultyDashboard from './components/Faculty/FacultyDashboard';
import FacultyClass from './components/Faculty/FacultyClasses';
import FacultyDropoutPrediction from './components/Faculty/FacultyDropout';
import FacultyLibrary from './components/Faculty/FacultyLibrary';
import FacultyMarksUpdate from './components/Faculty/FacultyMarksUpdate';
import FacultyResource from './components/Faculty/FacultyResource';
import FacultyAttendance from './components/Faculty/FacultyAttendance';
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
        <Route path='/student' element={<StudentDashboard/>}/>
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/resource" element={<StudentResources />} />
        <Route path="/student/payment" element={<StudentPayment />} />
        <Route path="/student/library" element={<StudentLibrary />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/classes" element={<StudentClasses />} />
        <Route path='/faculty' element={<FacultyDashboard/>}/>
        <Route path='/faculty/classes' element={<FacultyClass/>}/>
        <Route path='/faculty/dropout' element={<FacultyDropoutPrediction/>}/>
        <Route path='/faculty/library' element={<FacultyLibrary/>}/>
        <Route path='/faculty/marks' element={<FacultyMarksUpdate/>}/>
        <Route path='/faculty/resource' element={<FacultyResource/>}/>
        <Route path='/faculty/attendance' element={<FacultyAttendance/>}/>
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
