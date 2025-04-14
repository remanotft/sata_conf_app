<template>
  <div>  
    <!-- HEADER -->
    <div>
      <Header />
    </div>
  
    <!-- Hero Section -->
    <section id="hero-section">
      <img src="/assets/images/mobile hero.png" alt="Hero image" class="hero-image">
    </section>
  
    <!-- Agenda -->
    <section id="agenda" class="p-4">
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
    <section id="media-hub">
      <Button class="bg-green-600 text-white">See Full Media</Button>
    </section>
  
    <!-- emergency info -->
    <section id="emergency-info">
      <EmergencyInfo />
    </section>
  
    <div>
      <Footer />
    </div>
  

  </div>
  </template>
  
  <script lang="ts" setup>
  import 'primeicons/primeicons.css';
  
  </script>
  
  <style></style>