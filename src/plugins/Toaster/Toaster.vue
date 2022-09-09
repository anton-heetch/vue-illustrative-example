<script setup lang="ts">
defineProps({
	message: {
		type: String,
		default: 'Status bar',
	},
	type: {
		type: String,
		default: '',
	},
})
</script>
<template>
	<div class="toaster" :class="type">
		<span>{{ message }}</span>
	</div>
</template>
<style lang="scss" scoped>
.toaster {
	position: absolute;
	height: 40px;
	width: 100%;
	top: 0;
	left: 0;
	padding-left: 40px;

	display: flex;
	align-items: center;
	background: lightblue;
	font-size: 14px;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 4px;
		background: #2cadfd;
		animation: progress 3s infinite linear;
	}
}

@keyframes progress {
	0% {
		width: 0;
	}
	100% {
		width: 100%;
	}
}
</style>
