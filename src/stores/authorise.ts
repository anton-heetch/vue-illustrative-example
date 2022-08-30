import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
	const email = ref<string | null>('')
	const password = ref<string | null>('')

	const formSubmit = function (): void {
		console.log('submit Auth from store')
	}

	return { email, password, formSubmit }
})
