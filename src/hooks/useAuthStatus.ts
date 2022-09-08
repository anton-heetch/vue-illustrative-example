export const useAuthStatus = (): boolean => {
	return !!(
		localStorage.getItem('fIdToken') && localStorage.getItem('fLocalId')
	)
}
