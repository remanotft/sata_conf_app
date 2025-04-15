export default defineNuxtRouteMiddleware((to, from) => {
	const { loggedInUser } = storeToRefs(useMyAuthStore());
	const { status } = useAuth();

	if ( status.value === 'unauthenticated' ) {
		return navigateTo("/auth/login");
	}
});