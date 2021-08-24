interface TransHeader {
  [key: string]: { [key: string]: string };
}

export const translateHeader: TransHeader = {
  english: {
    logoHome: 'Home',
    darkTheme: 'Dark',
    lightTheme: 'Light',
    introduction: 'Introduction',
    fullstack: 'Marktologist',
    frontend: 'Salesman',
    categoryManager: 'Category Manager',
    linux: 'Linux Administration',
    backEnd: 'Backend',
    marketing: 'Marketing',
    flag: '🇺🇸',
    personality: 'Personality & Hobbies',
    hobbies: 'Hobbies',
    blog: 'Blog',
    portfolio: 'Portfolio',
    certificates: 'Certificates',
    contacts: 'Contacts',
    contactsText: 'Please Feel Free to Contact Me Any Time',
  },
  russian: {
    logoHome: 'Главная',
    darkTheme: 'Темная',
    lightTheme: 'Светлая',
    introduction: 'Обо Мне',
    fullstack: 'Маркетолог',
    frontend: 'Менеджер по продажам',
    categoryManager: 'Категорийный Менеджер',
    backEnd: 'Бэкенд',
    linux: 'Администрирование Линукс',
    marketing: 'Маркетинг',
    flag: '🇷🇺',
    personality: 'Личность и Хобби',
    hobbies: 'Хобби',
    blog: 'Блог',
    portfolio: 'Портфолио',
    certificates: 'Сертификаты',
    contacts: 'Контакты',
    contactsText: 'Пожалуйста звоните или пишите в любое время',
  },
  czech: {
    logoHome: 'Home',
    darkTheme: 'Tmavé',
    lightTheme: 'Světelné',
    introduction: 'o mně',
    fullstack: 'Maketolog',
    categoryManager: 'Category Manager',
    frontend: 'Manager',
    backEnd: 'Backend',
    linux: 'Systema Admin',
    marketing: 'Maketing',
    flag: '🇨🇿',
    personality: 'Osobnost',
    hobbies: 'Záliba',
    blog: 'Blog',
    portfolio: 'Portfolio',
    certificates: 'Certificates',
    contacts: 'Kontakty',
    contactsText: 'Neváhejte mě kdykoli kontaktovat',
  },
};
