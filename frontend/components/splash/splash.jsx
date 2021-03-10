import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="howsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Work better, together.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Democamp is more than just a project management tool — it’s a better way to work. Teams that switch to Democamp are more productive and better organized. They communicate better and require fewer meetings. And they’re far more efficient than before. Here’s how Democamp makes it happen.</p>
          <h1 className="heading heading--xx-large grid__item grid__item--large"><br></br>Inside every project; all the tools teams need to get work done.</h1>
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
      </div>
      )
    }
}

export default Splash;
