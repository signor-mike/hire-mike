<template>
  <v-main class="pt-0">
    <v-row>
      <v-col cols="12" sm="12" md="4">
        <Skills />
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <v-container pt-0 fluid style="height: 100%">
          <v-row justify="space-between" dense style="height: 100%">
            <v-col v-for="lang in languages" :key="lang.i" cols="6" md="3">
              <flag :iso="lang.flag" />
              <span class="primary--text">
                {{ lang.lang }}
                <span class="text--secondary">{{ lang.level }}</span>
              </span>
            </v-col>

            <v-row class="my-auto">
              <v-col cols="6">
                <DetailedView :details="details.portfolio" />
              </v-col>
              <v-col cols="6">
                <DetailedView :details="details.education" />
              </v-col>
              <v-col cols="6">
                <DetailedView :details="details.experience" />
              </v-col>
              <v-col cols="6">
                <DetailedView :details="details.voluntering" />
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import Skills from "./Skills.vue";
import DetailedView from "./DetailedView.vue";

export default {
  components: { Skills, DetailedView },
  data() {
    return {
      details: {
        portfolio: {
          title: "Portfolio",
          link: "/portfolio",
          preview: [
            {
              name: "Hire Mike",
              date: "2021~",
              url: "https://hire-mike.web.app",
            },
            {
              name: "Handmade accessories",
              date: "2021~",
              url: "https://fns-accessories.web.app",
            },
          ],
          full: [],
        },

        education: {
          title: "Education",
          preview: [
            {
              name: "Strive.school",
              date: "2021",
              url: "https://strive.school",
            },
            { name: "Some college", date: "2012", url: "http://www.пгатк.рф/" },
          ],
          full: [
            {
              name: "Strive.school",
              date: "April 2021 - October 2021",
              url: "https://strive.school",
              role: "Fullstack web engineer",
              things: [
                "Strive is a selective, six-month-long, online course, to learn Full Stack Web Development and kickstart a successful career in tech.",
                "The opportunity to work together with people from all over the world, integrating the theory with practical work on real projects from the industry, makes the skills learned easily applicable in every environment.",
              ],
            },
            {
              name: "Perm State Motor Transport College",
              date: "September 2009 - July 2012 ",
              url: "http://www.пгатк.рф/",
              role: "Vehicle Mechanic, 3rd degree",
              things: [
                "Vehicle maintenance",
                "Internal combustion engine repair and service",
                "Fuel equipment repair and service",
              ],
            },
          ],
        },

        experience: {
          title: "Experience",
          preview: [
            { name: "Sales Manager", date: "2012", url: "https://asoik.com/" },
            {
              name: "Customer Service",
              date: "2010",
              url: "https://corp.megafon.com/about/about/",
            },
          ],
          full: [
            {
              name: "Salesman Freelance",
              date: "2013 - 2018 ",
              url: "https://hire-mike.web.app",
              role: "Salesman",
              things: [
                "Selling in-game items, proactively researched and analyzed prospects",
                "Evaluated positive and negative aspects of buyer and seller negotiating the best price",
                "Analysed the gaming market and the trends",
              ],
            },
            {
              name: "ASOIK, LLC (Russia, Perm)",
              date: "2012 - 2013",
              url: "https://asoik.com/",
              role: "Sales Manager",
              things: [
                "Managed sales, service and customer relationships in different locations",
                "Effectively learned to problem solve through customer concerns and dilemmas",
                "Developed relationships with customers to ensure their satisfaction with service and experience inside the store",
              ],
            },
            {
              name: "OJSC 'MegaFon Retail' (Russia, Perm)",
              date: "2012",
              url: "https://corp.megafon.com/about/about/",
              role: "Customer Service Representative",
              things: [
                "Maintaining a positive, empathetic, and professional attitude toward customers at all times",
                "Acknowledging and resolving customer complaints",
                "Responding promptly to customer inquiries",
              ],
            },
          ],
        },

        voluntering: {
          title: "Voluntering",
          preview: [{ name: "Hospitality manager assistant", date: "2019" }],
          full: [
            {
              name: "Granadilla Hostel (Spain, Tenerife)",
              date: "2018 - 2019",
              url:
                "https://www.google.com/search?q=the+website+doesn%27t+exist+so+here+have+a+look+at+some+cats&newwindow=1&client=ubuntu&hs=y1c&channel=fs&sxsrf=AOaemvLnlf7rtDlSZsXs9tCb3ApJqZs4GA:1630775846180&source=lnms&tbm=isch&sa=X&ved=2ahUKEwijyJO46eXyAhXMg_0HHUeXBHsQ_AUoA3oECAEQBQ&biw=1280&bih=646",
              role: "Hospitality manager assistant",
              things: [
                "Meet & Greet Customers",
                "Housekeeping",
                "Customers Complaints",
              ],
            },
          ],
        },
      },
      languages: [
        {
          lang: "ENG",
          flag: "us",
          level: "Bilingual",
        },
        {
          lang: "ESP",
          flag: "es",
          level: "Basic",
        },
        {
          lang: "ITA",
          flag: "it",
          level: "Basic",
        },
        {
          lang: "RU",
          flag: "ru",
          level: "Native",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
};
/*
portfolio, education, experience, volunteering
*/
</script>

<style>
@import url("../../assets/global.css");
</style>
