<template>
	<v-container fill-height align-content-center secondary>
		<span class="text-h4 text-md-h2 mx-auto mb-5 mb-md-auto">
			Reach me out
		</span>
		<v-row justify="center">
			<v-col
				align-self="center"
				v-for="(c, i) in contacts"
				:key="i"
				cols="12"
				md="4"
				class="my-5"
			>
				<Contact :contact="c" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		components: { Contact: () => import("@/components/CV/Contact") },
		data: () => ({
			booking: false,
			contacts: [
				{
					title: "email",
					image: "/contacts/mail.webp",
					url: "mailto:dev_mike.k@yahoo.com",
				},
				{
					title: "calendly",
					image: "/contacts/calendly.webp",
					url: "https://calendly.com/dev_mike-k/30min",
				},
				{
					title: "linkedin",
					image: "/contacts/linkedin.webp",
					url: "https://www.linkedin.com/in/dev-mike-k",
				},
			],
		}),
	};
</script>

<style></style>
