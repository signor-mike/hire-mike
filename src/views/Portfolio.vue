<template>
	<v-container>
		<div class="d-flex">
			<v-icon color="primary" large @click="backwards()"
				>keyboard_arrow_left</v-icon
			>
			<h1 class="mx-auto">My projects</h1>
		</div>
		<v-row justify="center" dense>
			<v-col
				v-for="item in portfolio"
				:key="item.i"
				cols="12"
				sm="12"
				md="6"
				lg="4"
				xl="3"
			>
				<PortfolioItem :item="item" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import PortfolioItem from "../components/My-CV/PortfolioItem.vue";
	export default {
		components: { PortfolioItem },
		data() {
			return {
				portfolio: [
					{
						name: "Hire Mike",
						image: "/projects/hm.png",
						url: "https://hire-mike.web.app",
						description: "My very own corner in the worldwide web",
						specification:
							"Doing stuff here and there. This is my place and I am doing whatever I want ;)",
						techs: [
							"/techs/vue-js.png",
							"/techs/vuetify.png",
							"/techs/node.png",
							"/techs/mongo.png",
						],
					},
					{
						name: "Shopping list",
						image: "/projects/shopass.png",
						url: "https://shopass.vercel.app/",
						description: "App for creating shopping list.",
						specification:
							"A very simple app serves a purpose of replacing pen and paper when going for shopping",
						techs: [
							"/techs/vue-js.png",
							"/techs/vuetify.png",
							"/techs/vuex.png",
						],
					},
					{
						name: "F'n'S Handmade accessories",
						image: "/projects/fns.png",
						url: "https://fns-accessories.web.app",
						description: "e-commerce website",
						specification:
							"Soon to reach production shiny e-commerce with handcrafted CMS",
						techs: [
							"/techs/nuxt.png",
							"/techs/vuetify.png",
							"/techs/node.png",
							"/techs/mongo.png",
						],
					},
					{
						name: "Benchmark checker",
						image: "/projects/pain.png",
						url: "https://strivenator.vercel.app/",
						description: "A small app to check exam results.",
						specification:
							"The purpose of this app is to help fellow students of Strive school. After each benchmark students could see what exact questions they've answered wrong. But unfortunately the idea was ditched because Strive school decided to remove the 'isCorrect' property from the database. And so from now on every answer is marked as incorrect.",
						techs: ["/techs/vue-js.png", "/techs/vuetify.png"],
					},
					{
						name: "Mikes",
						image: "/projects/mikes.png",
						url: "https://mikes.netlify.app/",
						description: "Just fooling around.",
						specification:
							"I was playing around with DOM-manipulations and a little bit of animations. Sorta playground.",
						techs: [
							"/techs/plain-html.png",
							"/techs/plain-css.png",
							"/techs/plain-js.png",
						],
					},
					{
						name: "Guess a number",
						image: "/projects/guesser.png",
						url: "https://strive-m3-playground.netlify.app/",
						description: "A very simple number guessing game.",
						specification:
							"If you win, your prize will amaze you. Trust me. It definetely worth it!",
						techs: [
							"/techs/plain-html.png",
							"/techs/plain-css.png",
							"/techs/plain-js.png",
						],
					},
				],
			};
		},
		mounted() {
			console.log(this.$router.history);
		},
		methods: {
			backwards() {
				this.$router.go(-1);
			},
		},
	};
</script>

<style></style>
