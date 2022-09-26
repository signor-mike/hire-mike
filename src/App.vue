<template class>
	<v-app>
		<NavBar v-if="$store.state.isNavVisible" />
		<v-main class="pa-0">
			<router-view />
		</v-main>
		<Footer v-if="$store.state.isNavVisible" />
	</v-app>
</template>

<script>
	import NavBar from "@/blocks/Navbar";
	import Footer from "@/blocks/Footer";

	export default {
		name: "App",

		components: { NavBar, Footer },
		beforeMount: function () {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches)
				this.$vuetify.theme.dark = true;
			else this.$vuetify.theme.dark = false;
		},

		async mounted() {
			await this.$store.dispatch("getAll");
		},
	};
</script>
<style>
	a {
		text-decoration: none;
	}
</style>
