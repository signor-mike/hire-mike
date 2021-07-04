<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon x-large class="grey--text" @click="draw = !draw" />
      <v-toolbar-title class="text-uppercase grey--text pl-0">
        <a
          :class="{ 'dark-theme': $vuetify.theme.dark }"
          :href="`/${$i18n.locale}`"
        >
          <span class="font-weight-light">itsa</span>
          <span>Mike</span>
        </a>
      </v-toolbar-title>

      <v-spacer />
      <div class="text-center grey--text">
        <v-btn text rounded @click="toggleTheme">
          <span v-if="!this.$vuetify.theme.dark">
            <v-icon>dark_mode</v-icon>
          </span>

          <span v-else>
            <v-icon>light_mode</v-icon>
          </span>
        </v-btn>
      </div>

      <!-- dropdown menu -->
      <div v-if="$vuetify.breakpoint.mdAndUp" class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="grey" dark v-bind="attrs" v-on="on">
              <v-icon left>
                expand_more
              </v-icon>
              <span>menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="`/${$i18n.locale}${link.route}`"
              exact
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- end of dropdown menu -->

      <!-- language switcher -->
      <LanguageSwitcher />
      <!-- end of language switcher -->
    </v-app-bar>

    <v-navigation-drawer
      v-model="draw"
      color="#272727"
      temporary
      bottom
      app
      :src="spacePicture"
      class="py-3"
    >
      <v-row
        class="mt-5 mx-3"
        justify="center"
        :class="{ 'pt-5': $vuetify.breakpoint.lgAndUp }"
      >
        <v-col v-for="link in links" :key="link.text" sm="6" md="4" lg="12">
          <v-card router :to="`/${$i18n.locale}${link.route}`">
            <v-list>
              <v-list-item exact @click="refresh">
                <v-list-item-action class="ma-0">
                  <v-icon left :color="customColor">
                    {{ link.icon }}
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    <h3
                      :class="{ 'dark-theme': $vuetify.theme.dark }"
                      class="text-center font-weight-black  class text-uppercase "
                    >
                      {{ link.text }}
                    </h3>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action class="ma-0">
                  <v-icon right :color="customColor">
                    {{ link.icon }}
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-list
        dark
      >
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="`/${$i18n.locale}${link.route}`"
          exact
          @click="refresh"
        >
          <v-list-item-action>
            <v-icon
              dark
            >
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <h2
                :class="{'dark-theme': $vuetify.theme.dark}"
                class="font-weight-black  class text-uppercase"
              >
                {{ link.text }}
              </h2>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
  </nav>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
  components: { LanguageSwitcher },

  data() {
    return {
      draw: null,
      links: [
        {
          icon: "home",
          text: "Home",
          route: "/",
        },
        {
          icon: "contact_page",
          text: "My CV",
          route: "/cv-mike",
        },
        {
          icon: "star",
          text: "Tributes",
          route: "/tributes",
        },
        {
          icon: "flutter_dash",
          text: "contact me",
          route: "/contact",
        },
      ],
      // don't forget to set routes in ./router/index.js
    };
  },
  computed: {
    customColor() {
      return this.$vuetify.theme.dark ? "#41b883" : "black";
    },
    spacePicture() {
      return this.$vuetify.theme.dark ? "/outer-space.jpg" : "null";
    },
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "#41B883";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    refresh() {
      if (this.draw) {
        this.draw = !this.draw;
      }
    },
  },
};
</script>

<style scoped>
/* .dark-mode {
  color: #41b883 !important;
 } */

.my-photo {
  border: 0.12em solid white;
}
a {
  text-decoration: none;
}
.class {
  font-family: "Fira Sans";
}
.dark-theme {
  /* -webkit-text-stroke: 0.7px black; */
  color: #41b883;
}
</style>
