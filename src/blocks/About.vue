<template>
	<v-container fill-height d-flex class="secondary">
		<span class="text-h4 text-md-h2 mx-md-auto mb-md-auto">
			Get to know me
		</span>
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
					textAlign="right"
					:title="bio.prof.title"
					:text="bio.prof.text"
				/>
			</v-col>
			<v-col cols="12" v-else>
				<Bio
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
					textAlign="left"
					:title="bio.pers.title"
					:text="bio.pers.text"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Bio from "../components/CV/Bio.vue";
	export default {
		components: { Bio },
		data: () => ({
			isProf: true,
			bio: {
				prof: {
					title: "professionally",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam cumque! Numquam, magnam quae assumenda reprehenderit deleniti distinctio iusto quo? Aspernatur, odio? Quaerat quo magnam omnis totam eius commodi odio. Optio id maxime aliquam ullam est assumenda nobis quaerat error hic labore cum reprehenderit et, ipsam iusto odit facere corporis.",
				},
				pers: {
					title: "...and personally",
					text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ipsam cumque! Numquam, magnam quae assumenda reprehenderit deleniti distinctio iusto quo? Aspernatur, odio? Quaerat quo magnam omnis totam eius commodi odio. Optio id maxime aliquam ullam est assumenda nobis quaerat error hic labore cum reprehenderit et, ipsam iusto odit facere corporis.",
				},
			},
		}),
		computed: {
			computedProps() {
				if (this.isProf) return { ...this.bio.prof };
				else return { ...this.bio.pers };
			},
		},
		mounted: function () {
			// console.log(this.$vuetify.breakpoint.smAndDown);
		},
	};
</script>

<style></style>
