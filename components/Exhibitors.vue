<template>
  <section class="relative bg-white px-4 py-12 text-center">
    <div class="z-0 absolute inset-0 bg-contain bg-no-repeat bg-bottom opacity-10 pointer-events-none"></div>

    <div class="z-10 relative">
      <h2 class="mb-2 font-bold text-xl">EXHIBITORS</h2>
      <div class="md:h-1 underline"></div>
      <p class="mx-auto mb-10 max-w-md text-gray-500 md:text-lg">
      </p>

      <img src="/assets/images/final/Black overlay.png" alt="Speaker Banner"
        class="z-0 absolute inset-0 opacity-30 w-full h-full object-cover" />
      <!-- Carousel -->
      <Carousel :value="exhibitors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="p-4">
            <div class="flex flex-col items-center bg-white shadow-sm p-6 rounded-xl h-full">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="mb-4 w-auto h-16 object-contain" />
              <div class="font-semibold text-gray-800 text-sm">{{ slotProps.data.name }}</div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const exhibitors = ref([
  {
    name: 'BofiNet',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/BofiNet+Logo.png'
  },
  {
    name: 'Africa Beyond',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Africa+Beyond.png'
  },
  {
    name: 'Amdocs',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Amdocs.png'
  },
  {
    name: 'BAM',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/BAM+1.png'
  },
  {
    name: 'BofiNet 2',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/BofiNet+Logo.png'
  },
  {
    name: 'Mauritius Telecom',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Mauritius+Telecom.png'
  },
  // {
  //   name: 'Providence',
  //   image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Providence-2.png'
  // },
  {
    name: 'Quadrupleplay',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Quadrupleplay.png'
  },
  // {
  //   name: 'INSPUR',
  //   image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Inspur+-+Blue.png'
  // }
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
