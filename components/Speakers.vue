<template>
  <div>
    <h1 class="font-extrabold md:font-extrabold text-white md:text-3xl">Meet Our Speakers</h1>
    <div class="md:h-1 underline"></div>

    <div class="relative bg-cover bg-no-repeat bg-center rounded-xl overflow-hidden speaker-carousel-wrapper">
      <!-- Background image -->
      <img src="/assets/images/final/speaker Banner.png" alt="Speaker Banner"
        class="z-0 absolute inset-0 w-full h-full object-cover" />

      <!-- Overlay -->
      <div class="z-10 absolute inset-0" style="color: #000"></div>

      <!-- Carousel Content -->
      <Carousel :value="speakersList.result" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
        circular :autoplayInterval="3000" class="z-20 relative" :showIndicators="false">
        <template #item="{ data }">
          <div class="flex flex-col items-center p-2 md:text-xl">
            <!-- <div class="border-2 border-green-600 rounded-full">   </div> -->
            <img :src="data.imageUrl" alt="Speaker Photo"
              class="p-3 border-2 border-green-600 rounded-full md:w-48 md:h-48 speaker-image" />

            <div class="title">
              <span class="md:text-xl">{{ data.firstName }} {{ data.lastName }}</span>
            </div>
            <div class="text-green-600 md:text-xl subtitle">{{ data.title }}</div>
            <p class="md:text-xl description">{{ data.bio }}</p>
            <div class="md:text-xl subtitle">{{ data.company }}</div>
            <a :href="data.linkedIn" target="_blank"><i class="text-xl pi pi-linkedin" /></a>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
const { speakersList } = storeToRefs(useMySpeakersStore())
const { getAllSpeakers } = useMySpeakersStore()

onMounted(async () => {
  await getAllSpeakers()
})

const speaker = ref([
  {
    firstName: 'John',
    lastName: 'smaith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    company: 'master of ceromonies',
    facebook: '#',
    linkedIn: '#'
  },
  {
    firstName: 'John',
    lastName: 'smaith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    company: 'master of ceromonies',
    facebook: '#',
    linkedIn: '#'
  },
  {
    firstName: 'John',
    lastName: 'smaith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    company: 'master of ceromonies',
    facebook: '#',
    linkedIn: '#'
  },
  {
    firstName: 'John',
    lastName: 'smaith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    company: 'master of ceromonies',
    facebook: '#',
    linkedIn: '#'
  },
  {
    firstName: 'John',
    lastName: 'smaith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    company: 'master of ceromonies',
    facebook: '#',
    linkedIn: '#'
  },
  {
    firstName: 'John',
    lastName: 'smaith',
    title: 'Founder & CTO',
    bio: 'Do as author and do remain the preferred choice of topic section.',
    imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
    company: 'master of ceromonies',
    facebook: '#',
    linkedIn: '#'
  },
])


const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },

]);
</script>

<style scoped>
.p-carousel-indicators {
  display: none;
}
</style>
