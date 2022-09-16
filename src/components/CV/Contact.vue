<template>
	<v-container>
		<a :href="contact.url" target="_blank" :id="contact.title + '-image'">
			<v-img
				@error="handleError"
				tag="a"
				class="mx-auto"
				width="100px"
				:src="contact.image"
				:alt="contact.title"
			/>
		</a>
	</v-container>
</template>

<script>
	export default {
		props: {
			contact: Object,
		},
		methods: {
			handleError(e) {
				console.log(e);
				document.getElementById(
					this.contact.title + "-image"
				).innerHTML = `
        <p class='text-center'>
        failed to load image, click to contact via ${this.contact.title}
        </p>
        `;
			},
		},
	};
</script>

<style></style>
