<template>
  <v-main class="pt-3">
    <v-carousel
      hide-delimiters 
      cycle
      interval="3000"  
      show-arrows-on-hover 
      :height="customHeight"
    >
      <v-carousel-item 
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      />
    </v-carousel>   
     
    <v-row class="flex-column">
      <v-col
        cols="12"
        justify-center
      />
      <v-col cols="12">
        <div class="justify-center">
          <p class="font-weight-bold text-subtitle-1 text-center">
            {{ $t("home.firstArticle") }}
          </p>
        </div>
      </v-col>
    </v-row>
      
    
    <div class="d-flex justify-center">
      <v-btn
        router
        :to="`/${$i18n.locale}/cv-mike`"
      >
        <span>{{ $t("home.button") }}</span>
      </v-btn>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
            src: 'https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2012/08/25/22/22/saturn-54999_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    };
  },
  computed: {
    customHeight () {
    return this.$vuetify.breakpoint.smAndDown? '30vh':
           this.$vuetify.breakpoint.md? '40vh':
           this.$vuetify.breakpoint.lg? '50vh':
           '60vh';
    }
  },
  mounted: function () {
    console.log(this.customHeight)
  }
};
</script>

<style>

</style>
