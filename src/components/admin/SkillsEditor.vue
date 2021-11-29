<template>
	<v-container>
		<p>skills display component, isAdmin: {{ isAdmin }}</p>
		<Skills
			:isAdmin="isAdmin"
			@addSkill="addSkill"
			@editSkill="editSkill"
			@deleteSkill="deleteSkill"
		/>
		<v-dialog v-model="dialog" width="500">
			<v-card>
				<v-card-title class="text-h5 primary lighten-1">
					Add new skill
				</v-card-title>

				<v-container>
					<v-text-field
						v-model="skill.title"
						label="name"
					></v-text-field>
					<v-select
						:items="skillTypes"
						label="select type"
						v-model="skill.type"
					></v-select>
					<v-select
						:items="masteries"
						label="select mastery"
						v-model="skill.mastery"
					></v-select>
				</v-container>
				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						:disabled="!isValid"
						:outlined="!isValid"
						:loading="isLoading"
						color="primary"
						@click="handleSubmit(skill)"
					>
						save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
	import useSkills from "@/utils/useSkills";
	import Skills from "../My-CV/Skills.vue";
	const {
		getSkills,
		addSkill,
		editSkill,
		deleteSkill,
		skillSchema,
		// skills,
	} = useSkills();
	export default {
		props: {
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				skillSchema,
				isLoading: false,
				stages: {
					currentStage: "",
					stages: ["skills", "projects"],
				},
				// skills,
				skill: {
					title: "",
					type: "hard",
					mastery: "a-high",
				},
				dialog: false,
			};
		},
		mounted() {
			if (!this.skills) {
				getSkills().then((skills) => (this.skills = skills));
			}
		},
		computed: {
			skillTypes() {
				return this.skillSchema.type.split("/");
			},
			masteries() {
				return this.skillSchema.mastery.split("/");
			},
			isValid() {
				let { title, type, mastery } = this.skill;
				return (
					title.length >= 2 &&
					(type === "hard" || type === "soft") &&
					this.masteries.indexOf(mastery) > -1
				);
			},
		},
		methods: {
			async handleSubmit(param) {
				const isEdit = this.$store.state.skills.indexOf(param) > -1;
				this.isLoading = true;
				if (isEdit) {
					await editSkill(param);
				} else {
					await addSkill(param);
				}

				this.dialog = false;
				this.isLoading = false;
			},
			async addSkill() {
				let randomIndex = (arr) => {
					return Math.floor(Math.random() * arr.length);
				};
				this.dialog = true;
				this.skill = {
					title: "",
					type: this.skillTypes[randomIndex(this.skillTypes)],
					mastery: this.masteries[randomIndex(this.masteries)],
				};
			},
			async editSkill(skill) {
				this.dialog = true;
				this.skill = skill;
			},
			async deleteSkill(skill) {
				await deleteSkill(skill);
			},
		},
		components: { Skills },
	};
</script>

<style></style>
