import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsContainer from '../projects/projects_container'

const Splash = ({ currentUser, logout }) => {
  let personalSplash;
  if (currentUser){
    personalSplash = (
      // <div className="user-menu">
      //   {currentUser.email[0].toUpperCase()}
      //   <button className="logout-button" onClick={logout}>Log Out</button>
      // </div>
      <ul className="top-nav__list">
        <li className="top-nav__list-item"><a className="button button--secondary">{currentUser.email[0].toUpperCase()}</a></li>
        <li className="top-nav__list-item"><a className="button"><button className="logout-button" onClick={logout}>Log Out</button></a></li>
      </ul>
    );
  } else {
    personalSplash = (
    // <div className="login-signup-div">
    //   <Link to="/login" className="login-link">Login</Link>
    //   <Link to="/signup" className="signin-link">Signup</Link>
    // </div>
    <ul className="top-nav__list">
      <li className="top-nav__list-item"><Link to="/login" className="button button--secondary link-login">Sign in</Link></li>
      <li className="top-nav__list-item"><Link to="/signup" className="button" id="button-signup">Try it FREE</Link></li>
    </ul>
    );
  }
  let renderSplash = (
    <div>
      <header className="header">
        <nav className="top-nav" role="navigation" id="top">
          <a className="top-nav__logo" href="/" aria-label="Basecamp">
            <svg viewBox="0 0 149.8 41.4" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="basecamp-logo-title">
              <title id="basecamp-logo-title">Basecamp logo</title>
                <path className="icon" d="m37.9 25.7c-.9 0-1.6-.7-1.7-1.6-.6-8.6-5.3-20.7-14-20.7-7.2 0-12.6 5-16.1 14.9-.3.9-1.3 1.4-2.2 1-.9-.3-1.4-1.3-1-2.1 4-11.4 10.5-17.2 19.3-17.2 11.5 0 16.8 14.6 17.4 23.9.1.9-.6 1.8-1.6 1.8z" fill="#1d2d35"></path>
                <path className="icon" d="m21.8 32c-5.8 0-11.4-2.5-15.3-6.9-.5-.4-.6-1.1-.4-1.7 1.1-2.9 4-9.6 7.7-9.7 1.9 0 3.3 1.5 4.4 2.7.3.4.8.9 1.2 1.2.9-.9 2.6-3.7 3.9-6.6.4-.9 1.4-1.2 2.3-.8s1.2 1.4.8 2.3c-4 8.7-6.1 8.7-6.9 8.7-1.6 0-2.7-1.2-3.8-2.4-.5-.5-1.5-1.6-1.9-1.6-.9.1-2.8 3.2-4.1 6.5 3.3 3.3 7.8 5.1 12.4 5 4 0 11.1-.7 14-5-.8-8.6-5.5-20.2-14-20.2-.9 0-1.7-.8-1.7-1.7s.8-1.8 1.8-1.8c11.5 0 16.8 14.6 17.4 23.9 0 .3-.1.7-.2 1-2.7 4.6-8.8 7.2-17.2 7.2-.1-.1-.3-.1-.4-.1z" fill="#1d2d35"></path>
              <g className="name" fill="#1d2d35">
                <path d="m46.8 8.5h6.1c3.4 0 5.2 1.4 5.2 4v.1c.1 1.6-1 3-2.5 3.3 1.9.2 3.2 1.8 3.1 3.7v.1c0 2.9-1.9 4.4-5.5 4.4h-6.4zm5.5 6.4c1.7 0 2.4-.6 2.4-2v-.1c0-1.3-.7-1.9-2.4-1.9h-2.1v4zm.4 6.7c1.7 0 2.5-.8 2.5-2.2v-.1c0-1.4-.8-2.2-2.7-2.2h-2.2v4.5z"></path>
                <path d="m59.6 20.9c0-2.6 2.4-3.6 5.9-3.6h1.3v-.5c0-1.4-.4-2.1-1.8-2.1-.9-.1-1.8.5-1.9 1.5v.1h-3c.2-2.7 2.3-3.9 5.1-3.9s4.8 1.1 4.8 4.2v7.4h-3.1v-1.3c-.8 1.1-2.1 1.7-3.4 1.6-2.2 0-3.9-1-3.9-3.4zm7.2-.8v-1h-1.2c-1.8 0-2.9.4-2.9 1.6 0 .8.5 1.4 1.7 1.4 1.3 0 2.4-.8 2.4-2z"></path>
                <path d="m71.2 20.5h2.9c.1 1 .6 1.6 2 1.6s1.8-.5 1.8-1.2-.7-1.1-2.3-1.4c-3-.5-4.2-1.3-4.2-3.6s2.1-3.5 4.5-3.5c2.5 0 4.4.9 4.7 3.5h-2.9c-.2-.9-.7-1.4-1.8-1.4s-1.6.5-1.6 1.2.5 1 2.2 1.2c2.8.4 4.4 1.1 4.4 3.6s-1.8 3.8-4.8 3.8-4.8-1.4-4.9-3.8z"></path>
                <path d="m81.8 18.5v-.2c-.2-3.1 2.2-5.8 5.4-5.9h.5c2.9 0 5.6 1.7 5.6 5.8v.9h-8.3c.1 1.9 1.1 3 2.8 3 1.5 0 2.2-.6 2.4-1.6h3c-.4 2.5-2.3 3.8-5.4 3.8-3.5 0-6-2.2-6-5.8zm8.3-1.4c-.1-1.7-1-2.6-2.5-2.6-1.4 0-2.6 1.1-2.6 2.6z"></path>
                <path d="m94 18.5v-.2c-.1-3.1 2.3-5.8 5.4-5.9h.5c2.6 0 5.1 1.1 5.3 4.4h-3c-.1-1.1-1.1-2-2.2-1.9-1.6 0-2.7 1.2-2.7 3.4v.2c0 2.3 1 3.5 2.8 3.5 1.3.1 2.4-.9 2.4-2.2h2.8c-.2 2.7-2.1 4.6-5.4 4.6s-5.9-2.2-5.9-5.9z"></path>
                <path d="m106.1 20.9c0-2.6 2.4-3.6 5.9-3.6h1.3v-.5c0-1.4-.4-2.1-1.8-2.1-.9-.1-1.8.5-1.9 1.5v.2h-3c.2-2.7 2.3-3.9 5.1-3.9s4.8 1.1 4.8 4.2v7.3h-3.1v-1.3c-.8 1.1-2.1 1.7-3.4 1.6-2.2 0-3.9-1-3.9-3.4zm7.1-.8v-1h-1.2c-1.8 0-2.9.4-2.9 1.6 0 .8.5 1.4 1.7 1.4 1.4 0 2.4-.8 2.4-2z"></path>
                <path d="m118.5 12.7h3.2v1.7c.7-1.3 2-2 3.5-2 1.4-.1 2.7.7 3.2 2 .9-1.3 2.3-2 3.8-2 2.1 0 3.8 1.3 3.8 4.4v7.2h-3.1v-6.9c0-1.5-.6-2.1-1.8-2.1-1.2-.1-2.2.9-2.2 2v.3 6.7h-3.1v-6.9c0-1.5-.7-2.1-1.8-2.1-1.2-.1-2.1.9-2.2 2v.3 6.7h-3.2z"></path>
                <path d="m138.1 12.7h3.1v1.8c.8-1.3 2.2-2 3.6-2 2.8 0 5 2.1 5 5.8v.2c0 3.8-2.1 5.9-5 5.9-1.5.1-2.9-.7-3.6-2v5.6h-3.1zm8.5 5.7v-.2c0-2.3-1.1-3.4-2.7-3.4s-2.8 1.1-2.8 3.4v.2c0 2.3 1.1 3.4 2.8 3.4s2.7-1.2 2.7-3.4z"></path>
              </g>
            </svg>
          </a>
          <ul className="top-nav__list">
            <li className="top-nav__list-item"><a className="top-nav__link" href="/">How it works</a></li>
            <li className="top-nav__list-item"><a className="top-nav__link" href="/">Before &amp; after</a></li>
            <li className="top-nav__list-item"><a className="top-nav__link" href="/">Got clients?</a></li>
            <li className="top-nav__list-item"><a className="top-nav__link" href="/">Pricing</a></li>
            <li className="top-nav__list-item"><a className="top-nav__link" href="/">Support</a></li>
            {personalSplash}
          </ul>
        </nav>
        {/* <Link to="/" className="header-link">
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
        {personalSplash} */}
      </header>
      <ProjectsContainer />
    </div>
  );

  return renderSplash;
};

export default Splash;
