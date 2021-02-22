<template>
  <div>
    <div v-for="person in persons" :key="person.id" class="d-flex justify-end">
      <!-- desktop photo -->
      <v-img
        :src="person.photo"
        :lazy-src="person.lazyPhoto"
        class="mr-1"
        alt="my photo"
      />

      <!-- mobile photo -->
      <!-- <v-img
        :src="person.photo"
        :lazy-src="person.lazyPhoto"
        aspect-ratio="0.75"
        :max-width="{ '100': $vuetify.breakpoint.smAndDown }"
        class="mr-1"
        alt="my photo"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    persons() {
      return this.$store.state.persons;
    },
  },
};
</script>

<style></style>
