import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-signup-div">
      <Link to="/login" className="login-link">Login</Link>
      <Link to="/signup" className="signin-link">Signup</Link>
    </div>
  );
  const personalGreeting = () => (
    <div className="user-menu">
      {currentUser.email[0].toUpperCase()}
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
