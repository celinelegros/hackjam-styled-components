import React, {Component} from 'react';


// FIRST EXERCISE
// Create a styled component that can take props, for instance 'big', 'medium' or 'small' and change the font-size accordingly

export class App extends Component {
  render() {
    return (
      <div>
        <h3 style={{'font-size': '100px'}}>First title</h3>
        <h3 style={{'font-size': '50px'}}>Second title</h3>
        <h3 style={{'font-size': '10px'}}>Third title</h3>
      </div>
    );
  }
}


// SECOND EXERCISE

export class App2 extends Component {
  render() {
    return (
      <div>
        <h3 style={{'font-size': '100px', background:'tomato'}}>First title</h3>
        <h3 style={{'font-size': '50px', background: 'blue'}}>Second title</h3>
        <h3 style={{'font-size': '10px', background: 'purple'}}>Third title</h3>
      </div>
    );
  }
}
