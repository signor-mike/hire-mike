<template>
	<Wrapper :title="$store.state['projects-title']">
		<Grid>
			<template #top-large>
				<SeeMoreButton
					:body="$store.state.projects[0].items.join(', ')"
					:bodyLength="$vuetify.breakpoint.smAndDown ? 60 : 240"
				/>
			</template>
			<template #top-small>
				<v-container fluid class="d-flex">
					<v-icon class="ma-auto" x-large>
						{{ $store.state.projects[0].icon }}
					</v-icon>
				</v-container>
			</template>
			<template #bottom-small>
				<v-container fluid class="d-flex">
					<v-icon x-large class="ma-auto">
						{{ $store.state.projects[1].icon }}
					</v-icon>
				</v-container>
			</template>
			<template #bottom-large>
				<SeeMoreButton
					:body="$store.state.projects[1].items.join(', ')"
					:bodyLength="$vuetify.breakpoint.smAndDown ? 60 : 240"
				/>
			</template>
		</Grid>
	</Wrapper>
</template>

<script>
export default {
	components: {
		Wrapper: () => import("@/layouts/ViewWrapper"),
		// Project: () => import("@/components/Project"),
		Grid: () => import("@/layouts/GridWrapper"),
		SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
	},
};
</script>
