<template>
	<v-container>
		<p>projects display component, isAdmin: {{ isAdmin }}</p>
		<v-btn v-if="isAdmin" @click="addProject">Add project</v-btn>
		<v-expansion-panels v-if="projects.length > 0" class="mt-5">
			<v-expansion-panel
				v-for="project in $store.state.projects"
				:key="project.id"
			>
				<v-expansion-panel-header>
					{{ `${project.name} @ ${project.url} || ${project.date}` }}
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<PortfolioItem
						:item="project"
						:isAdmin="isAdmin"
						@editProject="editProject"
						@deleteProject="deleteProject"
					/>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<v-dialog v-model="dialog" width="500">
			<v-card>
				<v-card-title class="text-h5 primary lighten-1">
					{{ isEdit ? "Edit" : "Add" }} project
				</v-card-title>

				<v-container>
					<v-form class="d-flex flex-column">
						<v-text-field
							v-model="project.name"
							label="name"
						></v-text-field>
						<v-text-field
							v-model="project.url"
							label="link to the project"
						></v-text-field>
						<v-text-field
							v-model="project.github"
							label="link to the repo"
						></v-text-field>
						<v-file-input
							v-if="project.image === ''"
							truncate-length="15"
							v-model="imageData"
						></v-file-input>
						<v-container
							d-flex
							justify-space-between
							v-if="project.image !== ''"
						>
							<v-img
								class="mx-auto"
								width="150"
								:src="project.image"
							></v-img>
							<v-btn
								class="my-auto"
								color="error"
								@click="deleteImage"
							>
								delete image
							</v-btn>
						</v-container>
						<v-date-picker
							class="mx-auto"
							v-model="date"
							type="month"
							@change="dateConverter"
							v-if="project.date === null"
						></v-date-picker>
						<v-btn
							v-else
							color="warning"
							@click="project.date = null"
							>date is {{ project.date }}, click to set
							different</v-btn
						>
						<v-textarea
							v-model="project.description"
							label="description"
						></v-textarea>
						<v-textarea
							v-model="project.specification"
							label="specification"
						></v-textarea>
						<div
							class="d-flex justify-space-around"
							v-if="project.techs.length > 0 && !isNew"
						>
							<ul>
								<li v-for="t in techsInEdit" :key="t.i">
									{{ t }}
								</li>
							</ul>
							<v-btn
								class="my-auto"
								@click="setNewTechs"
								color="warning"
								>click to reset list</v-btn
							>
						</div>
						<v-select
							v-else
							:items="techNames"
							multiple
							clearable
							chips
							label="select techs"
							@change="(data) => pushIDs(data)"
						></v-select>
					</v-form>
				</v-container>
				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						:disabled="!isValid"
						:outlined="!isValid"
						:loading="isLoading"
						color="primary"
						@click.prevent="handleSubmit(project)"
					>
						save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
	import PortfolioItem from "../My-CV/PortfolioItem";
	import filesUpload from "@/utils/filesUpload";
	const { imageUploader, deleteImage } = filesUpload();
	import useTechs from "@/utils/useTechs";
	const { getTechs, techs } = useTechs();

	import useProjects from "@/utils/useProjects";
	const {
		projects,
		projectSchema,
		getProjects,
		addProject,
		editProject,
		deleteProject,
	} = useProjects();
	export default {
		components: {
			PortfolioItem,
		},
		props: {
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
		mounted() {
			getTechs().then((techs) => (this.techs = techs));
			getProjects().then((projects) => (this.projects = projects));
		},
		methods: {
			pushIDs(data) {
				let ids = [];
				for (let i = 0; i < data.length; i++) {
					const id = this.techs.find((e) => e.name === data[i]).id;
					ids.push(id);
				}
				this.project.techs = ids;
			},
			dateConverter() {
				const newDate = new Date(this.date);
				this.project.date = newDate.toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
				});
			},
			async handleSubmit(param) {
				this.isLoading = true;
				const currentProject = this.$store.state.projects.find(
					(p) => p.id === param.id
				);
				const isEdit =
					this.$store.state.projects.indexOf(currentProject) > -1;
				if (isEdit) {
					if (this.imageData !== null) {
						this.project.image = await imageUploader(
							this.imageData,
							"large",
							"projects"
						);
						await editProject(this.project);
					} else {
						await editProject(this.project);
					}
				} else {
					this.project.image = await imageUploader(
						this.imageData,
						"large",
						"projects"
					);
					await addProject(this.project);
				}
				this.project = projectSchema;
				this.dialog = false;
				this.isLoading = false;
			},
			async addProject() {
				this.isEdit = false;
				this.isNew = true;
				this.project = projectSchema;
				this.dialog = true;
			},
			async editProject(project) {
				this.isEdit = true;
				this.dialog = true;
				this.project = project;
			},
			async deleteProject(project) {
				await deleteImage(project.image);
				await deleteProject(project);
			},
			async deleteImage() {
				await deleteImage(this.project.image);
				this.project.image = "";
			},
			setNewTechs() {
				this.project.techs = [];
				this.isNew = true;
			},
		},
		data() {
			return {
				dialog: false,
				imageData: null,
				img1: "",
				isLoading: false,
				isEdit: false,
				date: null,
				techs,
				projects,
				project: {
					name: "",
					date: null,
					url: "",
					image: "",
					description: "",
					specification: "",
					techs: [],
					github: "",
				},
				isNew: false,
			};
		},
		computed: {
			techNames() {
				return this.techs.map((tech) => tech.name);
			},
			techsInEdit() {
				return this.project.techs.map((id) => {
					return this.techs.find((tech) => tech.id === id).name;
				});
			},
			isValid() {
				return true;
			},
		},
	};
</script>

<style></style>
