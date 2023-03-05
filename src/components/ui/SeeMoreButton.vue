<template>
	<v-container :class="wrapperClass">
		<slot />
		<p
			class="mb-0"
			v-if="bodyLength !== 0"
			v-html="body.slice(0, bodyLength) + '...'"
		/>
		<v-btn
			:class="!!!buttonIcon && 'ml-auto'"
			@click="dialog = true"
			color="primary"
			large
			:aria-label="ariaLabel"
			:text="!buttonIcon"
			:icon="buttonIcon && !buttonText"
		>
			<v-icon>{{ buttonIcon ?? "read_more" }}</v-icon>
			{{ buttonText ?? buttonIcon ? null : "see more" }}
		</v-btn>

		<v-dialog v-model="dialog">
			<v-container secondary darken-2 d-flex flex-column fluid>
				<v-btn icon class="ml-auto" @click="dialog = false">
					<v-icon x-large color="primary"> close </v-icon>
				</v-btn>
				<p class="mb-0 pa-5 text-body-1" v-html="body" />
				<v-btn outlined block color="primary" @click="dialog = false">
					{{ closeButtonText }}
				</v-btn>
			</v-container>
		</v-dialog>
	</v-container>
</template>

<script>
	export default {
		props: {
			ariaLabel: { type: String, default: "read more" },
			wrapperClass: { type: String, default: "d-flex flex-column" },
			buttonText: String,
			buttonIcon: String,
			body: String,
			bodyLength: { type: Number, default: 240 },
			closeButtonText: { type: String, default: "close" },
		},
		data: () => ({
			dialog: false,
		}),
	};
</script>
