<template>
  <v-main class="pt-0 ">
    <v-row class="">
      <v-col
        no-gutters
        cols="12"
        class="d-none text-center pa-1 "
        :class="{
          'd-block pt-1': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-btn x-small @click="toggle" class="my-n4">
          <span>{{ $t("skills.switch") }}</span>
        </v-btn>
      </v-col>
    </v-row>
    <v-card
      class="mt-6 "
      :class="{
        'mt-0 ': $vuetify.breakpoint.smAndDown,
        'grey lighten-2': colorSwitch,
      }"
      :title="[$t('gradientLine')]"
    >
      <SoftSkills v-if="replace" />
      <v-card-text v-if="!replace" class="pt-1">
        <div class="parent d-flex justify-center">
          <span
            class="child text-center mx-n3 "
            :class="{ 'primary--text font-weight-regular': colorSwitch }"
          >
            {{ $t("gradientLine") }}
          </span>
        </div>
        <div class="gradient-line"></div>
        <div class="d-flex justify-space-between mb-2">
          <h2
            class="pt-5 pl-0 primary--text"
            :class="{ 'font-weight-black': colorSwitch }"
          >
            {{ $t("skills.hardSkills") }}
          </h2>
          <v-switch v-model="colorSwitch"></v-switch>
        </div>

        <div :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }">
          <v-row
            :dense="$vuetify.breakpoint.smAndDown"
            class=""
            :class="{ 'justify-center mt-n4': $vuetify.breakpoint.smAndDown }"
          >
            <v-col
              v-for="hardSkill in hardSkills"
              :key="hardSkill.i"
              cols="auto"
              :class="{
                'font-weight-500': $vuetify.breakpoint.smAndDown,
                [hardSkill.mastery]: colorSwitch,
              }"
            >
              {{ $t(`hardSkills.${hardSkill.title}`) }}
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
import SoftSkills from "@/components/CV-components/SoftSkills.vue";

export default {
  data() {
    return {
      replace: false,
      colorSwitch: false,
    };
  },
  methods: {
    toggle() {
      this.replace = !this.replace;
    },
  },
  components: { SoftSkills },
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

<style scoped>
.parent >>> .child {
  font-weight: 100;
  line-height: 1;
  font-size: xx-small;
}
</style>
