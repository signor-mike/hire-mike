<template class>
	<v-app>
		<ControlsBar v-if="$store.state.isNavVisible" />
		<v-main>
			<router-view />
		</v-main>
		<NavBar v-if="$store.state.isNavVisible" />
	</v-app>
</template>

<script>
	// TODO: remember user choice of theme
	export default {
		name: "App",

		components: {
			NavBar: () => import("@/blocks/Navbar"),
			ControlsBar: () => import("@/blocks/ControlsBar"),
		},
		beforeMount: function () {
			// if (window.matchMedia("(prefers-color-scheme: dark)").matches)
			this.$vuetify.theme.dark = true;
			// else this.$vuetify.theme.dark = false;
		},
	};
</script>
<style>
	@import url("/public/global");
</style>
