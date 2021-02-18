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
          <SoftSkills />
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
</style>
