<template>
	<v-container fluid fill-height>
		<span :class="computedClasses.titleClasses">
			<v-icon
				v-if="isEdit"
				color="success"
				@click="$emit('editBio', { title })"
				>edit</v-icon
			>
			{{ title }}
		</span>
		<br />
		<span :class="computedClasses.bodyClasses">
			<v-icon
				v-if="isEdit"
				color="success"
				@click="$emit('editBio', { text })"
				>edit</v-icon
			>
			{{ text }}
		</span>
	</v-container>
</template>

<script>
	export default {
		props: {
			title: String,
			text: String,
			textAlign: String,
			isEdit: Boolean,
		},
		data: () => ({
			// dialog: false,
		}),
		computed: {
			computedClasses() {
				let titleClasses;
				let bodyClasses;
				if (this.$vuetify.breakpoint.smAndDown) {
					titleClasses = "text-h5 text-center pb-1";
					bodyClasses = "text-body-1 text-center";
				} else {
					titleClasses = `text-h4 text-${this.textAlign}`;
					bodyClasses = `text-body-1 text-${this.textAlign}`;
				}

				return { titleClasses, bodyClasses };
			},
		},
	};
</script>

<style scoped>
	span {
		width: 100%;
	}
</style>
