<template>
	<v-app-bar app fixed flat color="secondary" style="max-width: 100vw">
		<a href="/">
			<span
				class="primary--text text-uppercase mr-5"
				:class="{
					'text-h6': $vuetify.breakpoint.smAndDown,
					'text-h3': $vuetify.breakpoint.md,
					'text-h2': $vuetify.breakpoint.lgAndUp,
				}"
			>
				mike
			</span>
		</a>
		<v-spacer />
		<NavLinks :links="links" />
		<ThemeToggler />
	</v-app-bar>
</template>

<script>
	import NavLinks from "../components/NavLinks.vue";
	import ThemeToggler from "../components/ThemeToggler.vue";
	export default {
		components: { NavLinks, ThemeToggler },

		data() {
			return {
				links: [
					{
						icon: "home",
						text: "about",
						route: "about",
					},
					{
						icon: "contact_page",
						text: "my work",
						route: "experience",
					},
					{
						icon: "quiz",
						text: "my stack",
						route: "stack",
					},
					{
						icon: "flutter_dash",
						text: "Contact",
						route: "contact",
					},
				],
			};
		},
	};
</script>

<style>
	a {
		text-decoration: none;
	}
</style>
