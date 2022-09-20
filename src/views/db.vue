<template>
	<v-main>
		<v-row justify="center" style="max-width: 100vw">
			<v-col cols="auto" class="ma-auto">
				<p v-if="$store.state.currentUser">
					{{ $store.state.currentUser.email.split("@")[0] }}
				</p>
				<v-btn
					color="error"
					@click="logout"
					v-if="$store.state.user.loggedIn"
					>logout</v-btn
				>

				<p v-else>please <a href="/auth">login</a></p>
			</v-col>
		</v-row>
		<v-container v-if="isAdmin" mt-5>
			<MyWork v-if="$route.query.page === 'experience'" :isEdit="true" />
			<MyStack v-else-if="$route.query.page === 'stack'" :isEdit="true" />
			<Contacts
				v-else-if="$route.query.page === 'contact'"
				:isEdit="true"
			/>
			<About v-else :isEdit="true" />
		</v-container>
		<v-container v-else>
			<h1>401 Unathorized!</h1>
		</v-container>
	</v-main>
</template>

<script>
	import About from "../blocks/About.vue";
	import MyWork from "../blocks/MyWork.vue";
	import MyStack from "../blocks/MyStack.vue";
	import Contacts from "../blocks/Contacts.vue";

	import authService from "../utils/auth.js";
	const { signOut } = authService();

	export default {
		computed: {
			isAdmin() {
				const { user, currentUser } = this.$store.state;
				return user.data && currentUser.email
					? user.data.email === currentUser.email && user.loggedIn
					: false;
			},
		},
		methods: {
			async logout() {
				await signOut();
				this.$router.push("/auth");
			},
		},
		async mounted() {
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
		components: {
			About,
			MyWork,
			MyStack,
			Contacts,
		},
	};
</script>

<style></style>
