<template>
	<v-card
		outlined
		class="mx-auto mt-md-5"
		:max-width="$vuetify.breakpoint.smAndDown ? '90%' : '50%'"
	>
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
			<SeeMoreButton :text="project.description" />
		</v-card-text>
		<v-divider />
		<v-card-actions>
			<v-expansion-panels class="pa-0" v-model="panel" inset>
				<v-expansion-panel>
					<v-expansion-panel-header expand-icon="expand_more">
						{{ computedActionsText }}
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<v-row align="center" justify="space-around">
							<v-col
								cols="auto"
								v-for="tech in project.techs"
								:key="tech"
							>
								<span>
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
			model: { type: Number, required: false },
		},
		data: () => ({
			panel: 0,
		}),
		mounted() {
			if (this.$vuetify.breakpoint.smAndDown) this.panel = null;
			return;
		},
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
