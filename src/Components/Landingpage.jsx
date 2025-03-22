import React from "react";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing-page">
      <h1> Welcome to Cornelius Contact Manager app </h1>
      <p>Effortlessly manage all your personal and professional contacts in one place.</p>
      <button onClick={onEnter}>Enter Contact info</button>
    </div>
  );
};

export default LandingPage;
