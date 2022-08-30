import { defineStore } from 'pinia'
import { ref } from 'Vue'

export const useFormValidation = defineStore('formValidation', () => {
	const input = ref<any>(null)

	return { input }
})
