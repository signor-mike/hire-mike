<template>
	<v-container>
		<span
			class="text-h5 d-block"
			:class="{
				'text-center': $vuetify.breakpoint.smAndDown,
				'text-right': align === 'right',
				'text-left': align === 'left',
			}"
		>
			<v-icon v-if="isEdit" color="success darken-3" @click="editTitle">
				edit
			</v-icon>
			{{ stack.title }}
		</span>
		<v-container
			d-flex
			pa-0
			:justify-center="$vuetify.breakpoint.smAndDown"
		>
			<div v-if="isEdit" class="mx-auto">
				<span
					v-for="(item, i) in stack.data"
					:key="i"
					class="px-3 d-block"
				>
					<v-icon
						color="success darken-3"
						@click="editItem(item)"
						:disabled="isLoading"
					>
						{{ isLoading ? "loop" : "edit" }}
					</v-icon>
					{{ item }}
					<v-icon
						color="error darken-3"
						@click="deleteItem(item)"
						:disabled="isLoading"
					>
						{{ isLoading ? "loop" : "delete" }}
					</v-icon>
				</span>
				<v-btn
					color="primary"
					@click="editItem('', true)"
					:loading="isLoading"
				>
					add new
					<v-icon> add </v-icon>
				</v-btn>
			</div>
			<span
				v-else
				class="text-overline"
				:class="{
					'mx-auto text-center': $vuetify.breakpoint.smAndDown,
					'mr-auto text-left': align === 'left',
					'ml-auto text-right': align === 'right',
				}"
			>
				{{ computedSkills }}
			</span>
		</v-container>
		<v-dialog v-model="dialog">
			<v-card class="pa-5">
				<v-text-field
					:label="newValue.type"
					v-model="newValue.value"
				></v-text-field>
				<v-card-actions>
					<v-btn
						color="primary"
						@click="handleSubmit"
						:loading="isLoading"
					>
						save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
	export default {
		props: {
			stack: Object,
			align: String,
			isEdit: Boolean,
		},
		data: () => ({
			newValue: {
				type: "",
				value: null,
				isNew: false,
			},
			itemIndex: 0,
			dialog: false,
			isLoading: false,
		}),
		methods: {
			editTitle() {
				this.dialog = true;
				this.newValue.type = "title";
				this.newValue.value = this.stack.title;
			},
			editItem(item, isNew = false) {
				this.dialog = true;
				this.newValue.type = "data";
				this.newValue.value = item;
				if (!isNew) this.itemIndex = this.stack.data.indexOf(item);
				if (isNew) this.newValue.isNew = isNew;
			},
			async handleSubmit() {
				this.isLoading = true;
				const { type, isNew } = this.newValue;
				let newArray = this.stack.data;
				if (type === "data" && !isNew) {
					newArray[this.itemIndex] = this.newValue.value;
					this.newValue.value = newArray;
				}
				if (type === "data" && isNew) {
					newArray.push(this.newValue.value);
					this.newValue.value = newArray;
				}
				await this.$store.dispatch("updateStack", {
					id: this.stack.id,
					newValue: this.newValue.value,
					type,
				});
				this.newValue = {
					type: "",
					value: null,
					isNew: false,
				};
				this.isLoading = false;
				this.dialog = false;
			},

			async deleteItem(item) {
				this.isLoading = true;
				const newArray = this.stack.data.filter((e) => e !== item);
				await this.$store.dispatch("updateStack", {
					id: this.stack.id,
					newValue: newArray,
					type: "data",
				});
				this.isLoading = false;
			},
		},
		computed: {
			computedSkills() {
				return this.stack.data
					.map((s, i) => {
						if (i !== this.stack.data.length - 1) return s + ";";
						return s + ".";
					})
					.join(" ");
			},
		},
	};
</script>

<style scoped></style>
