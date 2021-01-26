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
    text: `jfjfjfjfjjfj`,
  },
  czech: {
    pageHeader: 'Front End Experience',
    header: 'Some of Front End Pfojects',
    text: `jfjfjfjfjjfj`,
  },
};
