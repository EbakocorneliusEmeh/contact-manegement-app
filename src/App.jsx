import React, { useState } from "react";
import ContactManager from "./Components/Contactmanager";
import LandingPage from "./Components/Landingpage";
import "./App.css"

const App = () => {
  const [page, setPage] = useState("landing");
  const [contacts, setContacts] = useState([
    { name: "Alice Johnson", email: "alice@gmail.com", phone: "673-456-7890", type: "Professional" },
    { name: "Ben Smith", email: "Ben@gmail.com", phone: "6987-654-310", type: "Personal" },
    { name: "Sone Smith", email: "Sone@gmail.com.com", phone: "698-654-321", type: "Personal" },
    { name: "Bob Smith", email: "bob@gmail.com", phone: "650424812", type: "Personal" },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  return (
    <div>
      {page === "landing" ? (
        <LandingPage onEnter={() => setPage("contactManager")} />
      ) : (
        <ContactManager
          contacts={contacts}
          addContact={addContact}
          deleteContact={deleteContact}
          onBack={() => setPage("landing")}
        />
      )}
    </div>
  );
};

export default App;
