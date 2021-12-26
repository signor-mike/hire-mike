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
				<p class="text-center primary--text" v-else>
					Data will be automatically sorted in descending order (by
					date)
				</p>
				<SkillsEditor
					:isAdmin="isAdmin"
					v-if="stages.currentStage === 'skills'"
				/>
				<ProjectEditor
					v-if="stages.currentStage === 'projects'"
					:isAdmin="isAdmin"
				/>
				<TechsEditor
					v-if="stages.currentStage === 'techs'"
					:isAdmin="isAdmin"
				/>
				<EveEditor
					v-if="
						stages.currentStage ===
							'education/experience/voluntering'
					"
					:isAdmin="isAdmin"
					:list="stages.stages[0]"
				/>
				<CvEditor
					v-if="stages.currentStage === 'cv data'"
					:isAdmin="isAdmin"
				/>
			</v-container>
			<v-container v-else>
				<h1>401 Unathorized!</h1>
			</v-container>
		</v-row>
	</v-main>
</template>

<script>
	import SkillsEditor from "@/components/admin/SkillsEditor";
	import ProjectEditor from "../components/admin/ProjectEditor";
	import TechsEditor from "../components/admin/TechsEditor.vue";
	import EveEditor from "../components/admin/EveEditor.vue";
	import CvEditor from "../components/admin/CvEditor.vue";

	import authService from "../utils/auth.js";
	const { signOut } = authService();

	export default {
		data() {
			return {
				isLoading: false,
				stages: {
					currentStage: "",
					stages: [
						"education/experience/voluntering",
						"skills",
						"projects",
						"techs",
						"cv data",
					],
				},
			};
		},

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
		components: {
			SkillsEditor,
			ProjectEditor,
			TechsEditor,
			EveEditor,
			CvEditor,
		},
	};
</script>

<style></style>
