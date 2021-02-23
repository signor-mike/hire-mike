<template>
  <div ref="Html2pdf">
    <v-card class="ma-5">
      <v-card-title class="d-flex justify-center"> Foo bar</v-card-title>
      <v-card-subtitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
        sit. Commodi eaque voluptates architecto, temporibus quaerat deserunt
        nostrum et expedita aliquid, facilis rem? Optio dolore accusantium dicta
        dolorem voluptas ipsam?
      </v-card-subtitle>
      <v-card-content class="px-3 d-block pb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id
        voluptatem odit itaque, quo perspiciatis hic beatae molestiae vero in
        unde esse culpa consectetur, repellendus fugiat quae distinctio. Alias,
        tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aspernatur aliquid dolorum facilis qui cupiditate blanditiis praesentium
        adipisci ex totam eaque nisi corporis, rerum maxime officiis architecto
        eveniet esse nostrum dolorem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita dignissimos assumenda tempore dolores
        numquam! Doloribus dignissimos labore, quia et porro quidem mollitia
        iure perferendis hic, omnis voluptas, soluta obcaecati eos?
      </v-card-content>
      <div class="d-flex justify-center py-3">
        <v-btn class="primary " @click="generatePdf">
          generate PDF
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  data() {
    return {
      message: "Hi my first vue code pen!!!",
    };
  },
  methods: {
    generatePdf() {
      var pdf = new jsPDF("p", "pt", "A4");

      pdf.fromHTML(this.$refs.Html2pdf);

      pdf.save("test.pdf");
    },
  },
};
</script>

<style></style>
