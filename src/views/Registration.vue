<script setup lang="ts">
import Form from '../components/templates/Form.vue'
import Input from '../components/molecules/Input.vue'
import Button from '../components/molecules/Button.vue'
import CheckMark from '../components/atoms/CheckMark.vue'
import { useRegisterStore } from '../stores/register'
import { storeToRefs } from 'pinia'

const { firstName, email, password, passwordRepeat, passwordMatches } =
	storeToRefs(useRegisterStore())
const { formSubmit } = useRegisterStore()
</script>
<template>
	<h1>Registration</h1>
	<Form @submit="formSubmit">
		<Input
			v-model="firstName"
			type="text"
			label-text="Name"
			placeholder="First name"
		/>
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
		<Input
			v-model="passwordRepeat"
			type="password"
			label-text="Repeat password"
			placeholder="Repeat password"
		>
			<CheckMark v-if="passwordRepeat && passwordMatches" />
		</Input>
		<Button button-type="submit" button-text="Register" />
		<router-link to="/">go Home</router-link>
	</Form>
</template>
