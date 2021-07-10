<template ref="document">
  <v-main
    class="pt-0 mt-2  px-3 "
    :class="{
      'normal-thin mx-auto': $vuetify.breakpoint.mdAndUp,
      'thiner mx-auto': $vuetify.breakpoint.lgAndUp,
      'even-thiner mx-auto': $vuetify.breakpoint.xlAndUp,
    }"
  >
    <v-card class="my-2 px-2 ">
      <v-row class="justify-space-between">
        <v-col cols="8">
          <CvHeader />
          <v-col cols="12">
            <AboutMe />
          </v-col>
        </v-col>
        <v-col cols="4" lg="4" xl="2">
          <Images />
        </v-col>
      </v-row>
    </v-card>

    <v-card class="my-5 px-2">
      <v-row class="justify-space-between" no-gutters>
        <v-col
          cols="auto"
          sm="auto"
          md="3"
          class="d-flex justify-start flex-column"
        >
          <v-btn
            class="d-none text-center pa-1 "
            :class="{
              'd-block pt-1': $vuetify.breakpoint.smAndDown,
            }"
            x-small
            @click="toggle"
          >
            <span>{{ $t("skills.switch") }}</span>
          </v-btn>
          <Skills v-if="!replace" :skills="hardSkills" />
          <Skills v-if="replace" :skills="softSkills" />
        </v-col>

        <v-col cols="auto" sm="auto" md="6" class="d-flex justify-center">
          <Experience />
        </v-col>

        <v-col cols="auto" sm="auto" md="3" class="d-flex  justify-end">
          <Skills
            :skills="softSkills"
            :class="{
              'd-none': $vuetify.breakpoint.smAndDown,
            }"
          />
        </v-col>
      </v-row>
    </v-card>

    <div>
      <Footer
        class="d-none"
        :class="{
          'd-inline': $vuetify.breakpoint.smAndDown,
        }"
      />
    </div>
  </v-main>
</template>

<script>
import CvHeader from "@/components/CV-components/CvHeader.vue";
import AboutMe from "../components/CV-components/AboutMe.vue";
import Images from "../components/CV-components/Images.vue";
import Skills from "../components/CV-components/Skills.vue";
import Experience from "../components/CV-components/Experience.vue";
import Footer from "../components/CV-components/Footer.vue";

export default {
  components: {
    CvHeader,
    AboutMe,
    Images,
    Experience,
    Footer,
    Skills,
  },
  data() {
    return {
      fab: false,
      replace: false,
      skills: [],
    };
  },

  computed: {
    hardSkills() {
      return this.skills.filter((skill) => skill.type === "hard");
    },
    softSkills() {
      return this.skills.filter((skill) => skill.type === "soft");
    },
  },
  mounted: async function() {
    await this.getSkills();
    console.log(this.skills);
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    toggle() {
      this.replace = !this.replace;
    },
    async getSkills() {
      const request = await fetch(`${process.env.VUE_APP_BACKEND_URL}/skills`);
      const response = await request.json();
      this.skills = await response;
    },
  },
};
</script>

<style>
.normal-thin {
  width: 80%;
}
.thiner {
  width: 65%;
}
.even-thiner {
  width: 45%;
}
ul {
  list-style-type: none;
}
p {
  font-size: small;
}
.f-low {
  color: Red;
}
.d-medium {
  color: orange;
}
.c-medium {
  color: rgb(180, 180, 7);
}
.b-medium {
  color: yellowgreen;
}
.a-high {
  color: green;
}
.f-low,
.d-medium,
.c-medium,
.b-medium,
.a-high {
  /* -webkit-text-stroke: 0.03em black; */
  letter-spacing: 0.05em;
  font-weight: bolder;
  /* text-shadow: 3px 3px 15px black; */
}
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
