<template>
	<v-container fluid fill-height flex-column :class="computedPadding">
		<p class="text-h5 text-center mx-auto my-3">{{ title }}</p>
		<v-spacer />
		<slot />
		<v-spacer />
	</v-container>
</template>

<script>
	export default {
		props: { title: String },
		computed: {
			computedPadding() {
				if (this.$vuetify.breakpoint.smAndDown) return "pa-5";
				return "py-5 px-15";
			},
		},
	};
</script>
