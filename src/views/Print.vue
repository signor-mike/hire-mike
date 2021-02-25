<template>
  <div class="html d-none" ref="document">
    <div class="body">
      <div class="upper-section">
        <div class="name-and-contacts">
          <h2>Mikhail Krivoshchekov (Mike)</h2>
          <h3>{{ $t("person.position") }}</h3>
          <p>{{ $t("expAboutMe.dobDate") }}</p>
          <p>{{ $t("expAboutMe.addr") }}</p>
          <ul>
            <li v-for="contact in contacts" :key="contact.i">
              {{ contact.addr }}
            </li>
          </ul>
        </div>

        <v-avatar class="avatar" size="200">
          <img src="/my-face.jpg" alt="alt" />
        </v-avatar>
      </div>
      <hr />

      <div class="bottom-section">
        <div class="soft-skills">
          <ul>
            <li v-for="softSkill in softSkills" :key="softSkill.i">
              {{ $t(`softSkills.${softSkill.title}`) }}
            </li>
          </ul>
        </div>

        <div class="about-me">
          <div class="langs">
            <ul>
              <h3>
                {{ $t("expAboutMe.languages") }}
              </h3>

              <li>
                <flag iso="gb" /> {{ $t("expAboutMe.eng") }}
                <span class="secondary--text">{{ $t("expAboutMe.lvFl") }}</span>
              </li>
              <li>
                <flag iso="ru" /> {{ $t("expAboutMe.rus") }}
                <span class="secondary--text">{{ $t("expAboutMe.lvNa") }}</span>
              </li>
              <li>
                <flag iso="it" /> {{ $t("expAboutMe.ita") }}
                <span class="secondary--text">{{ $t("expAboutMe.lvBa") }}</span>
              </li>
              <li>
                <flag iso="es" /> {{ $t("expAboutMe.esp") }}
                <span class="secondary--text">{{ $t("expAboutMe.lvBa") }}</span>
              </li>
            </ul>
          </div>
          <p>
            {{ $t("lightCv.thisIs") }}<br />
            {{ $t("lightCv.visitThis") }}
            <a href="https://hire-mike.web.app/en/cv-mike">hire-mike.web.app</a>
            <br />
            {{ $t("lightCv.scanThis") }}
          </p>
          <div class="qrcode">
            <img src="/cv-qr.png" alt="" />
          </div>

          <p>{{ $t("lightCv.ty") }}</p>
        </div>

        <div class="hard-skills">
          <ul>
            <li v-for="hardSkill in hardSkills" :key="hardSkill.i">
              {{ $t(`hardSkills.${hardSkill.title}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      contacts: [
        { name: "email", addr: "MikeLitoris34@icloud.com" },
        { name: "phone", addr: "+39 351 0499 441" },
      ],
    };
  },

  methods: {},
  mounted: function() {
    html2pdf(this.$refs.document, {
      margin: 1,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 292, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }),
      this.$router.go(-1);
    alert(`${this.$t("lightCv.alert")}`);
  },

  computed: {
    skills() {
      return this.$store.state.skills;
    },
    hardSkills() {
      return this.skills.filter((skill) => skill.type === "hard");
    },
    softSkills() {
      return this.skills.filter((skill) => skill.type === "soft");
    },
  },
};
</script>

<style>
.html {
  height: 100%;
}
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 40px auto 100px;
}
.upper-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.avatar {
  margin-bottom: 20px;
}
.bottom-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: solid grey 2px;
}
.hard-skills {
  text-align: right;
}
.about-me {
  border-right: solid grey 2px;
  border-left: solid grey 2px;
  padding: 0 5px 0 5px;
  width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.qrcode {
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
}
.qrcode img {
  width: 150px;
  height: 150px;
}
.hard-skills li,
.soft-skills li {
  margin-top: 5px;
  padding-bottom: 2px;
  border-bottom: dashed #808080a9 0.5px;
}
</style>
