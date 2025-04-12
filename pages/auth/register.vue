<template>
	<div class="md:px-80 pt-20">
		<RegisterForm />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'auth-layout'
});

import RegisterForm from '~/components/auth/RegisterForm.vue';

</script>

<style></style>