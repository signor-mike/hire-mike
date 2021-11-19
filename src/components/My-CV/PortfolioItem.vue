<template>
	<v-main class="mx-2">
		<h2>
			{{ item.name }}
		</h2>
		<v-img width="500" height="300" :src="item.image" contain></v-img>
		<h3>
			<a :href="item.url">{{ item.url }}</a>
		</h3>
		<p>{{ item.description }}</p>
		<p>{{ item.specification }}</p>
		<v-row justify="space-around">
			<v-col v-for="i in item.techs" :key="i.i" cols="auto">
				<v-img :src="i" width="50"></v-img>
			</v-col>
		</v-row>
		<v-divider class="my-2" v-if="$vuetify.breakpoint.smAndDown"></v-divider>
	</v-main>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true,
			},
		},
		methods: {
			//
		},
	};
</script>

<style></style>
