import React from 'react';
import { Link } from 'react-router-dom';

class Messages extends React.Component{
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
            <span>My Messages</span>
          </h3>
        </header>
        <div className="bc-tools grid__item grid__item--large push--top">
          <nav className="bc-tools__nav bc-tools__nav_nest">
            <a className="bc-tools__item bc-tools__item--pulse" href="#/messages">
              <h3 className="bc-tools__title">Message Board</h3>
              <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#1b6ac9" r="20" /><path d="m28.0459331 10h-15.9434943c-1.0512194 0-2.1024388.7246377-2.1024388 1.9927536v19.7463768l4.0296744-4.1666666h14.0162587c1.0512195 0 1.9272356-.9057971 1.9272356-1.9927537v-13.5869565c.1752033-.9057971-.5256097-1.8115942-1.5768291-1.9927536 0 0-.1752032 0-.3504065 0zm-1.5768291 13.5869565h-12.7898361v-1.4492753h12.9650394v1.4492753zm0-4.1666666h-12.7898361v-1.268116h12.9650394v1.268116zm0-3.9855073h-12.7898361v-1.2681159h12.9650394v1.2681159z" fill="#fff" /></g></svg>
              <p className="bc-tools__summary">Post announcements, pitch ideas, progress updates, etc. and keep feedback on-topic.</p>
            </a>
          </nav>
        </div>
      </div>
      )
    }
}

export default Messages;
