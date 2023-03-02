<template>
	<v-card>
		<v-card-title
			class="d-flex justify-space-between primary--text text-uppercase"
		>
			<a :href="contact.href" target="_blank" class="text-overline">
				{{ contact.title }}
			</a>
			<a :href="contact.href" target="_blank">
				<v-icon color="primary">open_in_new</v-icon>
			</a>
		</v-card-title>
		<v-divider />
		<v-card-text class="d-flex">
			<v-spacer />
			<v-btn icon :href="contact.href" target="_blank">
				<v-icon color="secondary lighten-3">
					{{ contact.icon }}
				</v-icon>
			</v-btn>
			<span class="text--secondary mx-2 my-auto">
				{{ contact.href }}
			</span>
			<v-spacer />
		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		props: {
			contact: Object,
		},
	};
</script>
