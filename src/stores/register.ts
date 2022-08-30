import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useRegisterStore = defineStore('register', () => {
	const firstName = ref<string | null>('')
	const email = ref<string | null>('')
	const password = ref<string | null>('')
	const passwordRepeat = ref<string | null>('')

	const formSubmit = function (): void {
		console.log('submit Reg from store')
	}

	const passwordMatches = computed(
		() => password.value === passwordRepeat.value
	)

	return {
		firstName,
		email,
		password,
		passwordRepeat,
		passwordMatches,
		formSubmit,
	}
})
