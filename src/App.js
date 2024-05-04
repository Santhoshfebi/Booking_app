
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Offers from './Pages/Offers';
import Credit from './Pages/Credit';
import ListYourShow from './Pages/ListYourShow';
import MovieDetails from './Dashboardcont/MovieDetails.jsx';
import Dash from './Dashboardcont/Dash'; // Import Dash component

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // You can set userRole from local storage or from any other source where it's stored
    const role = localStorage.getItem('userRole');
    setUserRole(role);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setUserRole={setUserRole} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/credit" element={<Credit />} />
        <Route path="/list-your-show" element={<ListYourShow />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {userRole === 'admin' && <Route path="/dashboard" element={<Dash />} />}
        {userRole === 'user' && <Route path="/dashboard" element={<Navigate to="/" />} />}

      </Routes>
    </Router>
  );
}

export default App;
