import React from 'react';
import { Link } from 'react-router-dom';

class Schedule extends React.Component{
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
        <center>
          <div className="bc-tools grid__item grid__item--large push--top">
            <nav className="bc-tools__nav bc-tools__nav_nest">
              <a className="bc-tools__item bc-tools__item--pulse" href="#/schedule">
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
