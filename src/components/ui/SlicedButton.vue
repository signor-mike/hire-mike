<!-- eslint-disable vue/no-unused-vars -->
<template>
	<!-- <div class="body"> -->
	<router-link
		:to="`?page=${link.route}`"
		class="text-button primary--text"
		v-slot="{ href, route, navigate, isActive, isExactActive }"
	>
		<a
			class="ma-auto text-center"
			:class="[
				isActive && 'router-link-active',
				isExactActive && 'router-link-exact-active',
			]"
			@click="navigate"
		>
			{{ link.text }}
		</a>
	</router-link>
	<!-- </div> -->
</template>

<script>
	export default {
		props: {
			link: Object,
		},
		computed: {},
	};
</script>

<style scoped>
	.router-link-active,
	.router-link-exact-active {
		cursor: pointer;
		display: block;
	}

	.router-link-active:before,
	.router-link-active:after {
		content: "";
		width: 100%;
		height: 1px;
		display: block;
		background-color: var(--v-primary-base);
		position: relative;
		transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225);
	}
	.router-link-exact-active:before,
	.router-link-exact-active:after {
		width: 0px;
	}
</style>
