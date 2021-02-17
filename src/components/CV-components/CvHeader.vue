<template>
  <v-main>
    <!-- <v-row>
      <v-col cols="12" sm="12" class="pa-0 ma-0 d-flex ">
        <v-col cols="10" sm="10" md="12" class="">
          <v-card class="text-sm-left text-md-center justify-center" flat>
            <ul>
              <li v-for="person in persons" :key="person.id">
                <v-text class="text--primary text-md-h2 text-sm-h4">
                  {{ person.position }}
                </v-text>
                <br />
                <v-text class="text--secondary">{{ person.name }}</v-text>
              </li>
            </ul>
          </v-card>
        </v-col>

        <v-col cols="2" sm="2" class="d-flex justify-end d-sm d-md-none">
          <v-avatar class=" " tile>
            <v-img :src="photo" :lazy-src="lazyPhoto" alt="my photo" />
          </v-avatar>
        </v-col>
        <v-col cols="4" class="d-none d-md-flex">
          <v-card flat>
            <div class="d-none d-md-flex justify-space-between">
              <span class="text-caption font-weight-thin">
                Disclaimer: Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Nobis odio perspiciatis atque laborum nulla. Fuga earum
                labore corporis eligendi tempore incidunt animi iure provident
                quam exercitationem, dolores consequatur consequuntur nulla!
              </span>
              <v-img
                src="/my-face.jpg"
                lazy-src="/my-face-lazy.jpg"
                aspect-ratio="0.75"
                max-width="60%"
                class="mr-2"
              />
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col>
        <ul>
          <li v-for="person in persons" :key="person.id">
            <v-text class="text--primary text-md-h2 text-sm-h4">{{
              person.position
            }}</v-text>
            <br />
            <v-text class="text--secondary">{{ person.name }}</v-text>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  computed: {
    persons() {
      return this.$store.state.persons;
    },
  },
};
</script>

<style></style>
