import React from "react";

const LandingPage = ({ onEnter }) => {
  const exampleContacts = [
    { name: "Etumbe Johnson", email: "Etumbe@gmail.com", phone: "673-456-7890", type: "Professional" },
    { name: "Nash nike", email: "Nash@gmail.com", phone: "697-654-3210", type: "Personal" },
  ];

  return (
    <div className="landing-page">
      <h1>Welcome to Cornelius Contact Manager App</h1>
      <p>Effortlessly manage all your personal and professional contacts in one place.</p>
      <button onClick={onEnter}>Enter Contact Info</button>

      <h2>Example Contacts</h2>
      <div className="example-contacts">
        {exampleContacts.map((contact, index) => (
          <div key={index} className="example-contact">
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p>
              <strong>Type:</strong> {contact.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
