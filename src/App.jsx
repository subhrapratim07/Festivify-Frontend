import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home';
import Helps from './helps/Helps';
import Signup from './components/Signup';
import Abouts from './abouts/Abouts';
import Contacts from './contacts/Contacts';
import CarParkingArea from './components/CarParkingArea';
import Location from './components/Location';
import Table from './components/Table'; // Import Table component
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser] = useAuth(); // Assuming useAuth returns an array [authUser, setAuthUser]

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Help" element={ <Helps /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/About" element={<Abouts />} />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/location" element={<Location />} />
        <Route path="/carparkingarea" element={<CarParkingArea />} />
        <Route path="/table" element={<Table />} /> {/* Add this route */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
