<template>
	<v-app-bar app fixed flat bottom color="secondary">
		<!-- <v-spacer />
		<NavLinks :links="links" />
		<v-spacer /> -->
		<v-row justify="space-around" align="center">
			<v-col cols="auto" v-for="link in links" :key="link">
				<SlicedButton :link="link" />
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script>
	export default {
		components: {
			SlicedButton: () => import("@/components/ui/SlicedButton"),
		},

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
