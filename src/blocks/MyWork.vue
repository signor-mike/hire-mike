<template>
	<v-container fill-height align-content-center class="secondary">
		<span class="text-h4 text-md-h2 mx-auto mb-md-auto"> See my work </span>
		<v-row>
			<v-col v-for="(n, i) in 4" :key="n" cols="12" md="6">
				<Project :index="i" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import Project from "@/components/CV/Project";
	export default {
		components: { Project },
	};
</script>

<style></style>
