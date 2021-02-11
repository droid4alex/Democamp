import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Democamp Header Link</h1>
      </Link>
    </header>
    <h1>Nav elements</h1>
    <div className="greeting-div">
      <GreetingContainer />
    </div>
  </div>
);

export default App;
