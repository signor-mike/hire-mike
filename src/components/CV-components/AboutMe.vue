<template>
  <div>
    <v-row
      dense
      :no-gutters="$vuetify.breakpoint.smAndDown"
      :class="{
        'd-flex flex-column justify-start': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-col
        cols="auto"
        md="6"
        v-for="contact in contacts"
        :key="contact.id"
        :class="{ 'pb-1': $vuetify.breakpoint.smAndDown }"
      >
        <a :href="contact.link">
          <v-btn
            block
            rounded
            :large="$vuetify.breakpoint.mdAndUp"
            outlined
            :x-small="$vuetify.breakpoint.smAndDown"
          >
            <v-icon :small="$vuetify.breakpoint.smAndDown" left>
              {{ contact.icon }}
            </v-icon>
            <span> {{ $t(`contacts.${contact.title}`) }} </span>
            <v-icon :class="{ 'd-none': $vuetify.breakpoint.smAndDown }" right>
              {{ contact.icon }}
            </v-icon>
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <ul class="pt-1">
      <li class="d-none d-md-block font-weight-thin">
        <span>{{ $t("disclaimers.one") }}</span> <br />
        <span>{{ $t("disclaimers.two") }}</span> <br />
        <span class="primary--text">{{ $t("disclaimers.mobile") }}</span>
      </li>
    </ul>
  </div>
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
