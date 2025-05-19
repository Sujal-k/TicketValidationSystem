import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WelcomePage from './pages/WelcomePage';
import EventsPage from './pages/EventsPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/signup" element={<SignUp />} />
      <Route path="/user/events" element={<EventsPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
