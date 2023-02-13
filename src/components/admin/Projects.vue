<template>
	<Wrapper title="add, remove or edit projects">
		<v-select
			v-model="selectedProject"
			:items="$store.state.projects"
			item-text="project"
			label="select project:"
			outlined
			dense
		></v-select>

		<h2>
			{{ selectedProject }}
		</h2>
	</Wrapper>
</template>

<script>
	export default {
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
		},
		data: () => ({
			selectedProject: null,
			project: null,
		}),
		watch: {
			selectedProject(newVal, oldVal) {
				if (newVal === oldVal) return;
				this.project = this.$store.state.projects.find(
					(p) => p.project === newVal
				);
			},
		},
	};
</script>
