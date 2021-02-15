import React from 'react';
import { Link } from 'react-router-dom';

class ErrorsRender extends React.Component {
  render () {
    return (
      <div className="errors-div">
        <h3>404 Page Not Found</h3>
        <Link className="button-link" to="/">Back</Link>
      </div>
    )
  }
}

export default ErrorsRender;