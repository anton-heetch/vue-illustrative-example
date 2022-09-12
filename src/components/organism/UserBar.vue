<script setup lang="ts">
import { useUserDataStore } from '../../stores/user-data'
import { useAuthStore } from '../../stores/authorise'
import { storeToRefs } from 'pinia'
import Button from '../molecules/Button.vue'
const { user } = storeToRefs(useUserDataStore())
const { logOut } = useAuthStore()
</script>
<template>
	<div class="userBar">
		<h4>{{ user.name.stringValue }}</h4>
		<Button
			style-type="btn-link"
			button-text="Log out"
			@click.native="logOut"
		/>
	</div>
</template>
<style lang="scss" scoped>
.userBar {
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
