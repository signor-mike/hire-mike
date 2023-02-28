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
		<v-card-actions class="d-flex flex-column">
			<v-slide-group show-arrows>
				<template v-slot:prev="{ on, attrs }">
					<v-btn v-bind="attrs" v-on="on" icon class="mr-auto">
						<v-icon> keyboard_double_arrow_left </v-icon>
					</v-btn>
				</template>

				<v-slide-item v-for="(tech, i) in project.techs" :key="tech">
					<div class="d-flex">
						<v-divider vertical class="mx-4" v-if="i !== 0" />
						<v-menu offset-y>
							<template v-slot:activator="{ on, attrs }">
								<span
									v-bind="attrs"
									v-on="on"
									class="secondary-lighten-4--text font-italic text-lowercase my-auto px-1"
								>
									{{ tech }}
								</span>
							</template>
							<v-list>
								<v-list-item
									v-for="(tech, index) in project.techs"
									:key="index"
								>
									<v-list-item-title>{{
										tech
									}}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
				</v-slide-item>

				<template v-slot:next="{ on, attrs }">
					<v-btn v-bind="attrs" v-on="on" icon class="ml-auto">
						<v-icon> keyboard_double_arrow_right</v-icon>
					</v-btn>
				</template>
			</v-slide-group>
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
		},
	};
</script>
