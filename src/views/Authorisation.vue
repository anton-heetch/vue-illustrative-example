<script setup lang="ts">
import Form from '../components/templates/Form.vue'
import Input from '../components/molecules/Input.vue'
import Button from '../components/molecules/Button.vue'

const formSubmit = function () {
	console.log('clicked')
}
</script>
<template>
	<h1>Authorisation</h1>
	<Form @submit="formSubmit">
		<Input type="email" label-text="Email" placeholder="Email address" />
		<Input type="password" label-text="Password" placeholder="Enter password" />
		<Button button-text="Authorisation" button-type="submit" />
		<router-link to="/registration">Registration</router-link>
	</Form>
</template>
