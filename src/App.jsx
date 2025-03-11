import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import AddContactPage from './Pages/ContactPage';
import ContactDetailsPage from './Pages/ContactDetailsPage';
import Navbar from './Components/Vavbar';
import './App.css';

const App = () => {
  const [contact, setContact] = useState(null);

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<HomePage setContact={setContact} />}
          />
          <Route
            path="/add-contact"
            element={<AddContactPage setContact={setContact} />}
          />
          <Route
            path="/contact-details"
            element={<ContactDetailsPage contact={contact} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


