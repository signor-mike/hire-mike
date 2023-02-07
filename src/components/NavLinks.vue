<template>
	<v-row justify="center" align="center" class="mx-md-auto">
		<v-col cols="3" class="d-flex" v-for="link in links" :key="link.text">
			<SlicedButton :link="link" />
		</v-col>
	</v-row>
</template>

<script>
	export default {
		props: {
			links: Array,
		},
		components: {
			SlicedButton: () => import("./ui/SlicedButton.vue"),
		},
		data: () => ({}),
	};
</script>

<style></style>
