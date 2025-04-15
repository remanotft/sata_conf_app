<template>
  <div class="pb-32">
    <!-- HEADER -->
    <div>
      <Header />
    </div>

    <!-- Hero Section -->
    <section id="hero-section">
      <img src="/assets/images/final/Openserve SATA - Mobile.png" alt="Hero image" class="hero-image mobile-hero">
      <img src="/assets/images/final/Openserve SATA - Desktop.png" alt="Hero image" class="hero-image desktop-hero">
    </section>

    <!-- Agenda -->
    <section id="agenda" class="md:gap-4 md:grid md:grid-cols-2">
      <AgendaTab />
    </section>

    <!-- Conference Map -->
    <section id="map" class="py-20">
      <ConferenceMap />
    </section>

    <!-- Speakers -->
    <section id="speakers" class="py-20">
      <Speakers />
    </section>

    <!-- media Hub -->
    <section id="media-hub" class="py-20">
      <MediaHub />
    </section>

    <section id="exhibitors" class="py-10">
      <Exhibitors />
    </section>

    <section id="sponsors" class="py-20">
      <Sponsors />
    </section>

    <!-- Things to do -->
    <section id="things-to-do" class="py-20">
      <ThingsToDo />
    </section>

    <!-- emergency info -->
    <section id="emergency-info" class="py-20">
      <EmergencyInfo />
    </section>

    <div id="footer" class="">
      <Footer />
    </div>

  </div>
</template>

<script lang="ts" setup>
import 'primeicons/primeicons.css';

</script>

<style></style>