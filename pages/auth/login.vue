<template>
	<div class="md:px-80 pt-20">
		<LoginForm />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'auth-layout'
});

import LoginForm from '~/components/auth/LoginForm.vue';

</script>

<style></style>