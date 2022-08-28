<script setup lang="ts"></script>
<template>
	<form @submit.prevent="this.$emit('form-submit')">
		<slot></slot>
	</form>
</template>
<style lang="scss" scoped>
form {
	width: 320px;
	//max-width: 320px;

	& :deep(label:not(:last-child)) {
		margin-bottom: 16px;
	}

	& :deep(button:not(:last-child)) {
		margin-bottom: 16px;
	}
}
</style>
