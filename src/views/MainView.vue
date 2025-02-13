<template>
	<v-slide-x-transition mode="out-in" :appear="true" class="mx-auto">
		<v-container fill-height fluid pa-0 my-3>
			<Grid>
				<template #top-large>
					<v-card-title>
						Mikhail
						<br />
						"Mike K."
						<br />
						Krivoshchekov
					</v-card-title>
					<v-divider />
					<v-card-subtitle> Software Engineer </v-card-subtitle>
				</template>
				<template #top-small>
					<v-img src="/mike.webp" eager max-height="500"></v-img>
				</template>
				<template #bottom-small>
					<v-card-title>LinkedIn</v-card-title>
					<v-card-actions>
						<v-btn
							small
							color="primary"
							outlined
							href="https://linkedin.com/in/dev-mike-k"
							target="_blank"
						>
							connect
							<v-icon right>launch</v-icon>
						</v-btn>
					</v-card-actions>
				</template>
				<template #bottom-large>
					<v-card-title>Email</v-card-title>
					<v-card-actions>
						<v-btn
							small
							color="primary"
							outlined
							href="mailto:dev_mike.k@yahoo.com"
							target="_blank"
						>
							reach out
							<v-icon right>launch</v-icon>
						</v-btn>
					</v-card-actions>
				</template>
			</Grid>
			<!-- <SofosApp /> -->
		</v-container>
	</v-slide-x-transition>
</template>

<script>
export default {
	components: {
		Grid: () => import("@/layouts/GridWrapper"),
		// SofosApp: () => import("@/components/SofosApp.vue"),
	},
	mounted: function () {
		document.title = `Mike | JavaScript Engineer`;
	},
};
</script>

<style></style>
