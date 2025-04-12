<template>
  <div>
    <h1 class="mb-2 text-white">SPEAKERS</h1>
    <div class="underline"></div>

    <Carousel :value="speaker" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
      <template #item="{ data }">

        <!-- image -->
        <div class="items-center p-4">
          <img :src="data.image" alt="Speaker Photo" class="speaker-image" />

          <!-- name  -->
          <div class="title">{{ data.name }}</div>
          <div class="subtitle">{{ data.title }}</div>
          <Divider />

          <p class="description">{{ data.bio }}</p>
          
          <!-- social -->
          <div class="flex space-x-2 text-white">
            <a :href="data.facebook" target="_blank"><i class="text-xl pi pi-facebook" /></a>
            <a :href="data.linkedin" target="_blank"><i class="text-xl pi pi-linkedin" /></a>
          </div>
          
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const speaker = ref([
  {
    name: 'John Smith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    facebook: '#',
    linkedin: '#'
  },
  {
    name: 'John Smith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    facebook: '#',
    linkedin: '#'
  },
  {
    name: 'John Smith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    facebook: '#',
    linkedin: '#'
  },
  {
    name: 'John Smith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    facebook: '#',
    linkedin: '#'
  }
])

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 1
  },

  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  }
]
</script>

<style scoped>
.p-carousel .p-carousel-indicators {
  display: none;
}
</style>
