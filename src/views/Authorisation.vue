<script setup lang="ts">
import Form from '../components/templates/Form.vue'
import Input from '../components/molecules/Input.vue'
import Button from '../components/molecules/Button.vue'
import { useAuthStore } from '../stores/authorise'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useUserDataStore } from '../stores/user-data'

const { email, password } = storeToRefs(useAuthStore())
const { formSubmit } = useAuthStore()
const { user } = useUserDataStore()
</script>
<template>
	<h1>Authorisation</h1>
	<Form @submit="formSubmit">
		<Input
			v-model="email"
			type="email"
			label-text="Email"
			placeholder="Email address"
		/>
		<Input
			v-model="password"
			type="password"
			label-text="Password"
			placeholder="Enter password"
		/>
		<Button button-text="Authorisation" button-type="submit" />
		<router-link to="/registration">Registration</router-link>
	</Form>
</template>
