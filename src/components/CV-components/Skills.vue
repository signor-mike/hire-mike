<template>
  <v-main class="pt-0 ">
    <v-card
      class="mt-6 "
      :class="{
        'mt-0 ': $vuetify.breakpoint.smAndDown,
        'default-dark-color': $vuetify.theme.dark,
      }"
    >
      <v-card-text
       
        class="pt-1"
      >
        <div class="parent d-flex justify-center">
          <span
            class="child text-center mx-n3 "
            :class="{ 'primary--text font-weight-regular': $vuetify.theme.dark, 
                      'd-none': !$vuetify.theme.dark }"
          >
            {{ $t("gradientLine") }}
          </span>
        </div>
        <div
          class="gradient-line my-1"
          :class="{'d-none': !$vuetify.theme.dark }"
        />
        <div
          class="d-flex justify-space-between mb-2"
          :class="{'d-flex justify-space-around' : $vuetify.breakpoint.smAndDown }"
        >
          <h2                      
            class="my-auto pl-0 primary--text mt-1"
            :class="{ 'font-weight-black mt-2': $vuetify.theme.dark,
                      'mb-3' : !$vuetify.theme.dark,
                      'mb-3' : $vuetify.theme.dark && $vuetify.breakpoint.smAndDown,
                      'mb-3' : $vuetify.breakpoint.smAndDown }"
          >
            {{ title }}
          </h2>               
        </div>

        <div :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }">
          <v-row
            :dense="$vuetify.breakpoint.smAndDown"
            class=""
            :class="{ 'justify-center mt-n4': $vuetify.breakpoint.smAndDown }"
          >
            <v-col
              v-for="skill in skills"
              :key="skill.i"
              cols="auto"
              class="font-weight-bold"
              :class="{
                'font-weight-500': $vuetify.breakpoint.smAndDown,                                
              }"
            >
              <span :class="{[skill.mastery]: $vuetify.theme.dark}"> 
                {{ $t(`skills.${skill.title}`) }} 
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
  components: {  },
   props: {
       skills: {
           type: Array,
           required: true
       }
   },
  data() {
    return {
      //
    };
  },
  computed: {
    title() {
      return this.skills[0].type === 'soft' ? 
      this.$t("skills.softSkills") :
      this.$t("skills.hardSkills")
    },

  },
  methods: {
    //
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