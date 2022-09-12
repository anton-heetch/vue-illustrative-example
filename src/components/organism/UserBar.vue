<script setup lang="ts">
import { useUserDataStore } from '../../stores/user-data'
import { storeToRefs } from 'pinia'
import Button from '../molecules/Button.vue'
import Repository from '../../plugins/repositories'
import { inject, onBeforeMount } from 'vue'

const { user } = storeToRefs(useUserDataStore())
const UserRepo = Repository.get('user')
const router: any = inject('router')
const storageUserData = {
	localId: localStorage.getItem('fLocalId'),
	idToken: localStorage.getItem('fIdToken'),
}

onBeforeMount(async () => {
	await UserRepo.getProfile(storageUserData).then((resp: any) => {
		user.value = resp
	})
})

const logOut = () => {
	localStorage.removeItem('fIdToken')
	localStorage.removeItem('fLocalId')
	router.go()
}
</script>
<template>
	<div class="userBar">
		<h4>{{ user ? user.name.stringValue : 'user' }}</h4>
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
