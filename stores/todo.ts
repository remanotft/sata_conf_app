import { defineStore } from 'pinia';

export const useMyTodoStore = defineStore("myTodoStore", () => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { $swal } = useNuxtApp();

	const imageUrl = ref('');
	const altText = ref('');
	const name = ref('');
	const description = ref('');
	const phoneNo = ref('');
	const email = ref('');
	const website = ref('');
	const categoryID = ref('');
	const agendaAddModalVisible = ref(false);
	const thingsToDoList = ref([]);

	const showAddToDoItemModal = () => {
		agendaAddModalVisible.value = !agendaAddModalVisible.value;
	}

	const addThingsToDo = () => {
		agendaAddModalVisible.value = false;

		//@ts-expect-error
		$swal.fire({
			title: 'Add Thing To Do?',
			showCancelButton: true,
			confirmButtonColor: '#1e9d57',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes!',
			showLoaderOnConfirm: true,
		}).then(async (result: any) => {
			if (result.isConfirmed) {
				const response: any = await $fetch('/api/conference/todo/todo', {
					method: 'post',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						name: name.value,
						description: description.value,
						phoneNo: phoneNo.value,
						email: email.value,
						website: website.value,
						imageUrl: imageUrl.value,
						altText: altText.value,
						categoryID: categoryID.value,
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
							await getAllThingsToDo();
							// resetValues();
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

	const getAllThingsToDo = async () => {
		const response: any = await $fetch('/api/conference/todo/todo', {
			method: 'get'
		});

		thingsToDoList.value = response;
	}

	return {
		showAddToDoItemModal,
		addThingsToDo,
		getAllThingsToDo,
		imageUrl,
		altText,
		name,
		description,
		phoneNo,
		email,
		website,
		categoryID,
		agendaAddModalVisible,
		thingsToDoList
	}
});