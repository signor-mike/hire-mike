<template>
	<v-container fluid d-flex flex-column>
		<v-row style="width: 100%" class="mx-auto" v-if="!isLoading">
			<v-col cols="auto" sm="12" md="6">
				<v-container d-flex justify-space-between px-0>
					<span class="text-overline">
						<v-icon
							small
							v-if="isAdmin"
							color="success"
							@click="$emit('editProject', item)"
						>
							edit
						</v-icon>
						{{ item.name }}
						<v-icon
							small
							v-if="isAdmin"
							color="error"
							@click="$emit('deleteProject', item)"
						>
							close
						</v-icon>
					</span>
					<v-btn text :href="item.github" target="_blank">
						<v-icon color="primary">mdi-github</v-icon>
					</v-btn>
				</v-container>
				<v-img
					@click="expandImage"
					max-height="500"
					:src="item.image"
					contain
				></v-img>
			</v-col>

			<v-col cols="auto" sm="12" md="6" align-self="center">
				<v-card class="my-auto">
					<v-card-title>
						<a class="text-overline mx-auto" :href="item.url">{{
							item.url
						}}</a>
					</v-card-title>

					<v-card-text class="text-center">
						<p>{{ item.date }}</p>
						<p>{{ item.description }}</p>
						<p>{{ item.specification }}</p>
					</v-card-text>

					<v-spacer></v-spacer>
					<v-card-actions>
						<v-row justify="space-around">
							<v-col
								v-for="t in mappedTechs.slice(0, 2)"
								:key="t.i"
								cols="auto"
							>
								<TechItem :tech="t" />
							</v-col>
							<v-col
								class="d-flex flex-column"
								v-if="mappedTechs.length > 2"
								cols="auto"
								align-self="center"
								@click="techDialog = true"
							>
								<v-icon x-large>mdi-dots-horizontal</v-icon>
								<span class="text-overline text--disabled"
									>More...</span
								>
							</v-col>
						</v-row>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-skeleton-loader v-else type="paragraph@2"></v-skeleton-loader>
		<v-dialog v-model="dialog">
			<v-img :src="item.image" contain></v-img>
		</v-dialog>
		<v-dialog v-model="techDialog">
			<v-card>
				<v-card-title class="text-center d-flex justify-space-around">
					<span>{{ item.name }}</span>
					<a :href="item.url">{{ item.url }}</a>
				</v-card-title>
				<v-card-text>
					<v-row justify="space-around">
						<v-col v-for="t in mappedTechs" :key="t.i" cols="auto">
							<TechItem :tech="t" />
						</v-col>
					</v-row>
				</v-card-text>
			</v-card>
		</v-dialog>
		<v-divider
			class="mt-4"
			v-if="$vuetify.breakpoint.smAndDown"
		></v-divider>
	</v-container>
</template>

<script>
	import TechItem from "@/components/TechItem.vue";
	import useTechs from "@/utils/useTechs";
	const { techs, getTechs } = useTechs();
	export default {
		components: { TechItem },
		data() {
			return {
				techs,
				dialog: false,
				techDialog: false,
				isLoading: true,
			};
		},
		async mounted() {
			await getTechs();
			this.isLoading = false;
		},
		props: {
			item: {
				type: Object,
				required: true,
			},
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			expandImage() {
				this.dialog = true;
			},
		},
		computed: {
			mappedTechs() {
				let array = [];
				if (this.$store.state.techs.length > 0) {
					for (let i = 0; i < this.item.techs.length; i++) {
						let tech;
						tech = this.$store.state.techs.find(
							(t) => t.id === this.item.techs[i]
						);
						array.push(tech);
					}
					return array;
				} else {
					return [];
				}
			},
		},
	};
</script>

<style></style>
