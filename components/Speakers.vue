<template>
  <div>
    <h1 class="font-extrabold md:font-extrabold text-white md:text-3xl">Meet Our Speakers</h1>
    <div class="md:h-1 underline"></div>

    <Carousel :value="speakersList.result" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
      circular :autoplayInterval="3000">
      <template #item="{ data }">
        <div class="flex flex-col items-center p-2 md:text-2xl">

          <!-- image -->
          <img :src="data.imageUrl" alt="Speaker Photo" class="md:w-48 md:h-48 speaker-image" />

          <!-- name  -->
          <div class="title">
            <span> {{ data.firstName }} {{ data.lastName }}</span>
            <span></span>
          </div>

          <div class="text-green-600 subtitle">{{ data.title }}</div>

          <p class="description">{{ data.bio }}</p>
          <div class="subtitle">{{ data.company }}</div>

          <!-- social -->
          <a :href="data.linkedIn" target="_blank"><i class="text-xl pi pi-linkedin" /></a>
        </div>

      </template>
    </Carousel>

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
