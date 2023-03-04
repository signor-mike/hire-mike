<template>
	<Wrapper :title="title">
		<div class="d-flex">
			<v-btn
				v-if="$vuetify.breakpoint.mdAndUp"
				icon
				@click="changeSlide('--')"
				color="secondary"
				class="my-auto"
			>
				<v-icon x-large color="primary">chevron_left</v-icon>
			</v-btn>
			<v-window continuous v-model="model" hide-delimiters>
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
				v-if="$vuetify.breakpoint.mdAndUp"
				icon
				@click="changeSlide('++')"
				color="secondary"
				class="my-auto"
			>
				<v-icon x-large color="primary">chevron_right</v-icon>
			</v-btn>

			<!-- TODO: mobile: double arrows @click ++/-- && window@next/prev => handleModel 
								desktop: radio_button_(un)checked @click=changeSlide to corresponding one
			-->
			<v-toolbar
				bottom
				absolute
				flat
				v-if="$vuetify.breakpoint.smAndDown"
			>
				<v-btn
					icon
					@click="changeSlide('--')"
					color="secondary"
					class="ml-auto"
				>
					<v-icon x-large color="primary">chevron_left</v-icon>
				</v-btn>

				<v-spacer />

				<v-spacer />

				<v-btn
					icon
					@click="changeSlide('++')"
					color="secondary"
					class="mr-auto"
				>
					<v-icon x-large color="primary">chevron_right</v-icon>
				</v-btn>
			</v-toolbar>
			<!-- <v-progress-linear color="primary" :value="tracker" striped /> -->
		</div>
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
						break;
				}
				return;
			},
		},
	};
</script>
