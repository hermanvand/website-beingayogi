import { createContext } from 'react';

export const themes = {
    light: {
      background: 'white',
      color: 'black'
    },
    dark: {
      background: 'black',
      color: 'white'
    },
  };
  
export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  })