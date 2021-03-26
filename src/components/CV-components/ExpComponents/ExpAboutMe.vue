<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      {{ $t("aboutMe") }}
      <template v-slot:actions>
        <v-icon color="primary">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="py-3">
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{
                $t("expAboutMe.dob")
              }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.dobDate") }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{ $t("expAboutMe.permits") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.permitsAct") }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.permitTwo") }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{
                $t("expAboutMe.cityOfR")
              }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.addr") }} <flag iso="it" />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="primary--text"
                v-text="$t('expAboutMe.languages')"
              />
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-title>
              <flag iso="gb" /> {{ $t("expAboutMe.eng") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.lvFl") }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <flag iso="ru" /> {{ $t("expAboutMe.rus") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.lvNa") }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <flag iso="it" /> {{ $t("expAboutMe.ita") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.lvBa") }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <flag iso="es" /> {{ $t("expAboutMe.esp") }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("expAboutMe.lvBa") }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {};
</script>

<style></style>
