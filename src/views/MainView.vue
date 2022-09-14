<template>
	<v-container fluid fill-height class="pa-0" id="gradient">
		<MyWork v-if="$route.query.page === 'experience'" />
		<MyStack v-else-if="$route.query.page === 'stack'" />
		<Contact v-else-if="$route.query.page === 'contact'" />
		<About v-else />
	</v-container>
</template>

<script>
	import About from "../blocks/About.vue";
	import MyWork from "../blocks/MyWork.vue";
	import MyStack from "../blocks/MyStack.vue";
	import Contact from "../blocks/Contact.vue";
	export default {
		components: { About, MyWork, MyStack, Contact },
		data: () => ({
			counter: 0,
		}),
		mounted: function () {
			setInterval(() => {
				this.counter = this.counter + 1;
				document.getElementById(
					"gradient"
				).style.background = `conic-gradient(from ${this.counter}deg at 50% 50%, ${this.computedPallete})`;
				if (this.counter >= 360) this.counter = 0;
			}, 25);
		},
		computed: {
			computedPallete() {
				const { dark, light } = this.$vuetify.theme.themes;
				return this.$vuetify.theme.dark
					? `#ebf8e1, 10deg, ${dark.primary}, 45deg, transparent, 315deg, ${light.primary}, #ebf8e1`
					: `#ebf8e1, 10deg, ${light.primary}, 45deg, transparent, 315deg, ${dark.primary}, #ebf8e1`;
			},
		},
	};
</script>

<style>
	span.title {
		position: relative;
		top: 0px;
	}
</style>
