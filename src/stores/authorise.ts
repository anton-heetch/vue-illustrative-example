import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
	const email = ref('')
	const password = ref('')

	const formSubmit = function (): void {
		console.log('sub from store')
	}

	return { email, password, formSubmit }
})
