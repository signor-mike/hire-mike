<template>
	<v-btn
		color="primary"
		icon
		aria-label="toggle-theme"
		@click="$vuetify.theme.dark = !$vuetify.theme.dark"
	>
		<v-icon large>
			{{ $vuetify.theme.dark ? "light_mode" : "dark_mode" }}
		</v-icon>
	</v-btn>
</template>

<script>
	export default {};
</script>

<style></style>
