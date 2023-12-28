<template>
	<v-container fill-height>
		<v-row class="fill-height" justify="space-between">
			<v-col v-if="!!title" cols="12">
				<p
					class="text-h5 text-center mx-auto px-2 my-3 text-capitalize"
				>
					{{ title }}
				</p>
			</v-col>
			<v-col cols="12" md="1" align-self="center">
				<v-btn
					:block="$vuetify.breakpoint.smAndDown"
					:class="{ fixed: $vuetify.breakpoint.mdAndUp }"
					@click="
						$vuetify.breakpoint.smAndDown
							? navigator('next')
							: navigator('prev')
					"
					:x-large="$vuetify.breakpoint.mdAndUp"
					:outlined="$vuetify.breakpoint.mdAndUp"
					:text="$vuetify.breakpoint.smAndDown"
					color="primary"
				>
					<v-icon :x-large="$vuetify.breakpoint.smAndDown">
						{{
							$vuetify.breakpoint.smAndDown
								? "keyboard_double_arrow_right"
								: "keyboard_double_arrow_left"
						}}
					</v-icon>
				</v-btn>
			</v-col>
			<v-col cols="12" md="8">
				<slot />
			</v-col>
			<v-col cols="12" md="1" align-self="center">
				<v-btn
					:block="$vuetify.breakpoint.smAndDown"
					:class="{ fixed: $vuetify.breakpoint.mdAndUp }"
					@click="
						$vuetify.breakpoint.smAndDown
							? navigator('prev')
							: navigator('next')
					"
					:x-large="$vuetify.breakpoint.mdAndUp"
					:outlined="$vuetify.breakpoint.mdAndUp"
					:text="$vuetify.breakpoint.smAndDown"
					color="primary"
				>
					<v-icon :x-large="$vuetify.breakpoint.smAndDown">
						{{
							$vuetify.breakpoint.smAndDown
								? "keyboard_double_arrow_left"
								: "keyboard_double_arrow_right"
						}}
					</v-icon>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<style>
.fixed {
	position: fixed;
	top: 50%;
	transform: translate(0, 50%);
}
</style>

<script>
export default {
	props: {
		title: { type: String, default: "" },
	},
	methods: {
		navigator(param) {
			if (!param) return;
			if (!this.$route.query.page) return;
			if (!this.$store.state.navLinks) return;

			const { page } = this.$route.query;
			const links = this.$store.state.navLinks;
			const go = (to) => this.$router.push(`?page=${to}`);

			links.forEach((l, i) => {
				if (l.query !== page) return;
				switch (param) {
					case "next":
						if (i === links.length - 1) go(links[0].query);
						else go(links[i + 1].query);
						return;

					case "prev":
						if (i === 0) go(links[links.length - 1].query);
						else go(links[i - 1].query);
						return;
					default:
						console.error("Unrecognized direction: ", param);
						break;
				}
			});
		},
	},
};
</script>
