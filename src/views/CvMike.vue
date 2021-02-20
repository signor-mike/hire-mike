<template>
  <v-main>
    <v-card class="my-2 px-2 ">
      <v-row class="justify-space-between">
        <v-col cols="8">
          <CvHeader />
          <v-col cols="12">
            <AboutMe />
          </v-col>
        </v-col>
        <v-col cols="4" lg="3" xl="1">
          <Images />
        </v-col>
      </v-row>
    </v-card>

    <v-card class="my-5 px-2">
      <v-row class="justify-space-between">
        <v-col cols="12" md="4" sm="3" class="d-flex justify-start">
          <HardSkills />
        </v-col>

        <v-col cols="12" md="4" sm="3" class="d-flex justify-center">
          <Experience />
        </v-col>

        <v-col cols="12" md="4" sm="3" class="d-flex  justify-end">
          <SoftSkills
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
import AboutMe from "@/components/CV-components/AboutMe.vue";
import Images from "@/components/CV-components/Images.vue";
import HardSkills from "@/components/CV-components/HardSkills.vue";
import SoftSkills from "@/components/CV-components/SoftSkills.vue";
import Experience from "@/components/CV-components/Experience.vue";
import Footer from "@/components/CV-components/Footer.vue";

export default {
  components: {
    CvHeader,
    AboutMe,
    Images,
    HardSkills,
    SoftSkills,
    Experience,
    Footer,
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
p {
  font-size: small;
}
.low {
  color: Red;
}
.b-medium {
  color: orange;
}
.medium {
  color: yellow;
}
.ab-medium {
  color: yellowgreen;
}
.high {
  color: green;
}
.low,
.b-medium,
.medium,
.ab-medium,
.high {
  -webkit-text-stroke: 0.025em black;
  text-shadow: 3px 3px 15px black;
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
