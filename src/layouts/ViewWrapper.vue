<template>
	<v-container fluid fill-height flex-column pa-5>
		<p class="text-h5 text-center mx-auto my-3">{{ title }}</p>
		<v-spacer />
		<slot />
		<v-spacer />
	</v-container>
</template>

<script>
	export default {
		props: { title: String },
	};
	// compute responsive padding
</script>
