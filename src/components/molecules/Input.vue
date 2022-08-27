<script setup lang="ts">
defineProps({
	id: { type: String, default: null },
	type: { type: String, default: 'text' },
	placeholder: { type: String, default: null },
	labelText: { type: String, default: null },
	error: { type: Boolean, default: false },
	errorText: { type: String, default: 'Wrong data' },
})
</script>
<template>
	<label :class="error ? 'error' : null">
		<span class="label__text">{{ labelText }}</span>
		<input :type="type" :name="id" :id="id" :placeholder="placeholder" />
		<span class="error__text">{{ errorText }}</span>
	</label>
</template>
<style lang="scss" scoped>
label {
	display: block;
	position: relative;
	font-size: 14px;
	border: 1px solid black;
	padding-top: 10px;
	border-radius: 12px;
	width: 100%;

	.label__text {
		position: absolute;
		left: 12px;
		top: -12px;
		background: white;
		padding: 0 4px;
	}

	input {
		margin-bottom: 10px;
		width: 100%;
	}

	.error__text {
		display: none;
		position: absolute;
		right: 0;
		bottom: -24px;
		text-transform: lowercase;
		color: red;
	}

	&.error {
		border-color: red;

		.error__text {
			display: inline-block;
		}
	}
}
</style>
