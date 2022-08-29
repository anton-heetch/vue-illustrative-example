<script setup lang="ts">
defineEmits(['submit:formSubmit'])
</script>
<template>
	<form :novalidate="true" @submit.prevent="$emit('submit:formSubmit')">
		<slot></slot>
	</form>
</template>
<style lang="scss" scoped>
form {
	width: 100%;
	max-width: 320px;

	& :deep(label:not(:last-child)) {
		margin-bottom: 16px;
	}

	& :deep(button:not(:last-child)) {
		margin-bottom: 16px;
	}
}
</style>
