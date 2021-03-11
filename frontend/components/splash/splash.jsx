import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
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
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="howsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Work better, together.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Democamp is more than just a project management tool — it’s a better way to work. Teams that switch to Democamp are more productive and better organized. They communicate better and require fewer meetings. And they’re far more efficient than before. Here’s how Democamp makes it happen.</p>
          <div className="bc-tools grid__item grid__item--large push--top">
            <nav className="bc-tools__nav">
              <a className="bc-tools__item bc-tools__item--pulse" onClick={() => this.scrollToBottom()}>
                <h3 className="bc-tools__title">Message Board</h3>
                <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#1b6ac9" r="20" /><path d="m28.0459331 10h-15.9434943c-1.0512194 0-2.1024388.7246377-2.1024388 1.9927536v19.7463768l4.0296744-4.1666666h14.0162587c1.0512195 0 1.9272356-.9057971 1.9272356-1.9927537v-13.5869565c.1752033-.9057971-.5256097-1.8115942-1.5768291-1.9927536 0 0-.1752032 0-.3504065 0zm-1.5768291 13.5869565h-12.7898361v-1.4492753h12.9650394v1.4492753zm0-4.1666666h-12.7898361v-1.268116h12.9650394v1.268116zm0-3.9855073h-12.7898361v-1.2681159h12.9650394v1.2681159z" fill="#fff" /></g></svg>
                <p className="bc-tools__summary">Post announcements, pitch ideas, progress updates, etc. and keep feedback on-topic.</p>
              </a>
              <a className="bc-tools__item bc-tools__item--pulse" onClick={() => this.scrollToBottom()}>
                <h3 className="bc-tools__title">To-dos</h3>
                <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#3cb371" r="20" /><path d="m17.4 23.4758621-6.8714286-6.6344828-3.5285714 3.2275862 6.8714286 6.6344828 3.5285714 3.2275862 15.6-14.7034483-3.5285714-3.2275862z" fill="#fff" /></g></svg>
                <p className="bc-tools__summary">Make lists of work that needs to get done, assign items, set due dates, and discuss.</p>
              </a>
              <a className="bc-tools__item bc-tools__item--pulse" onClick={() => this.scrollToBottom()}>
                <h3 className="bc-tools__title">Schedule</h3>
                <svg className="bc-tools__icon" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="20" cy="20" fill="#ff2d55" r="20" /><path d="m25.5555556 21.2692308h-5.5555556v5.576923h5.5555556zm-1.1111112-12.2692308v2.2307692h-8.8888888v-2.2307692h-2.2222223v2.2307692h-1.1111111c-1.2698412 0-2.2222222.956044-2.2222222 2.2307693v15.6153846c0 1.2747253.952381 2.2307692 2.2222222 2.2307692h15.5555556c1.2698412 0 2.2222222-.9560439 2.2222222-2.2307692v-15.6153846c0-1.2747253-.952381-2.2307693-2.2222222-2.2307693h-1.1111111v-2.2307692zm3.3333334 20.0769231h-15.5555556v-12.2692308h15.5555556z" fill="#fff" /></g></svg>
                <p className="bc-tools__summary">Set important dates on a shared schedule. Subscribe to events in Google Cal, iCal, or Outlook.</p>
              </a>
            </nav>
          </div>
          <h1 className="heading heading--xx-large grid__item grid__item--large">Inside every project; all the tools teams need to get work done.</h1>
          <p className="grid__item grid__item--medium flush--bottom">With Democamp, you break up your work into separate projects. Each project contains everything related to the work at hand; all the people involved, every discussion, every document, file, task, important date, etc. Everything!</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="beforesplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Night & day.</h1>
          <p className="grid__item grid__item--medium flush--bottom">We asked our customers what work was like before they used Democamp. And how it’s improved after switching to Democamp. Thousands replied. Wow, what a difference.</p>
          <h1 className="heading heading--xx-large grid__item grid__item--large"><br></br>Before switching to Democamp.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Our customers tried everything before switching to Democamp; email, spreadsheets, Google Docs, Asana, Trello, Slack, Jira, Evernote, phone calls and texts, MS project, Monday, stickies on a wall, whiteboards, meeting after meeting, etc.</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="gotsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Dazzle your clients.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Be partners, not adversaries. Democamp keeps both sides organized, everyone’s feedback on the record, and all decisions, approvals, files, tasks, deadlines, and project communications safe and centralized. You’ll make a great impression.</p>
          <h1 className="heading heading--xx-large grid__item grid__item--large"><br></br>You’re always in control.</h1>
          <p className="grid__item grid__item--medium flush--bottom">You decide what your clients can see. Projects start off private to your team. When you’re ready to share a message, a to-do, or a file with the client, just flip the switch.</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="pricingsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Save big with Democamp.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Democamp replaces a bunch of apps. See how our all-in-one, fixed price compares to bundling Slack + Asana, Dropbox & Gsuite together:</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="supportsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Friendly folks, standing by.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Always humans, never bots. The hands-down, sharpest and friendliest support team in the biz. Contact us and we’ll get back to you in about XYZ minutes.</p>
        </div>
        <br></br>
      </div>
      )
    }
}

export default Splash;
