<template>
  <v-sheet
    style="height: 100%"
    class="d-flex flex-column justify-space-between pt-1"
  >
    <p class="text-center">{{ details.title }}</p>
    <p
      v-for="preview in details.preview"
      :key="preview.i"
      class="d-flex justify-space-between px-2"
    >
      <a v-if="preview.url" :href="preview.url" target="_blank">
        {{ preview.name }}
      </a>
      <span v-else>{{ preview.name }}</span>
      <span>{{ preview.date }}</span>
    </p>

    <v-dialog v-model="dialog" width="800" scrollable>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="details.link"
          @click="pushHistory()"
          color="primary"
          outlined
          >See more...</v-btn
        >
        <v-btn v-else color="primary" outlined dark v-bind="attrs" v-on="on">
          See more...
        </v-btn>
      </template>
      <v-sheet class="text-center px-1" height="100%">
        <h1>My {{ details.title }}</h1>
        <v-row
          dense
          v-for="item in details.full"
          :key="item.i"
          style="width:100%;"
        >
          <v-col cols="12" md="9" class="text-left">
            <v-divider class="my-1"></v-divider>{{ item.role }} at
            <a target="_blank" :href="item.url">{{ item.name }}</a>
          </v-col>

          <v-col cols="12" md="3" class="text--secondary"
            >{{ item.date }}
          </v-col>

          <v-col cols="12" md="9" v-for="item in item.things" :key="item.i">
            <p class="text-left">- {{ item }}</p>
          </v-col>
        </v-row>
        <v-btn color="primary" outlined @click="dialog = false">
          Thank you Mr. Modal Window
        </v-btn>
      </v-sheet>
    </v-dialog>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    details: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    pushHistory() {
      if (this.details.link) {
        this.$router.push(this.details.link);
      }
    },
  },
};
</script>

<style></style>
