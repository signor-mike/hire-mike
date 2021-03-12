<template>
  <div class="team">
    <h1 class="subheading grey--text">
      This is a team page
    </h1>
    <v-container class="my-5">
      <v-row>
        <v-col
          v-for="person in team"
          :key="person.name"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar
                size="100"
                class="grey lighten-2"
              >
                <img
                  :src="person.avatar"
                  alt="image goes here"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="grey"
              >
                <v-icon
                  small
                  left
                >
                  message
                </v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Mike",
          role: "Web developer",
          avatar: "/mike.jpg",
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/ryu.png" },
        {
          name: "Chun Li",
          role: "Web developer",
          avatar: "/chun-li.png",
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/gouken.png",
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/yoshi.png" },
      ],
    };
  },
};
</script>
