import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import ContactManager from "./components/ContactManager";
import "./App.css"


const App = () => {
  const [showContactManager, setShowContactManager] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Load contacts from localStorage when the app starts
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (emailToDelete) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.email !== emailToDelete)
    );
  };

  return (
    <div>
      {!showContactManager ? (
        <LandingPage onEnter={() => setShowContactManager(true)} />
      ) : (
        <ContactManager
          contacts={contacts}
          addContact={addContact}
          deleteContact={deleteContact}
          onBack={() => setShowContactManager(false)}
        />
      )}
    </div>
  );
};

export default App;
