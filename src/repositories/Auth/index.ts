import axios from 'axios'

const firebaseApi: string = import.meta.env.VITE_FIREBASE_TOKEN
const authUrl: string = import.meta.env.VITE_AUTH_URL
const firestoreUrl: string = import.meta.env.VITE_FIRESTORE_URL

export default {
	authorise: async (payload: object) => {
		let response: object = {}
		await axios
			.post(`${authUrl}accounts:signInWithPassword?key=${firebaseApi}`, payload)
			.then((resp: any) => {
				response = resp
				localStorage.setItem('fIdToken', resp.data.idToken)
				localStorage.setItem('fLocalId', resp.data.localId)
			})

		return response
	},

	registration: async (payload: any) => {},

	checkAuth: async (payload: any) => {},

	getProfile: async (payload: any) => {
		let response: object = {}
		try {
			await axios
				.get(
					`${firestoreUrl}databases/(default)/documents/users/${payload.localId}`,
					{
						headers: {
							Authorization: `Bearer ${payload.idToken}`,
						},
					}
				)
				.then((resp) => {
					response = resp.data.fields
				})
		} catch (e) {
			console.log('User profile getting data problem: ' + e)
		}
		return response
	},
}
