<template>
	<v-main class="pt-0">
		<v-row>
			<v-col cols="12" sm="12" md="4">
				<Skills />
			</v-col>
			<v-col cols="12" sm="12" md="8">
				<v-container pt-0 fluid style="height: 100%">
					<v-row justify="space-between" dense style="height: 100%">
						<v-col
							v-for="lang in languages"
							:key="lang.i"
							cols="6"
							md="3"
						>
							<flag :iso="lang.flag" />
							<span class="primary--text">
								{{ lang.lang }}
								<span class="text--secondary">{{
									lang.level
								}}</span>
							</span>
						</v-col>

						<v-row class="my-auto">
							<v-col cols="12" sm="12" md="6">
								<DetailedView
									:details="$store.state.projects"
									title="Portfolio"
									link="/portfolio"
								/>
							</v-col>
							<v-col cols="12" sm="12" md="6">
								<DetailedView
									:details="education"
									title="Education"
								/>
							</v-col>
							<v-col cols="12" sm="12" md="6">
								<DetailedView
									:details="experience"
									title="Experience"
								/>
							</v-col>
							<v-col cols="12" sm="12" md="6">
								<DetailedView
									:details="voluntering"
									title="Voluntering"
								/>
							</v-col>
						</v-row>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-main>
</template>

<script>
	import Skills from "./Skills.vue";
	import DetailedView from "./DetailedView.vue";
	import useProjects from "@/utils/useProjects";
	const { getProjects } = useProjects();
	import useEVE from "@/utils/useEVE";
	const { getEves } = useEVE();

	export default {
		components: { Skills, DetailedView },
		data() {
			return {
				languages: [
					{
						lang: "ENG",
						flag: "us",
						level: "Bilingual",
					},
					{
						lang: "ESP",
						flag: "es",
						level: "Basic",
					},
					{
						lang: "ITA",
						flag: "it",
						level: "Basic",
					},
					{
						lang: "RU",
						flag: "ru",
						level: "Native",
					},
				],
				projects: [],
				education: [],
				experience: [],
				voluntering: [],
			};
		},
		mounted() {
			getProjects().then((projects) => {
				this.projects = projects;
			});
			getEves("education").then((education) => {
				this.education = education;
			});
			getEves("voluntering").then((voluntering) => {
				this.voluntering = voluntering;
			});
			getEves("experience").then((experience) => {
				this.experience = experience;
			});
		},
	};
</script>

<style>
	@import url("../../assets/global.css");
</style>
