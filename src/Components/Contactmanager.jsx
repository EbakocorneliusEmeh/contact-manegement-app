import React, { useState } from "react";

const ContactManager = ({ onBack }) => {
  // Initial contacts pre-loaded
  const initialContacts = [
    {
      name: "Alice Johnson",
      email: "alice.@gmail.com",
      phone: "678-456-7890",
      type: "Professional",
    },
    {
      name: "Ben ten",
      email: "ben@gmail.com",
      phone: "698-654-3210",
      type: "Personal",
    },
    {
      name: "sone smith",
      email: "aone@gmail.com",
      phone: "678-123-4567",
      type: "Family",
    },
    {
      name: "Nash blink",
      email: "nash@gmail.com",
      phone: "678-123-4567",
      type: "personal",
    },
    {
      name: "kadahs pep",
      email: "pep@gmail.com",
      phone: "699-123-4567",
      type: "Family",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Professional");
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !type) {
      alert("Please fill out all fields!");
      return;
    }

    const newContact = { name, email, phone, type };

    if (editing) {
      setContacts(
        contacts.map((contact) =>
          contact.email === editing.email ? newContact : contact
        )
      );
      setEditing(null);
    } else {
      setContacts([...contacts, newContact]);
    }

    setName("");
    setEmail("");
    setPhone("");
    setType("Professional");
  };

  const handleEdit = (contact) => {
    setEditing(contact);
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setType(contact.type);
  };

  const handleDelete = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  return (
    <div className="contact-manager">
      <button onClick={onBack}>Back to Landing Page</button>
      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit} className="contact-form">
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
        <button type="submit">{editing ? "Update Contact" : "Add Contact"}</button>
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
              <button onClick={() => handleDelete(contact.email)}>Delete</button>
              <button onClick={() => handleEdit(contact)}>Edit</button>
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
