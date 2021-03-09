<template>
  <div>
    <!-- <div class="d-flex justify-center">
      <h1>{{ $t("message") }}</h1>
    </div>
    <div class="d-flex justify-center">
      <h2>{{ $t("home.message") }}</h2>
    </div>

    <div class="d-flex justify-center">
      <h3>{{ $t("home.messageTwo") }}</h3>
    </div>

    <div class="d-flex justify-center">
      <v-btn router :to="`/${$i18n.locale}/cv-mike`">
        <span>{{ $t("home.button") }}</span>
      </v-btn>
    </div>

    <div class="d-flex justify-center">
      <p class="text-caption font-weight-thin">
        {{ $t("home.nothing") }}
      </p>
    </div>
    <v-divider /> -->
      <div class="class"
      :class="{ 'dark-mode' : $vuetify.theme.dark}">
        <h1 class="text-uppercase">Hire mike</h1> <br />
        <h3>today please</h3>   
            <div class="button-box">
              <v-row
              dense
              :no-gutters="$vuetify.breakpoint.smAndDown"
              :class="{ 'ml-5' :$vuetify.breakpoint.smAndDown}"
              >
              <v-col
                cols="2"
                
                v-for="contact in contacts"
                :key="contact.id"
                :class="{ 'pb-1': $vuetify.breakpoint.smAndDown }"
                >
                
                <v-btn  
                             
                    text            
                    :large="$vuetify.breakpoint.mdAndUp"            
                    :x-small="$vuetify.breakpoint.smAndDown"
                    > 
                    <a :href="contact.link">
                        <v-icon  :small="$vuetify.breakpoint.smAndDown">
                        {{ contact.icon }}
                        </v-icon>
                    </a>
                </v-btn>       
              </v-col>
              </v-row>
            </div>
      </div> 

  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  }
  // mounted: function () {
  //   if (this.$vuetify.theme.dark) {

  //   }
  // }
};
</script>

<style scoped>
.class {    
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(40% - 15px);
    left: calc(25% - 20px);
}
.dark-mode {
  color: #41b883;
}
.button-box {
  position: relative;
  left: -28px;
  margin-top: 20%;
}
h1, h3 {
  font-family: 'Merriweather';
}
/* css animation / transition for drawing the div */
</style>
