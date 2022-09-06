import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyB87MlTlmhowQ0hQZfQCNFWnqexL4ur5Jw',
	authDomain: 'vue3-example-project.firebaseapp.com',
	projectId: 'vue3-example-project',
	storageBucket: 'vue3-example-project.appspot.com',
	messagingSenderId: '13760642329',
	appId: '1:13760642329:web:dd1d2a9c18b304bb549988',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore()
export default db
