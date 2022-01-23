<template>
	<v-row style="max-width: 100%;" class="mx-auto">
		<v-col cols="6" class="d-flex flex-column justify-center">
			<v-form @submit.prevent="handleExecute(question.id)">
				<v-text-field
					v-model="inputValue"
					label="provide input"
					:hint="question.hint"
				></v-text-field>
				<v-btn
					color="primary"
					outlined
					:disabled="!isValid"
					type="submit"
					>execute
				</v-btn>
			</v-form>
		</v-col>
		<v-col cols="6" class="d-flex">
			<v-img
				style="cursor:pointer"
				@click="dialog = true"
				contain
				class="ma-auto"
				:src="question.answer"
			></v-img>
		</v-col>
		<p
			class="mx-auto text-center text-overline primary--text"
			v-if="isResolved"
		>
			Output: <br />
			{{ output }}
		</p>
		<v-dialog v-model="dialog">
			<v-card>
				<v-img :src="question.answer"></v-img>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
	import questions from "@/utils/questions";
	const {
		uniqueApplicant,
		fiveYears,
		whyHire,
		whyThisJob,
		compensation,
	} = questions();
	export default {
		props: {
			question: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				inputValue: "",
				isResolved: false,
				output: "",
				dialog: false,
			};
		},
		computed: {
			isValid() {
				return this.inputValue.length > 0;
			},
		},
		methods: {
			handleExecute(questionId) {
				this.isResolved = true;
				switch (questionId) {
					case "uniqueness":
						this.output = uniqueApplicant(this.inputValue);
						break;

					case "fiveYears":
						this.output = fiveYears(this.inputValue);
						break;

					case "whyHire":
						this.output = whyHire(this.inputValue);
						break;

					case "whyThisJob":
						this.output = whyThisJob(this.inputValue);
						break;

					case "compensation":
						this.output = compensation(this.inputValue);
						break;

					default:
						console.log("incorrent input");
						break;
				}
			},
		},
	};
</script>

<style></style>
