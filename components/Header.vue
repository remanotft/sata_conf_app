<template>
	<div>
		<header :class="{ 'scrolled-header': scrolled }">
			<div class="md:justify-start header-container">
				<NuxtLink to="/">
					<img src="/assets/images/Asset SATA.png" alt="Logo" style="height: 50px;">
				</NuxtLink>
			</div>
		</header>

	</div>
</template>

<script lang="ts" setup>
const scrolled = ref(false)

const handleScroll = () => {
	scrolled.value = window.scrollY > 0
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style></style>