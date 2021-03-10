import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  constructor(props){
    super(props)
  }

  clickHow() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[1].style.display = "block"
  }

  clickBefore() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[2].style.display = "block"
  }

  clickGot() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[3].style.display = "block"
  }

  clickPricing() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[4].style.display = "block"
  }

  clickSupport() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[5].style.display = "block"
  }
  
  render(){
    let personalSplash;
    let personalNav;
    if (this.props.currentUser) {
      personalSplash = (
        // <div className="user-menu">
        //   {currentUser.email[0].toUpperCase()}
        //   <button className="logout-button" onClick={logout}>Log Out</button>
        // </div>
        <ul className="top-nav__list">
          <li className="top-nav__list-item"><a className="button button--secondary" id="user-icon">{this.props.currentUser.email[0].toUpperCase()}</a></li>
          <li className="top-nav__list-item"><button className="button-login" onClick={this.props.logout}>Log Out</button></li>
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
    if (this.props.currentUser) {
      personalNav = (
        <>
          <li className="top-nav__list-item"><a className="top-nav__link" href="/">Home</a></li>
        </>
      )
    } else {
      personalNav = (
        <>
          <li className="top-nav__list-item"><a className="top-nav__link" onClick={this.clickHow}>How it works</a></li>
          <li className="top-nav__list-item"><a className="top-nav__link" onClick={this.clickBefore}>Before &amp; after</a></li>
          <li className="top-nav__list-item"><a className="top-nav__link" onClick={this.clickGot}>Got clients?</a></li>
          <li className="top-nav__list-item"><a className="top-nav__link" onClick={this.clickPricing}>Pricing</a></li>
          <li className="top-nav__list-item"><a className="top-nav__link" onClick={this.clickSupport}>Support</a></li>
        </>
      )
    }
return (
  <div>
    <header className="header">
      <nav className="top-nav" role="navigation" id="top">
        <a className="top-nav__logo" href="/" aria-label="Democamp">
          <svg viewBox="0 0 149.8 41.4" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="democamp-logo-title">
            <title id="democamp-logo-title">Democamp logo</title>
            <path className="icon" d="m37.9 25.7c-.9 0-1.6-.7-1.7-1.6-.6-8.6-5.3-20.7-14-20.7-7.2 0-12.6 5-16.1 14.9-.3.9-1.3 1.4-2.2 1-.9-.3-1.4-1.3-1-2.1 4-11.4 10.5-17.2 19.3-17.2 11.5 0 16.8 14.6 17.4 23.9.1.9-.6 1.8-1.6 1.8z" fill="#1d2d35"></path>
            <path className="icon" d="m21.8 32c-5.8 0-11.4-2.5-15.3-6.9-.5-.4-.6-1.1-.4-1.7 1.1-2.9 4-9.6 7.7-9.7 1.9 0 3.3 1.5 4.4 2.7.3.4.8.9 1.2 1.2.9-.9 2.6-3.7 3.9-6.6.4-.9 1.4-1.2 2.3-.8s1.2 1.4.8 2.3c-4 8.7-6.1 8.7-6.9 8.7-1.6 0-2.7-1.2-3.8-2.4-.5-.5-1.5-1.6-1.9-1.6-.9.1-2.8 3.2-4.1 6.5 3.3 3.3 7.8 5.1 12.4 5 4 0 11.1-.7 14-5-.8-8.6-5.5-20.2-14-20.2-.9 0-1.7-.8-1.7-1.7s.8-1.8 1.8-1.8c11.5 0 16.8 14.6 17.4 23.9 0 .3-.1.7-.2 1-2.7 4.6-8.8 7.2-17.2 7.2-.1-.1-.3-.1-.4-.1z" fill="#1d2d35"></path>
          </svg>
        </a>
        <div className="democamp-text-div">
          Democamp
          </div>
        <ul className="top-nav__list">
          {personalNav}
          {personalSplash}
        </ul>
      </nav>
    </header>
  </div>
  )
  }
}

export default Nav;
