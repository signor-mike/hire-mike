<template>
	<Wrapper :title="$store.state['contact-title']">
		<Grid>
			<template #top-large>
				<v-row>
					<v-col
						class="d-flex"
						cols="12"
						v-for="contact in $store.state.contacts.data"
						:key="contact.id"
					>
						<a class="ma-auto" :href="contact.href">{{
							contact.title
						}}</a>
					</v-col>
				</v-row>
			</template>
			<template #top-small>
				<v-row>
					<v-col
						class="d-flex"
						cols="12"
						v-for="contact in $store.state.contacts.data"
						:key="contact.id"
					>
						<v-icon class="ma-auto" x-large>
							{{ contact.icon }}
						</v-icon>
					</v-col>
				</v-row>
			</template>
			<template #bottom-small>
				<v-container fluid class="d-flex">
					<v-icon x-large class="ma-auto">
						{{ $store.state.contacts.bottom.icon }}
					</v-icon>
				</v-container>
			</template>
			<template #bottom-large>
				<v-row align="center" justify="center">
					<v-col cols="12">
						<p class="text-caption text-center">
							best to worse (LTR)
						</p>
					</v-col>
					<v-col
						cols="4"
						md="3"
						v-for="item in $store.state.contacts.bottom.list"
						:key="item"
					>
						<p class="text-center">{{ item }}</p>
					</v-col>
				</v-row>
				<!-- <SeeMoreButton
					:body="$store.state.stack[1].items.join(', ')"
					:bodyLength="$vuetify.breakpoint.smAndDown ? 60 : 240"
				/> -->
			</template>
		</Grid>
	</Wrapper>
</template>

<script>
export default {
	components: {
		Wrapper: () => import("@/layouts/ViewWrapper"),
		Grid: () => import("@/layouts/GridWrapper"),
	},
};
</script>
