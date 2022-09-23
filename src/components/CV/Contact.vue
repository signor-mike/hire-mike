<template>
	<v-container :id="contact.title + '-image'">
		<v-img
			@error="handleError"
			class="mx-auto"
			width="100px"
			:src="contact.image"
			:alt="contact.title"
			@click="redirect"
			style="cursor: pointer"
		/>
	</v-container>
</template>

<script>
	import { getAnalytics, logEvent } from "firebase/analytics";

	export default {
		props: {
			contact: Object,
		},
		methods: {
			redirect() {
				const mailQuery = `
				?subject=[Request] to: Mike K
				&body=Hi Mike,`;
				if (this.contact.url.includes("mailto:"))
					window.open(this.contact.url + mailQuery, "_self");
				else window.open(this.contact.url, "_blank");

				const analytics = getAnalytics();
				logEvent(analytics, "contact_pressed", {
					name: this.contact.url,
				});
			},
			handleError(e) {
				console.log(e);
				document.getElementById(
					this.contact.title + "-image"
				).innerHTML = `
        <a class='d-block text-center'>
        failed to load image, click to contact via ${this.contact.title}
        </a>
        `;
			},
		},
	};
</script>

<style></style>
