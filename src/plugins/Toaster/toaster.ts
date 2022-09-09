import Toaster from './Toaster.vue'
// @ts-ignore
import { mount } from './mount.js'

export default {
	install: (app: any, options: object) => {
		// app.component('toaster', Toaster)
		app.config.globalProperties.$toaster = (
			message: string = '',
			type: string = ''
		) => {
			const { el, vNode, destroy } = mount(Toaster, {
				props: { message, type },
			})
			setTimeout(() => {
				destroy()
			}, 3000)
			document.querySelector('#app')?.appendChild(el)
		}
	},
}
