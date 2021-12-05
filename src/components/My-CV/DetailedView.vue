<template>
	<v-sheet
		style="height: 100%"
		class="d-flex flex-column justify-space-between pt-1"
	>
		<p class="text-center">{{ title }}</p>
		<p
			class="d-flex justify-space-between px-2"
			v-for="detail in details.slice(0, 3)"
			:key="detail.id"
		>
			<span>{{ detail.role ? `${detail.role} @ ` : detail.role }}</span>
			<a
				class="mr-auto"
				v-if="detail.url"
				:href="detail.url"
				target="_blank"
			>
				{{
					detail.name.length > 13
						? `${detail.name.slice(0, 14)}...`
						: detail.name
				}}
			</a>

			<span>
				{{ detail.date.length === 2 ? detail.date[1] : detail.date }}
			</span>
		</p>

		<v-dialog v-model="dialog" width="800" scrollable>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					v-if="link"
					@click="pushHistory()"
					color="primary"
					outlined
					>See more...</v-btn
				>
				<v-btn
					v-else
					color="primary"
					outlined
					dark
					v-bind="attrs"
					v-on="on"
				>
					See more...
				</v-btn>
			</template>
			<v-sheet class="text-center px-1" height="100%">
				<h1>My {{ title }}</h1>
				<v-row
					dense
					style="width:100%;"
					v-for="detail in details"
					:key="detail.id"
				>
					<v-col cols="12" md="9" class="text-left">
						<v-divider class="my-1"></v-divider>
						<v-icon
							small
							v-if="isAdmin"
							color="success"
							@click="$emit('editEve', detail)"
							>edit
						</v-icon>
						{{ detail.role }} at
						<a target="_blank" :href="detail.url">
							{{ detail.name }}
						</a>
						<v-icon
							small
							v-if="isAdmin"
							color="error"
							@click="$emit('deleteEve', detail)"
							>close
						</v-icon>
					</v-col>

					<v-col cols="12" md="3" class="text--secondary"
						>{{ `${detail.date[0]} ~ ${detail.date[1]}` }}
					</v-col>

					<v-col
						cols="12"
						md="9"
						v-for="item in detail.things"
						:key="item.i"
					>
						<p class="text-left">- {{ item }}</p>
					</v-col>
				</v-row>
				<v-btn color="primary" outlined @click="dialog = false">
					Thank you Mr. Modal Window
				</v-btn>
			</v-sheet>
		</v-dialog>
	</v-sheet>
</template>

<script>
	export default {
		data() {
			return {
				dialog: false,
				eveSchema: {
					name: "",
					date: [],
					url: "",
					role: "",
					things: [],
				},
			};
		},
		props: {
			details: {
				type: Array,
				default: () => [],
			},
			title: {
				type: String,
				default: "I AM A DEFAULT TITLE PROP PASS ME DOWN",
			},
			link: {
				type: String,
				default: null,
			},
			isAdmin: {
				type: Boolean,
				default: false,
			},
		},
		methods: {
			pushHistory() {
				if (this.link) {
					this.$router.push(this.link);
				}
			},
		},
	};
</script>

<style></style>
