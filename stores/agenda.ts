import { defineStore } from 'pinia';

export const useMyAgendaStore = defineStore("myAgendaStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { $swal } = useNuxtApp();
	const { getFormattedTime, getMomentTime, getFormattedDate } = useMyGlobal_functionsStore();

	const day = ref('');
	const date = ref(null);
	const startTime = ref(null);
	const endTime = ref(null);
	const duration = ref(0);
	const isBreak = ref(false);
	const activity = ref('');
	const participants = ref('');
	const agendaList = ref([]);
	const agendaAddModalVisible = ref(false);
	const agendaEditModalVisible = ref(false);
	const selectedAgenda: any = ref({});
	const agendaAvatarFile = ref('');

	const splitParticipants = computed(() => {
		return participants.value.split('\n');
	});

	const showEditAgendaModal = async (speaker: {}) => {
		selectedAgenda.value = { ...speaker };
		agendaEditModalVisible.value = !agendaEditModalVisible.value;
	}

	const showAddAgentModal = () => {
		agendaAddModalVisible.value = !agendaAddModalVisible.value;
	};

	const getAgendaItems = async () => {
		const response: any = await $fetch('/api/conference/agenda/agenda', {
			method: 'get'
		});

		agendaList.value = response;
	}

	const createAgendaItem = async () => {
		agendaAddModalVisible.value = false;

		//@ts-expect-error
		$swal.fire({
			title: 'Add Agenda Item?',
			showCancelButton: true,
			confirmButtonColor: '#1e9d57',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				const response: any = await $fetch('/api/conference/agenda/agenda', {
					method: 'post',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						day: day.value,
						date: getFormattedDate(date.value),
						startTime: getMomentTime(startTime.value),
						endTime: getMomentTime(endTime.value),
						duration: duration.value,
						isBreak: isBreak.value,
						actvity: activity.value,
						participants: '{[' + splitParticipants.value + ']}',
						loggedInUser: loggedInUser.value.userId
					}
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Agenda Item Added Successfully!',
						icon: 'success',
					})
						.then(async () => {
							// await getCompanyConfigurations(companyId.value);
							await getAgendaItems();
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

	const resetValues = () => {
		day.value = '';
		date.value = null;
		startTime.value = null;
		endTime.value = null;
		duration.value = 0;
		isBreak.value = false;
		activity.value = '';
		participants.value = '';
	}

	return {
		showEditAgendaModal,
		showAddAgentModal,
		createAgendaItem,
		getAgendaItems,
		splitParticipants,
		day,
		date,
		startTime,
		endTime,
		duration,
		isBreak,
		activity,
		participants,
		agendaAddModalVisible,
		agendaEditModalVisible,
		agendaList
	}

});
