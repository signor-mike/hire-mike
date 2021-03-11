<template>
  <div>
   

    <v-container class="d-flex">
      <div class="">
        <v-row class="flex-column">
          <v-spacer />
          <v-col cols="12" justify-center>
            <v-img src="/vue-cool.png" alt="vue" contain></v-img>
          </v-col>
          <v-spacer />
          <v-col cols="12">
            <div class="justify-center">
              <p class="font-weight-bold text-subtitle-1 text-center">
                {{ $t("home.firstArticle") }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="d-flex justify-center">
      <v-btn router :to="`/${$i18n.locale}/cv-mike`">
        <span>{{ $t("home.button") }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradient: ["red", "orange", "yellow", "yellowgreen", "green"],
    };
  },
};
</script>

<style>
/* css animation / transition for drawing the div */
</style>
