import { defineStore, storeToRefs } from 'pinia'
import { inject, ref } from 'vue'
import { AxiosResponse } from 'axios'
import { useUserDataStore } from './user-data'
import Repository from '../plugins/repositories'

export const useAuthStore = defineStore('auth', () => {
	const userDataStore = useUserDataStore()
	const { user } = storeToRefs(userDataStore)
	let email = ref<string>('')
	let password = ref<string>('')
	let authData = ref<AxiosResponse | any>({})
	let loadingStatus = ref<boolean>(false)
	const toast: any = inject('toaster')
	const UserRepo = Repository.get('user')
	const router: any = inject('router')

	const formSubmit = async function (): Promise<any> {
		loadingStatus.value = true

		const authPayload = {
			email: email.value,
			password: password.value,
			returnSecureToken: true,
		}

		const clearFields = () => {
			email.value = ''
			password.value = ''
		}

		await UserRepo.authorise(authPayload)
			.then((resp: any) => {
				authData = resp.data
				clearFields()
				router.push('/')
			})
			.catch((e: any) => {
				toast('Wrong user credential')
				loadingStatus.value = false
				throw new Error('Authorisation problem: ' + e)
			})

		await UserRepo.getProfile({
			localId: authData.localId,
			idToken: authData.idToken,
		}).then((resp: any) => {
			user.value = resp
			toast(`Hello ${user.value?.name.stringValue}!`)
			loadingStatus.value = false
		})
	}

	const logOut = () => {
		localStorage.removeItem('fIdToken')
		localStorage.removeItem('fLocalId')
		router.go()
	}

	return { email, password, loadingStatus, formSubmit, logOut }
})
