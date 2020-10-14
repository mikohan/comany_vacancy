interface TransHeader {
  [key: string]: { [key: string]: string };
}

export const translateHeader: TransHeader = {
  english: {
    logoHome: 'HOME',
    darkTheme: 'DARK THEME',
    lightTheme: 'LIGHT THEME',
    password: 'Password',
    remember: 'Remember Me',
    search: 'Search',
    flag: '🇺🇸',
  },
  russian: {
    logoHome: 'ГЛАВНАЯ',
    darkTheme: 'ТЕМНАЯ ТЕМА',
    lightTheme: 'СВЕТЛАЯ ТЕМА',
    password: 'Пароль',
    remember: 'Запомнить Меня',
    search: 'Искать',
    flag: '🇷🇺',
  },
  czech: {
    logoHome: 'DOMY',
    darkTheme: 'TEMNA THEMA',
    lightTheme: 'SVETLA THEMA',
    password: 'Contrasena',
    remember: 'Recuerdame',
    search: 'Buscar',
    flag: '🇪🇸',
  },
};
