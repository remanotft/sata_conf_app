<template>
	<div>
		<div id="header" style="background-color: black; opacity: 0.8;">
			<Header />
		</div>

		<div id="content-area">
			<slot />
		</div>

		<div id="footer">
			<Footer />
		</div>

	</div>
</template>

<script lang="ts" setup>
</script>

<style>
#content-area {
	padding-top: 80px;
	padding-bottom: 80px;
	min-height: 100vh;
}
</style>