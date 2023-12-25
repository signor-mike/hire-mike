<template>
	<Wrapper
		:title="$vuetify.breakpoint.mdAndUp ? $store.state['about-title'] : ''"
	>
		<Grid>
			<template #top-large>
				<v-sheet width="100%" height="100%"></v-sheet>
			</template>
			<template #top-small>
				<v-img src="/mike.webp" height="200px" eager></v-img>
			</template>
			<template #bottom-small>
				<SeeMoreButton
					:body="$store.state.about"
					:bodyLength="$vuetify.breakpoint.smAndDown ? 60 : 240"
				/>
			</template>
			<template #bottom-large>
				<v-sheet width="100%" height="100%"></v-sheet>
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
