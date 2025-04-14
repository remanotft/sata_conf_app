<template>
  <div>
    <!-- HEADER -->
    <div>
      <Header />
    </div>

    <!-- Hero Section -->
    <section id="hero-section">
      <img src="/assets/images/Hero Image (Placehoder).png" alt="Hero image" class="hero-image">
    </section>

    <!-- Agenda -->
    <section id="agenda" class="md:gap-4 md:grid md:grid-cols-2 p-4">
      <AgendaTab />
    </section>

    <!-- Conference Map -->
    <section id="map" class="p-4">
      <ConferenceMap />
    </section>

    <!-- Speakers -->
    <section id="speakers">
      <Speakers />
    </section>

    <!-- Things to do -->
    <section id="things-to-do" class="p-4">
      <ThingsToDo />
    </section>

    <!-- media Hub -->
    <section id="media-hub" class="p-4">
      <MediaHub />
    </section>

    <!-- emergency info -->
    <section id="emergency-info">
      <EmergencyInfo />
    </section>

    <section id="sponsors">

    </section>

    <div id="footer">
      <Footer />
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>