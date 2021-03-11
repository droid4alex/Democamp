import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  constructor(props){
    super(props)
  }

  hideInfo(){
    let info = document.getElementsByClassName('hide-nav')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
      console.log(info[i])
    }
  }

  clickHow() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[0].style.display = "grid"
  }

  clickBefore() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[1].style.display = "grid"
  }

  clickGot() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[2].style.display = "grid"
  }

  clickPricing() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[3].style.display = "grid"
  }

  clickSupport() {
    let info = document.getElementsByClassName('info-div')
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "none"
    }
    info[4].style.display = "grid"
  }
  
  render(){
    let personalSplash;
    let personalNav;
    let userNav;
    if (this.props.currentUser) {
      userNav = (
        <ul className="top-user__list">
          <li className="top-nav__user-item"><Link to="/projects" className="top-nav__user-link">
            <svg className="top-nav__user-item-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.2421648 21.733253 7.3764753 1.266747h.2169551c.2169552 0 .3254328-.1151588.4339104-.2303176l2.1695515-2.2439747c.3254328-.2303176.3254328-.8061117 0-1.0364294-.2169551-.3454764-.759343-.3454764-.9762982 0l-.3254327.4014337 1.6271637-7.1398467.9759987-1.2463123c.2169551-.1151588.3254327-.3454764.2169551-.6909529-.1084776-.3454764-.2169551-.4606352-.4339103-.5757941-.2169551-.1151588-.5423879 0-.6508655.2303177l-.4336108.5553594-6.0747443-9.6733406c-.2169552-.34547645-.7593431-.46063527-1.0847758-.23031764l-5.85778923 3.4547645c-.10847758.11515881-.21695516.11515881-.32543274.23031763l-7.26799772 12.55231101-.55370577-1.0198289c-.10847758-.2303176-.32543273-.4606353-.54238789-.4606353-.21695515 0-.54238789.1151588-.65086547.3454765-.10847757.3454764-.10847757.5757941 0 .8061117l1.09609367 2.1714171v.1151588c.10847757.1151588.10847757.2303176.32543273.3454764.10847758.1151588.21695516.1151588.32543273.1151588l5.09844617.9212706 2.82041702-8.7520701zm-1.3017309-16.12223429 4.4475807-2.64865278 5.7493116 9.21270527-.1084776.6909529-1.6271637 7.0246879-5.9662667-10.1339759z" fill="#283c46" opacity=".9" /></svg>
            My Projects
            </Link></li>
        </ul>
      );
    } else {
      userNav = (
        <ul className="top-user__list">
        </ul>
      );
    }

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
          <li className="top-nav__list-item"><Link to="/login" className="button button--secondary link-login" onClick={this.hideInfo}>Sign in</Link></li>
          <li className="top-nav__list-item"><Link to="/signup" className="button" id="button-signup" onClick={this.hideInfo}>Try it FREE</Link></li>
        </ul>
      );
    }
    if (this.props.currentUser) {
      personalNav = (
        <>
        </>
      )
    } else {
      personalNav = (
        <>
          <li className="top-nav__list-item hide-nav"><a className="top-nav__link" onClick={this.clickHow}>How it works</a></li>
          <li className="top-nav__list-item hide-nav"><a className="top-nav__link" onClick={this.clickBefore}>Before &amp; after</a></li>
          <li className="top-nav__list-item hide-nav"><a className="top-nav__link" onClick={this.clickGot}>Got clients?</a></li>
          <li className="top-nav__list-item hide-nav"><a className="top-nav__link" onClick={this.clickPricing}>Pricing</a></li>
          <li className="top-nav__list-item hide-nav"><a className="top-nav__link" onClick={this.clickSupport}>Support</a></li>
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
            <a className="democamp-text-a" href="/">Democamp</a>
          </div>
        {userNav}
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
