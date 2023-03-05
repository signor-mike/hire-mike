<template>
	<v-card
		outlined
		class="mx-auto"
		:max-width="$vuetify.breakpoint.smAndDown ? '100%' : '60%'"
	>
		<v-progress-linear color="primary" :value="tracker" striped />
		<v-card-title>
			<a
				:href="project.url"
				class="text-button ma-auto text-left text-truncate"
				target="_blank"
			>
				{{ project.url.replace("https://", "") }}
			</a>
		</v-card-title>
		<v-card-subtitle>
			<v-row>
				<v-col cols="5" class="d-flex align-center justify-center">
					<p class="text-caption mb-0 text-center">
						{{ project.role }}
					</p>
				</v-col>

				<v-col cols="2" class="d-flex align-center justify-center">
					<v-divider vertical class="mx-2" />
				</v-col>

				<v-col cols="5" class="d-flex align-center justify-center">
					<p class="text-overline mb-0 text-center">
						{{ project.year }}
					</p>
				</v-col>
			</v-row>
		</v-card-subtitle>
		<v-divider />

		<v-card-text
			class="secondary-lighten-5--text d-flex flex-column"
			:class="computedTextAlign"
		>
			<SeeMoreButton :body="project.description" />
		</v-card-text>
		<v-divider />
		<v-card-actions>
			<v-expansion-panels
				accordion
				class="pa-0"
				v-model="panel"
				popout
				focusable
			>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<template v-slot:actions>
							<v-icon color="primary"> expand_more </v-icon>
						</template>
						{{ computedActionsText }}
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-row align="center" dense justify="space-around">
							<v-col
								cols="auto"
								v-for="tech in project.techs"
								:key="tech"
							>
								<span class="text-caption">
									{{ tech }}
								</span>
							</v-col>
						</v-row>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-card-actions>
	</v-card>
</template>
<script>
	export default {
		components: {
			SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
		},
		props: {
			project: Object,
			model: { type: Number, default: 0 },
			tracker: { type: Number, default: 0 },
		},
		data: () => ({
			panel: null,
		}),
		computed: {
			computedTextAlign() {
				switch (this.model) {
					case 0:
						return "text-left";

					case this.$store.state.projects.length - 1:
						return "text-right";

					default:
						return "text-center";
				}
			},
			computedActionsText() {
				if (this.panel === 0) return "Tools we used:";
				return `${this.project.techs[0]} and ${
					this.project.techs.length - 1
				} more...`;
			},
		},
	};
</script>
