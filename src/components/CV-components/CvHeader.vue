<template>
  <v-main>
    <v-row>
      <v-col>
        <ul>
          <li v-for="person in persons" :key="person.id">
            <v-text class="text--primary text-md-h2 text-sm-h4">
              {{ $t("person.position") }}
            </v-text>
            <br />
            <v-text class="text--secondary">{{ $t("person.name") }}</v-text>
          </li>
        </ul>
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
