<template>
  <div class="pt-10">
    <h1 class="font-extrabold md:font-extrabold md:text-3xl">Video Gallery</h1>
    <div class="md:h-1 underline-2"></div>

    <!-- Tab Selector -->
    <div class="flex justify-center">
      <div
        class="relative flex justify-evenly gap-2 bg-black mb-8 px-4 py-2 rounded-lg md:w-[30rem] text-white text-sm">
        <div v-for="(day, index) in days" :key="index" @click="selectedDay = index"
          class="px-2 text-center cursor-pointer">
          <div class="font-semibold">
            <span class="md:text-xl" :class="selectedDay === index ? 'text-green-500' : 'text-white'">DAY {{ day.number }}</span>
          </div>
          <div class="mt-0.5 text-white text-xs">{{ day.date }}</div>
        </div>

        <!-- Green Indicator -->
        <div class="bottom-0 absolute bg-green-500 h-1 transition-all duration-300" :style="{
          width: `${100 / days.length}%`,
          left: `${selectedDay * (100 / days.length)}%`
        }"></div>
      </div>
    </div>

    <!-- Video Galleria -->
    <div class="md:mx-auto md:max-w-3xl card">
      <Galleria :value="filteredVideos" :responsiveOptions="responsiveOptions" :numVisible="3"
        containerStyle="max-width: 100%" :circular="true" :showIndicators="true">

        <template #item="{ item }">
          <div class="video-wrapper">
            <iframe class="video-container" :src="item.embedUrl" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </template>

        <template #thumbnail="{ item }">
          <img :src="item.thumbnail" :alt="item.title" class="rounded-md w-full h-20 object-cover" />
        </template>

        <template #caption="{ item }">
          <div class="mb-2 font-bold text-xl">{{ item.title }}</div>
          <p class="text-white">{{ item.alt }}</p>
        </template>
      </Galleria>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const videos = ref([
  {
    embedUrl: "https://www.youtube.com/embed/kmiSdKYNDQk",
    thumbnail: "https://img.youtube.com/vi/kmiSdKYNDQk/hqdefault.jpg",
    title: "Video 1",
    alt: "First Demo Video",
    day: "day1"
  },
  {
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    title: "Video 2",
    alt: "Second Demo Video",
    day: "day2"
  },
  {
    embedUrl: "https://www.youtube.com/embed/uvrpzdaQQ8Y",
    thumbnail: "https://img.youtube.com/vi/uvrpzdaQQ8Y/hqdefault.jpg",
    title: "Video 3",
    alt: "Third Demo Video",
    day: "day3"
  }
]);

const days = [
  { number: '01', date: 'April 17', id: 'day1' },
  { number: '02', date: 'April 18', id: 'day2' },
  { number: '03', date: 'April 19', id: 'day3' }
];

const selectedDay = ref(0);

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 2
  },
  {
    breakpoint: '575px',
    numVisible: 3
  }
]);

const filteredVideos = computed(() => {
  const currentDayId = days[selectedDay.value].id;
  return videos.value.filter(video => video.day === currentDayId);
});


definePageMeta({
layout: 'event-layout'
})

</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
