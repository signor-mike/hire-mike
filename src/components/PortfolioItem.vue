<template>
  <v-main>
    <h2>
      {{ item.name }}
    </h2>
    <h3>
      <a :href="item.url">{{ item.url }}</a>
    </h3>
    <p>{{ item.description }}</p>
    <p>{{ item.specification }}</p>
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
