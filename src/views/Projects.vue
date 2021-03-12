<template>
  <div class="projects">
    <h1 class="subheading grey--text">
      This is a projects page
    </h1>

    <!-- <v-expansion-panels class="mb-5">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Item, no v-card
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> -->

    <v-expansion-panels multiple>
      <v-expansion-panel
        v-for="project in myProjects"
        :key="project.title"
      >
        <v-expansion-panel-header>
          {{ project.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">
                Due by {{ project.due }}
              </div>
              <div>
                {{ project.content }}
              </div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-container class="my-5" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Mike",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Scratch ballz",
          person: "Boris",
          due: "TODAY!!!!!",
          status: "error",
          content:
            "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design a new website... again",
          person: "The Mike",
          due: "1st Jan 2020",
          status: "ongoing",
          content:
            "6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "The Mike";
      });
    },
    // myProjects() {
    //   return this.projects.filter(project => {
    //     return project.person === 'The Net Ninja' && project.status != 'complete'
    //   })
    // }
  },
};
</script>
