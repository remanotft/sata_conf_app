import { defineStore } from 'pinia'

export const useMyImage_galleryStore = defineStore("myImage_galleryStore", () => {

	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { $swal } = useNuxtApp();

	const imageGalleryList:any = ref([]);
	const imageGalleryEditModalVisible = ref(false);
	const selectedImageGalleryItem: any = ref({});

	const showEditImageGalleryModal = (image: {}) => {
		selectedImageGalleryItem.value = { ...image };
		imageGalleryEditModalVisible.value = !imageGalleryEditModalVisible.value;
	}

	const updateImageGalleryItem = async () => {
		imageGalleryEditModalVisible.value = false;

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
				const response: any = await $fetch('/api/conference/media-hub/image-gallery/' + selectedImageGalleryItem.value.id, {
					method: 'put',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
					body: {
						description: selectedImageGalleryItem.value.description,
						altText: selectedImageGalleryItem.value.altText,
						loggedInUser: loggedInUser.value.userId
					}
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Image Gallery Item Updated Successfully!',
						icon: 'success',
					})
						.then(async () => {
							await getAllImageGalleryItems();
							selectedImageGalleryItem.value = {};
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

	const deleteImageGalleryItem = (id: any) => {
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
				const response: any = await $fetch('/api/conference/media-hub/image-gallery/' + id, {
					method: 'delete',
					headers: {
						Authorization: 'Bearer ' + loggedInUser.value.token
					},
				});

				if (response.status) {
					//@ts-expect-error
					$swal.fire({
						title: 'Image Gallery Item Deleted Successfully!',
						icon: 'success',
					}).then(async () => {
						// await getCompanyConfigurations(companyId.value);
						await getAllImageGalleryItems();
						selectedImageGalleryItem.value = {};
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

	const getAllImageGalleryItems = async () => {
		const response: any = await $fetch('/api/conference/media-hub/image-gallery/image-gallery', {
			method: 'get'
		});

		imageGalleryList.value = response;
	}

	return {
		getAllImageGalleryItems,
		showEditImageGalleryModal,
		updateImageGalleryItem,
		deleteImageGalleryItem,
		imageGalleryList,
		imageGalleryEditModalVisible,
		selectedImageGalleryItem
	}
});