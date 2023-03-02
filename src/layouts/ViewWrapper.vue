<template>
	<v-container fluid fill-height flex-column :class="compStyles.parent">
		<p class="text-h5 text-center mx-auto my-3 text-capitalize">
			{{ title }}
		</p>
		<v-spacer />
		<v-container :style="compStyles.child">
			<slot />
		</v-container>
		<v-spacer />
	</v-container>
</template>

<script>
	export default {
		props: { title: String },
		computed: {
			compStyles() {
				const parent = this.$vuetify.breakpoint.smAndDown
					? "pa-5"
					: "py-5 px-15";
				const child = this.$vuetify.breakpoint.mdAndDown
					? "width:100%"
					: "width:50%";
				return { parent, child };
			},
		},
	};
</script>
