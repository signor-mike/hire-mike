<template>
	<Wrapper :title="title">
		<!-- <v-img src="https://picsum.photos/300/300?random=1"></v-img> -->
		<SeeMoreButton :scrollable="true" :text="$store.state.aboutText" />
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
