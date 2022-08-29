<script setup lang="ts">
import ShowPassIcon from '../atoms/ShowPassIcon.vue'
import { computed, ref } from 'vue'

const props = defineProps({
	modelValue: { type: String, default: null },
	tabindex: { type: Number, default: null },
	id: { type: String, default: null },
	placeholder: { type: String, default: null },
	labelText: { type: String, default: null },
	type: { type: String, default: 'text' },
	errorText: { type: String, default: 'wrong data' },
	error: { type: Boolean, default: false },
})
defineEmits(['update:modelValue'])

// Show/Hide password btn
let isPassShown = ref(false)
const changeInputType = computed(() => {
	return props.type === 'password' && isPassShown.value ? 'text' : 'password'
})
const btnCheck = function () {
	isPassShown.value = !isPassShown.value
}
//////
</script>

<template>
	<label :class="error ? 'error' : null">
		<Transition>
			<ShowPassIcon
				v-if="type === 'password' && modelValue"
				:show-pass="isPassShown"
				@show-pass-toggle="btnCheck"
			/>
		</Transition>

		<input
			:value="modelValue"
			:type="changeInputType"
			:name="id"
			:id="id"
			:placeholder="placeholder"
			:tabindex="tabindex"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<span class="label__text">{{ labelText }}</span>
		<span class="error__text">{{ errorText }}</span>
	</label>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

label {
	display: block;
	position: relative;
	font-size: 14px;
	border: 1px solid $border-color-main;
	padding-top: 10px;
	border-radius: 12px;
	width: 100%;
	background: white;
	transition: all 0.2s ease-in-out;

	&:focus-within {
		box-shadow: 1px 2px 6px rgba(#0e2e44, 0.15);
	}

	.label__text {
		position: absolute;
		z-index: 3;
		font-size: 14px;
		left: 12px;
		padding: 0 4px;
		color: $text-color-light;
		top: -12px;
		background: white;
		opacity: 1;
		transition: opacity 0.2s ease-in-out;
	}

	input {
		position: relative;
		margin-bottom: 10px;
		width: 100%;
		color: $text-color-main;
		padding-right: 40px;

		&::placeholder {
			font-size: 14px;
			color: $text-color-placeholder;
			transition: opacity 0.2s ease-in-out;
		}

		&:placeholder-shown + .label__text {
			opacity: 0;
		}

		&:focus {
			&::placeholder {
				opacity: 0;
			}

			& + .label__text {
				opacity: 1;
			}
		}
	}

	.error__text {
		display: none;
		position: absolute;
		right: 0;
		bottom: -22px;
		text-transform: lowercase;
		color: $error-color;
	}

	&.error {
		border-color: $error-color;
		margin-bottom: 22px !important;

		.error__text {
			display: inline-block;
		}
	}

	& :deep(button) {
		position: absolute;
		z-index: 4;
		right: 12px;
	}
}
</style>
