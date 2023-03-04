<template>
	<v-app-bar app fixed flat color="secondary">
		<v-row
			align="center"
			justify="space-between"
			class="mx-auto text-center"
		>
			<v-col cols="3">
				<v-btn icon @click="$router.push('/')" color="primary">
					<v-icon large> home </v-icon>
				</v-btn>
			</v-col>

			<v-col cols="3">
				<SeeMoreButton
					:scrollable="true"
					:text="$store.state.gdpr"
					icon="privacy_tip"
				/>
			</v-col>

			<v-col cols="3">
				<SeeMoreButton
					:scrollable="true"
					:text="projectDescription"
					icon="info"
				/>
			</v-col>

			<v-col cols="3">
				<ThemeToggler />
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script>
	export default {
		components: {
			ThemeToggler: () => import("@/components/ThemeToggler"),
			SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
		},
		computed: {
			projectDescription() {
				return this.$store.state.projects.find(
					(obj) => obj.url === "https://hire-mike.web.app"
				)["description"];
			},
		},
	};
</script>

<style></style>
