<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      {{ $t("education.education") }}
      <template v-slot:actions>
        <v-icon color="primary">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>

    <v-expansion-panel-content class="py-3">
      <v-list dense>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              <a href="https://strive.school/">
                strive.school
              </a>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("months.april") }} 2021 ~ present
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ $t("education.fullstack") }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
    

    <v-expansion-panel-content class="py-3">
      <v-list dense>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              <a href="http://пгатк.рф/">
                {{ $t("education.schoolName") }}
              </a>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("months.september") }} 2009 - {{ $t("months.july") }} 2012
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ $t("education.spec") }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {};
</script>

<style></style>
