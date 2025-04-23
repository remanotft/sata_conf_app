export default defineEventHandler(async (event) => {
	
	const { apiBase } = useRuntimeConfig();

	const response: any = await $fetch('ImageGallery/GetImageGalleryItems', {
		baseURL: apiBase
	});

	return response;
});