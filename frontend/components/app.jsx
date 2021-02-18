import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from "./splash/splash_container";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProjectsContainer from './projects/projects_container';
import ErrorsRender from './errors/errors';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/projects" component={ProjectsContainer} />
      <Route exact path="*" component={ErrorsRender} />
    </Switch>
  </div>
);

export default App;
