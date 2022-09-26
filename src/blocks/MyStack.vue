<template>
	<v-container fill-height secondary align-content-center>
		<span class="text-h4 text-md-h2 mx-auto mb-5"> I am working with </span>
		<v-row align="center">
			<v-col cols="12" md="6">
				<Skills align="right" :isEdit="isEdit" :stack="techs" />
			</v-col>
			<v-divider vertical v-if="$vuetify.breakpoint.mdAndUp" />
			<v-col cols="12" v-if="$vuetify.breakpoint.smAndDown">
				<v-divider />
			</v-col>
			<v-col cols="12" md="6">
				<v-row align-content="center">
					<v-col cols="12">
						<Skills
							align="left"
							:isEdit="isEdit"
							:stack="software"
						/>
					</v-col>
					<v-col
						cols="12"
						:class="{ 'pl-0': $vuetify.breakpoint.mdAndUp }"
					>
						<v-divider />
					</v-col>
					<v-col cols="12">
						<Skills
							align="left"
							:isEdit="isEdit"
							:stack="abilities"
						/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Skills from "../components/CV/Skills.vue";
	export default {
		props: { isEdit: Boolean },
		components: { Skills },
		mounted: async function () {
			await this.$store.dispatch("fetchStack");
		},
		computed: {
			techs() {
				return this.$store.state.stack.find((e) => e.id === "techs");
			},
			software() {
				return this.$store.state.stack.find((e) => e.id === "software");
			},
			abilities() {
				return this.$store.state.stack.find(
					(e) => e.id === "abilities"
				);
			},
		},
	};
</script>

<style></style>
