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
        <Carousel :value="sponsors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" :showIndicators="false" circular :autoplayInterval="3000">
          <template #item="slotProps">
            <div>
              <div class="flex flex-col items-center shadow-sm p-6 border-green-500">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" class="mb-4 rounded-xl w-32 md:w-48 h-32 md:h-48" />
                <div class="font-semibold text-white text-sm md:text-xl">{{ slotProps.data.name }}</div>
              </div>
            </div>
          </template>
        </Carousel>


    </div>
  </div>
</template>

<script setup>

const sponsors = ref([
  {
    name: 'BCX',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/BCX.png',
  },

  {
    name: 'Telkom',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Telkom.png',
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
