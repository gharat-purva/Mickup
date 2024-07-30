// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { FaImage, FaCircleNotch, FaDiceFour, FaUserAlt, FaCalendarAlt, FaCog, FaPowerOff, FaBell, FaChevronDown } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import logoDesktop from '../assets/logoDesktop.png';
import logoMobile from '../assets/logoMobile.png';

// Navbar component
const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      {/* Left side: Mickup text */}
      <div className="flex items-center space-x-4">
      <div className="bg-white p-1 rounded">
      {isMobile ? (
          <img src={logoMobile} alt="Logo" style={{ width: '25px' }} />
        ) : (
          <img src={logoDesktop} alt="Logo" style={{ width: '150px' }} />
        )}
         </div>
        <FaCircleNotch className="text-5xl text-purple" />
        <span className="text-xl font-semibold">Mickup</span>
      </div>

      {/* Right side: User info and icons */}
      <div className="flex items-center space-x-8">
        <Link to="/" className={`flex items-center justify-center space-x-2 p-2 rounded-xl w-28 ${location.pathname === '/' ? 'bg-purple' : 'bg-lesser-black'}`}>
          <FaDiceFour />
          <span>Home</span>
        </Link>
        <Link to="/profile" className={`flex items-center justify-center space-x-2 p-2 rounded-full ${location.pathname === '/profile' ? 'bg-purple' : 'bg-lesser-black'}`}>
          <FaUserAlt />
        </Link>
        <Link to="/calendar" className={`flex items-center justify-center space-x-2 p-2 rounded-full ${location.pathname === '/calendar' ? 'bg-purple' : 'bg-lesser-black'}`}>
          <FaCalendarAlt />
        </Link>
        <Link to="/settings" className={`flex items-center justify-center space-x-2 p-2 rounded-full ${location.pathname === '/settings' ? 'bg-purple' : 'bg-lesser-black'}`}>
          <FaCog />
        </Link>
        <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
          <FaPowerOff />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center space-x-2 bg-lesser-black text-white p-2 rounded-full">
            <FaBell />
          </div>
          <FaImage className="text-lesser-black bg-light-gray rounded-full p-1 text-4xl" />
          <span>Nirmala Sari</span>
          <FaChevronDown />
        </div>
      </div>
    </nav>
  );
};

// Home component
const Home = () => {
  return (
    <div>
    </div>
  );
};

// Profile component
const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

// Calendar component
const Calendar = () => {
  return (
    <div>
      <h1>Calendar</h1>
    </div>
  );
};

// Settings component
const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />  // Use element prop instead of component
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
