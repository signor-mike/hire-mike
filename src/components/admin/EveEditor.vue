<template>
	<v-container>
		<p>
			education/volunteering/experience display component, isAdmin:
			{{ isAdmin }}
		</p>
		<v-select
			:items="items"
			v-model="selection"
			@change="fetchSelection"
			placeholder="select one"
		></v-select>
		<v-btn v-if="selection !== ''" @click="addEve"
			>Add {{ selection }}</v-btn
		>
		<DetailedView
			v-if="selectedEve && selectedEve.length > 0"
			:details="selectedEve"
			:title="selection"
			:isAdmin="true"
			@editEve="editEve"
			@deleteEve="deleteEve"
		/>

		<v-dialog v-model="dialog" width="500">
			<v-form @submit.prevent="handleSubmit">
				<v-card>
					<v-card-title class="text-h5 primary lighten-1"
						>{{ isEdit ? "Edit" : "Add" }}
						{{ selection }}</v-card-title
					>
					<v-container d-flex flex-column>
						<v-text-field
							v-model="eve.name"
							label="name"
							placeholder="school/job/place"
						></v-text-field>
						<v-date-picker
							class="mx-auto"
							v-model="date"
							type="month"
							range
							@change="dateConverter"
							v-if="eve.date.length === 0"
						></v-date-picker>
						<v-btn v-else color="warning" @click="eve.date = []"
							>EDIT:
							{{
								`${this.eve.date[0]}~${this.eve.date[1]}`
							}}</v-btn
						>
						<v-text-field
							v-model="eve.url"
							label="url to website"
							placeholder="https://www.example.com"
						></v-text-field>
						<v-text-field
							v-model="eve.role"
							label="role"
							placeholder="student/teacher/etc"
						></v-text-field>
						<v-combobox
							chips
							v-model="eve.things"
							label="add responsibilities"
							multiple
							clearable
						></v-combobox>
					</v-container>
					<v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							:disabled="!isValid"
							:outlined="!isValid"
							:loading="isLoading"
							color="primary"
							type="submit"
						>
							save
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-form>
			<!--  DATA SAMPLE
				name: "school/job/place",
				date: "Date",
				url: "URL",
				role: "Role",
				things: ["array", "of", "responsibilities"], 
			-->
		</v-dialog>
	</v-container>
</template>

<script>
	import useEVE from "@/utils/useEVE";
	import DetailedView from "../My-CV/DetailedView.vue";
	const { eves, eveSchema, getEves, addEve, editEve, deleteEve } = useEVE();
	export default {
		props: {
			isAdmin: {
				type: Boolean,
				default: false,
			},
			list: {
				type: String,
				default: "",
			},
		},
		computed: {
			items() {
				return this.list.split("/");
			},
			isValid() {
				const { name, date, url, role, things } = this.eve;
				return (
					name !== "" &&
					date !== null &&
					url !== "" &&
					role !== "" &&
					things.length > 0
				);
			},
		},
		methods: {
			async fetchSelection() {
				this.selectedEve = [];
				if (this.selection !== "") {
					this.selectedEve = await getEves(this.selection);
				}
			},
			dateConverter() {
				let arrayOfDates = [];
				for (let i = 0; i < this.date.length; i++) {
					let newDate = new Date(this.date[i]);
					arrayOfDates.push(
						newDate.toLocaleDateString("en-US", {
							year: "numeric",
							month: "short",
						})
					);
				}
				this.eve.date = arrayOfDates;
			},
			async handleSubmit() {
				this.isLoading = true;
				const isEdit = this.selectedEve.find(
					(e) => e.id === this.eve.id
				);
				if (isEdit) {
					await editEve(this.selection, this.eve);
				} else {
					console.log("falling into creating");
					const newEve = await addEve(this.selection, this.eve);
					this.selectedEve.push(newEve);
				}
				this.selectedEve = await getEves(this.selection);
				this.eve = eveSchema;
				this.isLoading = false;
				this.dialog = false;
			},
			async addEve() {
				this.dialog = true;
				this.eve = eveSchema;
				this.isEdit = false;
			},
			async editEve(eve) {
				this.eve = eve;
				this.isEdit = true;
				this.dialog = true;
				console.log(`eve to edit: ${eve.id}, ${eve.name}`);
			},
			async deleteEve(eve) {
				await deleteEve(this.selection, eve);
				this.selectedEve = this.selectedEve.filter(
					(e) => e.id !== eve.id
				);
			},
		},
		data() {
			return {
				eves,
				eveSchema,
				eve: { name: "", date: [], url: "", role: "", things: [] },
				selection: "",
				selectedEve: [],
				dialog: false,
				date: null,
				isLoading: false,
				isEdit: false,
			};
		},
		components: { DetailedView },
	};
</script>

<style></style>
