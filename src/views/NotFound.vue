<template>
  <v-container>
    <h1>404 Not found</h1>
    <p v-if="$route.path == '/en/cv-mike'">
      Whoopsie, old link. Redirecting...
    </p>
    <p v-else>
      Whoopsie, redirecting back home.
    </p>
    <a href="/">Back home</a>
  </v-container>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path);
    if (this.$route.path == "/en/cv-mike") {
      this.$router.replace("/cv-mike");
    } else {
      this.$router.replace("/");
    }
  },
};
</script>

<style></style>
