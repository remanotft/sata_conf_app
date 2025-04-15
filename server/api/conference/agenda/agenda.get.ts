export default defineEventHandler(async (event) => {
	
	const { apiBase } = useRuntimeConfig();

	const response: any = await $fetch('Agenda/GetAllAgendaitems', {
		baseURL: apiBase
	});

	return response;
});