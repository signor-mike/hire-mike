<template class>
	<v-app>
		<ControlsBar v-if="$store.state.isNavVisible" />
		<v-main>
			<router-view />
		</v-main>
		<NavBar v-if="$store.state.isNavVisible" />
	</v-app>
</template>

<!-- eslint-disable vue/no-unused-components -->
<script>
	import NavBar from "@/blocks/Navbar";
	import ControlsBar from "@/blocks/ControlsBar";

	export default {
		name: "App",

		components: { NavBar, ControlsBar },
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
