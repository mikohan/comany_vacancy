interface TransText {
  [key: string]: {
    [key: string]: string | any;
  };
}

export const translateText: TransText = {
  english: {
    myName: 'My name is',
    name: 'Vladimir Vostrikov',
    mainHeading:
      "I'm Full Stack developer with huge knowledge of Online Marketing, and Experience in ecommerce business.",
    learnMore: 'Learn more',
    secondRowText: `
    <p>
      So here I am.
      In a nutshell I am a fullstack developer with 12 years of experience in programming and online marketing.
      With that accumulation of knowledge I can bring any offline business to online just by myself.
    </p>
    <p>
      First of all I am an Engineer.
      I have an engineering mindset.
      I also have a graduate degree in engineering.
      But Education can't keep up with our fast-moving world.
      That’s why I educate myself every day.
      Usually I read about 30 professional books and take more than 20 courses and seminars a year.
    </p>
    <p>
      I have a big family.
      My family is the compass that guides me. It is  the inspiration to reach great heights.
    </p>
    <p>
      I am big fan of extreme sports. My favourites are alpine ski and snowboard.
      Sports help me to be self-disciplined and hold pressure.
    </p>
    <p>
      I love changes and always willing to go the extra mile.
      I believe hard work never killed anyone. And last year  I worked 70 hour a week.
      I am a problem solver. Moreover each new problem I have not met before makes me feel excited. I love new challenges.
    </p>
    <p>
      I am motivated, resourceful and enthusiastic.
      I’m loyal and trustworthy.
      I definitely can add value to any company. 
      Am absolutely positive about that.
    </p>
    `,
    betweenRow: 'Let me introduce myself in this very short video.',
    blog_latestNews: 'Latest News',
    blog_search: 'Search',
    blog_noSearchResults: 'No Search Results',
    blog_categories: 'Categories',
    pageTitle: 'Portfolio Page',
    frontEndLinks: 'Front End Projects Fast Links',
    fullStackLinks: 'Full Stack Projects Fast Links',
    miscLinks: 'Miscellanious Projects Fast Links',
    portfolio: {
      venezo: {
        title: `Venezo Project E-commerce project (Python, Django, ElasticSerach)`,

        mainText: `
        <p>
        This ecommerce project was built using the Python and Jango framework.
        And by the way I’ve built this project from scratch to production by myself.
        </p>
        <p>        
        At first glance It has quite ordinary functionality each ecommerce has.
        But According to the request of the customer it was assumed that it is going to be
        millions of inventory to manage.
        </p>
        <p>
        As you may know Searching over millions of products is not a trivial thing.
        So I have decided to realize faceted search by using Elasticsearch engine in that project.
        The search works very fast.
        </p>
        <p>
        I also used natural language processing and machine learning in the project. NLP was used 
        for translation from poland to russian. Pre Trained convolutional neural networks were 
        used for classifying images.
        </p>
        `,

        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      enterprise: {
        title: `Enterprise Management System project (PHP, MySQL, Python, Django, Javascript)`,
        mainText: `
        <p>It is a real world big project, which consists of multiple modules 
        written by using different technologies.
        </p>
        <p>
        App was designed for managing inventory, photos, videos, 
        automatic categorization and so on.
        </p>
        <p>
        In this app I realized automatic pricing. Pricing algorithm based on 
        analysis of competitors prices, suppliers prices and using machine learning under the hood.
        </p>
        <p>
        Application also collects and sorts semantic cores for that inventory. For that 
        feature I used natural language processing.
        </p>
        <p>
        Killer feature of the app is the ability to automatically prepare ads for google and 
        yandex CPC advertising. You only need to upload it by hand.
        </p>
        <p>
        Automatic upload will be realized in the nearest feature.
        </p>
        <p>
        The plan is when single product creation is completed, applications automatically 
        create and publish it to google account and keep eye on it for specific periods. 
        Algorithms will collect data to analyze the performance of that ad.
        Manager makes further decision based on that information to stop ad or keep it running. 
        </p>
        <p>
        In addition we used TensorFlow and Keras libraries for image recognition and 
        classification. The idea was to train model to recognize car spare parts and 
        categorize them later.
        </p>
        <p>
        Technology stack used in this app is Agile, Scrum, Python, Django, Django rest framework, mySQL, Vue, React, Vuex, Redux, Bootstrap, TensorFlow, Keras, Pandas, Pillow.
        </p>
        <p>
        Project was created by our team. My role in that project was team lead.
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      suppliers: {
        title: `Suppliers management module(PHP, Javascript, MySQL)`,
        mainText: `
        <p>
        This application is a part of a complex enterprise management system.
        It is responsible for collecting and processing the information of company suppliers.
        It also reduces human participation in business processes.
        </p>
        <p>
        The application is collecting price lists from partners in real time.
        Reality is that only a few suppliers have Restful APIs.
        Most wholesalers are really old school and send their price lists over the email.
        So my application checks email and grabs price lists from there.
        Then it converts it from a lot of different formats and encodings to manageable data. 
        The process is completely automatic.
        </p>
        <p>
        On the next step a special algorithm calculates scores of each supplier.
        Scores based on reliability, inventory, delivery terms, prices and other factors.
        These scores are used in further pricing processes.
        </p>
        <p>
        Sales managers also consume this information on their daily routine.
        They are checking availability and prices of products on this page. 
        </p>
        <p>
        I wrote this application quite a long time ago and that’s why I used stack PHP, 
        Javascript, mySQL.
        </p>
        <p>
        Now I would prefer python for that kind of task, because the code could be three 
        times shorter.
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      a77: {
        title: `Enterprise Management System(PHP, Javascript, Python, MySQL)`,
        mainText: `
        <p>This project I wrote about 10 years ago in pure php and javascript.
        Later I added some python modules generally for complex computations.
        It is an enterprise management system based on the idea of balanced scorecards.
        </p>
        <p>
        This is a pretty complex system. 99% of computations are performed on the server. 
        The application consists of several modules. Each module responsible for the one 
        business unit. For example marketing, human resources, suppliers management etc.
        </p>
        <p>
        Some of the modules are using neural networks for prognostic predictions models. 
        Others are using prognostic algorithms.
        </p>
        <p>
        The company I am talking about is an inventory-centric organization.
        The purchase management module is responsible for forecasting, determines stocking 
        levels, handles and controls purchasing tasks, monitors vendor performance, and 
        identifies savings opportunities.
        </p>
        <p>
        The Marketing module automatically creates and manages the online advertising.
        Calculates Return On Ad Spend of each product.
        It also makes decisions about whether to keep investing in specific products or to 
        stop wasting money on it.
        </p>
        <p>
        The system also contains a Client Relationship Module, Human Resource Management module, Financial management module.
        It also has a lot of tools for online marketing, SEO tools, content management tools et cetera.
        Main dashboard has the key performance indicators of each module.
        The CEO and the board of directors not only have the actual business indicators in real time but also have the forecast for the future decisions.
        As a matter of fact, this application allows the company to stay out from the competitors.
        As well as automation significantly reduce expenditures of business operations.
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      sheets: {
        title: `Google Sheets Replica(vanila Javascript)`,
        mainText: `
        <p>
        That project I have built just for only the purpose to learn javascript deeply.
        </p>
        <p> 
        I always love to know how things are working under the hood. 
        So I have found the course which helps me dive into javascript.
        </p>
        <p>
        While I developed the project I have built my own redux and routes system.
        I figured out how DOM libraries react. 
        How events work.
        I deeply have gotten into new design patterns and learned best practices in object-oriented programming.
        </p>
        <p>
        At the end of the project I have tried some test driven development patterns.
        It was a real challenge for me.
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/javascript-excel-project',
          text: 'See code on GitHub',
        },
        project: {
          href: 'http://sheetsonjs.tk/',
          text: 'Live View',
        },
      },
      ducato: {
        title: `Auto Parts E-commerce project (Python, Django)`,
        mainText: `
        <p>
        This is another ecommerce project based on Django Framework, which I built 
        from scratch by myself. 
        </p>
        <p>
        It has ordinary functionality, filtering, sorting and lazy loading.
        But the main feature of this project is that before we have been starting coding, we’ve analyzed the marketing niche of the client and have built the semantic core for the website.
        It has helped us to build good SEO-wise structure of the project.
        As a result site traffic starts growing rapidly after deployment and keeps growing.
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/dp',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://ducatoparts.ru',
          text: 'Live View',
        },
      },
      nuxtChat: {
        title: `Instant Chat based on NuxtJS, Socket.i and Express`,
        mainText: `
        <p>
        The Purpose of this training project was learning web-sockets.
        It was realized using VueJS , NuxtJs and Express server.
        </p>
        <p>
        It’s kind of a simple instant chat application without storing data to any databases.
        </p>
        <p>
        In the application I used Vuex store , VueTify and socket.io libraries.
        The most challenging part was to get websockets working with multiple instances of PM2 on linux server.
        </p>
        <p>
        Now it works and we can try it out!
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/live-nuxt-chat',
          text: 'See on Git Hub ',
        },
        project: {
          href: 'https://nuxtchat.tk',
          text: 'Live View',
        },
      },
      colors: {
        title: `Colors React Application`,
        mainText: `
        <p>
        Let me introduce to you one of my projects I have built using React. 
        It’s an application for creating and saving custom sets of colors. 
        </p>
        <p>
        I built this project when I learned React but now I use it to save my 
        pallets because it has turned out to be useful. 
        </p>
        <p>
        It is not as simple as it might seem. For state management I used Native React Context. 
        I also used here the Material UI library.
        </p>
        <p>
        You can test it on flatcolors.tk
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/color-project',
          text: 'See code on GitHub',
        },
        project: {
          href: 'http://flatcolors.tk',
          text: 'Live View',
        },
      },
    },
  },
  russian: {
    myName: 'Меня зовут',
    name: 'Владимир Востриков',
    mainHeading:
      'Я разработчик Full Stack с огромными знаниями в области интернет-маркетинга и опытом работы в сфере электронной коммерции.',
    learnMore: 'Узнать больше',
    secondRowText: `
    <p>
    Привет всем.
    Я Full Stack разработчик с 12-летним опытом работы в области программирования и интернет-маркетинга.
    Благодаря накопленным знаниям я могу самостоятельно перевести любой офлайн-бизнес в онлайн.
    </p>
    <p>
    Прежде всего, я инженер. У меня есть диплом инженера.
    Также у меня системное мышление.
    Но я считаю, что образование не успевает за нашим быстро меняющимся миром.
    Вот почему я занимаюсь самообразованием каждый день.
    Обычно я читаю около 30 профессиональных книг и прохожу более 20 курсов и семинаров в год.
    </p>
    <p>
      У меня большая семья.
      Моя семья - это компас, который направляет меня. Это вдохновение для достижения больших высот.
    </p>
    <p>
    Я большой поклонник экстремальных видов спорта. Мои любимые виды спорта - горные лыжи и сноуборд.
    Спорт помогает мне быть самодисциплинированным и справляться с нагрузками на работе.
    </p>
    <p>
      Я люблю новые задачи, и всегда готов выложиться на все сто и даже больше.
      Считаю, что тяжелая работа еще никому не навредила. В прошлом году я работал 70 часов в неделю.
      Решение новых трудностей меня вдохновляет. Я люблю бросать себе вызов.
    </p>
    <p>
    Я мотивирован, изобретателен и полон энтузиазма. Я верен и заслуживаю доверия. 
    Я определенно могу принести пользу любой компании. 
    Я абсолютно уверен в этом.
    </p>
    `,
    betweenRow: 'Позвольте представится, меня зовут Владимир.',
    blog_latestNews: 'Последние посты',
    blog_search: 'Поиск',
    blog_noSearchResults: 'Поиск не дал результатов',
    blog_categories: 'Категории',
    frontEndLinks: 'Фрон Енд Проекты',
    fullStackLinks: 'Фулл Стак Проекты',
    miscLinks: 'Разные Поекты',
    portfolio: {
      pageTitle: 'Портфолио',
      venezo: {
        title: `Интернет Магазин Запчастей (Python, Django)`,
        mainText: `
        <p>
        Этот E-commerce проект был построен с использованием Python и Jango.
        Кстати, я сам построил этот проект с нуля до продакшена.
        </p>
        <p>
        На первый взгляд, проект имеет вполне обычные функции.
        Но по запросу заказчика предполагалось, что в номенклатуре будет несколько миллионов позиций.
        </p>
        <p>
        Как вы, наверное, знаете, поиск по миллионам товаров - нетривиальная вещь.
        Поэтому я решил реализовать фасетный поиск, используя в этом проекте механизм Elasticsearch.
        Поиск работает очень быстро.
        </p>
        <p>
        Я также использовал в проекте обработку естественного языка и машинное обучение. ОЕЯ 
        использовалась для перевода слов с польского языка на русский. Предварительно обученные 
        сверточные нейронные сети были используемы для классификации изображений.
        </p>
        `,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'Посмотреть код на GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Посмотреть сайт',
        },
      },
      enterprise: {
        title: `Система Управления Предприятием (PHP, MySQL, Python, Django, Javascript)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      suppliers: {
        title: `Программа для работы с поставщиками(PHP, Javascript, MySQL)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      a77: {
        title: `Система управления Предприятием (PHP, Javascript, Python, MySQL)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      sheets: {
        title: `Гугл таблицы выполненные на чистом Javascript`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/javascript-excel-project',
          text: 'Посмотреть на GitHub',
        },
        project: {
          href: 'http://sheetsonjs.tk/',
          text: 'Посмотреть Сайт',
        },
      },
      ducato: {
        title: `Интернет магазин автозапчастей(Python, Django, Mysql)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/dp',
          text: 'Посмотреть на GitHub',
        },
        project: {
          href: 'https://ducatoparts.ru',
          text: 'Перейти на сайт',
        },
      },
      nuxtChat: {
        title: `Сервис мгновенных сообщений(чат), NuxtJS, Express, Socket.io`,
        mainText: `orem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский. Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном. Поскольку текст Цицерона не содержит буквы K, W, или Z, что чуждо для латинского, эти буквы, а также многие другие часто вставлены в случайном порядке, чтобы скопировать тексты различных Европейских языков, поскольку диграфы не встречаются в оригинальных текстах.`,
        gitHub: {
          href: 'https://github.com/mikohan/live-nuxt-chat',
          text: 'Посмотреть код на GitHub',
        },
        project: {
          href: 'https://nuxtchat.tk',
          text: 'Посмотреть Чат',
        },
      },
      colors: {
        title: `Приложение для работы с цветовыми палитрами`,
        mainText: `orem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский. Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном. Поскольку текст Цицерона не содержит буквы K, W, или Z, что чуждо для латинского, эти буквы, а также многие другие часто вставлены в случайном порядке, чтобы скопировать тексты различных Европейских языков, поскольку диграфы не встречаются в оригинальных текстах.`,
        gitHub: {
          href: 'https://github.com/mikohan/color-project',
          text: 'Посмотреть код на GitHub',
        },
        project: {
          href: 'https://flatcorlors.tk',
          text: 'Посмотреть сайт',
        },
      },
    },
  },
  czech: {
    myName: 'Jmenuji se ',
    name: 'Vladimir Vostrikov',
    mainHeading:
      'Jsem vývojář Full Stack s obrovskými znalostmi online marketingu a zkušeností v oblasti elektronického obchodování.',
    learnMore: 'Dozvědět se více',
    secondRowText: `
    <p>
      So here I am.
      In a nutshell I am a fullstack developer with 12 years of experience in programming and online marketing.
      With that accumulation of knowledge I can bring any offline business to online just by myself.
    </p>
    <p>
      First of all I am an Engineer.
      I have an engineering mindset.
      I also have a graduate degree in engineering.
      But Education can't keep up with our fast-moving world.
      That’s why I educate myself every day.
      Usually I read about 30 professional books and take more than 20 courses and seminars a year.
    </p>
    <p>
      I have a big family.
      My family is the compass that guides me. It is  the inspiration to reach great heights.
    </p>
    <p>
      I am big fan of extreme sports. My favourites are alpine ski and snowboard.
      Sports help me to be self-disciplined and hold pressure.
    </p>
    <p>
      I love changes and always willing to go the extra mile.
      I believe hard work never killed anyone. And last year  I worked 70 hour a week.
      I am a problem solver. Moreover each new problem I have not met before makes me feel excited. I love new challenges.
    </p>
    <p>
      I am motivated, resourceful and enthusiastic.
      I’m loyal and trustworthy.
      I definitely can add value to any company. 
      Am absolutely positive about that.
    </p>
    `,
    betweenRow: 'Short video introdusing myself',
    blog_latestNews: 'Poslední zprávy',
    blog_search: 'Vyhledávání',
    blog_noSearchResults: 'Žádné výsledky vyhledávání',
    blog_categories: 'Kategorie',
    frontEndLinks: 'Front End Projects Fast Links',
    fullStackLinks: 'Full Stack Projects Fast Links',
    miscLinks: 'Miscellanious Projects Fast Links',
    portfolio: {
      pageTitle: 'Portfolio Page',
      venezo: {
        title: `Venezo Project E-commerce project (Python, Django)`,
        mainText: `Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.
Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      enterprise: {
        title: `Enterprise Management System project (PHP, MySQL, Python, Django, Javascript)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      suppliers: {
        title: `Suppliers management module(PHP, Javascript, MySQL)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      a77: {
        title: `Enterprise Management System(PHP, Javascript, Python, MySQL)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/venezoproject',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://venezo.ru',
          text: 'Live View',
        },
      },
      sheets: {
        title: `Google Sheets Replica(vanila Javascript)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/javascript-excel-project',
          text: 'See code on GitHub',
        },
        project: {
          href: 'http://sheetsonjs.tk/',
          text: 'Live View',
        },
      },
      ducato: {
        title: `Venezo Project E-commerce project (Python, Django)`,
        mainText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, assumenda. Animi, laudantium perspiciatis. Impedit
                    vitae nemo, exercitationem tenetur assumenda hic. Pariatur
                    harum doloribus quas, modi porro voluptate dignissimos eaque
                    exercitationem? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nobis consequatur deleniti sunt beatae
                    placeat dolorem fugit, aut voluptatum architecto mollitia
                    cumque maxime veritatis alias quo a voluptates eaque
                    officiis recusandae? Dolorem mollitia incidunt voluptas ut
                    illum cum quisquam ex, perferendis, dolore ratione nulla
                    quidem neque expedita! Eligendi obcaecati incidunt, ipsa ut
                    labore, in minus quia, dolores earum voluptas magnam
                    similique. Ipsam expedita laboriosam culpa? Ipsum, porro
                    tempore illo aut tenetur eaque culpa quasi iusto blanditiis
                    cumque cupiditate incidunt excepturi ducimus soluta
                    reprehenderit ipsa molestiae ex ad corporis ratione repellat
                    vel. Dolore perspiciatis quisquam aspernatur, cupiditate
                    veritatis, placeat fuga omnis pariatur blanditiis iste quis,
                    recusandae enim neque aliquid deserunt commodi nam doloribus
                    odio itaque. Pariatur esse, accusantium quia explicabo sed
                    perferendis! Vero molestiae exercitationem, odit voluptate
                    molestias expedita facere modi eos blanditiis quia provident
                    nihil, error nobis voluptatem ipsa iste saepe, obcaecati
                    quidem itaque incidunt quos dolores! Debitis voluptas dolore
                    repudiandae.`,
        gitHub: {
          href: 'https://github.com/mikohan/dp',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://ducatoparts.ru',
          text: 'Live View',
        },
      },
      nuxtChat: {
        title: `Instant Chat based on NuxtJS, Socket.i and Express`,
        mainText: `Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.
Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.`,
        gitHub: {
          href: 'https://github.com/mikohan/live-nuxt-chat',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://nuxtchat.tk',
          text: 'Live View',
        },
      },
      colors: {
        title: `Colors React Application`,
        mainText: `Lorem ipsum (zkráceně lipsum) je označení pro standardní pseudolatinský text užívaný v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.
Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. Pokud by byl naopak použit nesmyslný, ale pravidelný text (např. opakování „asdf asdf asdf…“), oko by při posuzování vzhledu bylo vyrušováno pravidelnou strukturou textu, která se od běžného textu liší. Text lorem ipsum na první pohled připomíná běžný text, slova jsou různě dlouhá, frekvence písmen je podobná běžné řeči, interpunkce vypadá přirozeně atd.`,
        gitHub: {
          href: 'https://github.com/mikohan/color-project',
          text: 'See code on GitHub',
        },
        project: {
          href: 'https://flatcolors.tk',
          text: 'Live View',
        },
      },
    },
  },
};
