interface ITranslateText {
  [key: string]: {
    [key: string]: string;
  };
}
export const translateText: ITranslateText = {
  english: {
    pageTitle: 'My Sports Achivments and Learning',
    text: 'Lorem ipsum dolor sit ament',
  },

  russian: {
    pageTitle: 'Мои спортивные достижения',
    text: 'Lorem ipsum dolor sit ament',
  },
  czech: {
    pageTitle: 'My Sports Achivments and Learning',
    text: 'Lorem ipsum dolor sit ament',
  },
};
