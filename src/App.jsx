// import React, { useState, useEffect } from "react";
// import LandingPage from "./Components/Landingpage";
// import ContactManager from "./Components/Contactmanager";
// import "./App.css"


// const App = () => {
//   const [showContactManager, setShowContactManager] = useState(false);
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const savedContacts = localStorage.getItem("contacts");
//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = (contact) => {
//     setContacts((prevContacts) => [...prevContacts, contact]);
//   };

//   const deleteContact = (emailToDelete) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.email !== emailToDelete)
//     );
//   };

//   return (
//     <div>
//       {!showContactManager ? (
//         <LandingPage onEnter={() => setShowContactManager(true)} />
//       ) : (
//         <ContactManager
//           contacts={contacts}
//           addContact={addContact}
//           deleteContact={deleteContact}
//           onBack={() => setShowContactManager(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

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
