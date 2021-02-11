import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login button</Link>
      <br></br>
      <Link to="/signup">Sign up button</Link>
    </nav>
  );
  const personalGreeting = () => (
    <div className="header-greeting">
      <h2 className="header-letter">{currentUser.email}</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
