<template>
	<v-container>
		<p>techs editor component, isAdmin: {{ isAdmin }}</p>
	</v-container>
</template>

<script>
	export default {
		props: {
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style></style>
