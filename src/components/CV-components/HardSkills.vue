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
        'default-dark-color': $vuetify.theme.dark,
      }"
     
    >
      <SoftSkills v-if="replace" />
      <v-card-text v-if="!replace" class="pt-1">
        <div class="parent d-flex justify-center">
          <span
            class="child text-center mx-n3 "
            :class="{ 'primary--text font-weight-regular': $vuetify.theme.dark, 
                      'd-none': !$vuetify.theme.dark }"
          >
            {{ $t("gradientLine") }}
          </span>
        </div>
        <div class="gradient-line" :class="{'d-none':   !$vuetify.theme.dark }"></div>
        <div class="d-flex justify-space-between mb-2"
              :class="{'d-flex justify-space-around' : $vuetify.breakpoint.smAndDown }">
          <h2
            class="my-auto pl-0 primary--text mt-1"
            :class="{ 'font-weight-black mt-2': $vuetify.theme.dark,
            'mb-3' : !$vuetify.theme.dark,
            'mb-3' : $vuetify.theme.dark && $vuetify.breakpoint.smAndDown,
            'mb-3' : $vuetify.breakpoint.smAndDown }"
          >
            {{ $t("skills.hardSkills") }}
          </h2>

         
          
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
              class="font-weight-bold"
              :class="{
                'font-weight-500': $vuetify.breakpoint.smAndDown,                                
              }"
            >
              <span :class="{[hardSkill.mastery]: $vuetify.theme.dark}"> 
                {{ $t(`hardSkills.${hardSkill.title}`) }} 
              </span>
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
   props: {},
  data() {
    return {
      replace: false,
    };
  },
  methods: {
    toggle() {
      this.replace = !this.replace;
    },
    sortBy(prop) {
      this.skills.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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
.default-dark-color {
  background-color: #1e1e1e;
} 
</style>
