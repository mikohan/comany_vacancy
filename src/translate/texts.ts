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
        title: `Auto Parts E-commerce project (Python, Django)`,
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
        mainText: `orem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский. Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном. Поскольку текст Цицерона не содержит буквы K, W, или Z, что чуждо для латинского, эти буквы, а также многие другие часто вставлены в случайном порядке, чтобы скопировать тексты различных Европейских языков, поскольку диграфы не встречаются в оригинальных текстах.`,
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
