<template>
	<v-container fill-height secondary>
		<span class="text-h4 text-md-h2 mx-md-auto mb-md-auto">
			I am working with:
		</span>
		<v-row align="center">
			<v-col cols="12" md="6">
				<Skills
					:skills="techs"
					:title="Object.keys({ techs })[0]"
					align="right"
				/>
			</v-col>
			<v-divider :vertical="$vuetify.breakpoint.mdAndUp" />
			<v-col cols="12" v-if="$vuetify.breakpoint.smAndDown">
				<v-divider />
			</v-col>
			<v-col cols="12" md="6">
				<v-row align-content="center">
					<v-col cols="12">
						<Skills
							:skills="software"
							:title="Object.keys({ software })[0]"
							align="left"
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
							:skills="abilities"
							:title="Object.keys({ abilities })[0]"
							align="left"
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
		components: { Skills },
		data: () => ({
			techs: [
				"vue",
				"react",
				"some",
				"some",
				"some",
				"some",
				"some",
				"some",
				"some",
				"some",
				"some",
			],
			software: [
				"vscode",
				"firebase",
				"some",
				"some",
				"some",
				"some",
				"some",

				"some",
			],
			abilities: [
				"adaptability",
				"flexibility",
				"some",
				"some",
				"some",
				"some",
			],
		}),
		mounted: function () {},
	};
</script>

<style></style>
