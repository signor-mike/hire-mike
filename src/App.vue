<template>
  <v-app>
    <navBar />
    <v-main class="grey lighten-5 mx-4 px-3 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navBar from "./components/Navbar";
export default {
  name: "App",

  components: { navBar },

  data: () => ({
    //
  }),
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
