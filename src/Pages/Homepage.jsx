import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ setContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('personal');
  
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };


  const validatePhone = (phone) => {
    return phone.length >= 9 && /^\d+$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailIsValid = validateEmail(email);
    let phoneIsValid = validatePhone(phone);

    if (!emailIsValid) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    if (!phoneIsValid) {
      setPhoneError('Phone number must be at least 9 digits.');
    } else {
      setPhoneError('');
    }

    if (emailIsValid && phoneIsValid) {
      const newContact = { name, email, phone, group };
      setContact(newContact);
      navigate('/contact-details');
    }
  };

  return (
    <div className="home-page">
      <h1>Enter Contact Details</h1>
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
        {emailError && <p className="error">{emailError}</p>}
        
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {phoneError && <p className="error">{phoneError}</p>}
        
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="personal">Personal</option>
          <option value="professional">Professional</option>
        </select>
        
        <button type="submit" disabled={emailError || phoneError}>Submit</button>
      </form>
    </div>
  );
};

export default HomePage;
