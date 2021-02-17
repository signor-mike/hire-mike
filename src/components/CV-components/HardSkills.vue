<template>
  <v-main>
    <v-row>
      <v-col
        no-gutters
        cols="12"
        class="d-none text-center pa-1"
        :class="{
          'd-block ': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-btn x-small @click="toggle" class="my-n4">
          <span>switch between hard/soft skills</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="mt-6" :class="{ 'mt-2': $vuetify.breakpoint.smAndDown }">
      <SoftSkillsInsteadOfHardSkills v-if="replace" />
      <v-card-text v-if="!replace">
        <v-card-title class="justify-center">Hard Skills</v-card-title>
        <div :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }">
          <v-row
            :dense="$vuetify.breakpoint.smAndDown"
            class=""
            :class="{ 'justify-center mt-n4': $vuetify.breakpoint.smAndDown }"
          >
            <v-col
              v-for="hardSkill in hardSkills"
              :key="hardSkill.id"
              cols="auto"
              :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }"
              class=""
            >
              {{ hardSkill.title }}
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
import SoftSkillsInsteadOfHardSkills from "@/components/CV-components/SoftSkillsInsteadOfHardSkills.vue";

export default {
  data() {
    return {
      replace: false,
    };
  },
  methods: {
    toggle() {
      this.replace = !this.replace;
    },
  },
  components: { SoftSkillsInsteadOfHardSkills },
  computed: {
    skills() {
      return this.$store.state.skills;
    },
    hardSkills() {
      return this.skills.filter((skill) => skill.type === "hard");
    },
  },
};
</script>

<style></style>
