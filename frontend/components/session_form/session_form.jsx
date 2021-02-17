import React from 'react';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      role: '',
      password: '',
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processForm(this.state)
      .then(() => this.setState({ redirect: true }))
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`Error${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderSignup() {
    if (this.props.formType === "Sign up") {
      return (
        <>
          <br />
          <label>Name:
              <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="login-input"
            />
          </label>
          <br />
          <label>Role:
              <input type="text"
              value={this.state.role}
              onChange={this.update('role')}
              className="login-input"
            />
          </label>
        </>        
      );
    } else {
      return (
        <br />
      );
    }
  }

  demoButton(){
    if (this.props.formType === "Login"){
      return (
      <button type="submit" className="demo-button"
        onClick={() => this.setState({ email: "demo@gmail.com", password: '123456' })}>
        Try a Demo
      </button>
      )
    }    
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderLowerSignup (){
    let link, text;

    if (this.props.formType === "Login") {
      text = "Don't have an account?"
      link = <Link to="/signup" className="lowersignup-link">Create account</Link>
    } else {
      text = "Already have an account?"
      link = <Link to="/login" className="lowersignup-link">Sign in</Link>
    };

    return (
      <div className="lowersignup">
        <div className="lowersignup-text">{text} {link}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="login-body">
        <div className="login-logo">
          <a className="login-nav__logo" href="/" aria-label="Basecamp">
            <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="basecamp-logo-title">
              <title id="basecamp-logo-title">Democamp logo</title>
              <path className="icon" d="M 60.64 41.12 c -1.44 0 -2.56 -1.12 -2.72 -2.56 c -0.96 -13.76 -8.48 -33.12 -22.4 -33.12 c -11.52 0 -20.16 8 -25.76 23.84 c -0.48 1.44 -2.08 2.24 -3.52 1.6 c -1.44 -0.48 -2.24 -2.08 -1.6 -3.36 c 6.4 -18.24 16.8 -27.52 30.88 -27.52 c 18.4 0 26.88 23.36 27.84 38.24 c 0.16 1.44 -0.96 2.88 -2.56 2.88 z" fill="#1d2d35"></path>
              <path className="icon" d="M 34.88 51.2 c -9.28 0 -18.24 -4 -24.48 -11.04 c -0.8 -0.64 -0.96 -1.76 -0.64 -2.72 c 1.76 -4.64 6.4 -15.36 12.32 -15.52 c 3.04 0 5.28 2.4 7.04 4.32 c 0.48 0.64 1.28 1.44 1.92 1.92 c 1.44 -1.44 4.16 -5.92 6.24 -10.56 c 0.64 -1.44 2.24 -1.92 3.68 -1.28 s 1.92 2.24 1.28 3.68 c -6.4 13.92 -9.76 13.92 -11.04 13.92 c -2.56 0 -4.32 -1.92 -6.08 -3.84 c -0.8 -0.8 -2.4 -2.56 -3.04 -2.56 c -1.44 0.16 -4.48 5.12 -6.56 10.4 c 5.28 5.28 12.48 8.16 19.84 8 c 6.4 0 17.76 -1.12 22.4 -8 c -1.28 -13.76 -8.8 -32.32 -22.4 -32.32 c -1.44 0 -2.72 -1.28 -2.72 -2.72 s 1.28 -2.88 2.88 -2.88 c 18.4 0 26.88 23.36 27.84 38.24 c 0 0.48 -0.16 1.12 -0.32 1.6 c -4.32 7.36 -14.08 11.52 -27.52 11.52 c -0.16 -0.16 -0.48 -0.16 -0.64 -0.16 z" fill="#1d2d35"></path>
            </svg>
          </a>
        </div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-field">
              <label>Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              {this.renderSignup()}
              <div className="login-demo-div">
                <div className="login-button-div">
                  <input className="button-login" type="submit" value={this.props.formType} />
                </div>
                <div className="demo-button-div">
                  {this.demoButton()}
                </div>
              </div>
              {this.renderLowerSignup()}
              <div className="login-form-errors">
                {this.renderErrors()}
              </div>
            </div>
          </form>
        </div>
        <div className="login-bottom">        
        </div>
      </div>
    );
  }
}

export default SessionForm;
