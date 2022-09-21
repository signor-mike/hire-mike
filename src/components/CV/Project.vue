<template>
	<v-card color="secondary lighten-2" :class="computedBorder">
		<v-card-title>
			<span class="text-left">{{ project.company }}</span>
			<div v-if="isEdit" class="mx-auto d-flex">
				<v-icon
					color="success darken-3"
					@click="$emit('editProject', project)"
					:disabled="isLoading"
				>
					{{ isLoading ? "loop" : "edit" }}
				</v-icon>
				<v-divider vertical class="mx-2" />
				<v-icon
					color="error darken-3"
					@click="$emit('deleteProject', project)"
					:disabled="isLoading"
				>
					{{ isLoading ? "loop" : "delete" }}
				</v-icon>
			</div>
			<v-spacer v-else />
			<span class="text-right">{{ project.year }}</span>
		</v-card-title>
		<v-card-subtitle class="d-flex">
			<span class="text-left">{{ project.position }}</span>
			<v-spacer />
			<span
				v-for="(tech, i) in project.techs"
				:key="i"
				class="text-right text-caption px-1"
			>
				{{ tech }}
			</span>
		</v-card-subtitle>
		<v-divider />
		<v-card-text class="d-flex flex-column">
			<a :href="project.project" class="text-center text-overline">
				{{ project.project.replace("https://", "") }}
			</a>
			<v-row dense class="pt-4">
				<v-col
					v-for="(task, i) in project.tasks"
					:key="i"
					cols="6"
					align-self="center"
					class="d-flex"
				>
					<v-container
						d-flex
						class="secondary darken-5"
						:class="{
							'rounded-tl-lg': i === 0,
							'rounded-tr-lg': i === 1,
							'rounded-bl-lg': i === 2,
							'rounded-br-lg': i === 3,
						}"
					>
						<span
							class="px-2"
							:class="{
								'text-left': i % 2 === 0,
								'text-right': i % 2 !== 0,
							}"
						>
							{{ task }}
						</span>
					</v-container>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		props: {
			isEdit: Boolean,
			index: Number,
			isLoading: Boolean,
			project: Object,
		},
		computed: {
			computedBorder() {
				const index = parseInt(this.index);
				if (this.$vuetify.breakpoint.mdAndUp) {
					if (index === 0) return "rounded-tl-xl";
					if (index === 1) return "rounded-tr-xl";
					if (index === 2) return "rounded-bl-xl";
					if (index === 3) return "rounded-br-xl";
				}
				return "rounded-lg";
			},
		},
	};
</script>

<style></style>
