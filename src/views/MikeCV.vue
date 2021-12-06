<template>
	<v-container :style="customStyle" d-flex flex-column justify-center fluid>
		<Header />
		<v-divider class="mx-0 my-4"></v-divider>
		<Body />
		<v-divider class="mx-0 my-4"></v-divider>
		<Footer />
	</v-container>
</template>

<script>
	import Header from "../components/My-CV/Header.vue";
	import Body from "../components/My-CV/Body.vue";
	import Footer from "../components/My-CV/Footer.vue";

	export default {
		components: { Header, Body, Footer },

		methods: {
			//
		},

		mounted() {
			//
		},

		data() {
			return {
				skills: [],
			};
		},
		computed: {
			customStyle() {
				return this.$vuetify.breakpoint.smAndDown
					? "width: 100%"
					: this.$vuetify.breakpoint.mdAndDown
					? "width: 90%"
					: this.$vuetify.breakpoint.lgAndDown
					? "width: 80%"
					: this.$vuetify.breakpoint.xlAndDown
					? "width: 50%"
					: null;
			},
		},
	};
</script>

<style></style>
