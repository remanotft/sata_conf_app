<template>
	<div>
		<div v-if="maintenanceMode">
			<div id="header">
				<Header />
			</div>

			<!-- Hero Section -->
			<section id="hero-section">
				<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/SATA-Assets/OpenserveSATAComingSoonMobile.png"
					alt="Hero image" class="mobile-hero">

				<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/SATA-Assets/OpenserveSATAComingSoonDesktop.png"
					alt="Hero image" class="desktop-hero">
			</section>

			<div id="footer">
				<Footer />
			</div>
		</div>
		<div v-else class="bg-white pb-32 overflow-x-hidden">
			<!-- HEADER -->
			<div id="header">
				<Header />
			</div>

			<!-- Hero Section -->
			<section id="hero-section">
				<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/SATA-Assets/Openserve+SATA+Mobile.png"
					alt="Hero image" class="mobile-hero">

				<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/SATA-Assets/Openserve+SATA+Desktop.png"
					alt="Hero image" class="desktop-hero">
			</section>

			<!-- Agenda -->
			<section id="agenda" class="md:gap-4 md:grid md:grid-cols-2">
				<AgendaTab />
			</section>

			<!-- Conference Map -->
			<section id="map" class="py-10">
				<ConferenceMap />
			</section>

			<!-- Speakers -->
			<section class="pt-10">
				<div id="speakers" class="py-20">
					<Speakers />
				</div>
			</section>

			<!-- Exhibitors -->
			<section id="exhibitors" class="">
				<Exhibitors />
			</section>

			<!-- Sponsors -->
			<section id="sponsors" class="py-20">
				<Sponsors />
			</section>

			<!-- media Hub -->
			<section id="media-hub" class="pt-20">
				<MediaHub />
			</section>

			<!-- Things to do -->
			<section id="things-to-do" class="py-16">
				<ThingsToDo />
			</section>

			<!-- emergency info -->
			<section id="emergency-info" class="py-20">
				<EmergencyInfo />
			</section>

			<div id="footer">
				<Footer />
			</div>
		</div>
	</div>


</template>

<script lang="ts" setup>
import 'primeicons/primeicons.css';

const maintenanceMode = ref(false);

</script>

<style></style>