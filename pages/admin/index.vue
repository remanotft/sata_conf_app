<template>
	<div>

	</div>
</template>

<script lang="ts" setup>
import 'primeicons/primeicons.css';

definePageMeta({
	layout: 'admin'
});

const { assignUserData } = useMyAuthStore();
const { loggedInUser } = storeToRefs(useMyAuthStore());

onMounted(async () => {
	assignUserData();
});

</script>

<style></style>