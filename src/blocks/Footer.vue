<template>
	<v-footer app color="secondary" style="max-width: 100vw">
		<v-container fluid d-flex>
			<span
				class="mx-auto text-caption text-center primary--text font-italic"
			>
				{{ strippedGDPR }}
				<span
					v-if="$vuetify.breakpoint.smAndDown"
					@click="dialog = true"
					text
					color="primary"
				>
					...see more
				</span>
			</span>
			<v-dialog v-model="dialog" fullscreen>
				<v-card secondary class="d-flex flex-column">
					<v-icon
						color="primary"
						@click="dialog = false"
						class="ml-auto pa-5"
					>
						close
					</v-icon>
					<p class="primary--text text-center px-2">{{ gdpr }}</p>
					<v-btn @click="dialog = false" class="mt-auto">
						got it
					</v-btn>
				</v-card>
			</v-dialog>
		</v-container>
	</v-footer>
</template>

<script>
	export default {
		data: () => ({
			gdpr: "According to the General Data Protection Regulation (GDPR) (EU) 2016/679. Information contained on this website may be privileged or confidential and intended for the exclusive use of the original recipient. If you have visited this website by mistake, please leave the website immediately and delete it from your history. Any information contained on this website are confidential and are intended solely for the use of the individual or entity to whom they are addressed. If you visited this website in error, you must not copy, distribute or disclose of the information it contains.",
			dialog: false,
		}),
		computed: {
			strippedGDPR() {
				if (this.$vuetify.breakpoint.mdAndUp) return this.gdpr;
				return this.gdpr
					.split(" ")
					.map((word, index) => {
						if (index > 8) return "";
						return word;
					})
					.join(" ");
			},
		},
	};
</script>

<style></style>
