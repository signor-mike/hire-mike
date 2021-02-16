<template>
  <v-card class="container black">
    <v-img
      src="http://b1-dev.aegir.cambridgeesol.org/under_construction.jpg"
      alt="under construction"
      :aspect-ratio="16 / 9"
      :width="width"
    />
    <v-card class="contact-container mt-n5 d-flex justify-space-between black">
      <div class="contact py-5">
        <p>The name of the person, Antonio I guess</p>
        <p>The positon, let's call it CEO</p>
        <p>
          Phone number (clickable):<a href="tel:+39blahblah"
            >+355 blah blah blah</a
          >
        </p>
        <p>
          WhatsApp (clickable link to WhatsApp):
          <a href="https://whatsapp">+39 blah blah blah</a>
        </p>
        <p>
          email (clickable to send an email):
          <a href="mailto:someone@exp.com">example@exp.com</a>
        </p>
        <p caption>And there's something else whatever the hell you want</p>
        <p class="font-weight-thin">And something thin as fuck</p>
      </div>
      <div class="image">
        <v-img
          class="mr-1 d-none d-md-block"
          src="https://www.qrcode.es/wp-content/uploads/2016/09/qr_img.png"
        />
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.container {
  position: relative;
}
.contact {
  color: white;
}
p {
  display: block;
}
a {
  text-decoration: none;
}
/* .contact-container {
  display: flex;
  justify-content: space-between;
} */
</style>
