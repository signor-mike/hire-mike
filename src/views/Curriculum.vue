<template>
	<v-container fill-height class="pb-0">
		<v-container fluid tag="header" class="mb-auto d-flex flex-column">
			<span class="text-h3">Mike K</span>
			<span class="text-caption">Fullstack developer</span>
		</v-container>

		<v-container
			fluid
			tag="main"
			:class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
		>
			<v-row>
				<v-col :cols="$vuetify.breakpoint.mdAndUp ? 8 : 12">
					<h2>body</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Excepturi quibusdam cumque nostrum aliquid rerum
						tenetur ut consectetur incidunt ea asperiores recusandae
						eaque eveniet, sit, odio ipsam inventore fugit
						laudantium dolorum nobis? Molestiae maxime, hic nemo
						suscipit magnam rem velit eius est repellat tempore
						nostrum dolore vero ab necessitatibus sint alias ad
						facere ipsa cupiditate, ipsum facilis autem? Commodi
						maxime totam deleniti obcaecati repellendus, et odit
						voluptatem tenetur iure temporibus optio dignissimos cum
						nihil labore, similique asperiores ab ipsum repudiandae
						assumenda at libero explicabo? Voluptas quae sint
						veritatis iure vitae, harum magni officiis totam rerum
						ipsum reprehenderit in suscipit voluptatum. Quia
						architecto nulla sed et vero aliquid necessitatibus
						voluptatibus, voluptate animi quos sunt culpa
						blanditiis, fugit ex, temporibus odit? In tenetur vero
						dolor accusantium labore ducimus earum illo non totam
						fugiat ipsum minus ut ex voluptates quia esse similique
						maiores voluptatem beatae, odio doloribus deserunt
						libero. Reprehenderit voluptatem eum in suscipit.
					</p>
				</v-col>
				<v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp">
					<h2>aside</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Iure inventore vel repudiandae ab assumenda rem quos.
						Ipsam, sit pariatur sapiente voluptatum soluta
						necessitatibus cumque voluptas eaque fugit, ea
						asperiores vel. Minus natus temporibus laudantium ex,
						laboriosam mollitia libero tenetur fugiat sint cumque
						enim adipisci magnam nesciunt obcaecati eaque, inventore
						consequatur.
					</p>
				</v-col>
			</v-row>
		</v-container>

		<v-container tag="footer" class="mt-auto">
			<p>footer</p>
		</v-container>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			foo: "my cv",
		}),

		computed: {
			customWidth() {
				switch (true) {
					case this.$vuetify.breakpoint.smAndDown:
						return "100%";
					case this.$vuetify.breakpoint.mdAndDown:
						return "90%";
					case this.$vuetify.breakpoint.lgAndDown:
						return "80%";
					case this.$vuetify.breakpoint.xlAndDown:
						return "50%";
					default:
						return "100%";
				}
			},
		},
	};
</script>

<style></style>
