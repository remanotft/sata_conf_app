export default defineEventHandler(async (event) => {

	const { apiBase } = useRuntimeConfig();

	const { firstName, lastName, phoneNo, email, password } = await readBody(event);

	const registeredUser: any = await $fetch('Users/RegisterNewUser', {
		baseURL: apiBase,
		method: 'post',
		body: {
			firstName: firstName,
			lastName: lastName,
			phoneNo: phoneNo,
			email: email,
			password: password
		}
	})

	return registeredUser;

})