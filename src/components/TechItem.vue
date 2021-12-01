<template>
	<v-container d-flex justify-center flex-column>
		<v-avatar class="mx-auto" tile><img :src="tech.image"/></v-avatar>
		<p class="text-center text-overline  text--disabled">
			{{ tech.name }}
		</p>
	</v-container>
</template>

<script>
	export default {
		props: {
			tech: {
				type: Object,
				required: true,
			},
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style></style>
