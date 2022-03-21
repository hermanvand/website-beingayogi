import React from 'react'
import styled, { css } from 'styled-components'
import {themes, ThemeContext} from '../../context/theme';

const StyledDiv = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${(props) => props.background};
    font-family: Verdana, Helvetica, sans-serif;
`

// View is the theme styling of the viewport
class View extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      };
  
      // State also contains the updater function so it will
      // be passed down into the context provider
      this.state = {
        theme: themes.light,
        toggleTheme: this.toggleTheme,
      };
    }
  
    render() {
      // The entire state is passed to the provider
      return (
        <ThemeContext.Provider value={this.state}>
            <StyledDiv className="viewPort" background={this.state.theme.background}>
                { this.props.children }
            </StyledDiv>       
        </ThemeContext.Provider>
      );
    }

}

export default View