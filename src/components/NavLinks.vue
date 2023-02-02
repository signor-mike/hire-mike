<template>
	<v-container>
		<v-row no-gutters justify="center" align="center">
			<v-col
				cols="3"
				class="d-flex"
				v-for="link in links"
				:key="link.text"
			>
				<v-btn
					class="pa-0 ma-auto primary--text font-weight-bold"
					color="primary"
					:x-small="$vuetify.breakpoint.smAndDown"
					text
					@click="$router.push(`?page=${link.route}`)"
				>
					{{ link.text }}
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		props: {
			links: Array,
		},
		data: () => ({}),
	};
</script>

<style></style>
