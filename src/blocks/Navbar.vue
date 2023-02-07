<template>
	<v-app-bar app fixed flat bottom color="secondary">
		<v-row justify="space-around" align="center">
			<v-col cols="3" v-for="link in links" :key="link.route">
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
						text: "about",
						route: "about",
					},
					{
						text: "projects",
						route: "experience",
					},
					{
						text: "stack",
						route: "stack",
					},
					{
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
