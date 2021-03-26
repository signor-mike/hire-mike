import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contacts: [
      {
        id: "1",
        title: "email me",
        link: "mailto:mikelitoris34@icloud.com",
        icon: "alternate_email",
      },
      {
        id: "2",
        title: "WhatsApp",
        link: "https://wa.me/34657722396",
        icon: "mdi-whatsapp",
      },
      {
        id: "3",
        title: "Telegram",
        link: "https://t.me/miketnf",
        icon: "mdi-telegram",
      },
      {
        id: "4",
        title: "Linkedin",
        link: "https://www.linkedin.com/in/mikhail-k-874a3a207/",
        icon: "mdi-linkedin",
      },
    ],
    persons: [
      {
        id: "1",
        photo: "/my-face.jpg",
        lazyPhoto: "/my-face-lazy.jpg",
      },
    ],
    skills: [
      {
        type: "hard",
        title: "HTML5",
        mastery: "d-medium",
      },
      {
        type: "hard",
        title: "CSS3",
        mastery: "c-medium",
      },
      { type: "hard", title: "JavaScript", mastery: "d-medium" },
      {
        type: "hard",
        title: "GIT",
        mastery: "d-medium",
      },
      {
        type: "hard",
        title: "Responsive Design",
        mastery: "d-medium",
      },
      {
        type: "hard",
        title: "Browser Developer Tools",
        mastery: "c-medium",
      },
      { type: "hard", title: "Vue", mastery: "c-medium" },
      { type: "hard", title: "Microsoft Office", mastery: "a-high" },
      {
        type: "hard",
        title: "ImageMaSo",
        mastery: "d-medium",
      },
      { type: "hard", title: "Linux", mastery: "d-medium" },
      { type: "hard", title: "Design", mastery: "d-medium" },
      { type: "hard", title: "php", mastery: "f-low" },

      // soft skills

      {
        type: "soft",
        title: "Excitement for learning",
        mastery: "a-high",
      },
      {
        type: "soft",
        title: "Communication Skills",
        mastery: "d-medium",
      },
      {
        type: "soft",
        title: "Problem-Solving Skills",
        mastery: "a-high",
      },
      { type: "soft", title: "Work Ethic", mastery: "d-medium" },
      {
        type: "soft",
        title: "Flexibility",
        mastery: "a-high",
      },
      { type: "soft", title: "Adaptability", mastery: "d-medium" },
    ],
    disclaimers: [
      {
        id: "1",
        name: "legalDisclaimerPartOne",
        text:
          "According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history.",
      },
      {
        id: "2",
        name: "legalDisclaimerPartTwo",
        text:
          "Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains. ",
      },
      {
        id: "3",
        name: "mobile",
        text:
          "And this website is mobile friendly, give it a minute and visit it with your phone or tablet. Thanks.",
      },
    ],
    techs: [
      {
        id: "cv",
        techName: "Vue CLI",
        techIconSrc: "/vue-cli.png",
      },
      {
        id: "cv",
        techName: "Vuetify",
        techIconSrc: "/vuetify.png",
      },
      {
        id: "cv",
        techName: "Vuex",
        techIconSrc: "/vuex.png",
      },
      {
        id: "cv",
        techName: "Vue-router",
        techIconSrc: "/vue-js.png",
      },
      {
        id: "cv",
        techName: "Vue-i18n",
        techIconSrc: "/vue-i18n.png",
      },
    ],
    tributes: [
      {
        img: "/goit-logo.png",
        title: "GoIT",
        subtitle: "For introducing basics of HTML and CSS to me.",
        text:
          "I began with them. Of course they showed me just basics of HTML and CSS, but it was more than enough for me to get inspired and continue my education on my own.",
        linkOne: "https://goit.ua/",
        iconOne: "http",
        linkTwo: "mailto:info@goit.ua",
        iconTwo: "email",
      },
      {
        img: "/net-ninja-logo.png",
        title: "Shaun the Net Ninja",
        subtitle: "For his awesome tutorials.",
        text:
          "His YouTube channel has some fantastic tutorials. I believe he really has a talent for teaching. I wish I had teachers like him in my school.",
        linkOne: "https://www.thenetninja.co.uk/",
        iconOne: "http",
        linkTwo: "https://www.youtube.com/c/TheNetNinja/playlists",
        iconTwo: "subscriptions",
      },
      {
        img: "/stOv-logo.png",
        title: "Stack Overflow",
        subtitle: "For its amazing community.",
        text:
          "They helped me learn, to understand and even find a clue when I was completely lost.",
        linkOne: "https://stackoverflow.com/",
        iconOne: "http",
        linkTwo: "https://stackoverflow.com/users",
        iconTwo: "people",
      },
      {
        img: "/reddit-logo.png",
        title: "Reddit",
        subtitle: "For its awesome community.",
        text:
          "Reddit is absolutely the best. Unfortunately some communities are not as big as on Stack Overflow, but people there are totally willing to help.",
        linkOne: "https://www.reddit.com/",
        iconOne: "http",
        linkTwo: "https://www.reddit.com/r/vuejs",
        iconTwo: "language",
      },
      {
        img: "/question.jpg",
        title: "And...",
        subtitle: "Of course you! My dear visitor!",
        text:
          "It wouldn't really make any sense if this page weren't seen by anybody else expect me? Isn't it? Thank you very much for visiting my website!",
        linkOne: "mailto:mikelitoris34@icloud.com",
        iconOne: "email",
        linkTwo: "/en/cv-mike",
        iconTwo: "contact_page",
      },
    ],
  },
  getters: {},
  mutations: {},
});

export { store };

//set it up in main.js
