<template>
  <v-main>
    <div class="text-center d-flex pb-2 justify-space-around">
      <v-btn @click="all">
        {{ $t("experience.expandAll") }}
      </v-btn>

      <v-btn @click="none">
        {{ $t("experience.collapseAll") }}
      </v-btn>
    </div>
    <v-expansion-panels accordion focusable popout v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ $t("experience.aboutMe") }}
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ $t("experience.aboutMeContent") }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ $t("experience.myProjects") }}
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ $t("experience.myProjectsContent") }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ $t("experience.relevantExperience") }}
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ $t("experience.relevantExperienceContent") }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ $t("experience.irrelevantExperience") }}
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ $t("experience.irrelevantExperienceContent") }}
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ $t("experience.education") }}
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ $t("experience.educationContent") }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      items: 5,
    };
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>

<style></style>
