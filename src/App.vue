<template class>
  <v-app class="">
    <navBar />
    <v-main class="mb-4">
      <router-view />
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        dark
        fixed
        bottom
        right
        :color="customColor"
        class="to-top-button"
        @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/Navbar";

// var today = new Date ();
// var date = (today.getMonth()+1)
// var time = today.getHours()

export default {
  name: "App",

  components: { navBar },
  data: () => ({
    fab: false,

    //
  }),
  computed: {
    customColor() {
      return this.$vuetify.theme.dark ? "#41b883" : "primary";
    },
  },
  beforeMount: function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      (this.$vuetify.theme.dark = true),
        console.log(
          `The dark theme is set to ${this.$vuetify.theme.dark} by default, because my dear visitor prefers dark color scheme :)`
        );
    } else {
      (this.$vuetify.theme.dark = false),
        console.log(
          `The light theme is set to ${this.$vuetify.theme.light} by default, because my dear visitor prefers light color scheme :)`
        );
    }
  },

  // this one sucks, I guess user preference is better than the sun
  // mounted: function () {
  //   if ((date >= 11 || date <= 3) &&  (time <= 7 || time >=19 )) {
  //     this.$vuetify.theme.dark = true
  //   } else if ((date < 11 || date > 3) && (time <=5 || time >= 21)) {
  //     this.$vuetify.theme.dark = true
  //   } else {
  //     this.$vuetify.theme.dark = false
  //   }
  //   if (!this.$vuetify.theme.dark) {
  //     console.log("The dark theme is off by default, perhaps it's not dark yet")
  //   } else {
  //     console.log("The dark theme is ON by default, perhaps it's really dark")
  //   }
  // },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 200;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
