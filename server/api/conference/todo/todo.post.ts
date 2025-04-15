export default defineEventHandler(async (event) => {

	const { apiBase } = useRuntimeConfig();
	const authorization = getRequestHeader(event, "Authorization");
	const body = await readBody(event);

	const response: any = await $fetch('ThingsToDo', {
		baseURL: apiBase,
		method: 'post',
		//@ts-expect-error
		headers: {
			Authorization: authorization,
			'content-type': 'application/json',
		},
		body: body
	});

	return response;
});