<script setup lang="ts">
import Spinner from '../atoms/Spinner.vue'

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
	isLoading: {
		type: Boolean,
		default: false,
	},
})
</script>
<template>
	<button :type="buttonType" :class="styleType" :disabled="isLoading">
		<Spinner v-if="isLoading" />
		<span v-else>{{ buttonText }}</span>
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
	position: relative;

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

	&.btn-link {
		height: auto;
		width: auto;
		font-size: 12px;
		text-decoration: underline;
		color: $button-color-main;

		&:active {
			text-decoration: none;
		}
	}
}
</style>
