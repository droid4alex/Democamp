import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="defaultsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Work better, together.</h1>
          <p className="grid__item grid__item--medium flush--bottom">Democamp is more than just a project management tool — it’s a better way to work. Teams that switch to Democamp are more productive and better organized. They communicate better and require fewer meetings. And they’re far more efficient than before. Here’s how Democamp makes it happen.</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="howsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">How it works</h1>
          <p className="grid__item grid__item--medium flush--bottom">How it works</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="beforesplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Before & After</h1>
          <p className="grid__item grid__item--medium flush--bottom">Before & After</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="gotsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Got clients?</h1>
          <p className="grid__item grid__item--medium flush--bottom">Got clients?</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="pricingsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Pricing</h1>
          <p className="grid__item grid__item--medium flush--bottom">Pricing</p>
        </div>
        <div className="grid grid--centered grid--formatted centered-medium info-div" id="supportsplash">
          <h1 className="heading heading--xx-large grid__item grid__item--large">Support</h1>
          <p className="grid__item grid__item--medium flush--bottom">Support</p>
        </div>
      </div>
      )
    }
}

export default Splash;
