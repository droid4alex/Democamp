import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
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
      <GreetingContainer />
    </div>  
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={DashboardContainer} />
    </Switch>
  </div>
);



export default App;
