<template>
	<Wrapper :title="title">
		<div>included but not limited to</div>
		<div v-for="item in Object.keys($store.state.stack)" :key="item">
			<v-icon>
				{{ item }}
			</v-icon>
			<span v-for="str in $store.state.stack[item]" :key="str">
				{{ str }}
			</span>
		</div>
	</Wrapper>
</template>

<script>
	export default {
		props: { title: String },
		components: {
			Wrapper: () => import("@/layouts/ViewWrapper"),
		},
	};
</script>
