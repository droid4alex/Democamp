import React from 'react';

const Demo = ({ currentUser, logout }) => {
  const demoboard = () => (
    <div>
      <center>
        <h1>DEMO D E M O DEMO</h1>
      </center>
    </div>
  );
  const dashboard = () => (
    <div>
      <center>
        <h1>User Dashboard Here</h1>
      </center>      
    </div>
  );

  return currentUser ? dashboard() : demoboard();
};

export default Demo;
