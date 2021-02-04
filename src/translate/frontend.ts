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
              Hi, I am Vladimir and in this video I will tell you about my
              Front End experience.
              </p>
              <p>
                I always was a more backend oriented developer but I really loved
                the idea of Single Page Applications.
                Because I am a marketologist as well , I  was sceptical about SPAs
                because search engines didn't recognize it.
            </p>
            <p> 
              Yes, SPAs are convenient and fast and look great but there is one big
              problem: they are not recognized by search engines.
              It is a very big disadvantage that stopped me from using them.
            </p>
            <p>
              Then as I learned frontend deeply I found out Server Side Rendering Technology.
              It changed the way I see things.
              I started learning Javascript and typescript
              Front End frameworks, Vue, NuxtJs, React and NextJs.
              I took about 15 courses on Udemy and dived in Frontend Development deeply.
              I  discover many cutting edge technologies.
              One of them is microservices. In my opinion microservices is the nearest
              future of web development. Now i'm learning this technology.
            </p>
            <p>
              Some of my front end projects you can see on this page down below.
              Thank you for your time. Bye!
            </p>`,
  },
  russian: {
    pageHeader: 'Опыт Фронт Енд разработки',
    header: 'Несколько Front End проектов',
    text: `
    <p>
    Я всегда был более ориентированным на бэкэнд разработки, но мне очень нравилась 
    идея Single Page Applications.
    Поскольку я тоже маркетолог, я скептически относился к SPA, потому что поисковые 
    системы не распознавали это.
    Это очень большой недостаток, который мешал мне их использовать.
    </p>
    <p>
    Затем, когда я глубоко изучил интерфейс, я обнаружил технологию рендеринга на стороне сервера.
    Это изменило мой взгляд на вещи.
    Я начал изучать Javascript и тайпскрипт, Vue, NuxtJs, React и NextJs.
    Я прошел около 15 курсов по Udemy и глубоко погрузился в разработку фронтенда.
    Я открываю для себя множество передовых технологий.
    Одно из них - микросервисы. На мой взгляд, ближайшее будущее веб-разработки - это 
    микросервисы. Сейчас изучаю эту технологию.
    </p>
    <p>
    Некоторые из моих фронтенд-проектов вы можете увидеть на этой странице.
    </p\>`,
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
    Ano, SPA jsou pohodlná a rychlá a vypadají skvěle, ale je tu jeden velký problém: vyhledávače je neuznávají.
    Je to velmi velká nevýhoda, která mi zabránila používat je.
    </p>
    <p>
    Když jsem se hluboce dozvěděl frontend, zjistil jsem technologii Server Side Rendering Technology.
    Změnilo to způsob, jakým vidím věci.
    Začal jsem se učit Javascript a strojopis
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
