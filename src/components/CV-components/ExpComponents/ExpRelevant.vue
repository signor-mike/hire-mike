<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      {{ $t("experience.relevantExperience") }}
      <template v-slot:actions>
        <v-icon color="primary">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="py-3 font-weight-thin">
      {{ $t("experience.relevantExperienceContent") }}
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {};
</script>

<style></style>
