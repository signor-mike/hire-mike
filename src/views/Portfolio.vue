<template>
  <v-container>
    <div class="d-flex">
      <v-icon color="primary" large @click="backwards()"
        >keyboard_arrow_left</v-icon
      >
      <h1 class="mx-auto">My projects</h1>
    </div>
    <v-row justify="center" dense>
      <v-col v-for="item in portfolio" :key="item.i" cols="12" md="6">
        <PortfolioItem :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PortfolioItem from "../components/PortfolioItem.vue";
export default {
  components: { PortfolioItem },
  data() {
    return {
      portfolio: [
        {
          name: "hire mike",
          url: "https://hire-mike.web.app",
          description: "My first webapp",
          specification:
            "Here I did implement many of reusable components. I like reusing the same code many times.",
          techs: ["/techs/vue-js.png", "/techs/vuetify.png"],
        },
        {
          name: "fns",
          url: "https://fns-accessories.web.app",
          description: "e-commerce website",
          specification:
            "Still unfinished due lack of time, the hardest part was to implement a way of accepting payments.",
          techs: ["/techs/nuxt.png", "/techs/vuetify.png"],
        },
      ],
    };
  },
  mounted() {
    console.log(this.$router.history);
  },
  methods: {
    backwards() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
