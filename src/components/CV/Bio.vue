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
			<p v-html="formattedText"></p>
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
		computed: {
			computedClasses() {
				let titleClasses;
				let bodyClasses;
				if (this.$vuetify.breakpoint.smAndDown) {
					titleClasses = "text-h5 text-center pb-1";
					bodyClasses = "text-body-1 text-center";
				} else {
					titleClasses = `text-h4 text-${this.textAlign} mb-auto pb-2`;
					bodyClasses = `text-body-1 text-${this.textAlign}`;
				}

				return { titleClasses, bodyClasses };
			},
			formattedText() {
				return this.text
					.replaceAll("\\n\\n", "<br/><br/>")
					.replaceAll("\\n", "<br/>");
			},
		},
	};
</script>

<style scoped>
	span {
		width: 100%;
	}
</style>
