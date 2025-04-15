import { defineStore } from 'pinia';

export const useMySpeakersStore = defineStore("mySpeakersStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { $swal } = useNuxtApp();

	const firstName = ref('');
	const lastName = ref('');
	const title = ref('');
	const biography = ref('');
	const linkedIn = ref('');
	const company = ref('');
	const speakersList = ref([]);
	const speakerAddModalVisible = ref(false);
	const speakerEditModalVisible = ref(false);
	const selectedSpeaker: any = ref({});
	const speakerAvatarFile = ref('');
	const speakerUploadLoader = ref(false);

	const resetValues = () => {
		firstName.value = '';
		lastName.value = '';
		title.value = '';
		linkedIn.value = '';
		company.value = '';
	}

	const showEditSpeakerModal = async (speaker: {}) => {
		selectedSpeaker.value = { ...speaker };
		speakerEditModalVisible.value = !speakerEditModalVisible.value;
	}

	const showAddSpeakerModal = () => {
		speakerAddModalVisible.value = !speakerAddModalVisible.value;
	};

	const uploadSpeakerAvatar = async () => {
		// speakerUploadLoader.value = true;

		const fd = new FormData();
		fd.append('File', speakerAvatarFile.value);
		fd.append('loggedInUser', loggedInUser.value.userId);

		const response: any = await $fetch('https://www.tailorfit-api.net.za/DNASATAAPI/api/Speakers/UploadAvatar', {
			method: 'post',
			headers: {
				Authorization: 'Bearer ' + loggedInUser.value.token
			},
			params: {
				id: selectedSpeaker.value.id
			},
			body: fd,
		});

		if (response.status) {
			await getAllSpeakers();
			speakerEditModalVisible.value = false;
			await assignSpeaker(selectedSpeaker.value.id);
			await showEditSpeakerModal(selectedSpeaker.value[0]);
		}
	}

	const assignSpeaker = (id: any) => {
		selectedSpeaker.value = speakersList.value.result.filter((f: any) => f.id === id);
	}

	const updateSpeaker = async () => {
		speakerEditModalVisible.value = false;
		//@ts-expect-error
		$swal.fire({
			title: 'Are you sure?',
			showCancelButton: true,
			confirmButtonColor: '#1e9d57',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed){
				const response: any = await $fetch('/api/conference/speakers/' + selectedSpeaker.value.id, {
					method: 'put',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						firstName: selectedSpeaker.value.firstName,
						lastName: selectedSpeaker.value.lastName,
						title: selectedSpeaker.value.title,
						biography: selectedSpeaker.value.biography,
						linkedIn: selectedSpeaker.value.linkedIn,
						company: selectedSpeaker.value.company,
						loggedInUser: loggedInUser.value.userId
					}
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Speaker Updated Successfully!',
						icon: 'success',
					})
						.then(async () => {
							// await getCompanyConfigurations(companyId.value);
							await getAllSpeakers();
							selectedSpeaker.value = {};
						});
				} else {
					//@ts-expect-error
					$swal.fire({
						title: response.error,
						icon: 'error',
					});
				}
			}
		})
	}

	const createSpeaker = async () => {
		speakerAddModalVisible.value = false;

		//@ts-expect-error
		$swal.fire({
			title: 'Add Speaker?',
			showCancelButton: true,
			confirmButtonColor: '#1e9d57',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				const response: any = await $fetch('/api/conference/speakers/speakers', {
					method: 'post',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						firstName: firstName.value,
						lastName: lastName.value,
						title: title.value,
						biography: biography.value,
						linkedIn: linkedIn.value,
						company: company.value,
						loggedInUser: loggedInUser.value.userId
					}
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Speaker Added Successfully!',
						icon: 'success',
					})
						.then(async () => {
							// await getCompanyConfigurations(companyId.value);
							await getAllSpeakers();
							resetValues();
						});
				} else {
					//@ts-expect-error
					$swal.fire({
						title: response.error,
						icon: 'error',
					});
				}
			}
		})
	}

	const getAllSpeakers = async () => {
		const response: any = await $fetch('/api/conference/speakers/speakers', {
			method: 'get'
		});

		speakersList.value = response;
	}



	return {
		createSpeaker,
		updateSpeaker,
		getAllSpeakers,
		showAddSpeakerModal,
		showEditSpeakerModal,
		uploadSpeakerAvatar,
		speakersList,
		speakerAddModalVisible,
		firstName,
		lastName,
		title,
		biography,
		linkedIn,
		company,
		selectedSpeaker,
		speakerEditModalVisible,
		speakerAvatarFile
	}
});
