<template>
  <v-main class="pt-0">
    <v-row>
      <v-col>
        <div
          v-for="person in persons"
          :key="person.id"
          class="d-flex flex-column"
        >
          <span class="text--primary text-md-h2 text-sm-h4 text-center">
            {{ $t("person.position") }}
          </span>

          <span class="text--secondary text-center">{{
            $t("person.name")
          }}</span>
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

<style></style>
