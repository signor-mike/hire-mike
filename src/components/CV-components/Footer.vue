<template>
  <footer class="parent">
    <div class="child">
      <span class="" v-for="disclaimer in disclaimers" :key="disclaimer.id">
        {{ disclaimer.text }}
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
