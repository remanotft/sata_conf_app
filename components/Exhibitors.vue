<template>
  <div class="relative bg-white px-4 text-center">
    <!-- Globe Backgrounds -->
    <img src="/assets/images/final/Black overlay.png" alt="Top left globe"
      class="top-10 left-10 z-0 absolute opacity-20 p-2 w-1/2 max-w-[300px] pointer-events-none" />

    <img src="/assets/images/final/Black overlay.png" alt="Top right globe"
      class="top-0 left-60 z-0 absolute opacity-20 p-2 w-1/2 max-w-[300px] rotate-90 pointer-events-none" />

    <img src="/assets/images/final/Black overlay.png" alt="Bottom left globe"
      class="bottom-10 left-5 z-0 absolute opacity-20 p-2 w-1/2 max-w-[300px] -rotate-90 pointer-events-none" />

    <img src="/assets/images/final/Black overlay.png" alt="Bottom right globe"
      class="top-1/2 left-1/2 z-0 absolute opacity-20 p-2 w-1/2 max-w-[300px] rotate-180 -translate-x-1/2 -translate-y-1/2 pointer-events-none transform" />


    <!-- Content -->
    <div class="z-10 relative">
      <h1 class="p-4 font-bold md:font-bold md:text-3xl">EXHIBITORS</h1>


      <!-- Grid -->
      <div class="gap-4 grid grid-cols-3 md:grid-cols-3 p-4">
        <div v-for="(exhibitor, index) in exhibitors" :key="index"
          class="flex flex-col items-center bg-transparent p-6">
          <img :src="exhibitor.image" :alt="exhibitor.name" class="mb-4 rounded-md w-auto h-16 object-contain" />
          <!-- <div class="font-semibold text-gray-800 text-sm">
            {{ exhibitor.name }}
          </div> -->
        </div>
      </div>

      <!-- Carousel -->
      <!-- <Carousel :value="exhibitors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" :autoplayInterval="3000"
        showIndicators="false">
        <template #item="slotProps">
          <div class="p-4">
            <div class="flex flex-col items-center bg-transparent shadow-sm p-6 rounded-xl h-full">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="mb-4 rounded-md w-auto h-16 object-contain" />
              <div class="font-semibold text-gray-800 text-sm">{{ slotProps.data.name }}</div>
            </div>
          </div>
        </template>
</Carousel> -->
    </div>
  </div>
</template>

<script setup>

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
    name: 'Mauritius Telecom',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Mauritius+Telecom.png'
  },
  {
    name: 'Providence',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Full+Logos/Providence.png',
  },
  {
    name: 'Quadrupleplay',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Quadrupleplay.png',
  },
  {
    name: 'INSPUR',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Inspur.png',
  },
  {
    name: 'Hwawei',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Full+Logos/Huawei+Standard+logo.svg.png'
  },
  {
    name: 'Open Serve',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Openserve.png'
  },
  {
    name: 'BCX',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/BCX.png'
  },
  {
    name: 'EPOCKET',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Full+Logos/ePocket.png'
  },
  {
    name: 'DIF - GIZ and HAUS',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Full+Logos/giz+logo.png'

  },
  {
    name: 'Tanzania Telecommunication Corporation',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/TTCL.png'
  },
  {
    name: 'Auko Designs',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Auko+Designs.png'
  },
  {
    name: 'Telecom Namibia',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Telecom+Namibia.png'
  },
  {
    name: 'Telkom',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Telkom.png'
  }
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
