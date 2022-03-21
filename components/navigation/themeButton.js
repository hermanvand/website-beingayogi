import {ThemeContext} from '../../context/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ThemeButton() {
  // The Theme  Button receives not only the theme
  // but also a toggleTheme function from the contex
  // could add style: style={{backgroundColor: theme.background, color: theme.color}}
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (        
        <button type="button" className="btn btn-light"
          onClick={toggleTheme}
          >
          <FontAwesomeIcon icon='adjust' size="1x"/>
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeButton;

