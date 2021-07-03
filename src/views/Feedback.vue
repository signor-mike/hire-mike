<template>
  <v-sheet id="body">
    <v-main class="pt-3">
      <v-form v-model="valid">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" md="4" lg="3" xl="2">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="50"
                label="Your name"
                required
                placeholder="Your name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="3" xl="2">
              <v-text-field
                v-model="company"
                :rules="companyRules"
                :counter="30"
                label="Your company"
                required
                placeholder="Your company"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="3" xl="2">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                placeholder="E-mail"
                autocomplete="email"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8" lg="6" xl="4" class="mx-auto">
              <v-textarea
                outlined
                name="input-7-1"
                label="Your message to me"
                placeholder="Your message to me"
                hint="Spill it, my dear visitor!"
                autocomplete="message"
                v-model="message"
                :counter="1000"
                :rules="messageRules"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="6" class="mx-auto text-center">
              <v-btn
                @click="handleSubmit()"
                :disabled="!valid"
                :loading="loading"
                color="primary"
                outlined
              >
                <span class="font-weight-black">Submit</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-main>
    <div
      class="alert-wrapper text-center"
      :class="{ 'd-none': !isVisible }"
      @click="isVisible = !isVisible"
    >
      <div class="alert">
        <v-alert :color="status">
          <span id="alertMes"> </span>
        </v-alert>
      </div>
    </div>
  </v-sheet>
  <!-- {{ $t("home.firstArticle") }} -->
  <!-- {{ $t("home.firstArticle") }} -->
</template>

<script>
export default {
  data() {
    return {
      n: 5,
      isVisible: false,
      status: "",
      alertMessage: ``,
      myEmail: "mikelitoris34@icloud.com",
      valid: false,
      loading: false,
      firstname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 50 || "Name can't be more than 50 characters",
      ],

      company: "",
      companyRules: [
        (v) =>
          v.length <= 30 || "Company name can't be more than 30 characters",
      ],

      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      message: "",
      messageRules: [
        (v) => !!v || "The message itself is required.",
        (v) =>
          v.length <= 1000 ||
          "Message cannot be more than 1000 characters. Come on, this is not an essay competition!",
      ],
    };
  },
  computed: {
    customHeight() {
      return this.$vuetify.breakpoint.smAndDown
        ? "30vh"
        : this.$vuetify.breakpoint.md
        ? "40vh"
        : this.$vuetify.breakpoint.lg
        ? "50vh"
        : "60vh";
    },
  },
  mounted: function() {
    let body = document.getElementById("body");
    body.style.height = window.innerHeight + "px";
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      await fetch(process.env.VUE_APP_BACKEND_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.firstname,
          company: this.company,
          email: this.email,
          message: this.message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            this.success();
          } else {
            this.failure();
          }
        });
      this.loading = false;
    },
    failure() {
      this.isVisible = true;
      this.status = "red";
      this.alertMessage = `Something went wrong, please try again or contact me at <a href="mailto:${this.myEmail}">${this.myEmail}</a>`;
      document.getElementById("alertMes").innerHTML = this.alertMessage;
    },
    success() {
      this.isVisible = true;
      this.status = "primary";
      this.alertMessage = `Your message has been received. Please check your inbox (including Junk folder) for a confirmation email. You'll be redirected back in ${this.n} seconds...`;
      document.getElementById("alertMes").innerHTML = this.alertMessage;
      this.firstname = "";
      this.company = "";
      this.email = "";
      this.message = "";
      setTimeout(() => {
        this.$router.go(-1);
      }, this.n * 1000);
    },
  },
};
</script>

<style scoped>
.alert {
  width: 50%;
  max-width: 100%;
  z-index: 3;
  position: absolute;
  /* top: 20%; */
  /* left: 50%; */
}
.alert-wrapper {
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.185);
  z-index: 2;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
