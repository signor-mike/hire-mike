<template>
	<div>
		<div v-if="!!text && !!!icon">
			{{ computedText }}
			<v-btn
				v-if="isTooLong"
				@click="handleClick('open')"
				color="primary"
				text
				class="d-flex ml-auto"
			>
				<v-icon>read_more</v-icon>
				see more
			</v-btn>
		</div>

		<div v-else>
			<v-btn color="primary" icon @click="handleClick('open')">
				<v-icon large>
					{{ icon }}
				</v-icon>
			</v-btn>
		</div>

		<v-dialog v-model="dialog" fullscreen :scrollable="!!icon">
			<Dialogue
				:text="text"
				@onClose="handleClick('close')"
				:textAlign="!!icon ? 'text-center' : 'text-left'"
				:textColor="
					!!icon ? 'primary--text' : 'secondary-lighten-4--text'
				"
				buttonText="close"
				:buttonIcon="null"
			/>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		props: { text: String, icon: { type: String, default: null } },
		components: {
			Dialogue: () => import("@/components/ui/Dialog"),
		},
		data: () => ({
			dialog: false,
		}),
		computed: {
			stringLength() {
				if (this.$vuetify.breakpoint.smAndDown) return 240;
				return 700;
			},
			computedText() {
				if (this.text.length < this.stringLength) return this.text;
				// strips last character if it's a space
				return this.text.charAt(this.stringLength - 1) === " "
					? this.text.slice(0, this.stringLength - 1) + "..."
					: this.text.slice(0, this.stringLength) + "...";
			},
			isTooLong() {
				return this.text.length > this.stringLength;
			},
		},
		methods: {
			handleClick(op) {
				if (op === "open") this.dialog = true;
				if (op === "close") this.dialog = false;
				return;
			},
		},
	};
</script>
