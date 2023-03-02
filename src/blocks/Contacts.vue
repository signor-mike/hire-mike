<template>
	<Wrapper :title="title">
		<v-row>
			<v-col
				cols="6"
				v-for="c in [
					{
						title: 'email',
						href: 'mailto:dev_mike.k@yahoo.com',
						icon: 'mail_outline',
					},
					{
						title: 'linkedin',
						href: 'https://linkedin.com/in/dev-mike-k',
						icon: 'language',
					},
				]"
				:key="c.title"
			>
				<v-card>
					<v-card-title
						class="d-flex justify-space-between primary--text text-uppercase"
					>
						<a :href="c.href" target="_blank" class="text-overline">
							{{ c.title }}
						</a>
						<a :href="c.href" target="_blank">
							<v-icon color="primary">open_in_new</v-icon>
						</a>
					</v-card-title>
					<v-divider />
					<v-card-text class="d-flex">
						<v-spacer />
						<v-btn icon :href="c.href" target="_blank">
							<v-icon color="secondary lighten-3">
								{{ c.icon }}
							</v-icon>
						</v-btn>
						<span class="text--secondary mx-2 my-auto">
							{{ c.href }}
						</span>
						<v-spacer />
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<v-divider class="my-5" />
		<v-card> github </v-card>
	</Wrapper>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "Reach me out at:",
			},
		},
		components: { Wrapper: () => import("@/layouts/ViewWrapper") },
	};
</script>
