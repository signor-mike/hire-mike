<template>
	<v-app-bar app fixed flat bottom color="secondary">
		<a href="/" v-if="$vuetify.breakpoint.mdAndUp">
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
		<v-spacer />
	</v-app-bar>
</template>

<script>
	import NavLinks from "../components/NavLinks.vue";
	export default {
		components: { NavLinks },

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
						text: "projects",
						route: "experience",
					},
					{
						icon: "quiz",
						text: "stack",
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
