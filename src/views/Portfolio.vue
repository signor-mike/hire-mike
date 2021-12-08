<template>
	<v-container>
		<div class="d-flex">
			<v-icon color="primary" large @click="backwards()"
				>keyboard_arrow_left</v-icon
			>
			<h1 class="mx-auto">My projects</h1>
		</div>
		<v-row
			justify="center"
			dense
			v-if="projects.length || projects.length > 0"
		>
			<v-col v-for="item in projects" :key="item.i" cols="12">
				<PortfolioItem :item="item" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import PortfolioItem from "../components/My-CV/PortfolioItem.vue";
	import useProjects from "@/utils/useProjects";
	const { projects, getProjects } = useProjects();
	import useTechs from "@/utils/useTechs";
	const { techs, getTechs } = useTechs();
	export default {
		components: { PortfolioItem },
		data() {
			return {
				projects,
				techs,
			};
		},
		mounted() {
			getProjects().then((projects) => (this.projects = projects));
			getTechs().then((techs) => (this.techs = techs)); // pass down as a prop / access from Vuex
		},
		methods: {
			backwards() {
				this.$router.push("/cv-mike");
			},
		},
	};
</script>

<style></style>
