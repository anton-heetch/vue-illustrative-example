<script setup lang="ts">
defineEmits(['submit:formSubmit'])
</script>
<template>
	<form
		:novalidate="true"
		@submit.prevent="$emit('submit:formSubmit')"
		autocomplete="off"
	>
		<slot />
	</form>
</template>
<style lang="scss" scoped>
form {
	width: 100%;
	max-width: 320px;

	& :deep(.inputWrapper:not(:last-child)) {
		margin-bottom: 16px;
	}

	& :deep(button:not(:last-child)) {
		margin-bottom: 16px;
	}
}
</style>
