<template>
	<v-container fill-height align-content-center class="secondary">
		<span class="text-h4 text-md-h2 mx-auto mb-md-auto"> See my work </span>
		<v-btn color="primary" v-if="isEdit" @click="dialog = true">
			<v-icon>add</v-icon>
			new project
		</v-btn>
		<v-row>
			<v-col
				v-for="(project, i) in $store.state.projects"
				:key="project.id + i"
				cols="12"
				md="6"
			>
				<Project
					:index="parseInt(i)"
					:isEdit="isEdit"
					:project="project"
					@editProject="(prj) => handleEdit(prj)"
					@deleteProject="(prj) => handleDelete(prj)"
				/>
			</v-col>
		</v-row>
		<v-dialog v-model="dialog">
			<v-card>
				<v-container secondary d-flex flex-column>
					<v-card-title>
						<v-text-field
							label="company name"
							v-model="newProject.company"
						/>
						<v-text-field
							label="position"
							v-model="newProject.position"
						/>
						<v-text-field
							label="year"
							type="number"
							v-model="newProject.year"
						/>
						<v-text-field
							label="tech"
							v-model="newTech"
							append-icon="add"
							@click:append="addNew('tech')"
						/>
					</v-card-title>
					<v-divider />
					<v-container>
						<v-text-field
							label="project"
							v-model="newProject.project"
						/>
						<v-divider />
						<v-text-field
							label="task"
							v-model="newTask"
							append-icon="add"
							@click:append="addNew('task')"
						/>
					</v-container>
				</v-container>
				<v-card-actions>
					<v-btn :loading="isLoading" @click="handleAdd">save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
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
		data: () => ({
			dialog: false,
			isLoading: false,
			newTask: "",
			newTech: "",
			newProject: {
				company: "",
				position: "",
				project: "https://",
				tasks: [],
				techs: [],
				year: 2022,
			},
		}),
		methods: {
			async handleAdd() {
				this.isLoading = true;
				await this.$store.dispatch("addProject", this.newProject);
				this.newProject = {
					company: "",
					position: "",
					project: "https://",
					tasks: [],
					techs: [],
					year: 2022,
				};
				this.isLoading = false;
				this.dialog = false;
			},
			addNew(param) {
				switch (param) {
					case "tech":
						this.newProject.techs.push(this.newTech);
						this.newTech = "";
						break;
					case "task":
						this.newProject.tasks.push(this.newTask);
						this.newTask = "";
						break;
					default:
						break;
				}
			},
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
