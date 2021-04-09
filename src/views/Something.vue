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
            src: 'https://picsum.photos/800/600?random=1',
          },
          {
            src: 'https://picsum.photos/800/600?random=2',
          },
          {
            src: 'https://picsum.photos/800/600?random=3',
          },
          {
            src: 'https://picsum.photos/800/600?random=4',
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
