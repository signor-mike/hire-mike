<template class>
	<v-app>
		<NavBar v-if="$store.state.isNavVisible" />
		<v-main>
			<router-view />
		</v-main>
		<v-footer v-if="$store.state.isNavVisible" app color="secondary"
			>footer</v-footer
		>
	</v-app>
</template>

<script>
	import NavBar from "@/blocks/Navbar";

	export default {
		name: "App",

		components: { NavBar },
		beforeMount: function () {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches)
				this.$vuetify.theme.dark = true;
			else this.$vuetify.theme.dark = false;
		},
	};
</script>
<style>
	a {
		text-decoration: none;
	}
</style>
