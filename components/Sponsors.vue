<template>
  <div>
    <h2 class="font-medium text-white text-xl">SPONSORS</h2>

    <div class="py-4 text-center" style="color: black">
      <!-- Globe Background -->
      <div>
        <img src="/assets/images/final/Green overlay.png" alt="Top left globe"
          class="top-20 left-0 absolute opacity-10 scale-110 transform" />
      </div>

      <!-- Carousel -->
      <div class="pt-2">
        <Carousel :value="sponsors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
          :showIndicators="false" circular :autoplayInterval="3000">
          <template #item="slotProps">
            <div class="flex justify-center">
              <img :src="slotProps.data.image" :alt="slotProps.data.name"
                class=" rounded-xl w-40 md:w-56 h-24 md:h-48" />
              <!-- <div class="font-semibold text-white text-sm md:text-xl">{{ slotProps.data.name }}</div> -->
            </div>
          </template>
        </Carousel>
      </div>

    </div>
  </div>
</template>

<script setup>

const sponsors = ref([
  {
    name: 'Open Serve',
    image: '    https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Openserve.jpg',
  },


  {
    name: 'BCX',
    image: '    https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BCX.jpg',
  },

  {
    name: 'Telkom',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Telkom.png',
  },


  {
    name: 'Inspur',
    image: '    https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Inspur.jpg',
  },


  {
    name: 'AMDOCS',
    image: '    https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Amdocs.jpg',
  },

])

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>


<!-- w-32 md:w-48 h-32 md:h-48 -->