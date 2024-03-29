import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store'
import Root from './components/root'
import { fetchAllProjects } from './util/project_api_util'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: { users: { [window.currentUser.id]: window.currentUser } },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllProjects = fetchAllProjects();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});