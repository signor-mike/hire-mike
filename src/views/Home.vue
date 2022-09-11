<template>
	<v-container fluid fill-height flex-column class="primary--text">
		<v-spacer />
		<vue-typed-js
			:strings="['Hire mike']"
			:type-speed="50"
			:start-delay="100"
			:show-cursor="false"
		>
			<span
				id="typed-title"
				class="text-uppercase text-h2 typing mx-auto"
			/>
		</vue-typed-js>
		<vue-typed-js
			:strings="['and face prosperity']"
			:start-delay="700"
			:type-speed="10"
			:show-cursor="false"
			@onComplete="completeTyping"
		>
			<span id="typed-text" class="typing text-overline mx-auto" />
		</vue-typed-js>
		<v-spacer />
	</v-container>
</template>

<script>
	export default {
		components: {},
		data: () => ({
			opacity: 100,
			scale: 1,
		}),
		mounted: function () {
			console.log("query.page: ", this.$route.query.page);
			const { xs, sm, md, lg } = this.$vuetify.breakpoint;
			console.log("xs: ", xs, "\nsm: ", sm, "\nmd: ", md, "\nlg: ", lg);
			this.$store.commit("SET_IS_ANIMATION_DONE", false);
		},
		methods: {
			createSpan(text, name) {
				const domSpan = document.createElement("span");
				if (name) domSpan.classList.add(name);
				domSpan.innerText = text;
				return domSpan;
			},

			animatonHandler(element) {
				let counter = element === "fadeOut" ? 100 : 1;
				const timer = element === "fadeOut" ? 50 : 100;
				const opacityInterval = setInterval(() => {
					document.querySelectorAll("." + element).forEach((e) => {
						if (element === "fadeOut") {
							e.style.opacity = counter <= 2 ? 0 : counter / 100;
							counter--;
						}
						if (element === "zoomIn") {
							e.style = `position: absolute;`;
							e.style.transform = `scale(${counter + 1 / 100})`;
							counter++;
						}
					});
					if (counter <= 0 || counter >= 10) {
						clearInterval(opacityInterval);
					}
				}, timer);
			},

			animation(target) {
				if (target === "fadeOut") {
					const opacityInterval = setInterval(() => {
						document.querySelectorAll("." + target).forEach((e) => {
							e.style.opacity =
								this.opacity <= 2 ? 0 : this.opacity / 100;
							this.opacity--;
							if (this.opacity <= 0)
								clearInterval(opacityInterval);
						});
						console.log("opacity: ", this.opacity);
					}, 10);
				} else {
					const zoomInterval = setInterval(() => {
						document.querySelectorAll("." + target).forEach((e) => {
							e.style = `position: absolute;`;
							e.style.transform = `scale(${
								this.scale + 1 / 100
							})`;
							this.scale++;
							if (this.scale >= 100) clearInterval(zoomInterval);
						});
						console.log("scale: ", this.scale);
					}, 100);
				}
			},

			async completeTyping() {
				const text = document.getElementById("typed-text");
				const title = document.getElementById("typed-title");

				title.innerHTML = ``;
				title.appendChild(this.createSpan("hire ", "fadeOut"));
				title.appendChild(this.createSpan("mike", "zoomIn"));
				text.innerHTML = ``;
				text.appendChild(this.createSpan("and face ", "fadeOut"));
				text.appendChild(this.createSpan("prosperity", "zoomIn"));
				this.animation("fadeOut");
				// this.animatonHandler("fadeOut");
				await new Promise((r) => setTimeout(r, 1500)).then(() =>
					this.animation("zoomIn")
				);
				// await new Promise((r) => setTimeout(r, 500)).then(() =>
				// 	this.$router.push("/faq")
				// );
				this.$store.commit("SET_IS_ANIMATION_DONE", true);
			},
		},
		computed: {},
	};
</script>

<style scoped>
	.zoomIn {
		animation-name: zoomIn;
		animation-duration: 10s;
		animation-fill-mode: forwards;
		overflow: hidden;
	}

	@keyframes zoomIn {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(10);
		}
	}
</style>
