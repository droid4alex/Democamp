import React from 'react';

class Todos extends React.Component{
  constructor(props){
    super(props)
  }

  scrollToBottom (){
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  render(){
    return (
      <div>
        <header className="centered">
          <h3 className="project-index__header break break--on-background push--top push_half--bottom">
            <span>My Todos</span>
          </h3>
        </header>
          <div className="bc-tools grid__item grid__item--large push--top">
            <nav className="bc-tools__nav bc-tools__nav_nest">
              <a className="bc-tools__item bc-tools__item--pulse" onClick={() => this.scrollToBottom()}>
                <h3 className="bc-tools__title">To-dos</h3>
                <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#3cb371" r="20" /><path d="m17.4 23.4758621-6.8714286-6.6344828-3.5285714 3.2275862 6.8714286 6.6344828 3.5285714 3.2275862 15.6-14.7034483-3.5285714-3.2275862z" fill="#fff" /></g></svg>
                <p className="bc-tools__summary">Make lists of work that needs to get done, assign items, set due dates, and discuss.</p>
              </a>
            </nav>
          </div>
      </div>
      )
    }
}

export default Todos;
