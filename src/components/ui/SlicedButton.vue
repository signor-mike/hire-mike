<!-- eslint-disable vue/no-unused-vars -->
<template>
	<!-- <div class="body"> -->
	<router-link
		:to="`?page=${link.route}`"
		class="text-button primary--text"
		v-slot="{ href, route, navigate, isActive, isExactActive }"
	>
		<p
			class="ma-auto"
			:class="[
				isActive && 'router-link-active',
				isExactActive && 'router-link-exact-active',
			]"
			@click="navigate"
		>
			{{ link.text }}
		</p>
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
	/* 
.router-link-active - all links on the screen
.router-link-exact-active - current route
*/
	.router-link-active,
	.router-link-exact-active {
		cursor: pointer;
		display: block;
	}

	.router-link-active:before {
		content: "";
		width: 100%;
		height: 1px;
		display: block;
		background-color: var(--v-primary-base);
		position: relative;
		top: 50%;
		transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225);
	}
	.router-link-exact-active:before {
		width: 0px;
	}
</style>
<!-- <style scoped>
	/* 
.router-link-active - all links on the screen
.router-link-exact-active - current route
*/
	/*--Button Styles--*/

	.btn-slice .top {
		position: relative;
		height: 1rem;
		overflow: hidden;
		top: -0.3rem;
		transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */
		transition-delay: 0.35s;
	}

	.btn-slice .bottom {
		position: relative;
		height: 1rem;
		overflow: hidden;
		bottom: -0.3rem;
		transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */
		transition-delay: 0.35s;
	}

	.btn-slice .bottom span {
		top: -1rem;
		position: relative;
	}

	.router-link-active {
		cursor: pointer;
		transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */
		transition-timing-function: cubic-bezier(
			0.89,
			-0.17,
			0.14,
			1.225
		); /* custom */
	}
	.router-link-exact-active .top {
		top: 0;
		transition-delay: 0.35s;
	}

	.router-link-exact-active .bottom {
		bottom: 0;
		transition-delay: 0.35s;
	}


</style> -->
