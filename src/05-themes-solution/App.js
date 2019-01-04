import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components'

const lightTheme = {
  primary: 'white',
  text: 'black',
};

const darkTheme = {
  primary: 'black',
  text: 'white',
};

export class App extends Component {

  state = {
    theme: 'light'
  };

  toggleTheme = () => this.setState({theme: this.state.theme === 'light' ? 'dark' : 'light'});

  render() {
    const {theme} = this.state;
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Main toggleTheme={this.toggleTheme}/>
      </ThemeProvider>
    );
  }
}


const StyledContainer = styled.div`
  background: ${props => props.theme.primary};
  height: 100vh;
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: ${props => props.theme.text}
`

const Main = ({toggleTheme}) => (
  <StyledContainer>
    <StyledTitle>Hello There</StyledTitle>
    <button onClick={toggleTheme}>Change theme</button>
  </StyledContainer>
)