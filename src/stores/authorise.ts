import { defineStore } from 'pinia'
import { inject, ref } from 'vue'
import { AxiosResponse } from 'axios'
import Repository from '../plugins/repositories'

export const useAuthStore = defineStore('auth', () => {
	let email = ref<string>('')
	let password = ref<string>('')
	let authData = ref<AxiosResponse>()
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
				loadingStatus.value = false
				router.push('/')
			})
			.catch((e: any) => {
				toast('Wrong user credential')
				loadingStatus.value = false
				throw new Error('Authorisation problem: ' + e)
			})
	}

	return { email, password, loadingStatus, formSubmit }
})
