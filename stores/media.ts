import { defineStore } from 'pinia'

export const useMyMediaStore = defineStore("myMediaStore", () => {  
  const imageGalleryItems = ref([])

	const getImageGalleryItems = async () => {
		const response: any = await $fetch('/api/conference/media/media', {
			method: 'get'
		});
		
		imageGalleryItems.value = response;
	}

  return {getImageGalleryItems, imageGalleryItems}
})
