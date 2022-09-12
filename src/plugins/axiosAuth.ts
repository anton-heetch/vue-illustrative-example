import axios from 'axios'
import type { App } from 'vue'

const firebaseApi: string = import.meta.env.VITE_FIREBASE_TOKEN
const authUrl: string = import.meta.env.VITE_AUTH_URL

interface AxiosOptions {
	baseUrl?: string
	token?: string
}

export default {
	install: (app: App, options: AxiosOptions) => {
		app.config.globalProperties.$axios = axios.create({
			baseURL: authUrl,
			headers: {
				Authorization: `Bearer ${firebaseApi}`,
			},
		})
	},
}
