<template>
  <v-main>
    <div class="text-center d-flex pb-2 justify-space-around">
      <v-btn @click="all">
        expand all
      </v-btn>

      <v-btn @click="none">
        collapse all
      </v-btn>
    </div>
    <v-expansion-panels accordion focusable popout v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>
          About me
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Age, languages spoken, nationality, permits blah blah
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          My projects
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Currently this website is my only project
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Relevant experience
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Currently my only relevant experience is developing this website
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Irrelevant experience
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lots of stuff over here, for now it's Lorem ipsum dolor sit amet
          consectetur adipisicing elit. At est dolore natus, laudantium cum
          nisi? Corrupti eligendi repellat quaerat accusamus, veritatis illo
          recusandae laudantium, ut totam nisi earum vel maxime.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Education
          <template v-slot:actions>
            <v-icon color="primary">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Those dodgy college
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      panel: [],
      items: 5,
    };
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>

<style></style>
