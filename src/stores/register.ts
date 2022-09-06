import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios, { AxiosResponse } from 'axios'

export const useRegisterStore = defineStore('register', () => {
	const firstName = ref<string | null>('')
	const email = ref<string | null>('')
	const password = ref<string | null>('')
	const passwordRepeat = ref<string | null>('')
	let auth = ref<AxiosResponse | any>({})

	const firebaseApi = import.meta.env.VITE_FIREBASE_TOKEN
	const authUrl = import.meta.env.VITE_AUTH_URL
	const firestoreUrl = import.meta.env.VITE_FIRESTORE_URL

	const formSubmit = async function () {
		const authData = {
			email: email.value,
			password: password.value,
			returnSecureToken: true,
		}

		await console.log(import.meta)

		try {
			auth = await axios.post(
				`${authUrl}accounts:signUp?key=${firebaseApi}`,
				authData
			)
			await axios.post(`${firestoreUrl}databases/(default)/documents/users`, {
				fields: {
					name: { stringValue: firstName.value },
					email: { stringValue: email.value },
					created: { timeStamp: new Date() },
				},
			})
		} catch (e) {
			console.log(e)
		}
	}

	const passwordMatches = computed(
		() => password.value === passwordRepeat.value
	)

	// const auth = function(): void {
	//
	// }

	return {
		firstName,
		email,
		password,
		passwordRepeat,
		passwordMatches,
		formSubmit,
	}
})
