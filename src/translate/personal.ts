interface ITranslateText {
  [key: string]: {
    [key: string]: string;
  };
}
export const translateText: ITranslateText = {
  english: {
    pageTitle: 'My Sports Achivments and Learning',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus
            magnam quos, explicabo perferendis consequuntur ullam quia inventore
            dignissimos veritatis itaque. Suscipit qui consectetur eveniet
            repudiandae, officia neque illum sunt?
            `,
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
