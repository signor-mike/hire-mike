<template>
	<!-- 
      if props.icon
        render icon w/ @click=handleClick(open)
      else
        if text.tooLong
          strip and render button
        else
          render just text

      if props.icon || text.tooLong
        v-show dialog w/ button w/ @click=handleClick(close)
      -->
	<div v-if="!!text">
		{{ computedText }}
		<v-btn
			v-if="text.length > stringLength"
			@click="dialog = true"
			color="primary"
			text
			class="d-flex ml-auto"
		>
			<v-icon>read_more</v-icon>
			see more
		</v-btn>
		<v-dialog v-model="dialog" fullscreen>
			<Dialogue
				:text="text"
				@onClose="dialog = false"
				textAlign="text-left"
				textColor="secondary-lighten-4--text"
				buttonText="close"
				:buttonIcon="null"
			/>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		props: { text: String },
		components: {
			Dialogue: () => import("@/components/ui/Dialog"),
			// SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
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
		},
		methods: {
			handleClick(operation) {
				console.log(`${operation} dialog`);
			},
		},
	};
</script>
