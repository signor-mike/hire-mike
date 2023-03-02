<template>
	<v-card>
		<v-card-title
			class="d-flex justify-space-between primary--text text-uppercase"
		>
			<a :href="contact.href" target="_blank" class="text-overline">
				{{ contact.title }}
			</a>
			<a :href="contact.href" target="_blank">
				<v-icon color="primary">open_in_new</v-icon>
			</a>
		</v-card-title>
		<v-divider />
		<v-card-text v-if="contact.body" class="text-body-2 text-center">
			{{ contact.body }}
		</v-card-text>
		<v-divider v-show="!!contact.body" />
		<v-card-actions class="d-flex">
			<v-spacer />
			<v-btn icon :href="contact.href" target="_blank">
				<v-icon color="secondary lighten-3">
					{{ contact.icon }}
				</v-icon>
			</v-btn>
			<v-btn x-small text @click="copyToClipboard">
				{{ computedHref }}
			</v-btn>
			<v-spacer />
		</v-card-actions>

		<v-snackbar
			v-model="snackbar"
			top
			timeout="1500"
			color="primary darken-3"
		>
			<p class="text-center mb-0 pa-4">
				{{ this.computedHref }} <br />
				is copied to clipboard!
			</p>
			<template v-slot:action="{ attrs }">
				<v-btn
					color="primary lighten-3"
					icon
					v-bind="attrs"
					@click="snackbar = false"
				>
					<v-icon>done</v-icon>
				</v-btn>
			</template>
		</v-snackbar>
	</v-card>
</template>

<script>
	export default {
		props: {
			contact: Object,
		},
		data: () => ({
			snackbar: false,
		}),
		methods: {
			copyToClipboard() {
				navigator.clipboard.writeText(this.computedHref);
				this.snackbar = true;
			},
		},
		computed: {
			computedHref() {
				const toStrip = ["https://", "mailto:", "tel:", "www."];
				let OUT = this.contact.href;
				for (let i = 0; i < toStrip.length; i++) {
					if (!this.contact.href.includes(toStrip[i])) continue;
					OUT = this.contact.href.replaceAll(toStrip[i], "");
				}
				return OUT;
			},
		},
	};
</script>
