<template>
	<v-container>
		<p>techs editor component, isAdmin: {{ isAdmin }}</p>
		<v-btn v-if="isAdmin" @click="addTech">Add tech</v-btn>

		<v-dialog v-model="dialog" width="500">
			<v-card>
				<v-card-title class="text-h5 primary lighten-1">
					{{ tech.name === "" ? "Add" : "Edit" }} tech
				</v-card-title>

				<v-container>
					<v-form @submit.prevent="handleSubmit">
						<v-text-field
							v-model="tech.name"
							label="name"
						></v-text-field>
						<v-file-input
							v-if="tech.image === ''"
							truncate-length="15"
							v-model="img"
						></v-file-input>
						<v-container
							d-flex
							justify-space-between
							v-if="tech.image !== ''"
						>
							<v-img
								class="mx-auto"
								width="150"
								:src="tech.image"
							></v-img>
							<v-btn
								class="my-auto"
								color="error"
								@click="deleteImage"
								>delete image</v-btn
							>
						</v-container>
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
						@click="handleSubmit(tech)"
					>
						save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-row>
			<v-col cols="auto" v-for="tech in $store.state.techs" :key="tech.i">
				<TechItem
					:tech="tech"
					:isAdmin="isAdmin"
					@deleteTech="deleteTech"
					@editTech="editTech"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import useTechs from "@/utils/useTechs";
	import filesUpload from "@/utils/filesUpload";
	const { imageUploader, deleteImage } = filesUpload();
	const {
		techs,
		techSchema,
		getTechs,
		addTech,
		editTech,
		deleteTech,
	} = useTechs();

	import TechItem from "@/components/TechItem.vue";
	export default {
		components: { TechItem },
		props: {
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				techSchema,
				techs,
				tech: {
					name: "",
					image: "",
				},
				img: null,
				isLoading: false,
				dialog: false,
			};
		},
		mounted() {
			getTechs().then((techs) => (this.techs = techs));
		},
		methods: {
			async handleSubmit(param) {
				this.isLoading = true;
				const isEdit = this.$store.state.techs.indexOf(param) > -1;
				if (isEdit) {
					if (this.img !== null) {
						this.tech.image = await imageUploader(
							this.img,
							"small",
							"techs"
						);
						await editTech(this.tech);
					} else {
						await editTech(this.tech);
					}
				} else {
					this.tech.image = await imageUploader(
						this.img,
						"small",
						"techs"
					);
					await addTech(this.tech);
				}
				this.tech = {
					name: "",
					image: "",
				};
				this.dialog = false;
				this.isLoading = false;
			},
			async addTech() {
				this.tech = {
					name: "",
					image: "",
				};
				this.dialog = true;
			},

			async editTech(tech) {
				this.tech = tech;
				this.img = null;
				this.dialog = true;
			},
			async deleteTech(tech) {
				await deleteTech(tech);
				await deleteImage(tech.image);
			},
			async deleteImage() {
				await deleteImage(this.tech.image);
				this.tech.image = "";
			},
		},
		computed: {
			isValid() {
				return this.tech.name !== "";
			},
		},
	};
</script>

<style></style>
