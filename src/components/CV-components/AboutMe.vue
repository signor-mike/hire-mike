<template>
  <div>
    <v-row justify="center">
      <v-col cols="2" :class="{ 'd-none': $vuetify.breakpoint.smAndDown }">
        <v-btn text router :to="`/${$i18n.locale}/print`">
          <v-icon>print</v-icon>
        </v-btn>
      </v-col>
      <v-col
        v-for="contact in contacts"
        :key="contact.id"
        cols="2"
        :class="{ 'pb-1 mx-1': $vuetify.breakpoint.smAndDown }"
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
    <!-- <v-row
    justify="end"
      dense
      :no-gutters="$vuetify.breakpoint.smAndDown"
      :class="{
        'd-flex flex-column justify-start': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-col
        v-for="contact in contacts"
        :key="contact.id"
        cols="auto"
        
        :class="{ 'pb-1': $vuetify.breakpoint.smAndDown }"
      >
        <a :href="contact.link">
          <v-btn
            block
            :rounded="$vuetify.breakpoint.mdAndUp"
            :large="$vuetify.breakpoint.mdAndUp"
            :outlined="$vuetify.breakpoint.mdAndUp"
            :x-small="$vuetify.breakpoint.smAndDown"
            
          >
            <v-icon
              :small="$vuetify.breakpoint.smAndDown"
              left
            >
              {{ contact.icon }}
            </v-icon>
            <span> {{ $t(`contacts.${contact.title}`) }} </span>
            <v-icon
              :class="{ 'd-none': $vuetify.breakpoint.smAndDown }"
              right
            >
              {{ contact.icon }}
            </v-icon>
          </v-btn>
        </a>
      </v-col>
    </v-row> -->
    <ul class="pt-1">
      <li
        class="d-none d-md-block font-weight-thin  text-caption text-secondary"
      >
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
    customColor() {
      return this.$vuetify.theme.dark ? "#41b883" : "primary";
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
