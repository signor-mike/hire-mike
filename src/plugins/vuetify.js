import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, { iconfont: "md" });

export default new Vuetify({
    themes: {
        light: {
            primary: '#41B883'
        },
        dark: {
            primary: '#34495E'
        }
    }
});
