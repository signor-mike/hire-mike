<template>
  <v-main class="pt-0">
    <v-card>
      <v-card-text>
        <div class="gradient-line"></div>
        <div class="d-flex justify-space-between mb-2">
          <h2 class="pt-5 pl-4">{{ $t("skills.softSkills") }}</h2>
          <v-switch v-model="colorSwitch"></v-switch>
        </div>
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
                colorSwitch ? softSkill.mastery : '',
                { 'text-caption': $vuetify.breakpoint.smAndDown },
              ]"
            >
              {{ $t(`softSkills.${softSkill.title}`) }}
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      colorSwitch: false,
    };
  },
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
