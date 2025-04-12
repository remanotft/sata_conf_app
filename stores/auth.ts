import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore("auth", () => {
	const loggedInUser = ref();

	const assignUserData = async () => {
		const data = await $fetch('/api/userSession')

		//@ts-expect-error
		loggedInUser.value = data.user;

	}

	return {
		assignUserData,
		loggedInUser
	}
});
