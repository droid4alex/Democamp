import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsContainer from '../projects/projects_container'

const Splash = ({ currentUser, logout }) => {
  let personalSplash;
  if (currentUser){
    personalSplash = (
      <div className="user-menu">
        {currentUser.email[0].toUpperCase()}
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    personalSplash = (
    <div className="login-signup-div">
      <Link to="/login" className="login-link">Login</Link>
      <Link to="/signup" className="signin-link">Signup</Link>
    </div>
    );
  }
  let renderSplash = (
    <div>
      <div className="header">
        <Link to="/" className="header-logo-img">
          <img src="https://www.drupal.org/files/project-images/basecamp_2019_logo.png" alt="Democamp Logo" />
        </Link>
        <Link to="/" className="header-link">
          How it works
        </Link>
          <Link to="/" className="header-link">
            Before & after
        </Link>
          <Link to="/" className="header-link">
            Got clients?
        </Link>
          <Link to="/" className="header-link">
            Pricing
        </Link>
          <Link to="/" className="header-link">
            Support
        </Link>
        {personalSplash}
      </div>    
      <ProjectsContainer />
    </div>
  );

  return renderSplash;
};

export default Splash;