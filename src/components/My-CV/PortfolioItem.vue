<template>
  <v-main>
    <h2>
      {{ item.name }}
    </h2>
    <v-img width="500" :src="item.image"></v-img>
    <h3>
      <a :href="item.url">{{ item.url }}</a>
    </h3>
    <p>{{ item.description }}</p>
    <p>{{ item.specification }}</p>
    <v-row>
      <v-col v-for="i in item.techs" :key="i.i">
        <v-img :src="i" width="50"></v-img>
      </v-col>
    </v-row>
    <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
  </v-main>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
