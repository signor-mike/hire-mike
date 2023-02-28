<template>
	<Wrapper :title="title">
		<v-container>
			<v-row
				v-for="item in Object.keys($store.state.stack)"
				:key="item"
				justify="space-around"
			>
				<v-col cols="12" class="d-flex justify-space-between">
					<v-icon>
						{{ item }}
					</v-icon>
					<SeeMoreButton
						v-show="$store.state.stack[item].length > 5"
						:scrollable="true"
						:text="
							$store.state.stack[item].join(', ').toUpperCase()
						"
						icon="more_vert"
					/>
				</v-col>

				<v-col
					cols="4"
					md="2"
					v-for="str in $store.state.stack[item].slice(0, 5)"
					:key="str"
					class="d-flex"
				>
					<span class="text-uppercase text-caption mx-auto">
						{{ str }}
					</span>
				</v-col>
				<v-col
					cols="12"
					v-if="
						Object.keys($store.state.stack).indexOf(item) !==
						Object.keys($store.state.stack).length - 1
					"
				>
					<v-divider class="my-1" />
				</v-col>
			</v-row>
		</v-container>
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
