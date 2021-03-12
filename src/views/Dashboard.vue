<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">
      This is a dashboard
    </h1>
    <v-container class="my-5">
      <!-- <v-row>

        <v-col cols="12" md="12" lg="3" xl="1">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>

        <v-col cols="12" md="8" lg="3" xl="1">
          <v-btn outlined block color="primary">2</v-btn>
        </v-col>

        <v-col cols="12" md="4" lg="3" xl="1">
          <v-btn outlined block color="primary">3</v-btn>
        </v-col>

        <v-col cols="12" md="4" lg="3" xl="1">
          <v-btn outlined block color="primary">4</v-btn>
        </v-col>

        <v-col cols="12" md="8" lg="3" xl="1">
          <v-btn outlined block color="primary">5</v-btn>
        </v-col>

        <v-col cols="12" md="8" lg="3" xl="1">
          <v-btn outlined block color="primary">6</v-btn>
        </v-col>

        <v-col cols="12" md="4" lg="3" xl="1">
          <v-btn outlined block color="primary">7</v-btn>
        </v-col>

        <v-col cols="12" md="3" lg="3" xl="1">
          <v-btn outlined block color="primary">8</v-btn>
        </v-col>

        <v-col cols="12" md="3" lg="3" xl="1">
          <v-btn outlined block color="primary">9</v-btn>
        </v-col>

        <v-col cols="12" md="3" lg="3" xl="1">
          <v-btn outlined block color="primary">10</v-btn>
        </v-col>

        <v-col cols="12" md="3" lg="3" xl="1">
          <v-btn outlined block color="primary">11</v-btn>
        </v-col>

        <v-col cols="12" md="12" lg="3" xl="1">
          <v-btn outlined block color="primary">12</v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12" md="12">
          <v-btn block color="success">1</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn block color="success">2</v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn block color="success">3</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn block color="success">4</v-btn>
        </v-col>
      </v-row> -->

      <v-row
        class="mb-3 pa-5"
        justify="space-between"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('title')"
              v-on="on"
            >
              <v-icon
                left
                small
              >
                folder
              </v-icon>
              <span
                right
                class="caption text-lowercase"
              >by project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('person')"
              v-on="on"
            >
              <v-icon
                left
                small
              >
                person
              </v-icon>
              <span
                right
                class="caption text-lowercase"
              >by person</span>
            </v-btn>
          </template>
          <span>Sorts projects by person</span>
        </v-tooltip>

        <!-- <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')">
            <v-icon small left>person</v-icon>
            <span caption text-lowercase>by person</span>

            <span>sort objects by person</span>
          </v-btn>
        </v-tooltip> -->
      </v-row>

      <v-card
        v-for="project in projects"
        :key="project.title"
        flat
      >
        <v-row :class="`ma-1 pa-3 project ${project.status}`">
          <v-col
            cols="12"
            md="6"
            :title="project.content"
          >
            <div class="caption grey--text">
              Project title
            </div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            md="2"
            :title="project.content"
          >
            <div class="caption grey--text">
              Person
            </div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            md="2"
            :title="project.content"
          >
            <div class="caption grey--text">
              Due by
            </div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            md="2"
            :title="project.content"
          >
            <div class="text-right">
              <v-chip :class="`${project.status} white--text caption my-2 `">
                {{
                  project.status
                }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-divider />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
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
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
  border-bottom: 1px dashed #3cd1c2;
  background: #3cd1c252;
}
.project.ongoing {
  border-left: 4px solid orange;
  border-bottom: 1px dashed orange;
  background: rgba(255, 166, 0, 0.466);
}
.project.overdue {
  border-left: 4px solid tomato;
  border-bottom: 1px dashed tomato;
  background: rgba(255, 99, 71, 0.377);
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
.v-chip.error {
  background: red !important;
}
</style>
