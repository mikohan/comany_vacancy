export interface IItem {
  [key: string]: {
    header: string;
    text: string;
    pageHeader: string;
  };
}
export const frontend: IItem = {
  english: {
    header: 'Some of Front End Pfojects',
    pageHeader: 'Front End Experience',
    text: `
    <h1>Вакансия Менеджер по Продажам</h1>
    <p>
    Comming Soon
    </p>
    `,
  },
  russian: {
    pageHeader: 'Вакансия Менеджер по Продажам',
    header: 'Несколько Front End проектов',
    text: `
    <h1>Вакансия Менеджер по Продажам</h1>
    <p>
    Comming Soon
    </p>
    `,
  },
  czech: {
    pageHeader: 'Front End Experience',
    header: 'Some of Front End Pfojects',

    text: `
    <h1>Вакансия Менеджер по Продажам</h1>
    <p>
    Comming Soon
    </p>
    `,
  },
};
