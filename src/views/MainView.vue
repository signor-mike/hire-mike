<template>
	<v-container fluid fill-height class="pa-0">
		<v-slide-x-transition mode="out-in" :appear="true">
			<MyWork v-if="$route.query.page === 'projects'" />
			<MyStack v-else-if="$route.query.page === 'stack'" />
			<Contacts v-else-if="$route.query.page === 'contact'" />
			<About v-else />
		</v-slide-x-transition>
	</v-container>
</template>

<script>
	export default {
		components: {
			About: () => import("@/blocks/About"),
			MyWork: () => import("@/blocks/MyWork"),
			MyStack: () => import("@/blocks/MyStack"),
			Contacts: () => import("@/blocks/Contacts"),
		},
		mounted: function () {
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
	};
</script>

<style></style>
