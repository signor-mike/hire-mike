<template>
	<v-container
		fluid
		fill-height
		flex-column
		class="primary--text"
		@click.self="goAhead"
	>
		<v-fab-transition mode="in-out">
			<v-card
				@click="goAhead"
				:max-width="$vuetify.breakpoint.mdAndDown ? '90%' : '25%'"
				outlined
				loading
				shaped
				v-if="isRunning"
				class="ma-auto"
			>
				<v-card-title class="primary--text">
					Hi, the name reads:
				</v-card-title>
				<v-card-subtitle class="font-italic">/ˈmaɪ.ki/</v-card-subtitle>
				<v-card-text>
					JavaScript Engineer at your serivce
					<v-divider class="my-2" />
					<p class="text-caption text-center">
						wait a moment or tap to continue
					</p>
				</v-card-text>
				<v-card-actions>
					<v-btn outlined color="primary" block @click.once="goAhead">
						Going ahead in {{ timeout }}...
						<v-icon right>keyboard_double_arrow_right</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-fab-transition>
	</v-container>
</template>

<script>
export default {
	components: {},
	data: () => ({
		timeout: 3,
		isRunning: false,
	}),
	methods: {
		goAhead() {
			this.isRunning = false;
			this.timeout = 0;
			this.$router.push("/view");
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
	},
	beforeMount() {
		document.title = "Hire Mike";
	},
	mounted: function () {
		this.isRunning = true;
		if (this.$store.state.isNavVisible)
			this.$store.commit("SET_NAV_VISIBILITY", false);
		const countdown = setInterval(() => {
			this.timeout -= 1;
			if (this.timeout === 0) {
				clearInterval(countdown);
				this.goAhead();
			}
		}, 1000);
	},
};
</script>
