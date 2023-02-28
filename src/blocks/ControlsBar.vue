<template>
	<v-app-bar app fixed flat color="secondary">
		<v-dialog v-model="dialogs.gdpr" fullscreen>
			<Dialogue :text="gdpr" @onClose="dialogs.gdpr = false" />
		</v-dialog>

		<v-dialog v-model="dialogs.info" fullscreen>
			<Dialogue :text="info" @onClose="dialogs.info = false" />
		</v-dialog>

		<v-row
			align="center"
			justify="space-between"
			class="mx-auto text-center"
		>
			<v-col cols="3">
				<v-btn icon @click="$router.push('/')" color="primary">
					<v-icon large> home </v-icon>
				</v-btn>
			</v-col>

			<v-col cols="3">
				<SeeMoreButton :text="$store.state.gdpr" icon="privacy_tip" />
			</v-col>

			<v-col cols="3">
				<SeeMoreButton :text="$store.state.info" icon="info" />
			</v-col>

			<v-col cols="3">
				<ThemeToggler />
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script>
	export default {
		components: {
			ThemeToggler: () => import("@/components/ThemeToggler"),
			Dialogue: () => import("@/components/ui/Dialog"),
			SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
		},
		// TODO: info button should show description of THIS project
	};
</script>

<style></style>
