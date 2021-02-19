<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="draw = !draw"
      ></v-app-bar-nav-icon>
      <a href="/">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">itsa</span>
          <span>Mike</span>
        </v-toolbar-title></a
      >

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
              :to="link.route"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- dropdown menu -->

      <!-- <v-btn text color="grey">
        <span>sign out</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn> -->
    </v-toolbar>

    <v-navigation-drawer app v-model="draw" class="primary py-3">
      <!-- <v-row justify="space-between" no-gutters class=" pt-1">
        <v-col class="" cols="2">
          <v-btn dark icon @click="draw = !draw">
            <v-icon x-large class="pl-1">highlight_off</v-icon>
          </v-btn>
        </v-col>
        <v-col class="" cols="8"> -->
      <!-- <popUp /> -->
      <!-- </v-col>
        <v-col class="" cols="2">
          <v-avatar size="36" class="white my-photo" right>
            <img src="/mike.jpg" alt="" class="" />
          </v-avatar>
        </v-col>
      </v-row> -->

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
          :to="link.route"
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
// import popUp from "./Popup";
export default {
  // components: { popUp },

  data() {
    return {
      draw: false,
      links: [
        // { icon: "dashboard", text: "Dashboard", route: "/" },
        // { icon: "folder", text: "My projects", route: "/projects" },
        // { icon: "person", text: "Team", route: "/team" },
        // {
        //   icon: "flight_takeoff",
        //   text: "landing page",
        //   route: "/landing-page",
        // },
        // {
        //   icon: "pan_tool",
        //   text: "Vuex Learning",
        //   route: "/vuex-learning",
        // },
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
</style>
