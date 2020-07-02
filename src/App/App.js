import React from 'react';
import './App.scss';
import twilioData from '../helpers/data/twilioData';

class App extends React.Component {
  sendSMS = () => {
    const numfromFirebase = '1234567890';
    const smsNum = `+1${numfromFirebase}`;
    const message = 'got a message from react';
    twilioData.sendSMS(smsNum, message);
  }

  render() {
    return (
      <div className="App">
        <h1>INSIDE APP COMPONENT</h1>
        <button className="btn btn-info" onClick={this.sendSMS}>I am a button</button>
      </div>
    );
  }
}

export default App;
