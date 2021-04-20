import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getProjects(){
    // this.state.push(this.props.currentUser.id);
    // this.state.push(window.fetchAllProjects());
    // this.state.push(this.props.fetchProjects(this.props.currentUser.id));
    // this.props.fetchProjects(this.props.currentUser.id).
    //   then(res => this.state.push(res))

    window.fetchAllProjects().then(res => console.log(res));

  }
  // componentDidMount(){
  //   this.state.projects = this.props.fetchAllProjects(this.props.currentUser.id);
  //   this.props.fetchProjects(this.props.currentUser.id).
  //     then(res => this.state.project.push(res))
  //   // this.props.fetchProjects(this.props.currentUser.id).
  //   //   then(res => this.props.fetchProject(this.props.match.params.projectId))
  // }

  render(){
    this.getProjects();
    // debugger
    return(
      <div id="main-content" className="loading__hide  u-hide-focus" data-appearing-on="" data-bucket-url="" data-bucket-id="" tabIndex="-1">
        <section className="project-index__section project-index__section--projects " data-role="project_group content_filter_group" data-projects-display="card" role="region" aria-label="My Projects">
          <header className="centered">
            <h3 className="project-index__header break break--on-background push--top push_half--bottom">
              <span>My Projects</span>
            </h3>
          </header>
          <div className="card-grid--projects" data-role="project_group_items">
            <a className="card__link" href="api/projects/5">
              <div className="card__content">
                <h2 className="card__title flush" title="" data-role="content_filter_text">Finish Phase 1 of MVP</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">HTML, CSS, UI and User tests</p>
              </div>
            </a>
            <a className="card__link" href="api/projects/5">
              <div className="card__content">
                <h2 className="card__title flush" title="" data-role="content_filter_text">Finish Phase 2 of MVP</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">HTML, CSS, UI and User tests</p>
              </div>
            </a>
            <a className="card__link" href="api/projects/5">
              <div className="card__content">
                <h2 className="card__title flush" title="" data-role="content_filter_text">Finish Phase 3 of MVP</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">HTML, CSS, UI and User tests</p>
              </div>
            </a>
            <a className="card__link" href="api/projects/5">
              <div className="card__content">
                <h2 className="card__title flush" title="" data-role="content_filter_text">Finish Phase 4 of MVP</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">HTML, CSS, UI and User tests</p>
              </div>
            </a>
            <a className="card__link" href="api/projects/5">
              <div className="card__content">
                <h2 className="card__title flush" title="" data-role="content_filter_text">Finish Phase 5 of MVP</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">HTML, CSS, UI and User tests</p>
              </div>
            </a>
            <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
              <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
                <button name="button" type="button" title="Start a new project…" className="options-menu__expansion-toggle btn btn--small btn--with-icon btn--add-icon" data-behavior="toggle_expansion_on_click">&nbsp; 	&nbsp; New</button>
              </span>
            </aside>
          </div>

        </section>
        <div className="bc-tools grid__item grid__item--large push--top">
          <nav className="bc-tools__nav bc-tools__nav-projects">
            <a className="bc-tools__item bc-tools__item--pulse" href="#/messages">
              <h3 className="bc-tools__title">Message Board</h3>
              <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#1b6ac9" r="20" /><path d="m28.0459331 10h-15.9434943c-1.0512194 0-2.1024388.7246377-2.1024388 1.9927536v19.7463768l4.0296744-4.1666666h14.0162587c1.0512195 0 1.9272356-.9057971 1.9272356-1.9927537v-13.5869565c.1752033-.9057971-.5256097-1.8115942-1.5768291-1.9927536 0 0-.1752032 0-.3504065 0zm-1.5768291 13.5869565h-12.7898361v-1.4492753h12.9650394v1.4492753zm0-4.1666666h-12.7898361v-1.268116h12.9650394v1.268116zm0-3.9855073h-12.7898361v-1.2681159h12.9650394v1.2681159z" fill="#fff" /></g></svg>
              <p className="bc-tools__summary">Post announcements, pitch ideas, progress updates, etc. and keep feedback on-topic.</p>
            </a>
            <a className="bc-tools__item bc-tools__item--pulse" href="#/todos">
              <h3 className="bc-tools__title">To-dos</h3>
              <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#3cb371" r="20" /><path d="m17.4 23.4758621-6.8714286-6.6344828-3.5285714 3.2275862 6.8714286 6.6344828 3.5285714 3.2275862 15.6-14.7034483-3.5285714-3.2275862z" fill="#fff" /></g></svg>
              <p className="bc-tools__summary">Make lists of work that needs to get done, assign items, set due dates, and discuss.</p>
            </a>
            <a className="bc-tools__item bc-tools__item--pulse" href="#/schedule">
              <h3 className="bc-tools__title">Schedule</h3>
              <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#ff2d55" r="20" /><path d="m25.5555556 21.2692308h-5.5555556v5.576923h5.5555556zm-1.1111112-12.2692308v2.2307692h-8.8888888v-2.2307692h-2.2222223v2.2307692h-1.1111111c-1.2698412 0-2.2222222.956044-2.2222222 2.2307693v15.6153846c0 1.2747253.952381 2.2307692 2.2222222 2.2307692h15.5555556c1.2698412 0 2.2222222-.9560439 2.2222222-2.2307692v-15.6153846c0-1.2747253-.952381-2.2307693-2.2222222-2.2307693h-1.1111111v-2.2307692zm3.3333334 20.0769231h-15.5555556v-12.2692308h15.5555556z" fill="#fff" /></g></svg>
              <p className="bc-tools__summary">Set important dates on a shared schedule. Subscribe to events in Google Cal, iCal, or Outlook.</p>
            </a>
          </nav>
        </div>
      </div>
    )
  }
}

export default Projects;