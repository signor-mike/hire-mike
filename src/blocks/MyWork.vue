<template>
	<Wrapper :title="title">
		<v-window continuous v-model="model" hide-delimiters>
			<v-window-item
				v-for="(project, i) in $store.state.projects"
				:key="project.id + i"
			>
				<Project :project="project" :model="model" />
			</v-window-item>
		</v-window>

		<v-spacer />
		<v-container d-flex>
			<v-btn
				icon
				@click="changeSlide('--')"
				color="secondary"
				class="ml-auto"
			>
				<v-icon x-large color="primary">chevron_left</v-icon>
			</v-btn>

			<v-spacer />

			<v-item-group v-model="model" class="text-center" mandatory>
				<v-item
					v-for="n in $store.state.projects.length"
					:key="`btn-${n}`"
					v-slot="{ active, toggle }"
				>
					<v-btn icon @click="toggle" color="secondary">
						<v-icon
							:color="active ? 'primary' : 'primary darken-3'"
							>{{
								active
									? "radio_button_checked"
									: "radio_button_unchecked"
							}}</v-icon
						>
					</v-btn>
				</v-item>
			</v-item-group>

			<v-spacer />

			<v-btn
				icon
				@click="changeSlide('++')"
				color="secondary"
				class="mr-auto"
			>
				<v-icon x-large color="primary">chevron_right</v-icon>
			</v-btn>
		</v-container>
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
		}),
		methods: {
			changeSlide(way) {
				const length = this.$store.state.projects.length;
				switch (way) {
					case "++":
						if (this.model + 1 === length) this.model = 0;
						else this.model++;
						break;

					case "--":
						if (this.model - 1 < 0) this.model = length - 1;
						else this.model--;
						break;

					default:
						break;
				}
				return;
			},
		},
	};
</script>
