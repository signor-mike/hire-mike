<template class>
  <v-app class="">
    <navBar />
    <v-main class="  mx-4 px-3 mb-4">
      <router-view> </router-view>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/Navbar";
export default {
  name: "App",

  components: { navBar },

  data: () => ({
    fab: false,
    //
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
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
