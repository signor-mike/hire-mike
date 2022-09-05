<template>
	<nav>
		<v-app-bar flat app>
			<v-app-bar-nav-icon
				x-large
				class="primary--text"
				@click="draw = !draw"
			/>
			<v-toolbar-title class="text-uppercase grey--text pl-0">
				<a :class="{ 'dark-theme': $vuetify.theme.dark }" :href="`/`">
					<span class="font-weight-light">itsa</span>
					<span>Mike</span>
				</a>
			</v-toolbar-title>

			<v-spacer />
			<div class="text-center primary--text">
				<v-btn text rounded @click="toggleTheme">
					<span v-if="!this.$vuetify.theme.dark">
						<v-icon>dark_mode</v-icon>
					</span>

					<span v-else>
						<v-icon>light_mode</v-icon>
					</span>
				</v-btn>
			</div>

			<!-- dropdown menu -->
			<div v-if="$vuetify.breakpoint.mdAndUp" class="text-center">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text color="grey" dark v-bind="attrs" v-on="on">
							<v-icon left> expand_more </v-icon>
							<span>menu</span>
						</v-btn>
					</template>
					<v-list>
						<v-list-item
							v-for="link in links"
							:key="link.text"
							router
							:to="link.route"
							exact
						>
							<v-list-item-title>{{
								link.text
							}}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
			<!-- end of dropdown menu -->
		</v-app-bar>

		<v-navigation-drawer
			v-model="draw"
			color="secondary"
			temporary
			bottom
			app
			:src="spacePicture"
			class="py-3"
		>
			<v-row
				class="mt-5 mx-3"
				justify="center"
				:class="{ 'pt-5': $vuetify.breakpoint.lgAndUp }"
			>
				<v-col
					v-for="link in links"
					:key="link.i"
					sm="6"
					md="4"
					lg="12"
				>
					<v-card router :to="link.route">
						<v-list>
							<v-list-item exact @click="refresh">
								<v-list-item-action class="ma-0">
									<v-icon left color="primary">
										{{ link.icon }}
									</v-icon>
								</v-list-item-action>
								<v-list-item-content>
									<v-list-item-title>
										<h3
											class="text-center font-weight-black class text-uppercase primary--text"
										>
											{{ link.text }}
										</h3>
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-action class="ma-0">
									<v-icon
										right
										color="primary"
										v-if="$vuetify.breakpoint.mdAndUp"
									>
										{{ link.icon }}
									</v-icon>
								</v-list-item-action>
							</v-list-item>
						</v-list>
					</v-card>
				</v-col>
			</v-row>
		</v-navigation-drawer>
	</nav>
</template>

<script>
	export default {
		components: {},

		data() {
			return {
				draw: null,
				links: [
					{
						icon: "home",
						text: "Home",
						route: "/",
					},
					{
						icon: "contact_page",
						text: "My CV",
						route: "/cv-mike",
					},
					{
						icon: "flutter_dash",
						text: "Contact Me",
						route: "/contact",
					},
					{
						icon: "quiz",
						text: "FAQ",
						route: "/faq",
					},
				],
				// don't forget to set routes in ./router/index.js
			};
		},
		computed: {
			spacePicture() {
				return this.$vuetify.theme.dark ? "/outer-space.jpg" : "null";
			},
		},

		methods: {
			toggleTheme() {
				this.$vuetify.theme.themes.dark.anchor = "#41B883";
				this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			},
			refresh() {
				if (this.draw) {
					this.draw = !this.draw;
				}
			},
		},
	};
</script>

<style scoped>
	a {
		text-decoration: none;
	}
	.class {
		font-family: "Fira Sans";
	}
</style>
