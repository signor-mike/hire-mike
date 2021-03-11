<template class>
  <v-app class="">
    <navBar />
    <v-main class=" mx-4 px-3 mb-4">
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

var today = new Date ();
var date = (today.getMonth()+1)
var time = today.getHours()


export default {
  name: "App",

  components: { navBar },
mounted: function () {
  
  if ((date >= 11 || date <= 3) &&  (time <= 7 || time >=19 )) {
    this.$vuetify.theme.dark = true
  } else if ((date < 11 || date > 3) && (time <=5 || time >= 21)) {
    this.$vuetify.theme.dark = true
  } else {  
    this.$vuetify.theme.dark = false
  }
  if (!this.$vuetify.theme.dark) {
    console.log("The dark theme is off by default, perhaps it's not dark yet")
  } else {
    console.log("The dark theme is ON by default, perhaps it's really dark")
  }
  
},
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
