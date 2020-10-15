import React, { createContext, useState } from 'react';
import useToggleState from '../hooks/useToggleState';
import { defaultDarkTheme } from '../config';

interface ThemeContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: string;
  changeLanguage: (e: any) => void;
}

export const ThemeContext = createContext({} as ThemeContextInterface);

function DarkThemeProvider(props: any) {
  const [isDarkMode, toggleTheme] = useToggleState(defaultDarkTheme);

  const [language, setLanguage] = useState('english');
  const changeLanguage = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setLanguage(e.target.value);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme: toggleTheme,
        language: language,
        changeLanguage: changeLanguage,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default DarkThemeProvider;
