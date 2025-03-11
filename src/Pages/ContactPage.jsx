import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContactPage = ({ setContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = { name, email, phone,  };
    setContact(newContact);

    navigate('/contact-details'); 
  };

  return (
    <div className="add-contact-page">
      <h1>Add New Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="personal">Personal</option>
          <option value="professional">Professional</option>
        </select> 
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContactPage;
