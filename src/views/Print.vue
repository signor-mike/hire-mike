<template>
	<div>
		<div>
			<h2 @click="printTheShit">{{ message }}</h2>
			<p v-if="isDone">
				{{ `You'll be redirected back in ${n} seconds...` }}
			</p>
			<v-skeleton-loader
				v-else
				type="text"
				max-width="500"
			></v-skeleton-loader>
			<p>
				P.S: This feature may not be working on some OS. Sorry for the
				inconvenience. And it also might render the PDF in a dodgy way.
				If it happens please try again and it'll be okay.
			</p>
			<h3>
				Back to
				<router-link to="/">
					Home
				</router-link>
			</h3>
		</div>
		<div id="document" class="d-none" v-if="isLoaded">
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
							<p style="font-size: 0.7rem; font-weight: bold;">
								{{ cvData["bootcamp"].spec }}
							</p>
							<br />
							<p style="font-size: 0.7rem; font-weight: bold;">
								{{ cvData["bootcamp"].title }}
							</p>
							<br />
							<p>
								{{ cvData["bootcamp"].description }}
							</p>
						</section>
						<section class="hard-skills">
							<h2>Skills:</h2>
							<p
								v-for="geSkill in cvData['general-skills']
									.skills"
								:key="geSkill.i"
							>
								{{ geSkill }}
							</p>

							<h4>Frontend:</h4>
							<p
								v-for="feSkill in cvData['frontend'].skills"
								:key="feSkill.i"
							>
								{{ feSkill }}
							</p>

							<h4>Backend:</h4>
							<p
								v-for="beSkill in cvData['backend'].skills"
								:key="beSkill.i"
							>
								{{ beSkill }}
							</p>

							<h4>Extra:</h4>
							<p
								v-for="eSkill in cvData['general-skills'].extra"
								:key="eSkill.i"
							>
								{{ eSkill }}
							</p>
						</section>
					</aside>
					<content>
						<section class="about-me">
							<h4>
								ABOUT ME
							</h4>
							<h5 id="bioHeader">
								{{ cvData.bio["title"] }}
							</h5>
							<p
								class="bio"
								v-for="(text, i) in textToParagraph"
								:key="text.i"
							>
								{{
									i === textToParagraph.length - 1
										? text
										: `${text}.`
								}}
							</p>
							<br />
						</section>

						<section class="projects">
							<h4>MY PROJECTS</h4>
							<div class="project">
								<h5>{{ cvData["projects"].newest.title }}</h5>
								<p>
									<a :href="cvData.projects.newest.url">
										{{ cvData["projects"].newest.url }}
									</a>
								</p>
								<ul>
									<li
										v-for="d in cvData.projects.newest
											.details"
										:key="d.i"
									>
										<v-icon light small left class="li-icon"
											>mdi-battery-charging-50
										</v-icon>
										{{ d }}
									</li>
								</ul>
							</div>

							<div class="project">
								<h5>{{ cvData["projects"].second.title }}</h5>
								<p>
									<a :href="cvData.projects.second.url"
										>{{ cvData.projects.second.url }}
									</a>
								</p>
								<ul>
									<li
										v-for="d in cvData.projects.second
											.details"
										:key="d.i"
									>
										<v-icon light small left class="li-icon"
											>mdi-battery-charging-70
										</v-icon>
										{{ d }}
									</li>
								</ul>
							</div>
						</section>

						<section class="experience">
							<h4>WORKING EXPERIENCE</h4>
							<div class="project">
								<h5>{{ cvData.experience.newest.title }}</h5>
								<p>{{ cvData.experience.newest.dates }}</p>
								<ul>
									<li
										v-for="d in cvData.experience.newest
											.details"
										:key="d.i"
									>
										<v-icon light small left class="li-icon"
											>mdi-battery-charging-90
										</v-icon>
										{{ d }}
									</li>
								</ul>
							</div>
							<div class="project">
								<h5>{{ cvData.experience.second.title }}</h5>
								<p>{{ cvData.experience.second.dates }}</p>
								<ul>
									<li
										v-for="d in cvData.experience.second
											.details"
										:key="d.i"
									>
										<v-icon light small left class="li-icon"
											>mdi-battery-charging-100
										</v-icon>
										{{ d }}
									</li>
								</ul>
							</div>
						</section>
					</content>
				</main>
			</body>
			<p style="text-align: center; margin-bottom: 0; padding-bottom: 0;">
				The PDF generated on a lovely day of {{ todays }} @
				<a href="https://hire-mike.web.app/cv-mike"
					>https://hire-mike.web.app/cv-mike</a
				>
			</p>
		</div>
	</div>
</template>

<script>
	import html2pdf from "html2pdf.js";
	import useCV from "@/utils/useCV.js";
	const { getData, cvData } = useCV();
	export default {
		data() {
			return {
				contacts: [
					{ name: "email", addr: "MikeLitoris34@icloud.com" },
					{ name: "phone", addr: "+39 351 0499 441" },
				],
				n: 10,
				cvData,
				todays: new Date().toLocaleString("en-US", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				}),
				isLoaded: false,
				isDone: false,
				message: "",
			};
		},

		computed: {
			textToParagraph() {
				return this.cvData.bio["text"].split(".");
			},
		},
		mounted() {
			this.init();
		},

		methods: {
			async init() {
				this.message = "Fetching data from a server...";
				this.cvData = await getData();
				this.isLoaded = true;
				this.message = "Generating pdf...";
				setTimeout(() => this.printTheShit(), 1000);
			},
			countdown() {
				setInterval(() => {
					this.n -= 1;
				}, 1000);
			},
			printTheShit() {
				const element = document.getElementById("document");
				const opt = {
					margin: 0,
					filename: `!CV-FullStack-Developer-Mike.pdf`,
					image: { type: "jpeg", quality: 0.98 },
					html2canvas: { scale: 3 },
					jsPDF: {
						unit: "in",
						format: "letter",
						orientation: "portrait",
					},
				};
				html2pdf()
					.from(element)
					.set(opt)
					.save()
					.then(() => (this.message = "PDF is generated. Hit Save."))
					.then(() => (this.message = `Thank you!`))
					.then(() => (this.isDone = true))
					.finally(() => {
						this.$anaLogger(this.$anal, "my CV printed");
					});

				this.countdown();
				setTimeout(() => {
					this.$router.go(-1);
				}, this.n * 1000);
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

	ul {
		list-style: none;
	}
	.li-icon {
		color: green;
	}
	#document {
		max-height: 100%;
		overflow: hidden;
		margin-left: -10px;
		padding-left: 5px;
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
		border-color: #2195f3c5 #2195f3c5 #2195f3c5 #2195f3c5;
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
	.project h5 {
		background: #8e9191;
		text-align: center;
		border-radius: 20px 0 20px 0;
		padding: 3px;
		margin: 0;
	}
</style>
