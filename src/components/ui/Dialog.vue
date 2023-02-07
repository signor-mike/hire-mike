<template>
	<v-container d-flex flex-column fill-height secondary>
		<v-icon color="primary" @click="$emit('onClose')" class="ml-auto pa-5">
			close
		</v-icon>
		<v-spacer />
		<p class="primary--text text-center px-2">{{ text }}</p>
		<v-spacer />
		<v-btn @click="$emit('onClose')" class="primary--text" outlined>
			got it
			<v-icon>done</v-icon>
		</v-btn>
	</v-container>
</template>

<script>
	export default {
		props: {
			text: String,
		},
	};
</script>
