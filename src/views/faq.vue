<template>
	<v-container :style="customWidth">
		<p class="text-center text-h5">
			If you're lacking a sense of humor please don't touch anything and
			leave the page immediately.
		</p>
		<v-expansion-panels>
			<v-expansion-panel v-for="q in questions" :key="q.i">
				<v-expansion-panel-header class="text-button primary--text">
					{{ q.header }}
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<Question :question="q" />
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<p class="text-center text-h5">
			If you have any suggestions please hit me up using any of the
			provided contacts on homepage or via a contact form.
		</p>
	</v-container>
</template>

<script>
	import Question from "@/components/Question";
	export default {
		components: {
			Question,
		},
		data() {
			return {
				questions: [
					{
						id: "uniqueness",
						header: "what makes you unique?",
						answer: "/faq/unique.png",
						hint: "any name, one word",
					},
					{
						id: "fiveYears",
						header: "Where do you see yourself in five years time?",
						answer: "/faq/five-years.png",
						hint:
							"are you willing to employ me? either true or false",
					},
					{
						id: "whyHire",
						header: "Why should I hire you?",
						answer: "/faq/why-hire.png",
						hint:
							"does your company currently hiring? either true or false",
					},
					{
						id: "whyThisJob",
						header: "Why do you want this job?",
						answer: "/faq/why-this-job.png",
						hint:
							"provide salary (per month), as a number. Without dots/commas.",
					},
					{
						id: "compensation",
						header: "What are your salary expectations?",
						answer: "/faq/compensation.png",
						hint:
							"provide your budget, as a number. Without dots/commas.",
					},
				],
			};
		},
		computed: {
			customWidth() {
				return this.$vuetify.breakpoint.smAndDown
					? { width: "100%" }
					: this.$vuetify.breakpoint.mdAndDown
					? { width: "80%" }
					: { width: "60%" };
			},
		},
	};
</script>

<style></style>
