<template>
  <div>
    <div>
      <!-- blah blah blah  -->
      <!-- use div with background -->
    </div>
    <div class="d-flex justify-center">
      <h1>{{ $t("message") }}</h1>
    </div>
    <div class="d-flex justify-center">
      <h2>{{ $t("home.message") }}</h2>
    </div>

    <div class="d-flex justify-center">
      <h3>{{ $t("home.messageTwo") }}</h3>
    </div>

    <div class="d-flex justify-center">
      <v-btn router :to="`/${$i18n.locale}/cv-mike`">
        <span>{{ $t("home.button") }}</span>
      </v-btn>
    </div>

    <div class="d-flex justify-center">
      <p class="text-caption font-weight-thin">
        {{ $t("home.nothing") }}
      </p>
      <p></p>
    </div>
    <v-divider />
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
