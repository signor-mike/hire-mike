<template>
	<v-container fluid fill-height flex-column :class="computedPadding">
		<p class="text-h5 text-center mx-auto my-3">{{ title }}</p>
		<v-spacer />
		<v-container :style="computedWidth">
			<slot />
		</v-container>
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
			computedWidth() {
				if (this.$vuetify.breakpoint.mdAndDown) return "width:100%";
				return "width:50%";
			},
		},
	};
</script>
