<template>
	<v-container fill-height align-content-center>
		<span class="text-h4 text-md-h2 mx-auto mb-5 mb-md-auto">
			Reach me out
		</span>
		<Contact contact="foobar" />
	</v-container>
</template>

<script>
	import Contact from "../components/CV/Contact.vue";
	export default {
		components: { Contact },
	};
</script>

<style></style>
