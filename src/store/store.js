import Vue from "vue";
import Vuex from "vuex";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import it from "../locales/it.json";

// import { $i18n } from "../i18n";
// import i18n from "../i18n";
// title: `${fr.hardSkills.TechnicalSkills}`,
// title: "Technical Skills",

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
        title: "whatsapp",
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
        title: "Facebook",
        link: "https://m.me/kmb159",
        icon: "mdi-facebook-messenger",
      },
    ],
    persons: [
      {
        id: "1",
        name: "Mike Oxhuge",
        position: "Front-end developer",
        photo: "/my-face.jpg",
        lazyPhoto: "/my-face-lazy.jpg",
      },
    ],
    skills: [
      {
        id: "1",
        type: "hard",
        title: `${fr.hardSkills.TechnicalSkills}`,
        mastery: "low",
      },
      {
        id: "2",
        type: "hard",
        title: "Computer skills",
        mastery: "b-medium",
      },
      { id: "3", type: "hard", title: "Microsoft skills", mastery: "medium" },
      {
        id: "4",
        type: "hard",
        title: "Analytical skills",
        mastery: "ab-medium",
      },
      { id: "5", type: "hard", title: "Marketing skills", mastery: "high" },
      { id: "6", type: "hard", title: "Presentation skills", mastery: "low" },
      { id: "7", type: "hard", title: "Management skills", mastery: "high" },
      { id: "8", type: "hard", title: "Project management", mastery: "medium" },
      {
        id: "9",
        type: "hard",
        title: "Writing skills",
        mastery: "b-medium",
      },
      { id: "10", type: "hard", title: "Language skills", mastery: "high" },
      { id: "11", type: "hard", title: "Design skills", mastery: "low" },
      {
        id: "12",
        type: "soft",
        title: "Leadership Skills",
        mastery: "b-medium",
      },
      { id: "13", type: "soft", title: "Teamwork", mastery: "medium" },
      {
        id: "14",
        type: "soft",
        title: "Communication Skills",
        mastery: "b-medium",
      },
      {
        id: "15",
        type: "soft",
        title: "Problem-Solving Skills",
        mastery: "low",
      },
      { id: "16", type: "soft", title: "Work Ethic", mastery: "ab-medium" },
      {
        id: "17",
        type: "soft",
        title: "Flexibility/Adaptability",
        mastery: "ab-medium",
      },
      { id: "18", type: "soft", title: "Interpersonal Skills", mastery: "low" },
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
  },
  getters: {},
  mutations: {},
});

export { store };

// {
//   i18n;
// }
{
  en;
}
{
  it;
}
{
  fr;
}

//set it up in main.js
