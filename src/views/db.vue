<template>
	<v-main>
		<h1 v-if="skills.length < 1">
			db's loading...
		</h1>
		<v-container d-flex v-else>
			<ul v-if="users.length > 0">
				<li v-for="u in users" :key="u.id">
					{{ `${u.first} ${u.last} was born in ${u.born}` }}
				</li>
			</ul>
			<ul v-if="skills.length > 0">
				<li v-for="s in skills" :key="s.id">
					{{ `${s.title} is a ${s.type} with ${s.mastery}` }}
				</li>
			</ul>
			<v-form @submit.prevent="handleSubmit(skill)" v-if="isAdmin">
				<v-text-field
					:placeholder="skillSchema.title"
					v-model="skill.title"
				></v-text-field>
				<v-autocomplete
					auto-select-first
					:items="skillTypes"
					hide-no-data
					v-model="skill.type"
				></v-autocomplete>
				<v-autocomplete
					auto-select-first
					:items="masteries"
					hide-no-data
					v-model="skill.mastery"
				></v-autocomplete>
				<v-btn :disabled="!isValid" :loading="isLoading" type="submit"
					>add</v-btn
				>
			</v-form>
		</v-container>
		<v-btn @click="logout" v-if="$store.state.user.loggedIn">logout</v-btn>
	</v-main>
</template>

<script>
	import { getUsers } from "../utils/useUsers";
	import useSkills from "../utils/useSkills";
	const { getSkills, addSkill, skillSchema, skills } = useSkills();
	import authService from "../utils/auth.js";
	const { signOut } = authService();

	export default {
		data() {
			return {
				skillSchema,
				isLoading: false,
				users: [],
				skills,
				skill: {
					title: "",
					type: "hard",
					mastery: "",
				},
			};
		},
		mounted() {
			getUsers().then((users) => (this.users = users));
			if (this.skills.length < 1) {
				getSkills().then((skills) => (this.skills = skills));
			}
			const { user, currentUser } = this.$store.state;
			console.log(user.data.email, currentUser.email, user.loggedIn);
		},
		computed: {
			skillTypes() {
				return this.skillSchema.type.split("/");
			},
			masteries() {
				return this.skillSchema.mastery.split("/");
			},
			isValid() {
				let { title, type, mastery } = this.skill;
				return (
					title.length >= 2 &&
					(type === "hard" || type === "soft") &&
					this.masteries.indexOf(mastery) > -1
				);
			},
			isAdmin() {
				const { user, currentUser } = this.$store.state;
				return user.data.email === currentUser.email && user.loggedIn;
			},
		},
		methods: {
			async handleSubmit(param) {
				this.isLoading = true;
				await addSkill(param);
				this.skills.push(param);
				this.isLoading = false;
			},
			async logout() {
				await signOut();
				this.$router.push("/auth");
			},
		},
	};
</script>

<style></style>
