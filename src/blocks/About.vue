<template>
	<v-container
		fill-height
		d-flex
		justify-center
		align-content-center
		class="secondary"
	>
		<span class="text-h4 text-md-h2 mx-md-auto"> Get to know me</span>
		<div
			v-if="$vuetify.breakpoint.smAndDown"
			class="ml-auto d-flex flex-row justify-around"
		>
			<v-icon :color="isProf ? 'grey' : 'primary'">psychology_alt</v-icon>
			<v-switch color="grey" v-model="isProf" />
			<v-icon :color="!isProf ? 'grey' : 'primary'">engineering</v-icon>
		</div>

		<v-row
			:class="{
				'ma-auto': $vuetify.breakpoint.mdAndUp,
				'mb-auto': $vuetify.breakpoint.smAndDown,
			}"
		>
			<v-col cols="5" v-if="$vuetify.breakpoint.mdAndUp">
				<Bio
					@editBio="(payload) => handleEdit(payload, 'professional')"
					:isEdit="isEdit"
					textAlign="right"
					:title="$store.state.about.professional.title"
					:text="$store.state.about.professional.text"
				/>
			</v-col>
			<v-col cols="12" v-else>
				<Bio
					@editBio="(data) => handleEdit(data, computedProps.type)"
					:isEdit="isEdit"
					textAlign="center"
					:title="computedProps.title"
					:text="computedProps.text"
				/>
			</v-col>

			<v-col
				v-if="$vuetify.breakpoint.mdAndUp"
				cols="2"
				class="d-flex justify-center"
			>
				<v-divider vertical />
			</v-col>

			<v-col v-if="$vuetify.breakpoint.mdAndUp" cols="5">
				<Bio
					@editBio="(payload) => handleEdit(payload, 'personal')"
					:isEdit="isEdit"
					textAlign="left"
					:title="$store.state.about.personal.title"
					:text="$store.state.about.personal.text"
				/>
			</v-col>
		</v-row>
		<v-dialog v-model="dialog">
			<v-container secondary pa-2>
				<p class="text-h5">new value:</p>
				<v-textarea v-model="values.value" />
				<v-btn
					block
					color="primary"
					:loading="isLoading"
					@click="handleSubmit"
				>
					save
				</v-btn>
			</v-container>
		</v-dialog>
	</v-container>
</template>

<script>
	import Bio from "../components/CV/Bio.vue";

	export default {
		props: { isEdit: Boolean },
		components: { Bio },
		data: () => ({
			isProf: true,
			dialog: false,
			isLoading: false,
			values: {},
		}),
		computed: {
			computedProps() {
				if (this.isProf)
					return {
						...this.$store.state.about.professional,
						type: "professional",
					};
				else
					return {
						...this.$store.state.about.personal,
						type: "personal",
					};
			},
		},
		methods: {
			async handleEdit(payload, key) {
				this.dialog = true;
				const collection = "about";
				const document = key;
				const field = Object.keys(payload)[0];
				const value = payload[field];
				this.values = { collection, document, field, value };
			},
			async handleSubmit() {
				this.isLoading = true;
				await this.$store.dispatch("updateBio", this.values);
				this.isLoading = false;
				this.dialog = false;
			},
		},
	};
</script>

<style></style>
