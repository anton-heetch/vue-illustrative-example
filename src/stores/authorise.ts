import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import axios, { AxiosResponse } from 'axios'
import { useUserDataStore } from './user-data'

export const useAuthStore = defineStore('auth', () => {
	const email = ref<string>('')
	const password = ref<string>('')
	let auth = ref<AxiosResponse | any>({})
	const userDataStore = useUserDataStore()
	let { user } = storeToRefs(userDataStore)

	const firebaseApi = import.meta.env.VITE_FIREBASE_TOKEN
	const authUrl = import.meta.env.VITE_AUTH_URL
	const firestoreUrl = import.meta.env.VITE_FIRESTORE_URL

	const formSubmit = async function (): Promise<any> {
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
				.then((resp) => {
					auth = resp.data
					localStorage.setItem('fIdToken', auth.idToken)
					localStorage.setItem('fLocalId', auth.localId)
				})

			await axios
				.get(
					`${firestoreUrl}databases/(default)/documents/users/${auth.localId}`,
					{
						headers: {
							Authorization: `Bearer ${auth.idToken}`,
						},
					}
				)
				.then((resp) => {
					user.value = resp.data.fields
				})
		} catch (e) {
			console.log(e)
		}
	}

	return { email, password, formSubmit }
})
