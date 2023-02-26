<template>
	<v-main class="px-2 py-3 d-flex flex-column">
		<v-row justify="space-around" align="center" style="max-width: 100vw">
			<v-col cols="auto">
				<p v-if="$store.state.currentUser" class="mb-0 my-auto">
					{{ $store.state.currentUser.email.split("@")[0] }}
				</p>
				<p v-else>please <a href="/auth">login</a></p>
			</v-col>
			<v-col cols="auto">
				<v-btn
					color="error"
					@click="logout"
					v-if="$store.state.user.loggedIn"
				>
					logout
				</v-btn>
			</v-col>
		</v-row>
		<v-divider class="my-3" />
		<v-container v-if="$store.getters.isAdmin">
			<p class="ma-auto">
				this functionality has been ditched due to its uselessness
			</p>
		</v-container>
		<v-container v-else>
			<h1>401 Unathorized!</h1>
		</v-container>
	</v-main>
</template>

<script>
	import authService from "../utils/auth.js";
	const { signOut } = authService();

	export default {
		components: {},
		computed: {},
		methods: {
			async logout() {
				await signOut();
				this.$router.push("/auth");
			},
		},
		async mounted() {
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
	};
</script>

<style></style>
