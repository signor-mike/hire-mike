<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      {{ $t("experience.irrelevantExperience") }}
      <template v-slot:actions>
        <v-icon :color="customColor">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="py-3 font-weight-thin">
      {{ $t("experience.irrelevantExperienceContent") }}
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default { 
  props: {    
      customColor: {
        required: true,  
        type: String,      
      }
  },};
</script>

<style></style>
