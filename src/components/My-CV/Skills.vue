<template>
	<v-main class="pt-0" :style="{ background: bgColor }">
		<div class="d-flex justify-space-between ma-0">
			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						v-if="$vuetify.breakpoint.mdAndUp"
						@click="flip('hard')"
						:loading="isLoading"
						color="primary"
						:outlined="!isHard"
						>Hard Skills</v-btn
					>
				</template>
				<span>Click to see Hard Skills</span>
			</v-tooltip>
			<v-switch
				class="mx-auto"
				v-if="$vuetify.breakpoint.smAndDown"
				v-model="switch1"
				@change="toggleSwitch()"
				:label="`Toggle to see ${switcherSkills} skills`"
			></v-switch>
			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						v-bind="attrs"
						v-on="on"
						v-if="$vuetify.breakpoint.mdAndUp"
						@click="flip('soft')"
						:loading="isLoading"
						color="primary"
						:outlined="!isSoft"
						>Soft Skills</v-btn
					>
				</template>
				<span>Click to see Soft Skills</span>
			</v-tooltip>
		</div>
		<v-skeleton-loader
			v-if="isLoading"
			class="mx-auto"
			max-width="300"
			type="list-item@6"
		/>
		<v-row
			class="mx-2"
			v-if="!isLoading"
			:class="{ 'my-2': $vuetify.breakpoint.mdAndUp }"
		>
			<v-col
				class="text-center"
				:class="{ [skill.mastery]: $vuetify.theme.dark }"
				cols="auto"
				v-for="skill in skillsToShow"
				:key="skill.i"
				>{{ skill.title }}
			</v-col>
		</v-row>
	</v-main>
</template>

<script>
	import useSkills from "@/utils/useSkills";
	const { getSkills, skills } = useSkills();

	export default {
		props: {
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
		async created() {
			await getSkills();
			this.isLoading = false;
			console.log(this.isAdmin);
		},
		// watch: {
		// 	skills: function(newVal, oldVal) {
		// 		if (oldVal !== newVal) {
		// 			this.isLoading = false;
		// 		}
		// 	},
		// },
		data() {
			return {
				skills,
				isLoading: true,
				skillList: "hard",
				isHard: true,
				isSoft: false,
				switch1: false,
				switcherSkills: "soft",
			};
		},
		computed: {
			bgColor() {
				return this.$vuetify.theme.dark
					? this.$vuetify.theme.themes.dark.secondary
					: this.$vuetify.theme.themes.light.secondary;
			},
			skillsToShow() {
				return this.skills
					.filter((skill) => skill.type === this.skillList)
					.sort((a, b) => a.mastery > b.mastery);
			},
		},
		methods: {
			flip(type) {
				this.skillList = type;
				if (type === "hard") {
					this.isHard = true;
					this.isSoft = false;
				} else {
					this.isHard = false;
					this.isSoft = true;
				}
			},
			toggleSwitch() {
				// this.skillList === "hard"
				// 	? (this.skillList = "soft"),
				// (this.switcherSkills = "hard")
				// 	: (this.skillList = "hard"),
				// (this.switcherSkills = "soft");
				if (this.skillList === "hard") {
					this.skillList = "soft";
					this.switcherSkills = "hard";
				} else {
					this.skillList = "hard";
					this.switcherSkills = "soft";
				}
			},
		},
	};
</script>

<style>
	@import url("../../assets/global.css");
</style>
