<script setup lang="ts">
defineProps({
	showPass: {
		type: Boolean,
		default: false,
	},
})
defineEmits(['showPassToggle'])
</script>
<template>
	<div>
		<button
			v-if="!showPass"
			type="button"
			@click.stop="$emit('showPassToggle')"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path
					d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
				/>
			</svg>
		</button>

		<button v-if="showPass" type="button" @click.stop="$emit('showPassToggle')">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path
					d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
				/>
			</svg>
		</button>
	</div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

svg {
	width: 20px;
	height: 20px;
	fill: $text-color-light;
}
button {
	position: absolute;
	z-index: 4;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
}
</style>
