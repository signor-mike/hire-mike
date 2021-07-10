<template>
  <div>
    <div class="class" :class="{ 'dark-mode': $vuetify.theme.dark }">
      <vue-typed-js
        :strings="['Hire mike']"
        :type-speed="50"
        :start-delay="700"
        :show-cursor="false"
      >
        <h1
          class="text-uppercase mb-1 typing"
          :class="{ 'black--text': $vuetify.theme.dark === false }"
        />
      </vue-typed-js>
      <br />
      <vue-typed-js
        :strings="['today please']"
        :start-delay="2100"
        :cursor-char="'_'"
        @onComplete="draw = !draw"
      >
        <h3
          class="typing"
          :class="{ 'black--text': $vuetify.theme.dark === false }"
        />
      </vue-typed-js>

      <div v-show="draw" class="button-box">
        <v-row
          dense
          :no-gutters="$vuetify.breakpoint.smAndDown"
          :class="{ 'ml-5': $vuetify.breakpoint.smAndDown }"
        >
          <v-col
            v-for="contact in contacts"
            :key="contact.id"
            cols="2"
            :class="{ 'pb-1': $vuetify.breakpoint.smAndDown }"
          >
            <v-btn
              text
              :large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
            >
              <a :href="contact.link" target="_blank">
                <v-icon
                  :color="customColor"
                  :medium="$vuetify.breakpoint.smAndDown"
                  :class="{ 'mr-5': $vuetify.breakpoint.smAndDown }"
                >
                  {{ contact.icon }}
                </v-icon>
              </a>
            </v-btn>
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

export default {
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
    customColor() {
      return this.$vuetify.theme.dark ? "#41b883" : "primary";
    },
    contacts() {
      return this.$store.state.contacts;
    },
  },
  beforeMount: function() {
    this.customColor;
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

.dark-mode {
  color: #41b883 !important;
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
