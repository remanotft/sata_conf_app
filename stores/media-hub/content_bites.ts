import { defineStore } from 'pinia'

export const useMyContent_bitesStore = defineStore("myContent_bitesStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { $swal } = useNuxtApp();

	const ContentBitesList = ref([]);
	const day = ref('');
	const speaker = ref('');
	const topic = ref('');
	const videoUrl = ref('');
	const contentBiteAddModalVisible = ref(false);
	const contentBiteEditModalVisible = ref(false);
	const selectedContentBite: any = ref({});

	const showAddContentBitesModal = () => {
		contentBiteAddModalVisible.value = !contentBiteAddModalVisible.value;
	}

	const showEditContentBitesModal = (contentBite: {}) => {
		selectedContentBite.value = { ...contentBite };
		contentBiteEditModalVisible.value = !contentBiteEditModalVisible.value;
	}

	const addContentBite = async () => {
		contentBiteAddModalVisible.value = false;

		//@ts-expect-error
		$swal.fire({
			title: 'Add Content Bite?',
			showCancelButton: true,
			confirmButtonColor: '#1e9d57',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				const response: any = await $fetch('/api/conference/media-hub/content-bites/content-bites', {
					method: 'post',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						day: day.value,
						videoUrl: videoUrl.value,
						speaker: speaker.value,
						topic: topic.value,
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
							await getAllContentBites();
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

	const updateContentBite = async () => {
		contentBiteEditModalVisible.value = false;
		
		//@ts-expect-error
		$swal.fire({
			title: 'Are you sure?',
			showCancelButton: true,
			confirmButtonColor: '#1e9d57',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				const response: any = await $fetch('/api/conference/media-hub/content-bites/' + selectedContentBite.value.id, {
					method: 'put',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						day: selectedContentBite.value.day,
						videoUrl: selectedContentBite.value.videoUrl,
						speaker: selectedContentBite.value.speaker,
						topic: selectedContentBite.value.topic,
						loggedInUser: loggedInUser.value.userId
					}
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Content Bite Updated Successfully!',
						icon: 'success',
					})
						.then(async () => {
							// await getCompanyConfigurations(companyId.value);
							await getAllContentBites();
							selectedContentBite.value = {};
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

	const getAllContentBites = async () => {
		const response: any = await $fetch('/api/conference/media-hub/content-bites/content-bites', {
			method: 'get'
		});

		ContentBitesList.value = response;
	}

	const resetValues = () => {
		day.value = '';
		videoUrl.value = '';
		speaker.value = '';
		topic.value = '';
	}

	return {
		getAllContentBites,
		showAddContentBitesModal,
		showEditContentBitesModal,
		addContentBite,
		updateContentBite,
		ContentBitesList,
		day,
		speaker,
		topic,
		videoUrl,
		contentBiteAddModalVisible,
		contentBiteEditModalVisible,
		selectedContentBite
	}
});