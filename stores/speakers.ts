import { defineStore } from 'pinia';

export const useMySpeakersStore = defineStore("mySpeakersStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());

	const firstName = ref('');
	const lastName = ref('');
	const title = ref('');
	const linkedIn = ref('');
	const company = ref('');
	const speakersList = ref([]);

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

	const getAllSpeakers = async () => {
		const response: any = await $fetch('/api/conference/speakers/speakers', {
			method: 'get'
		});

		speakersList.value = response;
	}

	return {
		createSpeaker,
		getAllSpeakers,
		speakersList
	}

});
