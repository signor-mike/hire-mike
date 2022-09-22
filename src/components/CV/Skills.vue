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
			{{ stack.title }}
		</span>
		<v-container
			d-flex
			pa-0
			:justify-center="$vuetify.breakpoint.smAndDown"
		>
			<div v-if="isEdit" class="mx-auto">
				<span
					v-for="(item, i) in stack.data"
					:key="i"
					class="px-3 d-block"
				>
					<v-icon color="success darken-3">edit</v-icon>
					{{ item }}
					<v-icon color="error darken-3">delete</v-icon>
				</span>
				<v-btn color="primary">add new</v-btn>
			</div>
			<span
				v-else
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
			stack: Object,
			align: String,
			isEdit: Boolean,
		},
		computed: {
			computedSkills() {
				return this.stack.data
					.map((s, i) => {
						if (i !== this.stack.data.length - 1) return s + ";";
						return s + ".";
					})
					.join(" ");
			},
		},
	};
</script>

<style scoped></style>
