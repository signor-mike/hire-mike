<template>
	<Wrapper :title="title">
		<v-card
			class="my-6"
			outlined
			elevation="24"
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
			<v-divider />
			<v-card-text class="d-flex">
				<v-row justify="center" align="center">
					<v-col
						cols="4"
						v-for="(str, i) in $store.state.stack[item].slice(
							0,
							wordsCount
						)"
						:key="str"
					>
						<p
							class="text-truncate text-uppercase text-subtitle-2 font-weight-bold text-center mb-0"
						>
							{{
								i === wordsCount - 1
									? `And ${$store.state.stack[item].length} more...`
									: str
							}}
						</p>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</Wrapper>
</template>

<script>
	// TODO: update stack
	export default {
		props: { title: String },
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
			SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
		},
		data: () => ({
			wordsCount: 5,
		}),
	};
</script>
