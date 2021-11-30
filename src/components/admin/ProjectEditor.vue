<template>
	<v-container>
		<p>projects display component, isAdmin: {{ isAdmin }}</p>
		<PortfolioItem v-if="portfolio.length > 0" :item="{}" />
		<!-- image uploader -->
		<div>
			<v-btn @click="$refs.input1.click()">choose a photo</v-btn>
			<input
				type="file"
				ref="input1"
				style="display: none"
				@change="previewImage"
				accept="image/*"
			/>
		</div>

		<div v-if="imageData != null">
			<img class="preview" height="268" width="356" :src="img1" />
			<br />
			<v-btn :loading="isLoading" @click="uploader"
				>upload large JPG</v-btn
			>
			<v-btn :loading="isLoading" @click="uploaderMini"
				>upload small PNG</v-btn
			>
		</div>
	</v-container>
</template>

<script>
	/* eslint-disable no-unused-vars */
	import PortfolioItem from "../My-CV/PortfolioItem";
	import filesUpload from "@/utils/filesUpload";
	const { getAll, uploader, compressor, imageUploader } = filesUpload();
	// import useSkills from "@/utils/useSkills";
	// const { getSkills } = useSkills();
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
			getAll();
		},
		methods: {
			async uploader() {
				this.isLoading = true;
				this.img1 = await imageUploader(this.imageData, "large", "");
				this.isLoading = false;
			},
			async uploaderMini() {
				this.isLoading = true;
				this.img1 = await imageUploader(
					this.imageData,
					"small",
					"techs"
				);
				this.isLoading = false;
			},
			click1() {
				this.$refs.input1.click();
			},
			previewImage(event) {
				this.uploadValue = 0;
				this.img1 = null;
				this.imageData = event.target.files[0];
				this.onUpload();
			},
			onUpload() {
				return null;
			},
			// onUpload() {
			// 	this.img1 = null;
			// 	const storageRef = firebase
			// 		.storage()
			// 		.ref(`${this.imageData.name}`)
			// 		.put(this.imageData);
			// 	storageRef.on(
			// 		`state_changed`,
			// 		(snapshot) => {
			// 			this.uploadValue =
			// 				(snapshot.bytesTransferred / snapshot.totalBytes) *
			// 				100;
			// 		},
			// 		(error) => {
			// 			console.log(error.message);
			// 		},
			// 		() => {
			// 			this.uploadValue = 100;
			// 			storageRef.snapshot.ref.getDownloadURL().then((url) => {
			// 				this.img1 = url;
			// 				console.log(this.img1);
			// 			});
			// 		}
			// 	);
			// },
		},
		data() {
			return {
				imageData: null,
				img1: "",
				isLoading: false,
				portfolio: [],
				project: {
					name: "project name",
					date: "some date",
					url: "url to project",
					// preview separator
					image: "url to image",
					description: "about the project",
					specification: "the purpose of the project",
					techs: ["vue", "vuetify", "firebase"],
				},
			};
		},
	};
</script>

<style></style>
