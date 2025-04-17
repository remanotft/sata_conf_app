<template>


  <div>

    <h2 class="mb-6 text-white section-title">SPONSORS</h2>

    <div class="relative p-8 rounded-xl min-h-[400px] overflow-hidden text-center sponsor-section-with-bg">



      <!-- Background image -->
      <img src="/assets/images/final/Green overlay.png" alt="Background"
        class="z-0 absolute inset-0 w-full h-full object-cover" />

      <!-- Foreground content -->
      <div class="z-10 relative sponsor-content">

        <!-- Grey background for carousel area only -->
        <div class="bg-white/40 p-6 rounded-xl w-full h-full">
          <Carousel :value="exhibitors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
            showIndicators="false">
            <template #item="slotProps">
              <div class="p-4">
                <div class="flex flex-col items-center bg-opacity-90 shadow-sm p-6 rounded-xl h-full">
                  <img src="/assets/images/final/BCX LOGO - 1.png" :alt="slotProps.data.name" class="mb-4 w-32 h-32 object-contain" />
                  <div class="font-semibold text-gray-800 text-sm">
                    {{ slotProps.data.name }}
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

const exhibitors = ref([
  {
    name: 'BofiNet',
    image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/BofiNet+Logo.png'
  },
])
</script>





<!-- <div class="gap-6 grid logos-grid grid-cols-2 md:grid-cols-4 mt-6">
        <img src="/assets/images/final/appcues.png" alt="Appcues" class="logo" />
        <img src="/assets/images/final/appcues.png" alt="Insightly" class="logo" />
        <img src="/assets/images/final/codeship.png" alt="Codeship" class="logo" />
        <img src="/assets/images/final/instapage.png" alt="Instapage" class="logo" />
        <img src="/assets/images/final/appcues.png" alt="Prezi" class="logo" />
        <img src="/assets/images/final/typeform.png" alt="Typeform" class="logo" />
        <img src="/assets/images/final/meetup.png" alt="Meetup" class="logo" />
        <img src="/assets/images/final/pipedrive.png" alt="Pipedrive" class="logo" />
      </div> -->