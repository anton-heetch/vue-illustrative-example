import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import axios, { AxiosRequestConfig } from 'axios'
import { useUserDataStore } from './user-data'

export const useAuthStore = defineStore('auth', () => {
	const { user } = storeToRefs(useUserDataStore())

	const email = ref<string | null>('')
	const password = ref<string | null>('')
	let auth = ref<object | null>({})

	const firebaseApi = import.meta.env.VITE_FIREBASE_TOKEN
	const authUrl = import.meta.env.VITE_AUTH_URL
	const firestoreUrl = import.meta.env.VITE_FIRESTORE_URL

	const formSubmit = async function (): Promise<any> {
		console.log('submit Auth from store')

		const authData = {
			email: email.value,
			password: password.value,
			returnSecureToken: true,
		}

		try {
			await axios
				.post(
					`${authUrl}accounts:signInWithPassword?key=${firebaseApi}`,
					authData
				)
				.then((resp) => (auth = resp.data))

			await axios
				.get(`${firestoreUrl}databases/(default)/documents/users`, {
					headers: {
						Authorization: `Bearer ${auth.idToken}`,
					},
				})
				.then((resp) => console.log(resp.data))
		} catch (e) {
			console.log(e)
		}
	}

	return { email, password, formSubmit }
})
