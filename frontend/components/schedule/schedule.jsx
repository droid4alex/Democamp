import React from 'react';

class Schedule extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // projects: {},
      // messages: {},
      todos: {},
      date: new Date()
    }
  }

  scrollToBottom (){
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

  showDaysInMonth() {
    let numDaysDate = new Date(this.state.date.getYear(), this.state.date.getMonth()+1,1)
    numDaysDate.setDate(numDaysDate.getDate() - 1);
    let numDays = numDaysDate.getDate();
    let daysInMonth = new Array();
    for (let i = 0; i < numDays; i++) {
      daysInMonth.push("")
    }
    let dateYear = this.state.date.getFullYear().toString();
    let dateMonth = (this.state.date.getMonth()+1).toString();
    // let dueTime;
    let values = Object.values(this.state.todos);
    if (values.length > 0){
      let todoYear;
      let todoMonth;
      for (let i = 0; i < (Object.keys(this.state.todos).length); i++) {
        todoYear = values[i].due_date.slice(0, 4);
        todoMonth = values[i].due_date.slice(6, 7);
        if (dateYear === todoYear && dateMonth === todoMonth){
          // dueTime = values[i].due_date.slice(11, 19);
          daysInMonth[parseInt(values[i].due_date.slice(8, 10)) - 1] += values[i].title + "."
        }
      }
    }
    let todosInDays = new Array();
    for (let i = 0; i < numDays; i++) {
      todosInDays.push(
        <a className="card__link__schedule" key={i}>
          <div className="card__content__schedule">
            <h2 className="card__title flush" title="" data-role="content_filter_text">{i+1}</h2>
            <p className="card__description flush" title="" data-role="content_filter_text">{daysInMonth[i]}</p>
          </div>
        </a>
      )
    }
    return (
      todosInDays
    )
  }

  increaseMonth(){
    let numDaysDate = new Date(this.state.date.getYear(), this.state.date.getMonth() + 1, 1)
    numDaysDate.setDate(numDaysDate.getDate() - 1);
    let numDays = numDaysDate.getDate();
    this.state.date.setDate(this.state.date.getDate() + numDays)
    let spanMo = document.getElementById("spanMo");
    spanMo.innerHTML = " " + this.state.date.toLocaleString('default', { month: 'long' }) + " " + this.state.date.getFullYear().toString() + " "
    this.render();
  }

  decreaseMonth() {
    let numDaysDate = new Date(this.state.date.getYear(), this.state.date.getMonth() + 1, 1)
    numDaysDate.setDate(numDaysDate.getDate() - 1);
    let numDays = numDaysDate.getDate();
    this.state.date.setDate(this.state.date.getDate() - numDays)
    let spanMo = document.getElementById("spanMo");
    spanMo.innerHTML = " " + this.state.date.toLocaleString('default', { month: 'long' }) + " " + this.state.date.getFullYear().toString() + " "
    this.render();
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
        <header className="centered">
          <h3 className="project-index__header break break--on-background push--top push_half--bottom">
            <span id="spanMo"> {this.state.date.toLocaleString('default', { month: 'long' })} {this.state.date.getFullYear().toString()} </span>
          </h3>
          <button onClick={() => { this.decreaseMonth() }}>Prev</button>
          <button onClick={() => { this.increaseMonth() }}>Next</button>
        </header>
        <div className="card-grid--projects" data-role="project_group_items">
          {this.showDaysInMonth()}
          {/* <aside className="project-index__toolbar project-index__toolbar--new hide-from-clients" role="presentation" data-behavior="hide_when_content_filter_active">
            <span className="options-menu options-menu--add-project" data-purpose="topic" data-behavior="expandable render_new_project_form_on_expand reveal_on_expand">
              <button name="button" type="button" title="Start a new project…" className="options-menu__expansion-toggle btn btn--small btn--with-icon btn--add-icon" data-behavior="toggle_expansion_on_click">&nbsp; 	&nbsp; New</button>
            </span>
          </aside> */}
        </div>
        <center>
          <div className="bc-tools grid__item grid__item--large push--top">
            <nav className="bc-tools__nav bc-tools__nav_nest">
              <a className="bc-tools__item bc-tools__item--pulse" onClick={() => this.scrollToBottom()}>
                <h3 className="bc-tools__title">Schedule</h3>
                <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#ff2d55" r="20" /><path d="m25.5555556 21.2692308h-5.5555556v5.576923h5.5555556zm-1.1111112-12.2692308v2.2307692h-8.8888888v-2.2307692h-2.2222223v2.2307692h-1.1111111c-1.2698412 0-2.2222222.956044-2.2222222 2.2307693v15.6153846c0 1.2747253.952381 2.2307692 2.2222222 2.2307692h15.5555556c1.2698412 0 2.2222222-.9560439 2.2222222-2.2307692v-15.6153846c0-1.2747253-.952381-2.2307693-2.2222222-2.2307693h-1.1111111v-2.2307692zm3.3333334 20.0769231h-15.5555556v-12.2692308h15.5555556z" fill="#fff" /></g></svg>
                <p className="bc-tools__summary">Set important dates on a shared schedule. Subscribe to events in Google Cal, iCal, or Outlook.</p>
              </a>
            </nav>
          </div>
        </center>
      </div>
      )
    }
}

export default Schedule;
