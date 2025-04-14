<template>
  <section class="relative bg-black py-12 text-white text-center">
    <h2 class="mb-8 font-semibold text-xl">TRUSTED BY SPONSORS</h2>
    
    <div class="z-10 relative justify-items-center items-center gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4">
      <img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt" class="opacity-80 hover:opacity-100 grayscale h-8 sm:h-10 transition" />
    </div>

    <!-- Optional background handshake -->
    <img src="/assets/images/Conference_Map.png" alt="handshake background" class="z-0 absolute inset-0 opacity-5 w-full h-full object-contain pointer-events-none" />
  </section>
</template>

<script setup>
const logos = [
  { src: '/images/sponsors/appcues.svg', alt: 'Appcues' },
  { src: '/images/sponsors/insightly.svg', alt: 'Insightly' },
  { src: '/images/sponsors/codeship.svg', alt: 'Codeship' },
  { src: '/images/sponsors/instapage.svg', alt: 'Instapage' },
  { src: '/images/sponsors/prezi.svg', alt: 'Prezi' },
  { src: '/images/sponsors/typeform.svg', alt: 'Typeform' },
  { src: '/images/sponsors/meetup.svg', alt: 'Meetup' },
  { src: '/images/sponsors/pipedrive.svg', alt: 'Pipedrive' },
]
</script>
