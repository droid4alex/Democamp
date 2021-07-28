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
            <svg className="top-nav__user-item-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.2421648 21.733253 7.3764753 1.266747h.2169551c.2169552 0 .3254328-.1151588.4339104-.2303176l2.1695515-2.2439747c.3254328-.2303176.3254328-.8061117 0-1.0364294-.2169551-.3454764-.759343-.3454764-.9762982 0l-.3254327.4014337 1.6271637-7.1398467.9759987-1.2463123c.2169551-.1151588.3254327-.3454764.2169551-.6909529-.1084776-.3454764-.2169551-.4606352-.4339103-.5757941-.2169551-.1151588-.5423879 0-.6508655.2303177l-.4336108.5553594-6.0747443-9.6733406c-.2169552-.34547645-.7593431-.46063527-1.0847758-.23031764l-5.85778923 3.4547645c-.10847758.11515881-.21695516.11515881-.32543274.23031763l-7.26799772 12.55231101-.55370577-1.0198289c-.10847758-.2303176-.32543273-.4606353-.54238789-.4606353-.21695515 0-.54238789.1151588-.65086547.3454765-.10847757.3454764-.10847757.5757941 0 .8061117l1.09609367 2.1714171v.1151588c.10847757.1151588.10847757.2303176.32543273.3454764.10847758.1151588.21695516.1151588.32543273.1151588l5.09844617.9212706 2.82041702-8.7520701zm-1.3017309-16.12223429 4.4475807-2.64865278 5.7493116 9.21270527-.1084776.6909529-1.6271637 7.0246879-5.9662667-10.1339759z" fill="#283c46" opacity=".9" />
            </svg>Projects
            </Link>
          </li>
          <li className="top-nav__user-item"><Link to="/todos" className="top-nav__user-link">
            <svg className="top-nav__user-item-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="m6.20554032 3.7593481h11.58891938l2.9624567 8.3276396.5999773 1.688814h-5.5715323-.9357444c-.0011009.0138333-.0055044.0265137-.0066053.040347-.0363289.3331518-.1144911.6490118-.2454953.9395109-.4612669 1.0213578-1.4465508 1.7337721-2.5980668 1.7337721-1.1504152 0-2.13569906-.7124143-2.59696602-1.7337721-.13100421-.2904991-.20916639-.6063591-.2454953-.9395109-.00110087-.0138333-.00550437-.0265137-.00770613-.040347h-.93464353-5.57263321l.60107818-1.688814zm16.76633818 9.7357923c-.0033026-.0185003-.0077062-.0358443-.0121097-.0531883-.0165131-.080939-.026421-.1630342-.0550437-.2416605l-3.5624341-10.04682891c-.2410918-.67873042-.8586831-1.1285194-1.5478313-1.1285194h-11.58891938c-.68914824 0-1.30673956.44978898-1.54783135 1.1285194l-3.56243403 10.04682891c-.02862277.0797826-.03853065.1618778-.05504378.2428167-.00440351.0173441-.00880701.0335318-.01210964.0508759-.01651314.0820952-.02091664.1665028-.02532014.2509106-.00220175.0751574-.00550438.1491588.00110087.22316.00220176.0346882.00770613.06822.01210964.102908.00660525.0589698.00660525.1179396.01981576.1769093l1.45535778 6.4427357c.177241.7816385.84216997 1.3343355 1.60727864 1.3343355h15.80307183c.7651087 0 1.4300377-.552697 1.6072787-1.3343355l1.4553577-6.4427357c.0132106-.0589697.0132106-.1179395.0198158-.1769093.0044035-.034688.0099079-.0682198.0121096-.102908.0066053-.0740012.0033027-.1491588.0011009-.22316-.0044035-.0844078-.008807-.1676592-.0253201-.2497544z" fill="#283c46" opacity=".9"></path>
              </svg>To-dos
            </Link>
          </li>
          <li className="top-nav__user-item"><Link to="/messages" className="top-nav__user-link">
            <svg className="top-nav__user-item-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path xmlns="http://www.w3.org/2000/svg" d="m20.7681159 7.97142857c1.1159421 0 2.2318841 1.1 2.2318841 2.35714283v6.7571429c0 1.2571428-.9565217 2.2-2.2318841 2.2v4.7142857l-4.7826087-4.7142857h-6.53623184c-1.27536232 0-2.23188406-.9428572-2.23188406-2.3571429v-.3142857l1.75362319-1.8857143h7.49275361c1.2753623 0 2.2318841-.9428571 2.2318841-2.2v-4.55714283zm-12.75362315 5.18571433-4.78260869 4.7142857v-4.7142857c-1.27536232 0-2.23188406-.9428572-2.23188406-2.2v-6.7571429c0-1.25714286 1.11594203-2.2 2.23188406-2.2h11.31884054c1.2753624 0 2.2318841.94285714 2.2318841 2.2v6.7571429c0 1.2571428-.9565217 2.2-2.2318841 2.2z" fill="#283c46" opacity=".9" />
            </svg>Messages
            </Link>
          </li>
          <li className="top-nav__user-item"><Link to="/schedule" className="top-nav__user-link">
            <svg className="top-nav__user-item-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path id="svg_1" opacity="0.9" fill="#283c46" d="m9.775,11.01757l0,-8.648c3.97615,0 7.84131,3.47028 7.84131,7.56245c0,1.60112 -0.77476,3.87459 -1.93148,5.04357l-5.90983,-3.95802zm-8.775,-1.01757c0,4.96246 4.03754,9 9,9c4.96246,0 9,-4.03754 9,-9c0,-4.96338 -4.03754,-9 -9,-9c-4.96246,0 -9,4.03662 -9,9z" />
              </svg>Schedule
            </Link>
          </li>
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
