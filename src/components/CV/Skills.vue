<template>
	<v-container>
		<span
			class="text-h5 d-block"
			:class="{
				'text-center': $vuetify.breakpoint.smAndDown,
				'text-right': align === 'right',
				'text-left': align === 'left',
			}"
		>
			<v-icon v-if="isEdit" color="success darken-3">edit</v-icon>
			{{ title }}
		</span>
		<v-container
			d-flex
			pa-0
			:justify-center="$vuetify.breakpoint.smAndDown"
		>
			<span
				class="text-overline"
				:class="{
					'mx-auto text-center': $vuetify.breakpoint.smAndDown,
					'mr-auto': align === 'left',
					'ml-auto': align === 'right',
				}"
			>
				{{ computedSkills }}
			</span>
		</v-container>
	</v-container>
</template>

<script>
	export default {
		props: {
			skills: Array,
			title: String,
			align: String,
			isEdit: Boolean,
			id: String,
		},
		computed: {
			computedSkills() {
				return this.skills
					.map((s, i) => {
						if (i !== this.skills.length - 1) return s + ";";
						return s + ".";
					})
					.join(" ");
			},
		},
	};
</script>

<style></style>
