<template>
  <div class="bg-white pb-32">

    <!-- HEADER -->
    <div id="header">
      <Header />
    </div>

    <!-- Hero Section -->
    <section id="hero-section">
      <img src="/assets/images/final/Openserve SATA - Mobile.png" alt="Hero image" class="mobile-hero">
      <img src="/assets/images/final/Openserve SATA - Desktop.png" alt="Hero image" class="desktop-hero">
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
    <section id="speakers" class="py-20">
      <Speakers />
    </section>

    <!-- Exhibitors -->
    <section id="exhibitors" class="py-10">
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
    <section id="things-to-do" class="py-20">
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
</template>

<script lang="ts" setup>
import 'primeicons/primeicons.css';

</script>

<style></style>