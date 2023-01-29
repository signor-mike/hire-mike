<template lang="html">
	<p ref="typed-text" :class="className" :style="styles" />
</template>
<script>
	export default {
		props: {
			text: { type: String, required: true },
			speed: { type: Number, default: 100 },
			className: { type: String, default: "" },
			styles: { type: String, default: "" },
		},
		data: () => ({
			counter: 0,
			typing: "reactive interval",
			isCompleted: false,
		}),
		methods: {
			typeWriter() {
				const textfield = this.$refs["typed-text"];
				this.typing = setInterval(() => {
					let nextChar = this.text.charAt(this.counter);
					textfield.textContent += nextChar;
					this.counter++;
				}, this.speed);
			},
		},
		mounted() {
			this.typeWriter();
			this.$emit("onStart", this.$refs["typed-text"]);
		},
		watch: {
			counter(newVal) {
				if (newVal === this.text.length) {
					clearInterval(this.typing);
					this.$emit("onComplete", this.$refs["typed-text"]);
					this.isCompleted = true;
				}
			},
		},
	};
</script>
<style lang="css"></style>
