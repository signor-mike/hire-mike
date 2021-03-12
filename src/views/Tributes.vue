<template>
  <v-main>
    <v-row>
      <v-col
        v-for="tribute in tributes"
        :key="tribute.title"
        cols="auto"
        sm="12"
        md="6"
        lg="3"
        xl="2"
      >
        <v-card 
       
          elevation="5"
          shaped
          outlined
        >
          <v-img
            class="ma-1"
            :src="tribute.img"
          />
          <v-card-title>  
            {{ tribute.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ tribute.subtitle }}
          </v-card-subtitle>
          <v-card-text>
            {{ tribute.text }}
          </v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-btn
              text
              color="#41b883"               
            >
              <a
                :href="tribute.linkOne" 
                :class="{'dark-mode' : $vuetify.theme.dark}"
              >
                <v-icon x-large> {{ tribute.iconOne }} </v-icon> 
              </a>
            </v-btn>

            <v-btn
              text                  
            >
              <a
                :href="tribute.linkTwo"
                :class="{'dark-mode' : $vuetify.theme.dark}"
              >
                <v-icon x-large> {{ tribute.iconTwo }} </v-icon> 
              </a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>

export default {


  data () {
    return {
     
    }
  },
  computed: {
    tributes() {
      return this.$store.state.tributes;
    },
  },
  created: function () {
    console.log(this.$i18n.locale + ' ' + typeof this.$i18n.locale)
    if (this.$i18n.locale !== 'en') {
alert("Sorry, but this page is not translated yet, and it's available only in English.")
    }    
  },
};
</script>

<style scoped>
.dark-mode {
  color: #41b883 !important;
}
</style>
