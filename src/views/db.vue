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
			<!-- <p class="text-center" v-if="stages.currentStage === ''">
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
				/> -->
		</v-container>
		<v-container v-else>
			<h1>401 Unathorized!</h1>
		</v-container>
	</v-main>
</template>

<script>
	// import SkillsEditor from "@/components/admin/SkillsEditor";
	// import ProjectEditor from "../components/admin/ProjectEditor";
	// import TechsEditor from "../components/admin/TechsEditor.vue";
	// import EveEditor from "../components/admin/EveEditor.vue";
	// import CvEditor from "../components/admin/CvEditor.vue";
	import About from "../blocks/About.vue";
	import MyWork from "../blocks/MyWork.vue";
	import MyStack from "../blocks/MyStack.vue";
	import Contacts from "../blocks/Contacts.vue";

	import authService from "../utils/auth.js";
	const { signOut } = authService();

	export default {
		data() {
			return {
				isLoading: false,
				stages: {
					currentStage: "",
					stages: ["about", "my-work", "my-stack", "contacts"],
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
		async mounted() {
			this.$store.commit("SET_NAV_VISIBILITY", true);
			await this.$store.dispatch("fetchBio");
		},
		components: {
			About,
			MyWork,
			MyStack,
			Contacts,
			// SkillsEditor,
			// ProjectEditor,
			// TechsEditor,
			// EveEditor,
			// CvEditor,
		},
	};
</script>

<style></style>
