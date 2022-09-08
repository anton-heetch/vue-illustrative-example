import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios, { AxiosResponse } from 'axios'

export const useRegisterStore = defineStore('register', () => {
	const firstName = ref<string>('')
	const email = ref<string>('')
	const password = ref<string>('')
	const passwordRepeat = ref<string>('')
	let auth = ref<AxiosResponse | any>({})

	const firebaseApi = import.meta.env.VITE_FIREBASE_TOKEN
	const authUrl = import.meta.env.VITE_AUTH_URL
	const firestoreUrl = import.meta.env.VITE_FIRESTORE_URL

	const formSubmit = async function () {
		const authData = {
			displayName: firstName.value,
			email: email.value,
			password: password.value,
			returnSecureToken: true,
		}

		try {
			auth = await axios.post(
				`${authUrl}accounts:signUp?key=${firebaseApi}`,
				authData
			)
			await axios.post(
				`${firestoreUrl}databases/(default)/documents/users?documentId=${auth.data.localId}`,
				{
					fields: {
						name: { stringValue: firstName.value },
						email: { stringValue: email.value },
						created: { timestampValue: new Date() },
					},
				},
				{
					headers: {
						Authorization: `Bearer ${auth.data.idToken}`,
					},
				}
			)
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
