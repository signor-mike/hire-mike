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
    <div id="document" ref="document" class="html d-none">
      <body class="body">
        <header>
          <section
            style="flex-direction: column; justify-content: space-between"
          >
            <div>
              <h2>Mikhail (Mike) Krivoshchekov</h2>
              <h3>Fullstack developer</h3>
              <p>Nardo' (LE), Italy</p>
            </div>
            <div>
              <p>
                <a href="https://hire-mike.web.app"
                  >https://hire-mike.web.app</a
                >
              </p>
            </div>
          </section>

          <img src="/cv-qr.png" alt="" />
        </header>

        <content>
          <aside>
            <div>
              <h4>Contacts:</h4>
              <ul>
                <li v-for="contact in contacts" :key="contact.i">
                  {{ contact.addr }}
                </li>
              </ul>
            </div>
            <section>
              <h4>Hard Skills:</h4>
              <ul>
                <li v-for="hardSkill in hardSkills" :key="hardSkill.i">
                  {{ hardSkill.title }}
                </li>
              </ul>
            </section>
            <section>
              <h4>Soft Skills:</h4>
              <ul>
                <li v-for="softSkill in softSkills" :key="softSkill.i">
                  {{ softSkill.title }}
                </li>
              </ul>
            </section>
          </aside>
          <main>
            <section>
              <h4>Bio:</h4>
              <h5>
                From Customer Service to Full stack Developer.
              </h5>
              <h6>
                That's how all began:
              </h6>
              <p>
                After working for several years among Customer Service
                Assistance and then in Sales Management, famous events happened
                in my birthplace brought me away and took me to change my
                personal priorities.
              </p>
              <p>
                I traveled around Europe, Volunteering in a Hostel in Tenerife
                where I became Hospitality Assistant Manager and it was one of
                the most incredible experience of my life.
              </p>
              <p>
                Finally able to settle in Italy, I decided to try to be accepted
                in a Highly Selective, Intensive program to effectively learn
                topics I was working with previously in my life as self-taught,
                and finally turn myself into a professional Web Developer.
              </p>
            </section>

            <section>
              <h4>Education:</h4>
              <article>
                <a href="https://strive.school/">
                  <h5>Strive.School</h5>
                </a>
                <h5>Fullstack Web Engineer</h5>
                <h6>
                  April 2021 - October 2021
                </h6>
              </article>

              <article>
                <a href="http://пгатк.рф/">
                  <h5>Perm State Motor Transport College</h5>
                </a>
                <h5>Vehicle Mechanic, 3rd degree</h5>
                <h6>
                  September 2009 - July 2012
                </h6>
              </article>
            </section>

            <section>
              <h4>My projects:</h4>
              <div class="projects">
                <div class="left-projects">
                  <div class="project">
                    <a href="https://hire-mike.web.app">
                      <h5>https://hire-mike.web.app</h5>
                    </a>
                    <span>My personal website</span>
                    <ul>
                      <li>Vue.js</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div class="project">
                    <a href="https://fns-accessories.web.app/">
                      <h5>https://fns-accessories.web.app/</h5>
                    </a>
                    <span>e-commerce |</span><span> Under development</span>
                    <ul>
                      <li>Nuxt.js</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div class="project">
                    <a href="https://kui-s-nami-nuxt.web.app/">
                      <h5>https://kui-s-nami-nuxt.web.app/</h5>
                    </a>
                    <span>Brand website |</span><span> Under development</span>
                    <ul>
                      <li>Nuxt.js</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>

                <div class="right-projects">
                  <div class="project">
                    <a href="https://mikes.netlify.app/">
                      <h5>https://mikes.netlify.app/</h5>
                    </a>
                    <span>Just for fun</span>
                    <ul>
                      <li>ES6 JavaScript</li>
                      <li>Plain CSS</li>
                      <li>Semantic HTML</li>
                    </ul>
                  </div>

                  <div class="project">
                    <a href="https://strive-m3-playground.netlify.app/">
                      <h5>https://strive-m3-playground.netlify.app/</h5>
                    </a>
                    <span>Number guesser game</span>
                    <ul>
                      <li>ES6 JavaScript</li>
                      <li>Plain CSS</li>
                      <li>Semantic HTML</li>
                      <li>A little bit of Bootstrap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </content>
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
  },
  mounted: async function() {
    await this.getSkills();
    var element = document.getElementById("document");
    var opt = {
      margin: 0,
      filename: `!CV-MIKE.pdf`,
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

<style>
ul {
  list-style: none;
}
.html {
  height: 100%;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 40px auto 100px;
}
header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-right: 2px solid #025a02;
  border-bottom: 2px solid #025a02;
  padding: 0 15px 15px 0;
  border-radius: 0 0 25px 10px;
  /* top-left corner, top-right, bottom-right, bottom-left  */
}
header > section {
  display: flex;
  flex-direction: row-reverse;
  text-align: end;
}
header > img {
  max-width: 150px;
  max-height: 150px;
  padding: 10px;
}
content {
  display: flex;
  flex-direction: row;
}
aside {
  display: flex;
  flex-direction: column;
  border-right: 2px solid #025a02;
  border-left: 2px solid #025a02;
  border-radius: 0 0 25px 0;
  background: rgba(57, 221, 7, 0.274);
  width: 30%;
  padding: 5px 10px 5px 5px;
  margin-left: 10px;
}
aside section {
  margin: 10px 0 10px 0;
}
aside section ul li {
  padding: 3px 2px 3px 2px;
}
aside ul li {
  font-size: 0.7rem;
}
.projects {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 20px 0;
}
.project {
  border-bottom: 1px dotted grey;
  padding-bottom: 10px;
}
.project span:nth-of-type(2) {
  font-size: 0.7rem;
}
content main section {
  border-bottom: 2px solid #025a02;
  padding: 0 0 0 10px;
  border-radius: 0 0 25px 0;
}
main section h4 {
  text-align: center;
}
main section article {
  border-bottom: 2px solid #025a02;
  border-radius: 0 0 25px 0;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
main section article:last-of-type {
  border: none;
}
</style>
