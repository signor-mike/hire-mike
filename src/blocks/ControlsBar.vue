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
					<v-icon> home </v-icon>
				</v-btn>
			</v-col>

			<v-col cols="3">
				<v-btn color="primary" icon @click="dialogs.gdpr = true">
					<v-icon> privacy_tip </v-icon>
				</v-btn>
			</v-col>

			<v-col cols="3">
				<v-btn color="primary" icon @click="dialogs.info = true">
					<v-icon> info </v-icon>
				</v-btn>
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
		},
		data: () => ({
			gdpr: "According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history. Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains.",
			info: "This website is designed within mobile-first approach",
			dialogs: { gdpr: false, info: false },
		}),
	};
</script>

<style></style>
