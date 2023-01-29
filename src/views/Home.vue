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
		<div ref="foo">
			<TypedText
				text="hire mike"
				:speed="25"
				className="text-h4 text-uppercase text-center"
				:styles="customWidth"
				@onComplete="(payload) => handleFinish(1, payload)"
			/>
			<TypedText
				v-if="isFirstFinished"
				:text="pickedWord"
				:speed="50"
				className="text-overline text-center"
				:styles="customWidth"
				@onComplete="(payload) => handleFinish(2, payload)"
			/>
		</div>
		<v-spacer />
	</v-container>
</template>

<script>
	export default {
		components: {
			TypedText: () => import("../components/TypedText.vue"),
		},
		data: () => ({
			firstDom: "p ref",
			isFirstFinished: false,
			secondDom: "p ref",
			isSecondFinished: false,
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
			async handleFinish(num, dom) {
				switch (num) {
					case 1:
						this.firstDom = dom;
						this.isFirstFinished = true;
						break;
					case 2:
						this.secondDom = dom;
						this.isSecondFinished = true;
						break;

					default:
						break;
				}
				if (!this.isFirstFinished || !this.isSecondFinished) return;
				this.animator(this.firstDom, "right-top");
				await this.animator(this.secondDom, "left-bottom");
				this.$router.push("/view?page=about");
			},

			async animator(dom, direction) {
				let lastWord = dom.textContent.split(" ");
				lastWord = lastWord[lastWord.length - 1];

				// fade out + zoom out
				dom.style.opacity = 1;
				await new Promise((resolve) => {
					const fadeZoomOutInterval = setInterval(() => {
						dom.style.opacity =
							parseFloat(dom.style.opacity) - 1 / 5;
						dom.style.transform = `scale(${dom.style.opacity})`;
						if (dom.style.opacity < 0) {
							resolve();
							clearInterval(fadeZoomOutInterval);
						}
					}, 25);
				});

				// reset opacity+scale, replace content;
				dom.textContent = lastWord;
				dom.style.opacity = 0.1;
				dom.style.transform = `scale(${dom.style.opacity})`;

				// zoom in
				await new Promise((resolve) => {
					const fadeZoomInInterval = setInterval(() => {
						dom.style.opacity =
							parseFloat(dom.style.opacity) + 1 / 5;
						dom.style.transform = `scale(${dom.style.opacity})`;
						if (dom.style.opacity > 1) {
							resolve();
							clearInterval(fadeZoomInInterval);
						}
					}, 25);
				});

				// spin and fly
				let i = 0;
				let x = 0;
				let y = 0;
				dom.style = `position: relative; overflow: hidden;`;
				await new Promise((resolve) => {
					const spinInterval = setInterval(() => {
						switch (direction) {
							case "left-top":
								console.log("not implemented yet");
								break;

							case "right-top":
								i += 10;
								x -= 10;
								dom.style.top = `${x}px`;
								y -= 10;
								dom.style.right = `${y}px`;
								break;

							case "right-bottom":
								console.log("not implemented yet");
								break;

							case "left-bottom":
								i -= 10;
								x += 10;
								dom.style.top = `${x}px`;
								y += 10;
								dom.style.right = `${y}px`;
								break;

							default:
								break;
						}
						dom.style.transform = `rotate(${i}deg)`;
						if (
							dom.offsetTop > window.innerHeight + 100 ||
							dom.offsetTop < -100
						) {
							resolve();
							clearInterval(spinInterval);
						}
					}, 25);
				});
			},
		},
		computed: {
			pickedWord() {
				const num = Math.floor(Math.random() * this.words.length);
				return "and face " + this.words[num];
			},
			customWidth() {
				return "width: " + this.$vuetify.breakpoint.mdAndUp
					? "50%"
					: "70%";
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
