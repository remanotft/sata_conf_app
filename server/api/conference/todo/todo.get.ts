export default defineEventHandler(async (event) => {

	const { apiBase } = useRuntimeConfig();

	const response: any = await $fetch('ThingsToDo/GetAllThingsToDo', {
		baseURL: apiBase
	});

	return response;
});