import { defineStore } from 'pinia';

export const useMyAgendaStore = defineStore("myAgendaStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { $swal } = useNuxtApp();
	const { getFormattedTime, getMomentTime, getFormattedDate } = useMyGlobal_functionsStore();

	const day = ref('');
	const date = ref('');
	const startTime = ref(null);
	const endTime = ref(null);
	const duration = ref(0);
	const isBreak = ref(false);
	const activity = ref('');
	const participantFlag = ref(false);
	const participants = ref('');
	const facilitatorFlag = ref(false);
	const facilitators = ref('');
	const panelMemberFlag = ref(false);
	const panelMembers = ref('');
	const agendaList = ref([]);
	const agendaAddModalVisible = ref(false);
	const agendaEditModalVisible = ref(false);
	const selectedAgenda: any = ref({});
	const agendaAvatarFile = ref('');

	const splitFacilitators = computed(() => {
		return facilitators.value.split('\n');
	});

	const splitParticipants = computed(() => {
		return participants.value.split('\n');
	});

	const splitPanelMembers = computed(() => {
		return panelMembers.value.split('\n');
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

	const updateAgendaItem = () => {

	}

	const deleteAgendaItem = (id: any) => {
		//@ts-expect-error
		$swal.fire({
			title: 'Are you sure you want to delete?',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#1e9d57',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				const response: any = await $fetch('/api/conference/agenda/' + id, {
					method: 'delete',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Agenda Item Deleted Successfully!',
						icon: 'success',
					}).then(async () => {
						// await getCompanyConfigurations(companyId.value);
						await getAgendaItems();
						selectedAgenda.value = {};
					});
				} else {
					//@ts-expect-error
					$swal.fire({
						title: response.error,
						icon: 'error',
					});
				}
			}
		});
	}

	const setDate = computed(() => {
		switch (day.value) {
			case 'Day 1':
				return '2025-04-23';

			case 'Day 2':
				return '2025-04-24';

			case 'Day 3':
				return '2025-04-25';
		}
	});

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
						date: setDate.value,
						startTime: getMomentTime(startTime.value),
						endTime: getMomentTime(endTime.value),
						duration: duration.value,
						isBreak: isBreak.value,
						actvity: activity.value,
						partipantFlag: participantFlag.value,
						participants: '{[' + splitParticipants.value + ']}',
						facilitatorFlag: facilitatorFlag.value,
						facilitators: '{[' + facilitators.value + ']}',
						panelMemberFlag: panelMemberFlag.value,
						panelMembers: '{[' + panelMembers.value + ']}',
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
		updateAgendaItem,
		deleteAgendaItem,
		setDate,
		splitParticipants,
		splitFacilitators,
		splitPanelMembers,
		day,
		date,
		startTime,
		endTime,
		duration,
		isBreak,
		activity,
		participantFlag,
		participants,
		facilitatorFlag,
		facilitators,
		panelMemberFlag,
		panelMembers,
		agendaAddModalVisible,
		agendaEditModalVisible,
		agendaList
	}

});
