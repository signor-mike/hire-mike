<template>
	<Wrapper :title="title">
		<v-card class="mx-auto" max-width="344">
			<v-img src="/mike.webp" height="200px"></v-img>

			<v-card-actions>
				<SeeMoreButton :text="$store.state.about" :stringLength="360" />
			</v-card-actions>
		</v-card>
	</Wrapper>
</template>

<script>
	export default {
		props: {
			title: { type: String, default: "About" },
		},
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
			SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
		},
	};
</script>
