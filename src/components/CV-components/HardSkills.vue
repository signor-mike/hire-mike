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
      <SoftSkills v-if="replace" />
      <v-card-text v-if="!replace">
        <div class="gradient-line"></div>
        <v-card-title class="justify-center">
          Hard Skills
          <v-switch v-model="colorSwitch"></v-switch>
        </v-card-title>

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
              :class="{
                'text-caption': $vuetify.breakpoint.smAndDown,
                [hardSkill.mastery]: colorSwitch,
              }"
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

<style>
.gradient-line {
  background-image: linear-gradient(
    to right,
    #ff0000,
    #ffa500,
    #ffff00,
    #adff2f,
    #008000
  );
  -webkit-animation: gradient-line 30s ease infinite;
  -moz-animation: gradient-line 30s ease infinite;
  animation: gradient-line 30s ease infinite;
  max-width: inherit;
  height: 5px;
}
@-webkit-keyframes gradient-line {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes gradient-line {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes gradient-line {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 51%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
