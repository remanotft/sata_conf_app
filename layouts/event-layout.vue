<template>
	<div>
		<div id="header" style="background-color: black; opacity: 0.8;">
			<Header />
		</div>

		<!-- <div>
			<div class="hidden md:block">
				<div id="hero-section">
					<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/SATA-Assets/Openserve+SATA+Desktop.png"
						alt="Hero image" class="top-0 desktop-hero">
				</div>
			</div>
		</div> -->

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