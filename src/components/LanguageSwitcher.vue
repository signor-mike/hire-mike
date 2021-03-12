<template>
  <div class="d-flex justify-center">
    <div class="d-flex justify-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            text
            class="grey--text"
            v-on="on"
          >
            <v-icon left>
              expand_more
            </v-icon>
            <v-avatar size="25">
              <img
                :src="`/flag_${$i18n.locale}.png`"
                alt=""
              >
            </v-avatar>
            <!-- <flag :iso="$i18n.locale" /> -->
            <span class="ml-1">{{ $i18n.locale.toUpperCase() }}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, i) in $i18n.availableLocales"
            :key="`Lang${i}`"
            @click="setLocale(lang)"
          >
            <!-- <flag :iso="lang" /> -->

            <v-avatar size="25">
              <img
                :src="`/flag_${lang}.png`"
                alt=""
              >
            </v-avatar>
            <v-list-item-title>
              <span class="ml-2">
                {{ lang.toUpperCase() }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style></style>
