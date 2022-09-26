<template>
	<v-container fluid fill-height class="pa-0" id="gradient">
		<MyWork v-if="$route.query.page === 'experience'" />
		<MyStack v-else-if="$route.query.page === 'stack'" />
		<Contacts v-else-if="$route.query.page === 'contact'" />
		<About v-else />
	</v-container>
</template>

<script>
	import About from "../blocks/About.vue";
	import MyWork from "../blocks/MyWork.vue";
	import MyStack from "../blocks/MyStack.vue";
	import Contacts from "../blocks/Contacts.vue";
	export default {
		components: { About, MyWork, MyStack, Contacts },
		data: () => ({
			degrees: 0,
		}),
		methods: {},
		updated: function () {
			const { page } = this.$route.query;
			if (page === "experience") this.degrees = 120;
			if (page === "stack") this.degrees = 220;
			if (page === "contact") this.degrees = 320;
			if (page === "about") this.degrees = 60;
		},
		mounted: function () {
			this.$store.commit("SET_NAV_VISIBILITY", true);
			if (this.$vuetify.theme.dark && this.$vuetify.breakpoint.mdAndUp)
				setInterval(() => {
					this.degrees += 1;
					document.getElementById(
						"gradient"
					).style.background = `conic-gradient(from ${this.degrees}deg
		         at ${this.computedXY},
		         ${this.computedPallete})`;
					if (this.degrees >= 360) this.degrees = 0;
				}, 25);
		},
		computed: {
			computedPallete() {
				const { dark, light } = this.$vuetify.theme.themes;
				return this.$vuetify.theme.dark
					? `#ebf8e1, 10deg, ${dark.primary}, 45deg, transparent, 315deg, ${light.primary}, #ebf8e1`
					: `#ebf8e1, 10deg, ${light.primary}, 45deg, transparent, 315deg, ${dark.primary}, #ebf8e1`;
			},
			computedXY() {
				const { page } = this.$route.query;
				switch (page) {
					case "experience":
						return "100% 0%";
					case "stack":
						return "100% 100%";
					case "contact":
						return "0% 100%";
					default:
						return "0% 0%";
				}
			},
		},
	};
</script>

<style></style>
