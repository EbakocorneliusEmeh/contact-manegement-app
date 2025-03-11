import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactDetailsPage = ({ contact, setContact }) => {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/');
  };


  const handleDelete = () => {
    setContact(null);
    navigate('/'); 
  };

  if (!contact) {
    return <div>No contact data available.</div>;
  }

  return (
    <div className="contact-details">
      <h1>Contact Details</h1>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Group:</strong> {contact.group}</p>
      <div className="buttons">
        <button onClick={handleExit}>Exit</button>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
