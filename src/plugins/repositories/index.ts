import UserRepository from '../../repositories/Auth'
type StringMap = { [key: string]: any }

const repositories: StringMap = {
	user: UserRepository,
}

export default {
	get: (name: keyof StringMap) => repositories[name],
}
