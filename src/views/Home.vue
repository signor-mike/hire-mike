<template>
  <div>
    <div>
      <v-divider />
      <!-- <v-sparkline
        :value="[0, 0, 0, 0]"
        :gradient="gradient"
        gradient-direction="left"
        type="trend"
        auto-draw
      >
      </v-sparkline> -->
      <v-divider />
    </div>
    <div class="d-flex justify-center">
      <h1>Home page, please open menu to navigate</h1>
    </div>
    <div class="d-flex justify-center">
      <h2>or click the button to open my CV</h2>
    </div>
    <div class="d-flex justify-center">
      <v-btn>
        <a href="/cv-mike">
          <span>click me</span>
        </a>
      </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-caption font-weight-thin">
        cos there's nothing else to see here yet
      </p>
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

<style></style>
