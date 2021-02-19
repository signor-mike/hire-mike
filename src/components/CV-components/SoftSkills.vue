<template>
  <v-main>
    <v-card>
      <v-card-text>
        <v-card-title class="justify-center">Soft Skills</v-card-title>
        <div
          class="d-flex justify-end"
          :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }"
        >
          <v-row
            :dense="$vuetify.breakpoint.smAndDown"
            class="justify-end"
            :class="{
              'justify-center mt-n4': $vuetify.breakpoint.smAndDown,
            }"
          >
            <v-col
              v-for="softSkill in softSkills"
              :key="softSkill.id"
              cols="auto"
              :class="[
                softSkill.mastery,
                { 'text-caption': $vuetify.breakpoint.smAndDown },
              ]"
            >
              {{ softSkill.title }}
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
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
