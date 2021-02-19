import React from 'react';

const Projects = ({ currentUser, logout }) => {
  const demoboard = () => (
    <div className="grid grid--centered grid--formatted centered-medium">
      <h1 className="heading heading--xx-large grid__item grid__item--large">Work better, together.</h1>
      <p className="grid__item grid__item--medium flush--bottom">Democamp is more than just a project management tool — it’s a better way to work. Teams that switch to Democamp are more productive and better organized. They communicate better and require fewer meetings. And they’re far more efficient than before. Here’s how Democamp makes it happen.</p>
    </div>
  );
  const dashboard = () => (
    <div>

    </div>
  );

  return currentUser ? dashboard() : demoboard();
};

export default Projects;