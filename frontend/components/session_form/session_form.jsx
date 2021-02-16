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
      <button type="submit" className="session_submit"
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
      link = <Link to="/signup">Create account</Link>
    } else {
      text = "Already have an account?"
      link = <Link to="/login">Sign in</Link>
    };

    return (
      <div className="lowersignup">
        <div className="lowersignup-text">
          {text}
        </div>
        <div className="lowersignup-link">
          {link}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <Link to="/" className="header-logo-img">
          <img src="https://www.drupal.org/files/project-images/basecamp_2019_logo.png" alt="Democamp Logo" />
        </Link>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <br />
            <label>Email:
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
            <div className="login-form-errors">
              {this.renderErrors()}
            </div>
            <input className="session-submit" type="submit" value={this.props.formType} />
            {this.demoButton()}
            <br />
            {this.renderLowerSignup()}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
