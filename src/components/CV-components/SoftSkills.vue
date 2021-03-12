<template>
  <v-main class="pt-0">
    <v-card
      
      :class="{ 'default-dark-color': $vuetify.theme.dark }"
    >
      <v-card-text class="pt-1">
        <div class="parent d-flex justify-center">
          <span
            class="child text-center mx-n3"
            :class="{ 'primary--text font-weight-regular': $vuetify.theme.dark , 
                      'd-none': !$vuetify.theme.dark }"
          >
            {{ $t("gradientLine") }}
          </span>
        </div>
        <div
          class="gradient-line"
          :class="{ 'd-none': !$vuetify.theme.dark }"
        />
        <div
          class="d-flex justify-space-between mb-2"
          :class="{ 'd-flex text-right flex-row-reverse mb-4' : $vuetify.breakpoint.mdAndUp,
                    'd-flex justify-space-around' : $vuetify.breakpoint.smAndDown }"
        >
          <h2
            class="my-auto pl-0 primary--text mt-1"
            :class="{ 'font-weight-black mt-2': $vuetify.theme.dark,
                      'mb-3' : !$vuetify.theme.dark,
                      'mb-3' : $vuetify.theme.dark && $vuetify.breakpoint.smAndDown,
                      'mb-3' : $vuetify.breakpoint.smAndDown }"
          >
            {{ $t("skills.softSkills") }}
          </h2>
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
              :key="softSkill.title"
              cols="auto"
              class="font-weight-bold"
              :class="[                
                { 'font-weight-500': $vuetify.breakpoint.smAndDown },
              ]"
            >
              <span :class="[$vuetify.theme.dark ? softSkill.mastery : '']"> 
                {{ $t(`softSkills.${softSkill.title}`) }}  
              </span> 
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
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
  methods: {
    sortBy(prop) {
      this.skills.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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
  background-color: #1e1e1e !important;
} 
</style>
