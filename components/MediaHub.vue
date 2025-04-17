<template>
  <div>
    <h1 class="font-extrabold md:font-extrabold md:text-3xl">MEDIA HUB</h1>
    <div class="underline"></div>

    <div class="carousel-container">
      <swiper :modules="[SwiperEffectCoverflow, SwiperNavigation, SwiperPagination]" :slides-per-view="2"
        :centered-slides="true" :loop="true" :effect="'coverflow'" :navigation="true" :pagination="{ clickable: true }"
        :cover-flow-effect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }">
        <swiper-slide v-for="(image, index) in images" :key="index" class="swiper-slide">
          <img :src="image" class="slide-image" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex justify-center">
      <NuxtLink to="/media-hub" class="m-4 btn">See Image Gallery</NuxtLink>
    </div>

    <div class="pt-20">

      <div class="flex justify-center mb-2">
        <h1 class="font-extrabold md:font-extrabold md:text-3xl">CONTENT BITES</h1>
      </div>

      <div class="underline"></div>

       <!-- Video Carousel -->
      <Carousel :value="videos" :numVisible="1" :numScroll="1" circular :responsiveOptions="responsiveOptions"
        class="mx-auto px-4 md:px-0 max-w-5xl video-carousel" :showIndicators="true">
        <template #item="{ data }">
          <div class="p-2 md:p-6">
            <div class="shadow-md rounded-lg overflow-hidden video-wrapper">
              <iframe class="video-container" :src="data.embedUrl" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
            <h3 class="mt-3 md:mt-5 font-medium text-lg text-center">{{ data.title }}</h3>
          </div>
        </template>
      </Carousel>

      <div class="flex justify-center">
        <NuxtLink to="/content-bites" class="m-4 btn">See Content Bites</NuxtLink>
      </div>

    </div>

  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperEffectCoverflow = EffectCoverflow;
const SwiperNavigation = Navigation;
const SwiperPagination = Pagination;

const images = ref([
  'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
  'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
  'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
  'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
  'https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg',
  'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',

]);

// Video data
const videos = ref([
  {
    url: 'https://www.youtube.com/watch?v=uvrpzdaQQ8Y',
    embedUrl: 'https://www.youtube.com/embed/uvrpzdaQQ8Y',
    title: 'Video 1'
  },
  {
    url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    title: 'Video 2'
  },
  {
    url: 'https://www.youtube.com/watch?v=uvrpzdaQQ8Y',
    embedUrl: 'https://www.youtube.com/embed/uvrpzdaQQ8Y',
    title: 'Video 3'
  }
]);

// Responsive configuration for the carousel
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

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}



</style>


<!-- src="https://www.youtube.com/embed/uvrpzdaQQ8Y?si=qjDZwfgTDSW30Q2G" -->