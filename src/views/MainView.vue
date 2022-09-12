<template>
	<v-main>
		<MyWork v-if="$route.query.page === 'experience'" />
		<MyStack v-else-if="$route.query.page === 'stack'" />
		<Contact v-else-if="$route.query.page === 'contact'" />
		<About v-else />
	</v-main>
</template>

<script>
	import About from "../blocks/About.vue";
	import MyWork from "../blocks/MyWork.vue";
	import MyStack from "../blocks/MyStack.vue";
	import Contact from "../blocks/Contact.vue";
	export default {
		components: { About, MyWork, MyStack, Contact },
	};
</script>

<style></style>
