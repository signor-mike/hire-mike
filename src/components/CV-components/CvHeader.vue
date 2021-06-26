<template>
  <v-main class="pt-0">
    <v-row>
      <v-col>
        <div
          v-for="person in persons"
          :key="person.id"
          class="d-flex flex-column"
        >
          <span class="text--primary text-md-h4 text-sm-h5 text-center">
            {{ $t("person.name") }}
          </span>

          <span class="text--secondary text-center">
            {{ $t("person.position") }}
          </span>
        </div>
      </v-col>
    </v-row>
  </v-main>
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

<style>
.button {
  position: absolute;
}
</style>
