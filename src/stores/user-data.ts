import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserDataStore = defineStore('userData', () => {
	interface UserData {
		name: { stringValue: string }
		email: { stringValue: string }
		created: { timeStampValue: string }
	}
	const user = ref<UserData>()
	return { user }
})
