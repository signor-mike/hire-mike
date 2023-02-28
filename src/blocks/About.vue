<template>
	<Wrapper :title="title">
		<v-img src="https://picsum.photos/300/300?random=1"></v-img>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
			eveniet architecto saepe magni quod laborum obcaecati. Aliquid quasi
			autem laudantium quo ullam officia dignissimos temporibus blanditiis
			exercitationem illo nesciunt natus perferendis eligendi ipsum soluta
			delectus placeat enim, deserunt quos sed eum molestiae. Suscipit
			unde error aliquam asperiores ducimus velit officia.
		</p>
	</Wrapper>
</template>

<script>
	export default {
		props: {
			title: { type: String, default: "About" },
		},
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
		},
	};
</script>
