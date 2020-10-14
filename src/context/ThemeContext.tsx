import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

interface ThemeContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextInterface);

function DarkThemeProvider(props: any) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default DarkThemeProvider;
