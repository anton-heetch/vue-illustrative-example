import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserDataStore = defineStore('userData', () => {
	interface UserData {
		name: string
		email: string
		created: string
	}
	const user = ref<UserData>()

	return { user }
})
