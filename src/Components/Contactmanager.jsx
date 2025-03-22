import React, { useState } from "react";

const ContactManager = ({ contacts, addContact, deleteContact, onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Professional"); // Default type

  const handleAddContact = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !type) {
      alert("Please fill out all fields!");
      return;
    }
    const newContact = { name, email, phone, type };
    addContact(newContact);
    setName("");
    setEmail("");
    setPhone("");
    setType("Professional"); // Reset to default type
  };

  return (
    <div className="contact-manager">
      <button onClick={onBack}>Back to Landing Page</button>
      <h1>Contact Manager</h1>
      <form onSubmit={handleAddContact} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Professional">Professional</option>
          <option value="Personal">Personal</option>
          <option value="Family">Family</option>
        </select>
        <button type="submit">Add Contact</button>
      </form>
      <div className="contact-list">
        <h2>Your Contacts</h2>
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <div key={index} className="contact-item">
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
              <button onClick={() => deleteContact(contact.email)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No contacts available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default ContactManager;
