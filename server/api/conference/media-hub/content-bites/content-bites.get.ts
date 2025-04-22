export default defineEventHandler(async (event) => {
	
	const { apiBase } = useRuntimeConfig();

	const response: any = await $fetch('ContentBites/GetContentBiteItems', {
		baseURL: apiBase
	});

	return response;
});