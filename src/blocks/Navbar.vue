<template>
	<v-app-bar app fixed flat bottom color="secondary">
		<v-row justify="space-around" align="center">
			<v-col cols="3" v-for="link in links" :key="link">
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
				links: ["about", "projects", "stack", "contact"],
			};
		},
	};
</script>
