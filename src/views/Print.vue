<template>
  <div>
    <div>
      <h2>The download should begin very soon.</h2>
      <p>
        <span>You'll be redirected back in</span> <span>{{ n }} </span
        ><span>seconds</span>...
      </p>
      <p>
        P.S: This feature may not be working on some OS. Sorry for the
        inconvenience.
      </p>
      <h3>
        Back to
        <router-link to="/">
          Home
        </router-link>
      </h3>
    </div>
    <div id="document" class="d-none">
      <div id="top-triangle"></div>
      <div id="bottom-triangle"></div>
      <body class="body">
        <header>
          <div class="image-wrapper">
            <img
              @click="printTheShit()"
              src="/cv-qr.png"
              alt="scan to visit my website"
            />
          </div>
          <div>
            <h1>
              Mikhail (Mike) <br />
              Krivoshchekov
            </h1>
            <h3 class="fancy-font">Fullstack developer</h3>
          </div>
        </header>

        <main>
          <aside>
            <div id="aside-bg"></div>
            <section class="contacts">
              <h2>Contacts:</h2>
              <p>
                <v-icon light>mdi-email</v-icon>
                <a href="mailto:mikelitoris34@icloud.com">
                  mikelitoris34@icloud.com
                </a>
              </p>
              <p>
                <v-icon light>mdi-web</v-icon>
                <a href="https://hire-mike.web.app">
                  hire-mike.web.app
                </a>
              </p>
              <p>
                <v-icon light>mdi-home</v-icon>
                <a href="https://goo.gl/maps/ANqCQfcNCJE3htFy5">
                  Nardo (LE), Italy
                </a>
              </p>
              <p>
                <v-icon light>mdi-github</v-icon>
                <a href="https://github.com/Mike-OxHuge">
                  github.com/Mike-OxHuge
                </a>
              </p>
            </section>
            <section class="education">
              <h2>Education:</h2>
              <p style="font-size: 0.5rem;">FULL STACK DEVELOPMENT PROGRAM</p>
              <br />
              <p>2021 - Strive School - YC(S20)</p>
              <br />
              <p>
                Strive is a selective, six-month-long, online course, to learn
                Full Stack Web Development and kickstart a successful career in
                tech. <br />The opportunity to work together with people from
                all over the world, integrating the theory with practical work
                on real projects from the industry, makes the skills learned
                easily applicable in every environment.
              </p>
            </section>
            <section class="hard-skills">
              <h2>Hard Skills:</h2>
              <p>HTML5 / CSS3</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Git</p>
              <p>Agile methodologies</p>

              <h4>Frontend:</h4>
              <p>Vue.js</p>
              <p>Nuxt.js</p>
              <p>React.js</p>
              <p>Next.js</p>

              <h4>Backend:</h4>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>MongoDB</p>

              <h4>Extra:</h4>
              <p>UX/UI design skills</p>
              <p>GIMP</p>
              <p>PostgreSQL</p>
            </section>
          </aside>
          <content>
            <section class="about-me">
              <h4>
                ABOUT ME
              </h4>
              <h5>
                From Customer Service to Full stack Developer.
              </h5>
              <p>
                After working for several years among Customer Service
                Assistance and then in Sales Management, famous events happened
                in my birthplace brought me away and took me to change my
                personal priorities. <br />
                I traveled around Europe, Volunteering in a Hostel in Tenerife
                where I became Hospitality Assistant Manager and it was one of
                the most incredible experience of my life. <br />
                Finally able to settle in Italy, I decided to try to be accepted
                in a Highly Selective, Intensive program to effectively learn
                topics I was working with previously in my life as self-taught,
                and finally turn myself into a professional Web Developer.
              </p>
            </section>

            <section class="projects">
              <h4>MY PROJECTS</h4>
              <div class="project">
                <h5>PERSONAL PORTFOLIO</h5>
                <p>
                  <a href="https://hire-mike.web.app/"
                    >https://hire-mike.web.app/
                  </a>
                </p>
                <ul>
                  <li>
                    I've developed my personal website using Vue.js, Node.js,
                    and MongoDB
                  </li>
                  <li>
                    Every time I learn something new I am looking for a way to
                    implement it over there.
                  </li>
                </ul>
              </div>

              <div class="project">
                <h5>E-COMMERCE</h5>
                <p>
                  <a href="https://fns-accessories.web.app/"
                    >https://fns-accessories.web.app/
                  </a>
                </p>
                <ul>
                  <li>
                    When I have free time I am developing this store for my wife
                  </li>
                  <li>
                    It is still under construction...
                  </li>
                </ul>
              </div>
            </section>

            <section class="experience">
              <div class="project">
                <h4>RELEVANT WORKING EXPERIENCE</h4>
                <h5>WEB DEVELOPER - FREELANCE</h5>
                <p>Jan 2021 ~ present</p>
                <ul>
                  <li>
                    Created appealing designs, developing and mantaining
                    different clients website and e-commerce.
                  </li>
                  <li>
                    Dunno, I didn't expect anybody would read my CV that far...
                  </li>
                </ul>
              </div>
            </section>
          </content>
        </main>
      </body>
      <p style="text-align: center">The PDF created at {{ todays }}</p>
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
      currentAge: "",
      todays: "",
      n: 5,
      skills: [],
    };
  },

  computed: {
    hardSkills() {
      return this.skills.filter((skill) => skill.type === "hard");
    },

    softSkills() {
      return this.skills.filter((skill) => skill.type === "soft");
    },
  },
  beforeMount: function() {
    this.getAge("1994/03/15");
    this.getSkills();
  },
  mounted: async function() {
    await this.getSkills();
    var element = document.getElementById("document");
    var opt = {
      margin: 0,
      filename: `!CV-FullStack-Developer-Mike.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save();

    this.countdown();
    setTimeout(() => {
      this.$router.go(-1);
    }, this.n * 1000);
  },

  methods: {
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return (this.currentAge = age), (this.todays = today);
    },
    countdown() {
      setInterval(() => {
        this.n -= 1;
      }, 1000);
    },
    async getSkills() {
      const request = await fetch(`${process.env.VUE_APP_BACKEND_URL}/skills`);
      const response = await request.json();
      this.skills = await response;
    },
  },
};
</script>

<style scoped>
/* ~~~~~ general stuff ~~~~~ */
@import url("https://fonts.googleapis.com/css2?family=Allison&family=Hina+Mincho&display=swap");
* {
  font-family: "Hina Mincho";
}
main {
  display: flex;
  flex-direction: row;
}
a {
  color: black;
}
#document {
  height: 100%;
}
#top-triangle,
#bottom-triangle,
#aside-bg {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  z-index: -1;
}

#top-triangle {
  border-width: 250px 700px 0 0;
  border-color: #41b883 transparent transparent transparent;
  top: -40px;
  left: -40px;
}
#bottom-triangle {
  border-width: 0 0 250px 700px;
  border-color: transparent transparent #41b883 transparent;
  bottom: -40px;
  right: -40px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
}

/* ~~~~~~~~~~~~ header styles ~~~~~~~~~~~~ */
header {
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
}
header .image-wrapper > img {
  width: 100px;
  height: 100px;
  margin: 25px;
  align-self: center;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  border: 2px solid black;
  border-radius: 100%;
}
h1 {
  font-size: 3rem;
  letter-spacing: 0.1rem;
  line-height: 2.5rem;
}
.fancy-font {
  font-family: "Allison";
  margin-top: 15px;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
}

/* ~~~~~~~~~~~~ ASIDE ~~~~~~~~~~~~ */
aside {
  display: flex;
  flex-direction: column;
  width: 650px;
  margin-bottom: 0.3rem;
}
aside section {
  padding-left: 2px;
}
#aside-bg {
  border-width: 2000px 0 0 280px;
  border-color: #2196f3 #2196f3 #2196f3 #2196f3;
  z-index: -1;
  top: 0;
  left: -15px;
}
h2 {
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  line-height: 2.5rem;
}
aside p {
  letter-spacing: 0.1rem;
  line-height: 1rem;
}
.hard-skills h4 {
  margin-left: 10px;
}

/* ~~~~~~~~~~~~ CONTENT ~~~~~~~~~~~~ */
content {
  margin: 0 40px;
}
content h4 {
  text-align: center;
  font-size: 1.5rem;
}
.project {
  margin: 5px 0 0 10px;
}
</style>
