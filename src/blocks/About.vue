<template>
	<Wrapper :title="$store.state['about-title']">
		<Grid>
			<template #top-large>
				<v-sheet
					:min-height="$vuetify.breakpoint.mdAndUp ? 200 : 100"
					color="secondary"
				></v-sheet>
			</template>
			<template #top-small>
				<v-img :src="$store.state['about-image']" eager></v-img>
			</template>
			<template #bottom-small>
				<SeeMoreButton
					:body="$store.state.about"
					:bodyLength="$vuetify.breakpoint.smAndDown ? 60 : 240"
				/>
			</template>
			<template #bottom-large>
				<v-sheet
					:min-height="$vuetify.breakpoint.mdAndUp ? 200 : 100"
					color="secondary"
				></v-sheet>
			</template>
		</Grid>
	</Wrapper>
</template>

<script>
export default {
	components: {
		Wrapper: () => import("@/layouts/ViewWrapper"),
		Grid: () => import("@/layouts/GridWrapper"),
		SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
	},
};
</script>
