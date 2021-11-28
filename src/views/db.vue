<template>
	<v-main>
		<v-row style="max-width:100%">
			<v-row justify="center">
				<v-col cols="5">
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
				<v-col cols="5">
					<v-select
						:items="stages.stages"
						label="select action"
						v-model="stages.currentStage"
					></v-select>
				</v-col>
			</v-row>
			<v-container v-if="isAdmin">
				<p class="text-center" v-if="stages.currentStage === ''">
					Please select something.
				</p>
				<SkillsEditor
					:isAdmin="isAdmin"
					v-if="stages.currentStage === 'skills'"
				/>
				<p v-if="stages.currentStage === 'projects'">
					projects display component
				</p>
			</v-container>
			<v-container v-else>
				<h1>401 Unathorized!</h1>
			</v-container>
		</v-row>
		<!-- TODO: add admnin handlers for skill list and portfolio projects. -->
	</v-main>
</template>

<script>
	import SkillsEditor from "@/components/admin/SkillsEditor";

	import authService from "../utils/auth.js";
	const { signOut } = authService();

	export default {
		data() {
			return {
				isLoading: false,
				stages: {
					currentStage: "",
					stages: ["skills", "projects"],
				},
			};
		},

		computed: {
			// skillTypes() {
			// 	return this.skillSchema.type.split("/");
			// },
			// masteries() {
			// 	return this.skillSchema.mastery.split("/");
			// },
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
		components: { SkillsEditor },
	};
</script>

<style></style>
