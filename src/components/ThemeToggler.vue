<template>
	<v-icon
		@click="$vuetify.theme.dark = !$vuetify.theme.dark"
		:small="$vuetify.breakpoint.smAndDown"
		:large="$vuetify.breakpoint.lgAndUp"
	>
		{{ $vuetify.theme.dark ? "light_mode" : "dark_mode" }}
	</v-icon>
</template>

<script>
	export default {};
</script>

<style></style>
