<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      {{ $t("experience.myProjects") }}
      <template v-slot:actions>
        <v-icon :color="customColor">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="py-3">
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <a href="https://hire-mike.web.app">https://hire-mike.web.app</a>
            </v-list-item-title>
            <v-list-item-subtitle>2021 ~ present</v-list-item-subtitle>
            <v-list-group :color="customColor">
              <template
                v-slot:activator
              >
                <v-list-item-content>
                  <v-list-item-title
                    class="primary--text"
                    
                    v-text="$t('experience.myProjectsContent')"
                  />
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="tech in techs"
                :key="tech.id"
              >
                <!-- cycle through data over here -->
                <v-list-item-title>
                  {{ tech.techName }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-avatar size="25">
                    <img
                      :src="tech.techIconSrc"
                      alt="icon"
                    >
                  </v-avatar>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list-group>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
   props: {    
      customColor: {
        required: true,  
        type: String,      
      }
  },
  computed: {
    techs() {
      return this.$store.state.techs;
    },
  },
};
</script>

<style></style>
