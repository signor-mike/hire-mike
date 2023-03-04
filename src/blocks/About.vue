<template>
	<Wrapper :title="title">
		<v-img src="https://picsum.photos/200/200?random=1"></v-img>
		<SeeMoreButton :text="$store.state.about" :stringLength="360" />
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
