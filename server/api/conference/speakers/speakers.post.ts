export default defineEventHandler(async (event) => {

	const { apiBase } = useRuntimeConfig();
	const authorization = getRequestHeader(event, "Authorization");

	const { firstName, lastName, title, linkedIn, company, loggedInUser } = await readBody(event);

	const response: any = await $fetch('Speakers', {
		baseURL: apiBase,
		method: 'post',
		//@ts-expect-error
		headers: {
			Authorization: authorization,
		},
		body: {
			firstName: firstName,
			lastName: lastName,
			title: title,
			linkedIn: linkedIn,
			company: company,
			loggedInUser: loggedInUser
		}
	});
});