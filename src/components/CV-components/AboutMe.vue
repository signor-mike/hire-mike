<template>
  <v-div class="d-flex">
    <v-row dense :no-gutters="$vuetify.breakpoint.smAndDown">
      <v-col sm="6" md="8" v-for="contact in contacts" :key="contact.id">
        <a :href="contact.link">
          <v-btn
            :block="$vuetify.breakpoint.smAndDown"
            :large="$vuetify.breakpoint.mdAndUp"
            outlined
            class="align-center"
            :x-small="$vuetify.breakpoint.smAndDown"
          >
            <v-icon left> {{ contact.icon }} </v-icon>
            <span> {{ contact.title }} </span>
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <ul>
      <li
        v-for="disclaimer in disclaimers"
        :key="disclaimer.id"
        class="d-none d-md-block font-weight-thin"
      >
        <v-text>{{ disclaimer.text }}</v-text>
      </li>
    </ul>
  </v-div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
    disclaimers() {
      return this.$store.state.disclaimers;
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
