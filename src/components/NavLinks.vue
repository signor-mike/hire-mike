<template>
	<v-container>
		<v-row dense>
			<v-col v-for="link in links" :key="link.text" cols="6" md="2">
				<v-btn
					:class="{
						'secondary--text':
							$route.query.page === link.route &&
							$vuetify.theme.dark,
					}"
					color="primary"
					:outlined="$route.query.page === link.route ? false : true"
					:x-small="$vuetify.breakpoint.smAndDown"
					block
					@click="$router.push(`/?page=${link.route}`)"
				>
					{{ link.text }}
				</v-btn>
			</v-col>
			<v-spacer />
			<v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" class="d-flex">
				<v-icon @click="$router.push('/export')" class="ma-auto"
					>print</v-icon
				>
			</v-col>
			<v-spacer />
		</v-row>
	</v-container>
</template>

<script>
	export default {
		props: {
			links: Array,
		},
	};
</script>

<style></style>
