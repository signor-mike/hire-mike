<template>
	<v-container d-flex flex-column fill-height secondary fluid>
		<v-icon color="primary" @click="$emit('onClose')" class="ml-auto pa-5">
			close
		</v-icon>
		<v-spacer />
		<p class="mb-0 px-2 d-inline" :class="`${textAlign} ${textColor}`">
			{{ text }}
		</p>
		<v-spacer />
		<v-btn @click="$emit('onClose')" class="primary--text mt-3" outlined>
			{{ buttonText }}
			<v-icon>{{ buttonIcon }}</v-icon>
		</v-btn>
	</v-container>
</template>

<script>
	export default {
		props: {
			text: String,
			textAlign: {
				type: String,
				default: "text-center",
			},
			textColor: {
				type: String,
				default: "primary--text",
			},
			buttonText: {
				type: String,
				default: "got it",
			},
			buttonIcon: {
				type: String,
				default: "done",
			},
		},
	};
</script>
