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
    text: `<p>
              Hi, I am Vladimir and I will tell you about my
              Front End experience.
              </p>
              <p>
                I always was a more backend oriented developer but I really loved
                the idea of Single Page Applications.
                Because I am a marketologist as well, I  was sceptical about SPAs
                because yes, SPAs are convenient and fast and look great but there is one big
                problem: they are not recognized by search engines.
                It was a very big disadvantage that stopped me from using them.
            </p>
            <p>
              Then as I learned frontend deeply I found out Server Side Rendering Technology.
              It changed the way I see things.
              I started learning Javascript and Typescript,
              Front End frameworks, Vue, NuxtJs, React and NextJs.
              I took about 15 courses on Udemy and dived in Frontend Development deeply.
              I discover many cutting edge technologies.
              One of them are microservices. In my opinion microservices are the nearest
              future of web development. Now i'm learning this technology.
            </p>
            <p>
              Some of my front end projects you can see on this page down below.
              Thank you for your time!
            </p>`,
  },
  russian: {
    pageHeader: 'Вакансия Менеджер по Продажам',
    header: 'Несколько Front End проектов',
    text: `
    <p>
    <h1>HTML Ipsum Presents</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus
        et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien
        ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
        ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui.  in turpis pulvinar facilisis. Ut felis.</p>

        <h2>Header Level 2</h2>

        <ol>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
          Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa.
          Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus,
        at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

        <h3>Header Level 3</h3>

        <ul>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
    </p>`,
  },
  czech: {
    pageHeader: 'Front End Experience',
    header: 'Some of Front End Pfojects',
    text: `
    <p>
    Vždy jsem byl vývojář více zaměřený na backend, ale opravdu se mi líbila myšlenka Single 
    Page Applications.
    Protože jsem také marketér, byl jsem vůči SPA skeptický, protože to vyhledávače nepoznaly.
    </p>
    <p>
    Když jsem se hluboce dozvěděl frontend, zjistil jsem technologii Server Side Rendering 
    Technology.
    Změnilo to způsob, jakým vidím věci.
    Začal jsem se učit Javascript a typescript,
    Front-endové rámce, Vue, NuxtJs, React a NextJs.
    Absolvoval jsem asi 15 kurzů na Udemy a hluboce jsem se ponořil do Frontend Development.
    Objevuji mnoho špičkových technologií.
    Jednou z nich jsou mikroslužby. Podle mého názoru je mikroslužba nejbližší budoucností vývoje webových aplikací. Teď se učím tuto technologii.
    </p>
    <p>
    Některé z mých front-endových projektů můžete vidět na této stránce níže.
    </p>
    `,
  },
};
