<template>
  <v-main class="pt-0 px-1">
    <div class="text-center d-flex pb-3 justify-space-around">
      <v-btn
        v-if="!expander"
        small
        @click="all"
      >
        <v-icon
          :small="$vuetify.breakpoint.smAndDown"
          medium
          :color="customColor"
        >
          unfold_more
        </v-icon>
        {{ $t("experience.expandAll") }}
      </v-btn>

      <v-btn
        v-if="expander"
        small
        @click="none"
      >
        <v-icon
          :small="$vuetify.breakpoint.smAndDown"
          medium
          :color="customColor"
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
      <Bio :custom-color="customColor" />
      <!-- about me -->
      <ExpAboutMe :custom-color="customColor" />
      <!-- my projects -->
      <ExpMyProjects :custom-color="customColor" />
      <!-- education -->
      <Education :custom-color="customColor" />
      <!-- relevant experience -->
      <ExpRelevant
        :custom-color="customColor"
      />
      <!-- irrelevant experience -->
      <ExpIrrelevant
        :custom-color="customColor"
      />
    </v-expansion-panels>
  </v-main>
</template>

<script>
import ExpAboutMe from "./ExpComponents/ExpAboutMe.vue";
import ExpMyProjects from "./ExpComponents/ExpMyProjects.vue";
import ExpRelevant from "./ExpComponents/ExpRelevant.vue";
import ExpIrrelevant from "./ExpComponents/ExpIrrelevant.vue";
import Education from "./ExpComponents/Education.vue";
import Bio from './ExpComponents/Bio.vue'

export default {
  components: {
    ExpAboutMe,
    ExpMyProjects,
    ExpRelevant,
    ExpIrrelevant,
    Education, Bio
  },
  data() {
    return {
      panel: [],
      items: 5,
      expander: false,
    };
  },
  computed: {
       customColor () {
      return this.$vuetify.theme.dark? '#41b883': 'primary'
    },
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i),
      this.expander = !this.expander;
      console.log(typeof this.customColor)
      
    },
    // Reset the panel
    none() {
      this.panel = [],
      this.expander = !this.expander;
    },
  },
};
</script>

<style></style>
