<i18n>
{
  "en" : {
    "ongoing" : "Under development"
  },
  "de" : {
    "ongoing" : "In Entwicklung"
  },
  "es" : {
    "ongoing" : "En desarrollo"
  },
  "fr" : {
    "ongoing" : "En cours de développement"
  },
  "it" : {
    "ongoing" : "In fase di sviluppo"
  },
  "ru" : {
    "ongoing" : "В разработке"
  }
}
</i18n>
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
      <v-list
        v-for="project in finishedProjects"
        :key="project.i"
        dense
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <a
                :href="project.url"
                target="_blank"
              >{{ project.title }}</a>
            </v-list-item-title>
            <v-list-item-subtitle>{{ project.dates }}</v-list-item-subtitle>
            <v-expansion-panel>
              <v-expansion-panel-header>
                {{ $t('experience.myProjectsContent') }}
                <template v-slot:actions>
                  <v-icon :color="customColor">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list dense>
                  <v-list-item
                    v-for="library in project.libraries"
                    :key="library.i"
                  >
                    <v-list-item-content>
                      <div class="d-flex flex-row justify-space-between">
                        <span class="text-caption">{{ library.name }}</span>
                        <v-avatar
                          size="25"
                          right
                          rounded
                        >
                          <img
                            :src="library.icon"
                            alt="icon"
                          >
                        </v-avatar>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ $t('ongoing') }}
          <template v-slot:actions>
            <v-icon :color="customColor">
              $expand
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="py-3">
          <v-list
            v-for="project in unfinishedProjects"
            :key="project.i"
            dense
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <a
                    :href="project.url"
                    target="_blank"
                  >{{ project.title }}</a>
                </v-list-item-title>
                <v-list-item-subtitle>{{ project.dates }}</v-list-item-subtitle>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('experience.myProjectsContent') }}
                    <template v-slot:actions>
                      <v-icon :color="customColor">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list dense>
                      <v-list-item
                        v-for="library in project.libraries"
                        :key="library.i"
                      >
                        <v-list-item-content>
                          <div class="d-flex flex-row justify-space-between">
                            <span class="text-caption">{{ library.name }}</span>
                            <v-avatar
                              size="25"
                              right
                              rounded
                            >
                              <img
                                :src="library.icon"
                                alt="icon"
                              >
                            </v-avatar>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
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
  data() {
    return {
      projects: [
        {
          isFinished: true,
          title: "Hire-Mike",
          url: "https://hire-mike.web.app",
          dates: "2021 ~ present",
          libraries: [
            {
              name: 'Vue',
              icon: '/vue-cli.png'
            },
            {
              name: 'Vuetify',
              icon: '/vuetify.png'
            },
            {
              name: 'Vuex',
              icon: '/vuex.png'
            },
            {
              name: 'Vue-i18n',
              icon: '/vue-i18n.png'
            }
          ]
        },
        {
          isFinished: true,
          title: 'Guess a number game',
          url: 'https://strive-m3-playground.netlify.app/',
          dates: '2021',
          libraries: [
            {name: 'JavaScript ES5/ES6', icon: '/plain-js.png'},
            {name: 'Plain CSS3', icon: '/plain-css.png'},
            {name: 'Semantic HTML5', icon: '/plain-html.png'}
          ]
        },
        {
          isFinished: true,
          title: "Mike's in the Web!",
          url: 'https://mikes.netlify.app/',
          dates: '2021',
          libraries: [
            {name: 'JavaScript ES5/ES6', icon: '/plain-js.png'},
            {name: 'Plain CSS3', icon: '/plain-css.png'},
            {name: 'Semantic HTML5', icon: '/plain-html.png'}
          ]
        },
        {
          isFinished: false,
          title: "Blacksmith Website",
          url: 'https://kui-s-nami-nuxt.web.app/',
          dates: '2021 ~ present',
          libraries: [
            {
              name: 'Vuetify',
              icon: '/vuetify.png'
            },
            {
              name: 'Vuex',
              icon: '/vuex.png'
            },
            {
              name: 'Nuxt.js',
             icon: '/nuxt.png'
            }
          ]
        },
        {
          isFinished: false,
          title: 'Handmade accessories Website',
          url: 'https://fns-accessories.web.app/',
          dates: '2021 ~ present',
          libraries: [
           {
              name: 'Vuetify',
              icon: '/vuetify.png'
            },
            {
              name: 'Vuex',
              icon: '/vuex.png'
            },
            {
              name: 'Nuxt.js',
             icon: '/nuxt.png'
            }
          ]
        }
      ]
    }
  },
  computed: {
    techs() {
      return this.$store.state.techs;
    },
    finishedProjects () {
      return this.projects.filter(project=>project.isFinished === true)
    },
    unfinishedProjects () {
      return this.projects.filter(project=>project.isFinished === false)
    }
  }
};
</script>

<style></style>
