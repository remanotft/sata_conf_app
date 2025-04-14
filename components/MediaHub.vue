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
      <NuxtLink to="/media-hub" class="btn">See Full Media</NuxtLink>
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

// Rename modules to avoid Vue warnings about component naming
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
</script>

<style scoped>

</style>