<template>
  <div>
    <h1 class="font-extrabold md:font-extrabold md:text-3xl">Video Gallery</h1>
    <div class="md:h-1 underline-2"></div>

    <!-- Video Carousel -->
    <Carousel :value="videos" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="{ data }">
        <div class="p-4">
          <div class="aspect-video">
            <iframe width="560" height="315" 
            :src="data.url" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
          </div>
          <h3 class="mt-2 font-medium text-lg text-center">{{ data.title }}</h3>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>

// Video data
const videos = ref([
  {
    url: 'https://www.youtube.com/watch?v=kmiSdKYNDQk',
    title: 'Video 1'
  },

  {
    url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    title: 'Video 2'
  }
]);

// Responsive options for the carousel
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>

