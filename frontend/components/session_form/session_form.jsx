import React from 'react';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: 'testing',
      role: 'testing',
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
    this.state.name = 'Test Name'
    this.state.role = 'TestRole'
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

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  render() {

    return (
      <div className="login-form-container">
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
            <br />
            <div className="login-form-errors">
              {this.renderErrors()}
            </div>
            <input className="session-submit" type="submit" value={this.props.buttonText} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
