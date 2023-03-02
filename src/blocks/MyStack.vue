<template>
	<Wrapper :title="title">
		<v-card
			class="my-2"
			outlined
			hover
			color="secondary"
			v-for="item in Object.keys($store.state.stack)"
			:key="item"
		>
			<v-card-title class="d-flex justify-space-between align-center">
				<v-icon>
					{{ item }}
				</v-icon>
				<SeeMoreButton
					v-show="$store.state.stack[item].length > 5"
					:scrollable="true"
					:text="$store.state.stack[item].join(', ').toUpperCase()"
					icon="more_vert"
				/>
			</v-card-title>

			<v-card-text class="d-flex">
				<v-row justify="center" align="center">
					<v-col
						cols="4"
						v-for="str in $store.state.stack[item].slice(0, 5)"
						:key="str"
					>
						<p
							class="text-uppercase text-subtitle-2 font-weight-bold text-center mb-0"
						>
							{{ str }}
						</p>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</Wrapper>
</template>

<script>
	export default {
		props: { title: String },
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
			SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
		},
		computed: {
			computedContent() {
				return {
					icon: "",
					techs: [],
				};
			},
		},
	};
</script>
