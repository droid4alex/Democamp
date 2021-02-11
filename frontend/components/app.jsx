import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DemoContainer from './demo/demo_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Democamp Header Link</h1>
      </Link>
      <GreetingContainer />
    </header>
    <h1>Nav elements</h1>    
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={DemoContainer} />
    </Switch>
  </div>
);



export default App;
