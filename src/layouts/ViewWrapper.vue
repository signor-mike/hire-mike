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
				if (this.$vuetify.breakpoint.smAndDown)
					return {
						parent: "pa-5",
						child: "width:100%",
					};
				else if (this.$vuetify.breakpoint.mdAndDown)
					return {
						parent: "py-5 px-10",
						child: "width:80%",
					};
				else
					return {
						parent: "py-10 px-16",
						child: "width:50%",
					};
			},
		},
	};
</script>
