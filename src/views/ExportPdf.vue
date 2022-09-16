<template>
	<div>
		<v-container>
			<h2 @click="printTheShit">{{ message }}</h2>
			<p v-if="isDone">
				{{ `You'll be redirected back in ${n} seconds...` }}
			</p>
			<v-skeleton-loader v-else type="text" max-width="100%" />
			<p>
				P.S: This feature may not be working on some OS/browser. Sorry
				for the inconvenience. And it also might render the PDF in a
				dodgy way. If it happens please try again and it'll be okay.
				Thanks!
				<br />
				The point of this thing is to generate PDF for myself, so I
				didn't bother much with this feature, as long as it works for me
				:)
			</p>
			<h3>
				Back to
				<router-link to="/"> Home </router-link>
			</h3>
		</v-container>
		<div id="document" class="d-none" v-if="isLoaded">
			<header>
				<h2>Mike K</h2>
				<a href="mailto:dev_mike.k@yahoo.com"> dev_mike.k@yahoo.com </a>
				<h3>frontend oriented <br />fullstack web engineer</h3>
			</header>
			<div class="divider horizontal" />
			<main>
				<div class="column">
					<h4 class="title left">
						I am proficient and efficient with:
					</h4>
					<div
						v-for="title in Object.keys(mock)"
						:key="title"
						class="block"
					>
						<h5 class="subtitle">{{ title + "*" }}</h5>
						<span
							class="list-item"
							v-for="(item, index) in mock[title]"
							:key="item"
						>
							{{
								index === mock[title].length - 1
									? item.replace(" ", "&nbsp;")
									: item.replace(" ", "&nbsp;") + ", "
							}}
						</span>
					</div>
					<p>
						*Included, but not limited to.
						<br />
						I am always open to new skills
					</p>
					<div class="contact">
						<h4 class="title">Reach me out:</h4>
						<a href="mailto:dev_mike.k@yahoo.com">
							dev_mike.k@yahoo.com
						</a>
					</div>
				</div>
				<div class="divider vertical" />
				<div class="column">
					<div class="bio">
						<h4 class="title right">About me</h4>
						<p>
							<br />
							Started my career in customer service, I couldn't
							live another day in a terrorist state. And so I made
							a decision to move to Europe. I arrived to Canary
							Islands. Tenerife to be precise. In Spain I worked
							in hospitality as manager assistant.
							<br />
							I earned a lot of cross industry skills, such as:
							ability to represent business; determine customer
							needs or problems and propose a solution in
							everyone's best interest; and the skill I value the
							most: I learnt how to work with people of different
							cultures. I'd consider myself as a cosmopolitan
							person, although I've never tried the cocktail nor
							read the magazine.
							<br />
							<i>And I like fixing bugs ;)</i>
						</p>
					</div>
					<div class="projects">
						<div
							class="project"
							v-for="pro in projects"
							:key="pro.name"
						>
							<div class="header">
								<a :href="pro.url">{{ pro.name }}</a>
								<span>{{ pro.position }}</span>
							</div>
							<div class="techs">
								<span
									class="list-item"
									v-for="(tech, index) in pro.techs"
									:key="tech"
								>
									{{
										index === pro.techs.length - 1
											? tech
											: tech + ", "
									}}
								</span>
							</div>
							<p
								style="
									text-align: center;
									padding: 0 0 5px 0;
									font-size: 0.5rem;
								"
							>
								{{ pro.year }}
							</p>
							<hr />
							<p class="description">
								{{ pro.description }}
							</p>
						</div>
					</div>
				</div>
			</main>
			<div class="divider vertical" />
			<footer>
				<span>
					<a href="https://hire-mike.web.app"
						>https://hire-mike.web.app</a
					>
				</span>
				<span> Sep 9th, 2022 </span>
			</footer>
		</div>
	</div>
</template>

<script>
	import html2pdf from "html2pdf.js";
	import mock from "../assets/my-stack.json";
	export default {
		methods: {
			printTheShit() {
				const element = document.getElementById("document");
				const opt = {
					margin: 0,
					filename: `!CV-FullStack-Developer-Mike.pdf`,
					image: { type: "jpeg", quality: 0.98 },
					html2canvas: { scale: 2 },
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
						const navInterval = setInterval(() => {
							this.n -= 1;
							if (this.n === 0) {
								this.$router.go(-1);
								clearInterval(navInterval);
							}
						}, 1000);
					});
			},
		},
		async mounted() {
			this.$store.commit("SET_NAV_VISIBILITY", false);
			this.message = "Fetching data from a server...";
			await new Promise((resolve) => setTimeout(resolve, 3500)).then(
				() => (this.isLoaded = true)
			);
			this.message = "Generating pdf...";
			if (window.location.href.includes("hire-mike".toLowerCase()))
				this.$anaLogger(this.$anal, "my CV printed");
			this.printTheShit();
		},
		data: () => ({
			mock: mock.skills,
			projects: mock.projects,
			n: 10,
			todays: new Date().toLocaleString("en-US", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
			isLoaded: false,
			isDone: false,
			message: "",
		}),
	};
</script>

<style scoped>
	#document {
		width: 100%;
		height: 100%;
		padding: 0 25px;
	}
	.divider {
		border: 1px solid #2196f3;
	}
	.divider .vertical {
		width: 1px;
		height: 100%;
	}
	.divider .horizontal {
		width: 100%;
		height: 1px;
	}
	header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 10px 0;
	}
	main {
		display: flex;
		height: calc(100% - 100px);
		justify-content: center;
	}
	.column {
		width: 50%;
		display: flex;
		flex-direction: column;
	}
	.column .block {
		text-align: right;
		padding: 40px 10px;
	}
	.column .title {
		padding: 10px 0;
	}
	.left {
		text-align: left;
	}
	.right {
		text-align: right;
	}
	.column .subtitle {
		text-align: right;
		padding: 5px 0;
	}
	.column .contact {
		margin-top: auto;
		padding: 50px 0;
	}
	.column .list-item {
		text-transform: uppercase;
		font-style: italic;
		letter-spacing: 3px;
		font-size: 0.7rem;
	}
	.bio {
		padding: 0 10px;
	}
	.projects {
		padding: 10px;
		margin: 20px;
		display: flex;
		flex-direction: column;
	}
	.projects .project {
		width: 85%;
		margin: auto;
		padding: 5px 10px;
		margin: 10px auto;
		background: #1e1e1e1d;
	}
	.projects .project .header {
		display: flex;
		justify-content: space-between;
	}
	.projects .project .techs {
		text-align: center;
		padding: 5px 0;
		max-width: 100%;
	}
	.projects .project .description {
		text-align: right;
		font-style: italic;
		padding: 5px 0;
	}
	footer {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-content: center;
		padding: 20px 0;
	}
</style>
