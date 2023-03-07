<template>
	<Wrapper :title="title">
		<div class="d-flex">
			<v-btn
				icon
				@click="changeSlide('--')"
				color="secondary"
				class="my-auto"
			>
				<v-icon
					:small="$vuetify.breakpoint.xs"
					:x-large="$vuetify.breakpoint.mdAndUp"
					color="primary"
				>
					{{ $vuetify.breakpoint.mdAndUp ? "chevron" : "swipe" }}_left
				</v-icon>
			</v-btn>
			<v-window
				continuous
				v-model="model"
				hide-delimiters
				@change="(payload) => changeSlide(payload + 1)"
			>
				<v-window-item
					v-for="(project, i) in $store.state.projects"
					:key="project.id + i"
				>
					<Project
						:project="project"
						:model="model"
						:tracker="tracker"
					/>
				</v-window-item>
			</v-window>
			<v-btn
				icon
				@click="changeSlide('++')"
				color="secondary"
				class="my-auto"
			>
				<v-icon
					:small="$vuetify.breakpoint.xs"
					:x-large="$vuetify.breakpoint.mdAndUp"
					color="primary"
				>
					{{
						$vuetify.breakpoint.mdAndUp ? "chevron" : "swipe"
					}}_right
				</v-icon>
			</v-btn>
		</div>
		<v-toolbar
			v-if="$vuetify.breakpoint.mdAndUp"
			absolute
			bottom
			flat
			dense
			floating
			style="left: 50%; transform: translate(-50%, 0)"
		>
			<template>
				<v-btn
					class="mx-auto"
					v-for="n in $store.state.projects.length"
					:key="`btn-${n}`"
					icon
					@click="changeSlide(n)"
					:color="
						model === n - 1
							? 'primary darken-2'
							: 'secondary darken-2'
					"
				>
					<v-icon>
						{{
							model === n - 1
								? "radio_button_checked"
								: "radio_button_unchecked"
						}}
					</v-icon>
				</v-btn>
			</template>
		</v-toolbar>
	</Wrapper>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "my projects",
			},
		},
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
			Project: () => import("@/components/Project"),
		},
		data: () => ({
			model: 0,
			tracker: 0,
		}),
		mounted() {
			this.tracker = this.trackingStep;
			console.log(`xs: ${this.$vuetify.breakpoint.xs}`);
		},

		computed: {
			trackingStep() {
				return 100 / this.$store.state.projects.length;
			},
		},

		methods: {
			changeSlide(way) {
				const length = this.$store.state.projects.length;
				switch (way) {
					case "++":
						if (this.model + 1 === length) {
							this.model = 0;
							this.tracker = this.trackingStep;
						} else {
							this.model++;
							this.tracker += this.trackingStep;
						}
						break;

					case "--":
						if (this.model - 1 < 0) {
							this.model = length - 1;
							this.tracker = 100;
						} else {
							this.model--;
							this.tracker -= this.trackingStep;
						}
						break;

					default:
						this.model = way - 1;
						this.tracker = this.trackingStep * way;
						break;
				}
				return;
			},
		},
	};
</script>
