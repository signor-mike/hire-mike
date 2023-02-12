<template>
	<v-card outlined class="mx-auto">
		<v-card-title>
			<v-spacer />
			<a
				:href="project.project"
				class="text-button my-auto text-left text-truncate"
				target="_blank"
			>
				{{ project.project.replace("https://", "") }}
			</a>
			<v-spacer />
		</v-card-title>
		<v-divider />

		<v-card-text
			class="secondary-lighten-5--text d-flex flex-column"
			:class="computedTextAlign"
		>
			{{ computedText }}
			<v-btn @click="dialog = true" color="primary" text class="ml-auto">
				<!-- <v-icon>unfold_more</v-icon> -->
				<v-icon>read_more</v-icon>
				see more
			</v-btn>
		</v-card-text>
		<v-dialog v-model="dialog" fullscreen>
			<Dialogue :text="text" @onClose="dialog = false" />
		</v-dialog>

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
						<span
							class="secondary-lighten-4--text font-italic text-lowercase my-auto"
						>
							{{ tech }}
						</span>
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
			Dialogue: () => import("@/components/ui/Dialog"),
		},
		props: {
			project: Object,
			text: {
				type: String,
				default:
					"According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history. Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains.",
			},
			model: Number,
		},
		data: () => ({
			// stringLength: 200,
			dialog: false,
		}),
		computed: {
			stringLength() {
				if (this.$vuetify.breakpoint.smAndDown) return 200;
				return 500;
			},
			computedText() {
				// strips last character if it's a space
				return this.text.charAt(this.stringLength - 1) === " "
					? this.text.slice(0, this.stringLength - 1) + "..."
					: this.text.slice(0, this.stringLength) + "...";
			},

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
