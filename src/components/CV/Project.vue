<template>
	<v-card class="" color="secondary lighten-2" :class="computedBorder">
		<v-card-title>
			<span class="text-left">company</span>
			<v-spacer />
			<span class="text-right">year</span>
		</v-card-title>
		<v-card-subtitle class="d-flex">
			<span class="text-left">position</span>
			<v-spacer />
			<span v-for="n in 4" :key="n" class="text-right text-caption px-1">
				tech {{ n }}
			</span>
		</v-card-subtitle>
		<v-divider />
		<v-card-text class="d-flex flex-column">
			<span class="text-center text-overline">project</span>
			<v-row dense class="pt-4">
				<v-col
					v-for="(n, i) in 4"
					:key="n"
					cols="6"
					align-self="center"
					class="d-flex"
				>
					<v-container
						d-flex
						class="secondary darken-5"
						:class="{
							'rounded-tl-lg': i === 0,
							'rounded-tr-lg': i === 1,
							'rounded-bl-lg': i === 2,
							'rounded-br-lg': i === 3,
						}"
					>
						<span
							class="px-2"
							:class="{
								'text-left': i % 2 === 0,
								'text-right': i % 2 !== 0,
							}"
						>
							task {{ n }} Lorem ipsum dolor, sit amet consectetur
							adipisicing.
						</span>
					</v-container>
				</v-col>
			</v-row>
		</v-card-text>
		<!-- <v-card-actions>
			<v-container>
				<v-btn
					small
					block
					color="primary"
					href="https://google.com"
					target="_blank"
					class="mx-auto"
				>
					visit
					<v-icon class="ml-1" small>launch</v-icon>
				</v-btn>
			</v-container>
		</v-card-actions> -->
	</v-card>
</template>

<script>
	export default {
		props: {
			index: Number,
		},
		computed: {
			computedBorder() {
				if (this.$vuetify.breakpoint.mdAndUp) {
					if (this.index === 0) return "rounded-tl-xl";
					if (this.index === 1) return "rounded-tr-xl";
					if (this.index === 2) return "rounded-bl-xl";
					if (this.index === 3) return "rounded-br-xl";
				}
				return "rounded-lg";
			},
		},
	};
</script>

<style></style>
