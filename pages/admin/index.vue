<template>
	<div>

	</div>
</template>

<script lang="ts" setup>
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