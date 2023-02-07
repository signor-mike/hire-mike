<template>
	<v-btn
		color="primary"
		icon
		@click="$vuetify.theme.dark = !$vuetify.theme.dark"
	>
		<v-icon>
			{{ $vuetify.theme.dark ? "light_mode" : "dark_mode" }}
		</v-icon>
	</v-btn>
</template>

<script>
	export default {};
</script>

<style>
	body {
		color: #888787;
	}
</style>
