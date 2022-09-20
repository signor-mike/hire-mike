<template>
	<v-container fill-height align-content-center class="secondary">
		<span class="text-h4 text-md-h2 mx-auto mb-md-auto"> See my work </span>
		<v-btn color="primary" v-if="isEdit">
			<v-icon>add</v-icon>
			new project
		</v-btn>
		<v-row>
			<v-col
				v-for="(project, i) in $store.state.projects"
				:key="project.id"
				cols="12"
				md="6"
			>
				<Project
					:index="i"
					:isEdit="isEdit"
					:project="project"
					@editProject="(prj) => handleEdit(prj)"
					@deleteProject="(prj) => handleDelete(prj)"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Project from "@/components/CV/Project";
	export default {
		components: { Project },
		props: { isEdit: Boolean },
		async mounted() {
			this.$store.dispatch("fetchProjects");
		},
		methods: {
			handleEdit(payload) {
				console.log("project to edit: ", payload);
			},
			handleDelete(payload) {
				console.log("project to delete: ", payload);
			},
		},
	};
</script>

<style></style>
