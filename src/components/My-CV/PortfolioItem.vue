<template>
	<v-main class="mx-2">
		<h2>
			<v-icon
				small
				v-if="isAdmin"
				color="success"
				@click="$emit('editProject', item)"
				>edit</v-icon
			>
			{{ item.name }}
			<v-icon
				small
				v-if="isAdmin"
				color="error"
				@click="$emit('deleteProject', item)"
				>close</v-icon
			>
		</h2>
		<v-img width="500" height="300" :src="item.image" contain></v-img>
		<h3>
			<a :href="item.url">{{ item.url }}</a>
		</h3>
		<p>{{ item.description }}</p>
		<p>{{ item.specification }}</p>
		<v-row justify="space-around">
			<v-col v-for="t in mappedTechs" :key="t.id" cols="auto">
				<TechItem :tech="t" />
			</v-col>
		</v-row>
		<v-divider
			class="my-2"
			v-if="$vuetify.breakpoint.smAndDown"
		></v-divider>
	</v-main>
</template>

<script>
	import TechItem from "@/components/TechItem.vue";
	import useTechs from "@/utils/useTechs";
	const { techs } = useTechs();
	export default {
		components: { TechItem },
		data() {
			return {
				techs,
			};
		},
		mounted() {
			//
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
		computed: {
			mappedTechs() {
				let array = [];
				for (let i = 0; i < this.item.techs.length; i++) {
					let tech;
					tech = this.techs.find((t) => t.id === this.item.techs[i]);
					array.push(tech);
				}
				return array;
			},
		},
	};
</script>

<style></style>
