<template>
	<v-main>
		<v-skeleton-loader
			v-if="!updatedCv"
			type="text"
			max-width="500"
		></v-skeleton-loader>
		<v-form v-else @submit.prevent="handleSubmit">
			<v-container>
				<v-row>
					<v-col cols="12" sm="12" md="6" lg="4">
						<v-text-field
							label="School"
							v-model="updatedCv.bootcamp.title"
						></v-text-field>
						<v-textarea
							label="Description"
							v-model="updatedCv.bootcamp.description"
						></v-textarea>
						<v-text-field
							label="Specialization"
							v-model="updatedCv.bootcamp.spec"
						></v-text-field>
						<v-combobox
							chips
							v-model="updatedCv['general-skills'].skills"
							label="General skills"
							multiple
							clearable
						></v-combobox>
						<v-combobox
							chips
							v-model="updatedCv.frontend.skills"
							label="Frontend Skills"
							multiple
							clearable
						></v-combobox>
						<v-combobox
							chips
							v-model="updatedCv.backend.skills"
							label="Backend Skills"
							multiple
							clearable
						></v-combobox>
						<v-combobox
							chips
							v-model="updatedCv['general-skills'].extra"
							label="Extra Skills"
							multiple
							clearable
						></v-combobox>
					</v-col>

					<v-col cols="12" sm="12" md="6" lg="8">
						<v-text-field
							v-model="updatedCv.bio.title"
							label="Bio's title"
						></v-text-field>
						<v-textarea
							v-model="updatedCv.bio.text"
							label="Bio itself"
						></v-textarea>
						<v-text-field
							v-model="updatedCv.projects.newest.title"
							label="newest project title"
						></v-text-field>
						<v-text-field
							v-model="updatedCv.projects.newest.url"
							label="newest project url"
						></v-text-field>
						<v-combobox
							chips
							v-model="updatedCv.projects.newest.details"
							multiple
							clearable
							label="newest project details"
						></v-combobox>
						<v-text-field
							v-model="updatedCv.projects.second.title"
							label="second project title"
						></v-text-field>
						<v-text-field
							v-model="updatedCv.projects.second.url"
							label="second project url"
						></v-text-field>
						<v-combobox
							chips
							v-model="updatedCv.projects.second.details"
							multiple
							clearable
							label="second project details"
						></v-combobox>
						<v-text-field
							v-model="updatedCv.experience.newest.title"
							label="newest experience title"
						></v-text-field>
						<v-text-field
							v-model="updatedCv.experience.newest.dates"
							label="newest experience dates"
						></v-text-field>
						<v-combobox
							chips
							v-model="updatedCv.experience.newest.details"
							multiple
							clearable
							label="newest experience details"
						></v-combobox>
						<v-text-field
							v-model="updatedCv.experience.second.title"
							label="second experience title"
						></v-text-field>
						<v-text-field
							v-model="updatedCv.experience.second.dates"
							label="second experience dates"
						></v-text-field>
						<v-combobox
							chips
							v-model="updatedCv.experience.second.details"
							multiple
							clearable
							label="second experience details"
						></v-combobox>
					</v-col>
				</v-row>
			</v-container>
			<v-btn :loading="isLoading" type="submit" color="primary"
				>update</v-btn
			>
		</v-form>
	</v-main>
</template>

<script>
	import useCV from "@/utils/useCV.js";
	const { getData, updateData } = useCV();
	export default {
		data() {
			return {
				isLoading: false,
				updatedCv: null,
			};
		},
		mounted() {
			getData().then((data) => {
				this.updatedCv = { ...data };
				this.isLoaded = true;
			});
		},
		methods: {
			async handleSubmit() {
				this.isLoading = true;
				await updateData(this.updatedCv);
				this.isLoading = false;
			},
		},
	};
</script>

<style></style>
