<template class>
  <v-app>
    <NavBar />
    <v-main class="mb-4">
      <router-view />
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        fixed
        bottom
        right
        color="secondary"
        class="to-top-button"
        @click="toTop"
      >
        <v-icon color="primary" large>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/Navbar";

export default {
  name: "App",

  components: { NavBar },
  data: () => ({
    fab: false,

    //
  }),
  computed: {
    //
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
