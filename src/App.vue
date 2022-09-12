<template class>
	<v-app>
		<NavBar v-if="$store.state.isNavVisible" />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	import NavBar from "@/blocks/Navbar";

	export default {
		name: "App",

		components: { NavBar },
		beforeMount: function () {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				(this.$vuetify.theme.dark = true),
					console.log(
						`The dark theme is set to ${this.$vuetify.theme.dark} by default, because my dear visitor prefers dark color scheme :)`
					);
			} else {
				(this.$vuetify.theme.dark = false),
					console.log(
						`The light theme is set to ${this.$vuetify.theme.light} by default, because my dear visitor prefers light color scheme :)`
					);
			}
		},
	};
</script>
<style>
	a {
		text-decoration: none;
	}
</style>
