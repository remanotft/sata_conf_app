<template>
  <div class="relative bg-white px-4 text-center">
    <!-- Globe Backgrounds -->
    <img src="/assets/images/final/Black overlay.png" alt="Top left globe"
      class="top-0 left-0 z-0 absolute opacity-20 p-2 w-1/2 max-w-[300px] pointer-events-none" />
      
    <img src="/assets/images/final/Black overlay.png" alt="Bottom right globe"
      class="right-0 bottom-0 z-0 absolute opacity-20 w-1/2 max-w-[300px] rotate-180 pointer-events-none" />


    <!-- Content -->
    <div class="z-10 relative">
      <h1 class="p-4 font-bold md:font-bold md:text-3xl">EXHIBITORS</h1>

      <!-- Carousel -->
      <Carousel :value="exhibitors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" :autoplayInterval="3000"
        showIndicators="false">
        <template #item="slotProps">
          <div class="p-4">
            <div class="flex flex-col items-center bg-transparent shadow-sm p-6 rounded-xl h-full">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="mb-4 w-auto h-16 object-contain" />
              <div class="font-semibold text-gray-800 text-sm">{{ slotProps.data.name }}</div>
            </div>
          </div>
        </template>
      </Carousel>
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
