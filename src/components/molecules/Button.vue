<script setup lang="ts">
defineProps({
	buttonType: {
		type: String,
		default: 'button',
	},
	buttonText: {
		type: String,
		default: 'Button text',
	},
	styleType: {
		type: String,
		default: null,
	},
})
</script>
<template>
	<button :type="buttonType" :class="styleType">
		{{ buttonText }}
	</button>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/variables';

button {
	width: 100%;
	height: 42px;
	border-radius: 6px;
	color: $text-color-main;
	font-size: 16px;
	transition: all 0.1s ease-in-out;

	&:hover {
		cursor: pointer;
	}

	&:active {
		transform: scale(0.98);
	}

	&[type='submit'] {
		color: #ffffff;
		background: $button-color-main;

		&:hover {
			background: darken($button-color-main, 10%);
		}
	}

	//&.btn-empty {
	//	background: transparent;
	//}
}
</style>
