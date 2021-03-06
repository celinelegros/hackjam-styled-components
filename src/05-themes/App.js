import React, {Component} from 'react';
const LIGHT = 'light';
const DARK = 'dark';

// Create a lightTheme object and a darkTheme object
// They both need to have a primary and a textColor property, which are just color in strings

const lightTheme = {

}

const darkTheme = {

}

export class App extends Component {

  state = {
    theme: LIGHT
  };

  toggleTheme = () => this.setState({theme: this.state.theme === LIGHT ? DARK : LIGHT});

  render() {
    const {theme} = this.state;

    // Use a ThemeProvider and put the theme from the state
    return (
      <div>
        <Main toggleTheme={this.toggleTheme}/>
      </div>
    );
  }
}


//This component will receive a function to change the theme
//Create a styled div that will set the background to the primary from the background
//Create a styled h2 that will set the color to the textColor from the theme
const Main = () => {
    return (
      <div />
    )
}

