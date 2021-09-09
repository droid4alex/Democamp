import React from 'react';

class Todos extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // projects: {},
      // messages: {},
      todos: {}
    }
  }

  scrollToBottom (){
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  getTodosRemaining() {
    let values = Object.values(this.state.todos);
    if (values.length > 0) {
      let todosRemaining = [];
      let dueDate;
      for (let i = 0; i < (Object.keys(this.state.todos).length); i++) {
        // dueTime = values[i].due_date.slice(11,19);
        dueDate = values[i].due_date.slice(0, 10);
        if (!values[i].status){
          let href = "api/todos/" + values[i].id
          todosRemaining.push(
            // <a className="card__link" href={href} key={i}>
            <a className="card__link" key={i}>
              <div className="card__content__todo">
                <h2 className="card__title flush" title="" data-role="content_filter_text">{values[i].title}</h2>
                <p className="card__description flush" title="" data-role="content_filter_text">Due: {dueDate}</p>
              </div>
            </a>
            // </a>
          )
        }
      }
      return (
        todosRemaining
      )
    }
  }

  getTodosComplete() {
    let values = Object.values(this.state.todos);
    if (values.length > 0) {
      let todosComplete = [];
      for (let i = 0; i < (Object.keys(this.state.todos).length); i++) {
        console.log(values[i].status)
        if (values[i].status) {
          let href = "api/todos/" + values[i].id
          todosComplete.push(
            <a className="card__link" href={href} key={i}>
              <div className="card__content">
                <h2 className="card__title flush" title="" data-role="content_filter_text">{values[i].title}</h2>
                Due: <p className="card__description flush" title="" data-role="content_filter_text">{values[i].due_date}</p>
              </div>
            </a>
          )
        }
      }
      return (
        todosComplete
      )
    }
  }

  componentDidMount() {
    this.props.fetchAllTodos().then(todos => {
      this.setState(todos)
    })
  }

  componentWillUnmount() {
  }

  render(){
    return (
      <div>
        <section className="project-index__section project-index__section--projects " data-role="project_group content_filter_group" data-projects-display="card" role="region" aria-label="Todos">
          <header className="centered">
            <h3 className="project-index__header break break--on-background push--top push_half--bottom">
              <span>My To-dos</span>
            </h3>
          </header>
          <div className="card-grid--projects" data-role="project_group_items">
            {this.getTodosRemaining()}            
            {/* <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
              <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
                <button name="button" type="button" title="Start a new project…" className="options-menu__expansion-toggle btn btn--small btn--with-icon btn--add-icon" data-behavior="toggle_expansion_on_click">&nbsp; 	&nbsp; New</button>
              </span>
            </aside> */}
            {/* <div className="AddItemSquircleRow-box">
              <svg className="Icon AddItemSquircleRow-plusIcon PlusIcon" focusable="false" viewBox="0 0 32 32">
                <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z">
                </path>
              </svg>
            </div>New Project */}
            <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
              <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
                <div className="RowStructure-leftChildren">
                  <div className="AddItemSquircleRow-leftElements">
                    <div className="AddItemSquircleRow-box">
                      <svg className="Icon AddItemSquircleRow-plusIcon PlusIcon" focusable="false" viewBox="0 0 32 32">
                        <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z">
                        </path>
                      </svg>
                    </div>New Todo
                  </div>
                </div>
              </span>
            </aside>
          </div>
          {/* <div className="card-grid--projects" data-role="project_group_items">
            <h4>Completed</h4>
            {this.getTodosComplete()}
          </div> */}
        </section>
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
