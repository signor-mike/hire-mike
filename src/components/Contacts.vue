<template>
	<v-tooltip bottom>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				v-bind="attrs"
				v-on="on"
				text
				:large="$vuetify.breakpoint.mdAndUp"
				:x-small="$vuetify.breakpoint.smAndDown"
				:href="contact.link"
				target="_blank"
			>
				<v-icon
					color="primary"
					:medium="$vuetify.breakpoint.smAndDown"
					:class="{ 'mx-3': $vuetify.breakpoint.smAndDown }"
				>
					{{ contact.icon }}
				</v-icon>
			</v-btn>
		</template>
		<span>{{ contact.title }}</span>
	</v-tooltip>
</template>

<script>
	export default {
		props: {
			contact: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style>
	a {
		text-decoration: none;
	}
</style>
