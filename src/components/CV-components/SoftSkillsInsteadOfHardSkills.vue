<template>
  <v-card-text>
    <v-card-title class="justify-center">Soft Skills</v-card-title>
    <div :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }">
      <v-row
        :dense="$vuetify.breakpoint.smAndDown"
        class=""
        :class="{ 'justify-center mt-n4': $vuetify.breakpoint.smAndDown }"
      >
        <v-col
          v-for="softSkill in softSkills"
          :key="softSkill.id"
          cols="auto"
          :class="{ 'text-caption': $vuetify.breakpoint.smAndDown }"
          class=""
        >
          {{ softSkill.title }}
        </v-col>
      </v-row>
    </div>
  </v-card-text>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.skills;
    },
    softSkills() {
      return this.skills.filter((skill) => skill.type === "soft");
    },
  },
};
</script>

<style></style>
