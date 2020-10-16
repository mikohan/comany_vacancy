interface TransHeader {
  [key: string]: { [key: string]: string };
}

export const translateHeader: TransHeader = {
  english: {
    logoHome: 'HOME',
    darkTheme: 'DARK THEME',
    lightTheme: 'LIGHT THEME',
    introduction: 'Introduction',
    frontEnd: 'Frontend',
    sysAdmin: 'Sys Admin',
    backEnd: 'Backend',
    marketing: 'Marketing',
    flag: '🇺🇸',
    personality: 'Personality',
    hobbies: 'Hobbies',
  },
  russian: {
    logoHome: 'ГЛАВНАЯ',
    darkTheme: 'ТЕМНАЯ ТЕМА',
    lightTheme: 'СВЕТЛАЯ ТЕМА',
    introduction: 'Обо Мне',
    frontEnd: 'Фронтенд',
    backEnd: 'Бэкенд',
    sysAdmin: 'Сис Админ',
    marketing: 'Маркетинг',
    flag: '🇷🇺',
    personality: 'Личные качества',
    hobbies: 'Хобби',
  },
  czech: {
    logoHome: 'HOME',
    darkTheme: 'tmavé téma',
    lightTheme: 'světelné téma',
    introduction: 'o mně',
    frontEnd: 'FRONTEND',
    backEnd: 'BACKEND',
    sysAdmin: 'Systema Admin',
    marketing: 'Maketing',
    flag: '🇨🇿',
    personality: 'Osobnost',
    hobbies: 'Záliba',
  },
};
