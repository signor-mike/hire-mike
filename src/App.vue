<template class>
	<v-app>
		<ControlsBar />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
// TODO: remember user choice of theme
export default {
	name: "App",

	components: {
		ControlsBar: () => import("@/blocks/ControlsBar"),
	},
	beforeMount: function () {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches)
			this.$vuetify.theme.dark = true;
		else this.$vuetify.theme.dark = false;
	},
};
</script>
<style>
@import url("/public/global");
</style>
