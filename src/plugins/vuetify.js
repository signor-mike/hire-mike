import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
	iconfont: "md",
});

const vuetify = new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: "#0064ba;",
				secondary: "#bababa",
			},
			dark: {
				primary: "#41B883",
				secondary: "#1e1e1e",
			},
		},
	},
});
export default vuetify;
