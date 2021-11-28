<template>
	<v-container>
		<p>skills display component, isAdmin: {{ isAdmin }}</p>
		<Skills :isAdmin="isAdmin" />
	</v-container>
</template>

<script>
	import useSkills from "@/utils/useSkills";
	import Skills from "../My-CV/Skills.vue";
	const { getSkills, addSkill, skillSchema, skills } = useSkills();
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
				skills,
				skill: {
					title: "",
					type: "hard",
					mastery: "",
				},
			};
		},
		mounted() {
			if (this.skills.length < 1) {
				getSkills().then((skills) => (this.skills = skills));
			}
		},
		methods: {
			async handleSubmit(param) {
				this.isLoading = true;
				await addSkill(param);
				this.skills.push(param);
				this.isLoading = false;
			},
		},
		components: { Skills },
	};
</script>

<style></style>
