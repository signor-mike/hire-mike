<template>
  <footer class="parent">
    <div class="child">
      <span>
        <v-text>{{ $t("disclaimers.one") }}</v-text> <br />
        <v-text>{{ $t("disclaimers.two") }}</v-text> <br />
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    disclaimers() {
      return this.$store.state.disclaimers;
    },
  },
};
</script>

<style scoped>
.parent >>> .child {
  font-weight: 100;
  line-height: 1;
  font-size: xx-small;
}
</style>
