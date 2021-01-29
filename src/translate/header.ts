interface TransHeader {
  [key: string]: { [key: string]: string };
}

export const translateHeader: TransHeader = {
  english: {
    logoHome: 'Home',
    darkTheme: 'Dark',
    lightTheme: 'Light',
    introduction: 'Introduction',
    fullstack: 'FullStack',
    frontend: 'Frontend',
    linux: 'Linux Administration',
    backEnd: 'Backend',
    marketing: 'Marketing',
    flag: '🇺🇸',
    personality: 'Personality & Hobbies',
    hobbies: 'Hobbies',
    blog: 'Blog',
    portfolio: 'Portfolio',
    certificates: 'Certificates',
  },
  russian: {
    logoHome: 'Главная',
    darkTheme: 'Темная',
    lightTheme: 'Светлая',
    introduction: 'Обо Мне',
    fullstack: 'Фулл Стак',
    frontend: 'Фронтенд',
    backEnd: 'Бэкенд',
    linux: 'Администрирование Линукс',
    marketing: 'Маркетинг',
    flag: '🇷🇺',
    personality: 'Личность и Хобби',
    hobbies: 'Хобби',
    blog: 'Блог',
    portfolio: 'Портфолио',
    certificates: 'Сертификаты',
  },
  czech: {
    logoHome: 'Home',
    darkTheme: 'Tmavé',
    lightTheme: 'Světelné',
    introduction: 'o mně',
    fullstack: 'FullStack',
    frontend: 'Frontend',
    backEnd: 'Backend',
    linux: 'Systema Admin',
    marketing: 'Maketing',
    flag: '🇨🇿',
    personality: 'Osobnost',
    hobbies: 'Záliba',
    blog: 'Blog',
    portfolio: 'Portfolio',
    certificates: 'Certificates',
  },
};
