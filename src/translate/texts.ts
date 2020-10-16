interface TransText {
  [key: string]: { [key: string]: string };
}

export const translateText: TransText = {
  english: {
    myName: 'My name is',
    name: 'Vladimir Vostrikov',
    mainHeading:
      "I'm Full Stack developer with huge knowledge of Online Marketing, and Experience in ecommerce business.",
    learnMore: 'Learn more',
  },
  russian: {
    myName: 'Меня зовут',
    name: 'Владимир Востриков',
    mainHeading:
      'Я разработчик Full Stack с огромными знаниями в области интернет-маркетинга и опытом работы в сфере электронной коммерции.',
    learnMore: 'Узнать больше',
  },
  czech: {
    myName: 'Jmenuji se ',
    name: 'Vladimir Vostrikov',
    mainHeading:
      'Jsem vývojář Full Stack s obrovskými znalostmi online marketingu a zkušeností v oblasti elektronického obchodování.',
    learnMore: 'Dozvědět se více',
  },
};
