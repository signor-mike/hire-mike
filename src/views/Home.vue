<template>
	<v-container
		fluid
		fill-height
		flex-column
		class="primary--text main-wrapper"
	>
		<div class="button-wrap">
			<v-btn
				color="primary"
				outlined
				@click="$router.push('/view?page=about')"
			>
				<v-icon>keyboard_double_arrow_right</v-icon>
			</v-btn>
		</div>
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
			words: [
				"prosperity",
				"happiness",
				"success",
				"triumph",
				"abundance",
				"fortune",
				"wholesomeness",
				"awesomeness",
			],
		}),
		mounted: function () {
			this.$store.commit("SET_NAV_VISIBILITY", false);
		},
		methods: {
			createSpan(text, name) {
				const domSpan = document.createElement("span");
				if (name) domSpan.classList.add(name);
				domSpan.innerText = text;
				return domSpan;
			},

			animation(target) {
				let items = document.querySelectorAll("." + target);
				if (target === "fadeOut") {
					const opacityInterval = setInterval(() => {
						items.forEach((e) => {
							e.style.opacity =
								this.opacity <= 2 ? 0 : this.opacity / 100;
							this.opacity--;
							if (this.opacity <= 0)
								clearInterval(opacityInterval);
						});
					}, 10);
				} else {
					const zoomInterval = setInterval(() => {
						items.forEach((e, i) => {
							e.style = `position: absolute; overflow: hidden;`;
							if (i === 0) {
								e.style.top = e.offsetTop - this.scale + "px";
								e.style.left = e.offsetLeft - this.scale + "px";
							}
							if (i === 1) {
								e.style.left = `${e.offsetLeft - this.scale}px`;
								e.style.bottom = `${
									e.offsetTop - this.scale
								}px`;
							}
							e.style.transform = `scale(${
								this.scale / 100 + 1
							})`;
							this.scale++;
							if (this.scale / 100 + 1 >= 8)
								clearInterval(zoomInterval);
						});
					}, 5);
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
				text.appendChild(this.createSpan(this.pickedWord, "zoomIn"));

				this.animation("fadeOut");
				await new Promise((r) => setTimeout(r, 500)).then(() =>
					this.animation("zoomIn")
				);
				await new Promise((r) => setTimeout(r, 2000)).then(() =>
					this.$router.push("/view?page=about")
				);
			},
		},
		computed: {
			pickedWord() {
				const num = Math.floor(Math.random() * this.words.length);
				return this.words[num];
			},
		},
		beforeDestroy() {
			this.$store.commit("SET_NAV_VISIBILITY", true);
		},
	};
</script>

<style scoped>
	.button-wrap {
		position: absolute;
		top: 0;
		right: 0;
	}
</style>
