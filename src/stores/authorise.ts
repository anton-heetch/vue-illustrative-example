import { defineStore, storeToRefs } from 'pinia'
import { inject, ref } from 'vue'
import axios, { AxiosResponse } from 'axios'
import { useUserDataStore } from './user-data'

export const useAuthStore = defineStore('auth', () => {
	const email = ref<string>('')
	const password = ref<string>('')
	let auth = ref<AxiosResponse | any>({})
	const userDataStore = useUserDataStore()
	let { user } = storeToRefs(userDataStore)
	let loadingStatus = ref<boolean>(false)

	const toast: any = inject('toaster')

	const firebaseApi = import.meta.env.VITE_FIREBASE_TOKEN
	const authUrl = import.meta.env.VITE_AUTH_URL
	const firestoreUrl = import.meta.env.VITE_FIRESTORE_URL

	const formSubmit = async function (): Promise<any> {
		loadingStatus.value = true

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
					loadingStatus.value = false
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
					loadingStatus.value = false
					toast(`Привет ${user.value?.name.stringValue}!`)
				})
		} catch (e) {
			console.log(e)
			loadingStatus.value = false
		}
	}

	return { email, password, loadingStatus, formSubmit }
})
