<template>
	<v-main class="pt-1 text-center">
		<v-container :pb-4="$vuetify.breakpoint.smAndDown">
			<div v-if="$vuetify.breakpoint.mdAndUp">
				<h1>Mikhail (Mike) Krivoshchekov</h1>
				<h3>Fullstack developer</h3>
			</div>
			<div v-else>
				<h1>Mike K</h1>
				<h3>Fullstack developer</h3>
			</div>
		</v-container>

		<v-row justify="center">
			<v-col
				cols="auto"
				v-if="$vuetify.breakpoint.mdAndUp"
				class="my-auto"
			>
				<v-btn text router to="/print" target="_blank">
					<v-icon>print</v-icon>
				</v-btn>
			</v-col>
			<v-col v-for="contact in contacts" :key="contact.i" cols="auto">
				<Contacts :contact="contact" />
			</v-col>
		</v-row>
	</v-main>
</template>

<script>
	import Contacts from "../Contacts.vue";
	export default {
		components: { Contacts },
		computed: {
			contacts() {
				return this.$store.state.contacts;
			},
		},
	};
</script>

<style>
	a {
		text-decoration: none;
	}
</style>
