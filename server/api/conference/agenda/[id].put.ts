export default defineEventHandler(async (event) => {

	const { apiBase } = useRuntimeConfig();
	const authorization = getRequestHeader(event, "Authorization");
	const body = await readBody(event);
	//@ts-expect-error
	const { id } = event.context.params;

	const uri = `${apiBase}Agenda/${id}`;

	const respose: any = await $fetch(uri, {
		method: 'put',
		//@ts-expect-error
		headers: {
			Authorization: authorization,
			'content-type': 'application/json',
		},
		body: body
	});

	return respose;

});