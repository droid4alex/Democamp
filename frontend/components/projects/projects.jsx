import React from 'react';

const Projects = ({ currentUser, logout }) => {
  const demoboard = () => (
    <div>
      <center>
        <h1>D E M O</h1>
      </center>
    </div>
  );
  const dashboard = () => (
    <div>
      <center>
        <h1>USER DASHBOARD</h1>
      </center>      
    </div>
  );

  return currentUser ? dashboard() : demoboard();
};

export default Projects;