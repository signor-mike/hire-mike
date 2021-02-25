<template>
  <v-card class="gradient  text-center">
    <v-app-bar flat class="gradient">
      <v-toolbar-title class="">{{ $t("tributes.header") }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container grid-list-xs>
      <v-row>
        <!-- net ninja -->
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-card dark class="black">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>Net Ninja</v-card-title>
                <v-card-subtitle>{{ $t("tributes.netninja") }}</v-card-subtitle>
                <v-card-actions>
                  <a href="https://www.youtube.com/c/TheNetNinja/playlists">
                    <v-btn :x-small="$vuetify.breakpoint.smAndDown">
                      <v-icon :small="$vuetify.breakpoint.smAndDown">
                        subscriptions
                      </v-icon>
                      {{ $t("tributes.subscribe") }}
                    </v-btn>
                  </a>
                </v-card-actions>
              </div>
              <a href="https://www.thenetninja.co.uk/">
                <v-avatar tile size="125" class="ma-3">
                  <v-img src="/net-ninja-logo.png"></v-img>
                </v-avatar>
              </a>
            </div>
          </v-card>
        </v-col>

        <!-- goit -->
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-card dark color="#151d2a">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>GoIT</v-card-title>
                <v-card-subtitle>
                  {{ $t("tributes.goit") }}
                </v-card-subtitle>
                <v-card-actions>
                  <a href="https://goit.ua/">
                    <v-btn :x-small="$vuetify.breakpoint.smAndDown">
                      <v-icon :small="$vuetify.breakpoint.smAndDown">
                        language
                      </v-icon>
                      {{ $t("tributes.visit") }}
                    </v-btn>
                  </a>
                </v-card-actions>
              </div>
              <a href="https://goit.ua/">
                <v-avatar tile size="125" class="ma-3">
                  <v-img src="/goit-logo.png"></v-img>
                </v-avatar>
              </a>
            </div>
          </v-card>
        </v-col>

        <!-- stack overflow -->
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  :class="{ 'text-body-2': $vuetify.breakpoint.smAndDown }"
                >
                  Stack Overflow
                </v-card-title>
                <v-card-subtitle>
                  {{ $t("tributes.community") }}
                </v-card-subtitle>
                <v-card-actions>
                  <a href="https://stackoverflow.com/">
                    <v-btn :x-small="$vuetify.breakpoint.smAndDown">
                      <v-icon :small="$vuetify.breakpoint.smAndDown">
                        language
                      </v-icon>
                      {{ $t("tributes.visit") }}
                    </v-btn>
                  </a>
                </v-card-actions>
              </div>
              <a href="https://stackoverflow.com/">
                <v-avatar tile size="125" class="ma-3">
                  <v-img src="/stOv-logo.png"></v-img>
                </v-avatar>
              </a>
            </div>
          </v-card>
        </v-col>

        <!-- reddit -->
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>Reddit</v-card-title>
                <v-card-subtitle>
                  {{ $t("tributes.community") }}
                </v-card-subtitle>
                <v-card-actions>
                  <a href="https://www.reddit.com/">
                    <v-btn :x-small="$vuetify.breakpoint.smAndDown">
                      <v-icon :small="$vuetify.breakpoint.smAndDown">
                        language
                      </v-icon>
                      {{ $t("tributes.visit") }}
                    </v-btn>
                  </a>
                </v-card-actions>
              </div>
              <a href="https://www.reddit.com/">
                <v-avatar tile size="125" class="ma-3">
                  <v-img src="/reddit-logo.png"></v-img>
                </v-avatar>
              </a>
            </div>
          </v-card>
        </v-col>

        <!-- extra -->
        <v-col cols="12" md="6" lg="4" xl="3">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title>And of course you!</v-card-title>
                <v-card-subtitle>
                  My dear visitor!
                </v-card-subtitle>
                <v-card-actions>
                  <a href="mailto:mikelitoris34@icloud.com">
                    <v-btn :x-small="$vuetify.breakpoint.smAndDown">
                      <v-icon :small="$vuetify.breakpoint.smAndDown">
                        alternate_email
                      </v-icon>
                      {{ $t("contacts.email me") }}
                    </v-btn>
                  </a>
                </v-card-actions>
              </div>
              <a href="https://hire-mike.web.app/">
                <v-avatar tile size="125" class="ma-3">
                  <v-img src="/question.jpg"></v-img>
                </v-avatar>
              </a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.gradient {
  background: linear-gradient(270deg, #246655, #22a725);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
