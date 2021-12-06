<template>
	<!-- eslint-disable no-mixed-spaces-and-tabs -->
	<v-sheet
		style="height: 100%"
		class="d-flex flex-column justify-space-between pt-1"
	>
		<p class="text-center">{{ title }}</p>
		<v-skeleton-loader
			v-if="details.length === 0"
			type="paragraph@2"
		></v-skeleton-loader>
		<p
			class="d-flex justify-space-between px-2"
			v-for="detail in details.slice(0, 3)"
			:key="detail.id"
		>
			<span>
				{{
					detail.role
						? detail.role.length > 9 &&
						  !isAdmin &&
						  $vuetify.breakpoint.lgAndDown
							? `${detail.role.slice(0, 10)}... `
							: `${detail.role} `
						: ""
				}}
			</span>
			<a
				:class="{ 'ml-auto pr-2': !link, 'mr-auto': link }"
				v-if="detail.url"
				:href="detail.url"
				target="_blank"
			>
				{{
					detail.name.length > 14 &&
					!isAdmin &&
					$vuetify.breakpoint.lgAndDown
						? link
							? detail.name
							: `${detail.name.slice(0, 15)}...`
						: detail.name
				}}
			</a>

			<span class="text-right">
				{{
					detail.date.length === 2
						? detail.date[0] === detail.date[1]
							? `${detail.date[1]}~`
							: detail.date[1]
						: detail.date
				}}
			</span>
		</p>

		<v-dialog v-model="dialog" width="1000" scrollable>
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
						>{{
							detail.date[0] === detail.date[1]
								? `${detail.date[1]} ~ present`
								: `${detail.date[0]} ~ ${detail.date[1]}`
						}}
					</v-col>

					<v-col
						cols="12"
						md="9"
						v-for="item in detail.things"
						:key="item.i"
					>
						<p class="text-left">
							-
							{{
								detail.things.indexOf(item) + 1 ===
								detail.things.length
									? `${item}.`
									: `${item};`
							}}
						</p>
					</v-col>
				</v-row>
				<v-btn
					color="primary"
					outlined
					@click="dialog = false"
					:block="$vuetify.breakpoint.smAndDown"
				>
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
