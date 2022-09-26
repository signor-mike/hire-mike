<template class>
	<v-app>
		<NavBar v-if="$store.state.isNavVisible" />
		<v-main>
			<router-view />
		</v-main>
		<FooterBar v-if="$store.state.isNavVisible" />
	</v-app>
</template>

<script>
	import NavBar from "@/blocks/Navbar";
	import FooterBar from "@/blocks/FooterBar";

	export default {
		name: "App",

		components: { NavBar, FooterBar },
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
