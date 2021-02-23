<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="draw = !draw"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase grey--text pl-0">
        <a :href="`/${$i18n.locale}`">
          <span class="font-weight-light">itsa</span>
          <span>Mike</span>
        </a>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="grey" dark v-bind="attrs" v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="`/${$i18n.locale}${link.route}`"
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

    <v-navigation-drawer app v-model="draw" class="primary py-3">
      <v-list dark>
        <v-list-item @click="draw = !draw">
          <v-list-item-action>
            <v-icon class="">highlight_off</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Close the menu </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="`/${$i18n.locale}${link.route}`"
          @click="draw = !draw"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
  components: { LanguageSwitcher },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },

  data() {
    return {
      draw: false,
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
          icon: "contact_page",
          text: "CV for print",
          route: "/print",
        },
      ],
      // don't forget to set routes in ./router/index.js
    };
  },
};
</script>

<style>
.my-photo {
  border: 0.12em solid white;
}
a {
  text-decoration: none;
}
</style>
