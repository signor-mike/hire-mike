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
        title: "GitHub",
        link: "https://github.com/Mike-OxHuge",
        icon: "mdi-github",
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
        link: "https://www.linkedin.com/in/mike-litoris/",
        icon: "mdi-linkedin",
      },
    ],
  },
  getters: {},
  mutations: {},
});

export { store };

//set it up in main.js
