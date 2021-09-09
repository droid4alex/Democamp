import React from 'react';
import { Link } from 'react-router-dom';

class Messages extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      messages: {}
    }
  }

  scrollToBottom (){
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  getMessages() {
    let values = Object.values(this.state.messages);
    if (values.length > 0) {
      let cardArrays = [];
      for (let i = 0; i < (Object.keys(this.state.messages).length); i++) {
        cardArrays.push(
          <a className="card__link" key={i} onClick={() => { this.setMessageState(values[i]) }}>
            {/* <Link to={values[i].id + "/"}> */}
              <div className="card__content__message">
                <h2 className="card__title flush" title="" data-role="content_filter_text">{values[i].title}</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">
                  {values[i].body}
                </p>
                {/* <p className="card__description flush" title="" data-role="content_filter_text">
                  <Link to={values[i].id + "/messages/"}>
                    {"| Message Board"}
                  </Link>
                  <Link to={values[i].id + "/todos/"}>
                    {" | To-dos |"}
                  </Link>
                  <Link to={values[i].id + "/schedule/"}>
                    {" Schedule |"}
                  </Link>
                </p> */}
              </div>
            {/* </Link> */}
          </a>
        )
      }
      return (
        cardArrays
      )
    }
  }

  componentDidMount() {
    this.props.fetchAllMessages().then(messages => {
      this.setState(messages)
      // console.log(projects)      
    })
  }

  componentWillUnmount() {
  }


  setMessageState(message) {
  }

  render() {
    // debugger
    return (
      <div id="main-content" className="loading__hide  u-hide-focus" data-appearing-on="" data-bucket-url="" data-bucket-id="" tabIndex="-1">
        <section className="project-index__section project-index__section--projects " data-role="project_group content_filter_group" data-projects-display="card" role="region" aria-label="My Projects">
          <header className="centered">
            <h3 className="project-index__header break break--on-background push--top push_half--bottom">
              <span>My Messages</span>
            </h3>
          </header>
          <div className="card-grid--projects" data-role="project_group_items">
            {this.getMessages()}
            <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
              <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
                <div className="RowStructure-leftChildren">
                  <div className="AddItemSquircleRow-leftElements">
                    <div className="AddItemSquircleRow-box">
                      <svg className="Icon AddItemSquircleRow-plusIcon PlusIcon" focusable="false" viewBox="0 0 32 32">
                        <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z">
                        </path>
                      </svg>
                    </div>New Message
                  </div>
                </div>
              </span>
            </aside>
            {/* <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
              <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
                <button name="button" type="button" title="Start a new project…" className="options-menu__expansion-toggle btn btn--small btn--with-icon btn--add-icon" data-behavior="toggle_expansion_on_click">&nbsp; 	&nbsp; New</button>
              </span>
            </aside> */}
          </div>
        </section>
        <div className="bc-tools grid__item grid__item--large push--top">
          <nav className="bc-tools__nav bc-tools__nav_nest">
            <a className="bc-tools__item bc-tools__item--pulse" onClick={() => this.scrollToBottom()}>
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
