import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Democamp</h1>
      </Link>
    </header>
    <h1>Democamp App</h1>
  </div>
);

export default App;
