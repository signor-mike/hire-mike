<template>
	<v-row align="center" justify="space-between" dense class="full-width">
		<v-col :cols="cols.large">
			<v-expand-x-transition>
				<v-sheet color="secondary">
					<v-container>
						<v-card flat>
							<slot v-if="top" name="top-large" />
						</v-card>
					</v-container>
				</v-sheet>
			</v-expand-x-transition>
		</v-col>

		<v-col :cols="cols.small">
			<v-scale-transition appear @beforeEnter="runner('top')">
				<v-sheet class="h-100" color="secondary">
					<v-container>
						<v-card flat>
							<slot name="top-small" />
						</v-card>
					</v-container>
				</v-sheet>
			</v-scale-transition>
		</v-col>

		<v-col cols="12">
			<v-divider class="my-3"></v-divider>
		</v-col>

		<v-col :cols="cols.small">
			<v-scale-transition appear @afterEnter="runner('bottom')">
				<v-sheet color="secondary">
					<v-container>
						<v-card flat>
							<slot name="bottom-small" />
						</v-card>
					</v-container>
				</v-sheet>
			</v-scale-transition>
		</v-col>

		<v-col :cols="cols.large">
			<v-expand-transition>
				<v-sheet color="secondary">
					<v-container>
						<v-card flat>
							<slot v-if="bottom" name="bottom-large" />
						</v-card>
					</v-container>
				</v-sheet>
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
