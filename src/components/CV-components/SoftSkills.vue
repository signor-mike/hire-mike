<template>
  <v-main class="pt-0">
    <v-card
      :title="[$t('gradientLine')]"
      :class="{ 'grey lighten-2': colorSwitch }"
    >
      <v-card-text class="pt-1">
        <div class="parent d-flex justify-center">
          <span
            class="child text-center mx-n3"
            :class="{ 'primary--text font-weight-regular': colorSwitch }"
          >
            {{ $t("gradientLine") }}
          </span>
        </div>
        <div class="gradient-line"></div>
        <div class="d-flex justify-space-between mb-2">
          <v-switch
            v-model="colorSwitch"
            :class="{ 'd-none': $vuetify.breakpoint.smAndDown }"
          ></v-switch>
          <h2
            class="pt-5 pl-0 primary--text"
            :class="{ 'font-weight-black': colorSwitch }"
          >
            {{ $t("skills.softSkills") }}
          </h2>
          <v-switch
            v-model="colorSwitch"
            :class="{ 'd-none': $vuetify.breakpoint.mdAndUp }"
          ></v-switch>
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
              :key="softSkill.i"
              cols="auto"
              :class="[
                colorSwitch ? softSkill.mastery : '',
                { 'font-weight-500': $vuetify.breakpoint.smAndDown },
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

<style scoped>
.parent >>> .child {
  font-weight: 100;
  line-height: 1;
  font-size: xx-small;
}
</style>
