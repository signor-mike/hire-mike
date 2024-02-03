<template>
	<v-row align="center" justify="space-between">
		<v-col :cols="cols.large">
			<v-expand-x-transition>
				<slot v-if="top" name="top-large" />
			</v-expand-x-transition>
		</v-col>

		<v-col :cols="cols.small">
			<v-scale-transition appear @beforeEnter="runner('top')">
				<slot name="top-small" />
			</v-scale-transition>
		</v-col>

		<v-col cols="12">
			<v-divider></v-divider>
		</v-col>

		<v-col :cols="cols.small">
			<v-scale-transition appear @afterEnter="runner('bottom')">
				<slot name="bottom-small" />
			</v-scale-transition>
		</v-col>

		<v-col :cols="cols.large">
			<v-expand-transition>
				<slot v-if="bottom" name="bottom-large" />
			</v-expand-transition>
		</v-col>
	</v-row>
</template>
<!-- https://vuejs.org/guide/components/slots.html#named-slots -->
<script>
export default {
	data: () => ({
		top: false,
		bottom: false,
	}),
	methods: {
		runner: function (side) {
			switch (side) {
				case "top":
					this.top = true;
					break;

				case "bottom":
					this.bottom = true;
					break;

				default:
					this.top = false;
					this.bottom = false;
					break;
			}
		},
	},
	computed: {
		cols() {
			return {
				large: this.$vuetify.breakpoint.mdAndDown ? "7" : "8",
				small: this.$vuetify.breakpoint.mdAndDown ? "5" : "4",
			};
		},
	},
};
</script>
