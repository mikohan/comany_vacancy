interface TransHeader {
  [key: string]: { [key: string]: string };
}

export const translateHeader: TransHeader = {
  english: {
    logoHome: 'HOME',
    darkTheme: 'DARK THEME',
    lightTheme: 'LIGHT THEME',
    frontEnd: 'FRONTEND',
    backEnd: 'BACKEND',
    remember: 'Remember Me',
    search: 'Search',
    flag: '🇺🇸',
  },
  russian: {
    logoHome: 'ГЛАВНАЯ',
    darkTheme: 'ТЕМНАЯ ТЕМА',
    lightTheme: 'СВЕТЛАЯ ТЕМА',
    frontEnd: 'ФРОНТЕНД',
    backEnd: 'БЭКЭНД',
    password: 'Пароль',
    remember: 'Запомнить Меня',
    search: 'Искать',
    flag: '🇷🇺',
  },
  czech: {
    logoHome: 'DOMY',
    darkTheme: 'TEMNA THEMA',
    lightTheme: 'SVETLA THEMA',
    frontEnd: 'FRONTEND',
    backEnd: 'BACKEND',
    password: 'Contrasena',
    remember: 'Recuerdame',
    search: 'Buscar',
    flag: '🇪🇸',
  },
};
