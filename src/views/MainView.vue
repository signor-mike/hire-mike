<template>
	<v-slide-x-transition mode="out-in" :appear="true">
		<About
			v-if="$route.query.page === 'about'"
			:title="$store.state.aboutTitle"
		/>
		<MyWork
			v-else-if="$route.query.page === 'projects'"
			:title="$store.state.projectsTitle"
		/>
		<MyStack v-else-if="$route.query.page === 'stack'" />
		<Contacts v-else-if="$route.query.page === 'contact'" />
		<NotFound v-else />
	</v-slide-x-transition>
</template>

<script>
	export default {
		components: {
			About: () => import("@/blocks/About"),
			MyWork: () => import("@/blocks/MyWork"),
			MyStack: () => import("@/blocks/MyStack"),
			Contacts: () => import("@/blocks/Contacts"),
			NotFound: () => import("@/views/NotFound"),
		},
		mounted: function () {
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
	};
</script>

<style></style>
