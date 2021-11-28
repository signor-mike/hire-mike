<template>
	<v-main>
		<v-container d-flex flex-column style="max-width: 80vw">
			<!-- <h1 v-if="currentUser">current user: {{ currentUser }}</h1> -->
			<p
				v-if="error.isError && error.status && error.text"
				:class="{ 'error--text': $vuetify.theme.dark }"
				class="text-center"
			>
				{{ `${error.status} | ${error.text}` }}
			</p>
			<v-text-field
				v-model="credentials.email"
				type="email"
				placeholder="email"
			></v-text-field>
			<v-text-field
				v-model="credentials.password"
				type="password"
				placeholder="password"
			></v-text-field>
			<v-btn v-if="!currentUser" @click="login" :loading="isLoading"
				>login</v-btn
			>
			<v-btn class="mx-auto" v-if="currentUser" @click="logout"
				>logout</v-btn
			>
		</v-container>
	</v-main>
</template>

<script>
	import authService from "@/utils/auth.js";
	const { signIn, authCheck, signOut } = authService();
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				isLoading: false,
				credentials: {
					email: "",
					password: "",
				},
				error: {
					isError: false,
					status: null,
					text: null,
				},
			};
		},
		mounted() {
			this.isLogged();
		},
		methods: {
			async login() {
				try {
					this.isLoading = true;
					const user = await signIn(
						this.credentials.email,
						this.credentials.password
					);
					if (user) {
						this.$router.push("/db");
					}
				} catch (error) {
					this.error.isError = true;
					this.error.status = error.code;
					this.error.text = error.message;
				} finally {
					this.isLoading = false;
				}
			},
			async isLogged() {
				try {
					await authCheck();
					const { data, loggedIn } = this.user;

					if (
						data &&
						loggedIn &&
						data.email === this.$store.state.currentUser.email
					) {
						this.$router.push("/db");
					} else {
						console.log("current user is missing. Please login.");
					}
				} catch (error) {
					console.log(`${error.code} | ${error.message}`);
				}
			},
			async logout() {
				await signOut();
			},
		},
		computed: {
			// map `this.user` to `this.$store.getters.user`
			...mapGetters({
				user: "user",
			}),
			currentUser() {
				return this.user.data ? this.user.data.email : null;
			},
		},
	};
</script>

<style></style>
