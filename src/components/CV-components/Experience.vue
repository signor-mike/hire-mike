<template>
  <v-main class="pt-0 px-1">
    <div class="text-center d-flex pb-2 justify-space-around">
      <v-btn
        small
        @click="all"
      >
        <v-icon
          :small="$vuetify.breakpoint.smAndDown"
          medium
          color="primary"
        >
          unfold_more
        </v-icon>
        {{ $t("experience.expandAll") }}
      </v-btn>

      <v-btn
        small
        @click="none"
      >
        <v-icon
          :small="$vuetify.breakpoint.smAndDown"
          medium
          color="primary"
        >
          unfold_less
        </v-icon>
        {{ $t("experience.collapseAll") }}
      </v-btn>
    </div>
    <v-expansion-panels
      v-model="panel"
      accordion
      focusable
      popout
      multiple
    >
      <!-- about me -->
      <ExpAboutMe />
      <!-- my projects -->
      <ExpMyProjects />
      <!-- education -->
      <Education />
      <!-- relevant experience -->
      <ExpRelevant class="secondary--text" />
      <!-- irrelevant experience -->
      <ExpIrrelevant class="secondary--text" />
    </v-expansion-panels>
  </v-main>
</template>

<script>
import ExpAboutMe from "./ExpComponents/ExpAboutMe.vue";
import ExpMyProjects from "./ExpComponents/ExpMyProjects.vue";
import ExpRelevant from "./ExpComponents/ExpRelevant.vue";
import ExpIrrelevant from "./ExpComponents/ExpIrrelevant.vue";
import Education from "./ExpComponents/Education.vue";

export default {
  components: {
    ExpAboutMe,
    ExpMyProjects,
    ExpRelevant,
    ExpIrrelevant,
    Education,
  },
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
