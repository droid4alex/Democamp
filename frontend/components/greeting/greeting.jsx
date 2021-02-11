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
    <div className="user-menu">
      {currentUser.email[0].toUpperCase()}
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
