import { defineStore } from 'pinia';

export const useMySpeakersStore = defineStore("mySpeakersStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());

	const firstName = ref('');
	const lastName = ref('');
	const title = ref('');
	const linkedIn = ref('');
	const company = ref('');

	const createSpeaker = async () => {
		const response: any = await $fetch('/api/conference/speakers/speakers', {
			method: 'post',
			headers: {
				Authorization: 'Bearer ' + loggedInUser.value.token
			},
			body: {
				firstName: firstName,
				lastName: lastName,
				title: title,
				linkedIn: linkedIn,
				company: company,
				loggedInUser: loggedInUser
			}
		});

		return response;
	}

	return {
		createSpeaker,
	}

});
