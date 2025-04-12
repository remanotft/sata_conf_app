import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore("auth", () => {
	const router = useRouter();
	const { $swal } = useNuxtApp();

	const loggedInUser = ref();
	const firstName = ref('');
	const lastName = ref('');
	const phoneNo = ref('');
	const email = ref('');
	const password = ref('');

	const assignUserData = async () => {
		const data = await $fetch('/api/userSession')

		//@ts-expect-error
		loggedInUser.value = data.user;

	}

	const registerUser = async (p0?: { firstName: string; lastName: string; phoneNo: string; email: string; password: string; }) => {
		const response = await $fetch('/api/auth/register', {
			method: 'post',
			body: {
				firstName: firstName.value,
				lastName: lastName.value,
				phoneNo: phoneNo.value,
				email: email.value,
				password: password.value
			}
		});

		if (response.status) {
			//@ts-expect-error
			$swal.fire({
				title: 'Success!',
				text: 'Successfully Registered! Redirecting to Login Screen...',
				icon: 'success',
				confirmButtonText: 'Login'
			}).then(() => {
				router.push({ path: '/auth/login' })
			})
		} else
			//@ts-expect-error
			$swal.fire({
				title: response.error,
				icon: 'error',
			})
	}

	return {
		assignUserData,
		registerUser,
		loggedInUser,
		firstName,
		lastName,
		phoneNo,
		email,
		password
	}
});
