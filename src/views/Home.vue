<template>
  <div class="primary--text">
    <div class="class">
      <vue-typed-js
        :strings="['Hire mike']"
        :type-speed="50"
        :start-delay="700"
        :show-cursor="false"
      >
        <h1 class="text-uppercase mb-1 typing" />
      </vue-typed-js>
      <br />
      <vue-typed-js
        :strings="['today please']"
        :start-delay="2100"
        :cursor-char="'_'"
        @onComplete="draw = !draw"
      >
        <h3 class="typing" />
      </vue-typed-js>

      <div v-show="draw" class="button-box">
        <v-row dense :no-gutters="$vuetify.breakpoint.smAndDown">
          <v-col v-for="contact in contacts" :key="contact.i" cols="auto">
            <Contacts :contact="contact" />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

import Contacts from "../components/Contacts.vue";
export default {
  components: { Contacts },
  data() {
    return {
      draw: false,
    };
  },
  mounted: function() {
    this.wakeUp();
  },
  methods: {
    async wakeUp() {
      await fetch(`${process.env.VUE_APP_BACKEND_URL}/wakeup`);
    },
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>

<style scoped>
.class {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(30% + 15px);
  left: calc(25% - 20px);
}

.button-box {
  position: relative;
  left: -28px;
  margin-top: 20%;
}
h1,
h3 {
  font-family: "Merriweather";
}
/* css animation / transition for drawing the div */
</style>
