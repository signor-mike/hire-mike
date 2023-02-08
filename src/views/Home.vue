<template>
	<v-container fluid fill-height flex-column class="primary--text">
		<v-btn
			class="ml-auto"
			color="primary"
			outlined
			@click="$router.push('/view?page=about')"
		>
			<v-icon>keyboard_double_arrow_right</v-icon>
		</v-btn>
		<v-spacer />
		<div>
			<v-slide-y-transition
				mode="in-out"
				origin="top center"
				:hide-on-leave="true"
				@after-enter="isReady2 = true"
				:duration="{ enter: 1000, leave: 1000 }"
			>
				<p v-if="isReady" class="text-h4 text-uppercase">Mike K.</p>
			</v-slide-y-transition>

			<v-slide-y-reverse-transition
				mode="out-in"
				@enter="isReady = false"
				:duration="{ enter: 1000, leave: 1000 }"
				:hide-on-leave="true"
				@after-enter="$router.push('/view?page=about')"
			>
				<p v-if="isReady2" class="text-overline">
					Web development for everyone
				</p>
			</v-slide-y-reverse-transition>
		</div>
		<v-spacer />
	</v-container>
</template>

<script>
	export default {
		components: {},
		data: () => ({
			isReady: false,
			isReady2: false,
		}),
		mounted: function () {
			this.$store.commit("SET_NAV_VISIBILITY", false);
			this.isReady = true;
		},
		beforeDestroy() {
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
	};
</script>
