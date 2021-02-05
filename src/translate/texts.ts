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
        mainText: `<p> Это настоящий большой проект, состоящий из нескольких модулей.
        написано с использованием разных технологий.
        </p>
        <p>
        Приложение предназначено для управления инвентарем, фотографиями, видео,
        автоматическая категоризация и так далее.
        </p>
        <p>
        В этом приложении я реализовал автоматическое ценообразование. Алгоритм ценообразования на основе
        анализ цен конкурентов, цен поставщиков и использование машинного обучения под капотом.
        </p>
        <p>
        Приложение также собирает и сортирует семантические ядра для этого инвентаря. Для этого
        особенность Я использовал обработку естественного языка.
        </p>
        <p>
        Убийственной особенностью приложения является возможность автоматически подготавливать рекламу для Google и
        Яндекс CPC реклама. Вам нужно только загрузить его вручную.
        </p>
        <p>
        В ближайшее время будет реализована автоматическая загрузка.
        </p>
        <p>
        План - когда создание одного продукта будет завершено, приложения будут автоматически
        создать и опубликовать его в аккаунте Google и следить за ним в течение определенных периодов времени.
        Алгоритмы будут собирать данные для анализа эффективности этого объявления.
        На основе этой информации менеджер принимает дальнейшее решение о прекращении показа рекламы или продолжении ее показа.
        </p>
        <p>
        Кроме того, мы использовали библиотеки TensorFlow и Keras для распознавания изображений и
        классификация. Идея заключалась в том, чтобы научить модель распознавать автомобильные запчасти и
        классифицируйте их позже.
        </p>
        <p>
        Стек технологий, используемый в этом приложении, - это Agile, Scrum, Python, Django, Django rest framework, mySQL, Vue, React, Vuex, Redux, Bootstrap, TensorFlow, Keras, Pandas, Pillow.
        </p>
        <p>
        Проект создан нашей командой. Моя роль в этом проекте была руководителем группы.
        </p>`,
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
        mainText: `<p>
        Это приложение является частью сложной системы управления предприятием.
        Он отвечает за сбор и обработку информации о поставщиках компании.
        Это также снижает участие человека в бизнес-процессах.
        </p>
        <p>
        Приложение собирает прайс-листы от партнеров в режиме реального времени.
        Реальность такова, что только несколько поставщиков имеют Restful API.
        Большинство оптовиков действительно придерживаются старой закалки и присылают прайс-листы по электронной почте.
        Итак, мое приложение проверяет электронную почту и берет оттуда прайс-листы.
        Затем он преобразует их из множества различных форматов и кодировок в управляемые данные.
        Процесс полностью автоматический.
        </p>
        <p>
        На следующем этапе специальный алгоритм подсчитывает баллы каждого поставщика.
        Оценка основана на надежности, наличии, сроках доставки, ценах и других факторах.
        Эти оценки используются в дальнейших процессах ценообразования.
        </p>
        <p>
        Менеджеры по продажам также используют эту информацию в своей повседневной жизни.
        Они проверяют наличие и цены на товары на этой странице.
        </p>
        <p>
        Я написал это приложение довольно давно, поэтому использовал стек PHP,
        Javascript, mySQL.
        </p>
        <p>
        Теперь я бы предпочел python для такого рода задач, потому что код может быть в три
        раза короче.
        </p>`,
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
        mainText: `<p> Этот проект я написал около 10 лет назад на чистом php и javascript.
        Позже я добавил несколько модулей Python в основном для сложных вычислений.
        Это система управления предприятием, основанная на идее сбалансированных систем показателей.
        </p>
        <p>
        Это довольно сложная система. 99% вычислений выполняется на сервере.
        Приложение состоит из нескольких модулей. Каждый модуль отвечает за один
        бизнес-единица. Например, маркетинг, человеческие ресурсы, управление поставщиками и т. Д.
        </p>
        <p>
        Некоторые из модулей используют нейронные сети для моделей прогнозирования.
        Другие используют прогностические алгоритмы.
        </p>
        <p>
        Компания, о которой я говорю, ориентирована на инвентаризацию.
        Модуль управления закупками отвечает за прогнозирование, определяет запасы
        уровни, обрабатывает и контролирует задачи закупок, отслеживает производительность поставщиков и
        определяет возможности сбережений.
        </p>
        <p>
        Модуль «Маркетинг» автоматически создает онлайн-рекламу и управляет ею.
        Рассчитывает рентабельность рекламных расходов для каждого продукта.
        Он также принимает решения о том, продолжать ли инвестировать в конкретные продукты или
        перестань тратить на это деньги.
        </p>
        <p>
        Система также содержит модуль взаимоотношений с клиентами, модуль управления человеческими ресурсами, модуль финансового управления.
        Он также имеет множество инструментов для онлайн-маркетинга, инструментов SEO, инструментов управления контентом и так далее.
        На главной панели представлены ключевые показатели эффективности каждого модуля.
        Генеральный директор и совет директоров не только имеют актуальные бизнес-показатели в режиме реального времени, но и прогнозируют будущие решения.
        По сути, это приложение позволяет компании оставаться в стороне от конкурентов.
        А также автоматизация значительно сокращает расходы на ведение бизнеса.
        </p>`,
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
        mainText: `<p>
        Этот проект я создал только для того, чтобы глубоко изучить javascript.
        </p>
        <p>
        Мне всегда нравится знать, как все работает под капотом.
        Итак, я нашел курс, который помогает мне погрузиться в javascript.
        </p>
        <p>
        Пока я разрабатывал проект, я построил свою собственную систему редуксов и маршрутов.
        Я понял, как реагируют библиотеки DOM.
        Как работают события.
        Я глубоко погрузился в новые шаблоны проектирования и изучил лучшие практики объектно-ориентированного программирования.
        </p>
        <p>
        В конце проекта я попробовал несколько шаблонов разработки, основанных на тестировании.
        Для меня это было настоящим испытанием.
        </p>`,
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
        mainText: `<p>
        Это еще один проект электронной коммерции на основе Django Framework, который я создал.
        с нуля самостоятельно.
        </p>
        <p>
        Имеет обычный функционал, фильтрацию, сортировку и ленивую загрузку.
        Но главная особенность этого проекта в том, что перед тем, как приступить к программированию, мы проанализировали маркетинговую нишу клиента и построили семантическое ядро для сайта.
        Это помогло нам построить хорошую SEO-структуру проекта.
        В результате посещаемость сайта начинает быстро расти после развертывания и продолжает расти.
        </p>`,
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
        mainText: `<p>
        Целью данного обучающего проекта было изучение веб-сокетов.
        Это было реализовано с использованием VueJS, NuxtJs и сервера Express.
        </p>
        <p>
        Это своего рода простое приложение для мгновенного чата без сохранения данных в каких-либо базах данных.
        </p>
        <p>
        В приложении я использовал Vuex store, библиотеки VueTify и socket.io.
        Самой сложной задачей было заставить веб-сокеты работать с несколькими экземплярами PM2 на сервере Linux.
        </p>
        <p>
        Теперь это работает, и мы можем попробовать!
        </p>`,
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
        mainText: `<p>
        Позвольте представить вам один из моих проектов, которые я создал с помощью React.
        Это приложение для создания и сохранения пользовательских наборов цветов.
        </p>
        <p>
        Я создал этот проект, когда изучал React, но теперь использую его для сохранения
        поддоны, потому что это оказалось полезным.
        </p>
        <p>
        Это не так просто, как может показаться. Для управления состоянием я использовал Native React Context.
        Я также использовал здесь библиотеку UI материалов.
        </p>
        <p>
        Вы можете протестировать это на flatcolors.tk
        </p>`,
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
    <p>Jsem vývojář Full Stack s obrovskými znalostmi online marketingu a zkušeností 
    v oblasti elektronického obchodování.
       Mám technické myšlení.
       Navíc mám postgraduální titul v oboru strojírenství.
       Ale vzdělání nedokáže držet krok s naším rychle se měnícím světem.
       Proto se každý den vzdělávám.
       Přečetl jsem asi 30 odborných knih a absolvuji více než 20 video kurzů ročně.
    </p>
    <p>
    Kromě programování mými zájmy jsou:
       Management, psychologie, fotografie a kinematografie.
       Vždy vidím příležitost zlepšit řízení nebo psychologii tím, že 
       do ní přinesu programovací řešení.
    </p>
    <p>
      Mám velkou rodinu.
      Moje rodina je kompas, který mě vede. Je inspirací k dosažení velkých výšek.
    </p>
    <p>
       Miluji změny a vždy jsem ochoten jít o kilometr dál.
       Věřím, že tvrdá práce nikdy nikoho nezabila. A loni jsem pracoval 70 hodin týdně.
       Jsem řešitel problémů. Navíc každý nový problém, se kterým jsem se dosud nesetkal, ve mně vyvolává pocit vzrušení. Miluji nové výzvy.
     </p>
     <p>
       Jsem motivovaný, vynalézavý a nadšený.
       Jsem loajální a důvěryhodný.
       Určitě mohu přidat hodnotu každé společnosti.
       Jsem naprosto jistý.
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
        mainText: `<p>
        Tento projekt elektronického obchodování byl vytvořen pomocí Pythonu a Jango.
        Mimochodem, tento projekt jsem postavil sám od začátku do výroby.
        </p>
        <p>
        Na první pohled má projekt zcela běžné funkce.
        Ale na žádost zákazníka se předpokládalo, že nomenklatura bude obsahovat několik milionů položek.
        </p>
        <p>
        Jak pravděpodobně víte, procházení miliony produktů není triviální věc.
        Rozhodl jsem se tedy v tomto projektu implementovat fazetové vyhledávání pomocí enginu Elasticsearch.
        Hledání je velmi rychlé.
        </p>
        <p>
        Na projektu jsem také použil zpracování přirozeného jazyka a strojové učení. OEE
        byl použit k překladu slov z polštiny do ruštiny. Předcvičený
        ke klasifikaci obrazů byly použity konvoluční neuronové sítě.
        </p>`,
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
        mainText: `<p> Jedná se o skutečně velký projekt skládající se z několika modulů.
        napsáno pomocí různých technologií.
        </p>
        <p>
        Aplikace je navržena pro správu inventáře, fotografií, videí,
        automatická kategorizace atd.
        </p>
        <p>
        V této aplikaci jsem implementoval automatické stanovení cen. Algoritmus cen založený na
        analýza konkurenčních cen, dodavatelských cen a používání strojového učení pod kapotou.
        </p>
        <p>
        Aplikace také shromažďuje a třídí sémantická jádra pro tento inventář. Pro tohle
        funkce jsem použil zpracování přirozeného jazyka.
        </p>
        <p>
        Zabijáckou funkcí aplikace je schopnost automaticky připravovat reklamy pro Google a
        Yandex CPC reklama. Musíte jej stáhnout pouze ručně.
        </p>
        <p>
        Automatické načítání bude implementováno v blízké budoucnosti.
        </p>
        <p>
        Plán - po dokončení vytvoření jednoho produktu se aplikace automaticky
        vytvořte a publikujte jej ve svém účtu Google a sledujte jej po konkrétní dobu.
        Algoritmy budou shromažďovat údaje za účelem analýzy účinnosti této reklamy.
        Na základě těchto informací se manažer rozhodne, že přestane zobrazovat reklamu nebo ji bude nadále zobrazovat.
        </p>
        <p>
        Kromě toho jsme pro rozpoznávání obrázků a používali knihovny TensorFlow a Keras
        klasifikace. Cílem bylo naučit model rozpoznávat autodíly a
        roztřídit je později.
        </p>
        <p>
        Technologický zásobník používaný v této aplikaci je Agile, Scrum, Python, Django, Django rest framework, mySQL, Vue, React, Vuex, Redux, Bootstrap, TensorFlow, Keras, Pandas, Pillow.
        </p>
        <p>
        Projekt vytvořil náš tým. Moje role v tomto projektu byla vedoucí týmu.
        </p>`,
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
        mainText: `<p>
        Tato aplikace je součástí komplexního systému správy podniku.
        Je odpovědný za shromažďování a zpracování informací dodavatelů společnosti.
        Snižuje také lidskou účast na obchodních procesech.
        </p>
        <p>
        Aplikace shromažďuje ceníky od partnerů v reálném čase.
        Realita je taková, že pouze několik dodavatelů má Restful API.
        Většina velkoobchodů je opravdu stará škola a své ceníky zasílá prostřednictvím e-mailu.
        Moje aplikace tedy zkontroluje e-mail a odtud popadne ceníky.
        Poté jej převede z mnoha různých formátů a kódování na spravovatelná data.
        Proces je zcela automatický.
        </p>
        <p>
        V dalším kroku speciální algoritmus vypočítá skóre každého dodavatele.
        Skóre na základě spolehlivosti, zásob, dodacích podmínek, cen a dalších faktorů.
        Tato skóre se používají v dalších cenových procesech.
        </p>
        <p>
        Manažeři prodeje také tyto informace využívají při své každodenní rutině.
        Na této stránce kontrolují dostupnost a ceny produktů.
        </p>
        <p>
        Tuto aplikaci jsem napsal už dávno, a proto jsem použil stack PHP,
        Javascript, mySQL.
        </p>
        <p>
        Nyní bych dal přednost pythonu pro tento druh úkolu, protože kód by mohl být tři
        krát kratší.
        </p>`,
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
        mainText: `<p> Tento projekt jsem napsal asi před 10 lety v čistém php a javascript.
        Později jsem přidal několik pythonových modulů obecně pro složité výpočty.
        Jedná se o podnikový systém řízení založený na myšlence vyvážených scorecardů.
        </p>
        <p>
        Toto je docela složitý systém. 99% výpočtů se provádí na serveru.
        Aplikace se skládá z několika modulů. Každý modul odpovědný za jeden
        obchodní jednotka. Například marketing, lidské zdroje, řízení dodavatelů atd.
        </p>
        <p>
        Některé z modulů používají neuronové sítě pro modely prognostických předpovědí.
        Jiní používají prognostické algoritmy.
        </p>
        <p>
        Společnost, o které mluvím, je organizace zaměřená na zásoby.
        Modul pro správu nákupu odpovídá za prognózy, určuje skladování
        úrovně, zpracovává a řídí nákupní úkoly, sleduje výkon dodavatele a
        identifikuje příležitosti k úsporám.
        </p>
        <p>
        Modul Marketing automaticky vytváří a spravuje online reklamu.
        Vypočítá návratnost výdajů na reklamu každého produktu.
        Rovněž rozhoduje o tom, zda pokračovat v investování do konkrétních produktů nebo do
        přestaň na to plýtvat penězi.
        </p>
        <p>
        Systém také obsahuje modul pro vztahy s klienty, modul řízení lidských zdrojů, modul finanční správy.
        Má také mnoho nástrojů pro online marketing, nástroje SEO, nástroje pro správu obsahu atd.
        Hlavní řídicí panel obsahuje klíčové ukazatele výkonu každého modulu.
        Generální ředitel a představenstvo mají nejen skutečné obchodní ukazatele v reálném čase, ale mají také prognózu budoucích rozhodnutí.
        Ve skutečnosti tato aplikace umožňuje společnosti držet se stranou od konkurence.
        Stejně jako automatizace výrazně snižuje výdaje na obchodní operace.
        </p>`,
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
        mainText: `<p>
        Ten projekt jsem postavil jen za účelem hlubokého naučení javascriptů.
        </p>
        <p>
        Vždycky jsem rád věděl, jak to pod kapotou funguje.
        Našel jsem tedy kurz, který mi pomáhá ponořit se do JavaScriptu.
        </p>
        <p>
        Při vývoji projektu jsem si vybudoval vlastní systém reduxů a tras.
        Přišel jsem na to, jak reagují knihovny DOM.
        Jak události fungují.
        Hluboce jsem se dostal do nových návrhových vzorů a naučil se osvědčené postupy v objektově orientovaném programování.
        </p>
        <p>
        Na konci projektu jsem vyzkoušel některé testovací vývojové vzorce.
        Byla to pro mě skutečná výzva.
        </p>`,
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
        mainText: `<p>
        Toto je další projekt elektronického obchodování založený na Django Framework, který jsem postavil
        sám od nuly.
        </p>
        <p>
        Má běžnou funkčnost, filtrování, třídění a líné načítání.
        Hlavním rysem tohoto projektu je však to, že předtím, než jsme začali s kódováním, analyzovali jsme marketingový výklenek klienta a vytvořili sémantické jádro pro web.
        Pomohlo nám to vybudovat dobrou SEO strukturu projektu.
        Výsledkem je, že provoz webu po nasazení rychle roste a stále roste.
        </p>`,
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
        mainText: ` <p>
        Účelem tohoto vzdělávacího projektu bylo naučit se webové zásuvky.
        Bylo realizováno pomocí serveru VueJS, NuxtJs a Express.
        </p>
        <p>
        Je to druh jednoduché aplikace pro okamžitý chat bez ukládání dat do libovolných databází.
        </p>
        <p>
        V aplikaci jsem použil Vuex store, VueTify a socket.io libraries.
        Nejnáročnější částí bylo získat webové zásuvky fungující s více instancemi PM2 na linuxovém serveru.
        </p>
        <p>
        Nyní to funguje a my to můžeme vyzkoušet!
        </p>`,
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
        mainText: `<p>
        Dovolte mi, abych vám představil jeden z mých projektů, které jsem vytvořil pomocí React.
        Je to aplikace pro vytváření a ukládání vlastních sad barev.
        </p>
        <p>
        Tento projekt jsem postavil, když jsem se naučil React, ale nyní ho používám k uložení svého
        palety, protože se ukázalo jako užitečné.
        </p>
        <p>
        Není to tak jednoduché, jak by se mohlo zdát. Pro správu státu jsem použil Native React Context.
        Také jsem zde použil knihovnu uživatelského rozhraní Materiál.
        </p>
        <p>
        Můžete to otestovat na flatcolors.tk
        </p>`,
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
