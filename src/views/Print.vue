<template>
  <div ref="Html2pdf" class="main-container">
    <div class="box">
      <h1>Some text</h1>
      <h2>under construction</h2>
    </div>
    <v-btn class="primary " @click="generatePdf">
      generate PDF
    </v-btn>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  data() {
    return {};
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

<style>
.box h1 {
  color: red;
}
.main-container {
  width: "100%";
  height: "100%";
  background: green;
}
.box {
  height: 100vh;
  box-sizing: content-box;
}
</style>
