export default defineEventHandler(async (event) => {

	const { apiBase } = useRuntimeConfig();
	const authorization = getRequestHeader(event, "Authorization");
	const body = await readBody(event);
	const { id } = getQuery(event);

	const response: any = await $fetch('Speakers/UploadAvatar', {
		baseURL: apiBase,
		method: 'post',
		//@ts-expect-error
		headers: {
			Authorization: authorization,
			'content-type': 'application/json',
		},
		params: {
			id: id
		},
		body: body
	});

	return response;

});