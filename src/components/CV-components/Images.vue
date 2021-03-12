<template>
  <div>
    <div
      v-for="person in persons"
      :key="person.id"
      class="d-flex justify-end"
    >
      <v-img
        :src="person.photo"
        :lazy-src="person.lazyPhoto"
        class="mr-1"
        alt="my photo"
        :max-width="customWidth"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    customWidth () {
      return this.$vuetify.breakpoint.xl? '350':'undefined';
    },
    persons() {
      return this.$store.state.persons;
    },
  },
  mounted: function () {
    console.log(this.$vuetify.breakpoint.xl)
  },
};
</script>

<style></style>
