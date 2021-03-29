import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from "./splash/splash_container";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProjectsContainer from './projects/projects_container';
import ErrorsRender from './errors/errors';
import NavContainer from './nav/nav_container'

const Root = ({ store }) => {
  return (
  <Provider store={store}>
    <HashRouter>
      <div>
        <NavContainer />
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/" component={SplashContainer} />
          <ProtectedRoute exact path="/projects" component={ProjectsContainer} />
          <Route exact path="*" component={ErrorsRender} />
        </Switch>        
      </div>
    </HashRouter>
  </Provider>
  )
}

export default Root;