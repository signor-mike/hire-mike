<template>
	<v-container>
		<p>techs editor component, isAdmin: {{ isAdmin }}</p>
		<v-form @submit.prevent="handleSubmit">
			<v-text-field v-model="tech.name" label="name"></v-text-field>
			<v-file-input truncate-length="15" v-model="img"></v-file-input>
			<v-btn :loading="isLoading" type="submit">save</v-btn>
		</v-form>
		<v-row>
			<v-col v-for="tech in $store.state.techs" :key="tech.i">
				<TechItem :tech="tech" :isAdmin="isAdmin" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	/* eslint-disable no-unused-vars */
	import useTechs from "@/utils/useTechs";
	import filesUpload from "@/utils/filesUpload";
	const { imageUploader, deleteImage } = filesUpload();
	const { techs, techSchema, getTechs, addTech, deleteTech } = useTechs();

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
			};
		},
		mounted() {
			getTechs().then((techs) => (this.techs = techs));
		},
		methods: {
			async handleSubmit() {
				this.isLoading = true;
				this.tech.image = await imageUploader(
					this.img,
					"small",
					"techs"
				);
				await addTech(this.tech);
				this.isLoading = false;
			},
		},
	};
</script>

<style></style>
