<template>
	<div>
	</div>
</template>

<script lang="ts" setup>
import 'primeicons/primeicons.css';

definePageMeta({
	layout: 'admin',
	middleware: ['auth-user']
});

const { assignUserData } = useMyAuthStore();
const { loggedInUser } = storeToRefs(useMyAuthStore());
const { status } = useAuth();

onMounted(async () => {
	await assignUserData();
});

</script>

<style></style>``