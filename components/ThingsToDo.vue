<template>
  <div>
    <h1 class="font-extrabold md:font-extrabold md:text-3xl">THINGS TO DO</h1>
    <!-- underline -->
    <div class="underline"></div>


    <div class="tab-selector-container">

    <!--Things To Do Tab Selector-->
    <div 
    class="md:w-[30rem] text-white text-sm tab-selector">
    <div v-for="(item, index) in categories" :key="index" @click="selected = index"
        class="px-2 py-2 text-center cursor-pointer">
        <div class="font-semibold"> <span :class="selected === index ? 'text-green-500' : 'text-white'"> {{
          item.name.toUpperCase() }} </span></div>
      </div>
    </div>
  </div>

  <!-- Carousel -->
  <Carousel 
      :value="filteredThings" 
      :numVisible="3" 
      :numScroll="1" 
      circular 
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="p-2 sm:p-3 md:p-4">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="mb-3">
              <div class="w-full">
                <img 
                  :src="slotProps.data.img" 
                  :alt="slotProps.data.name" 
                  class="rounded-t-lg w-full h-40 md:h-48 object-cover" 
                />
              </div>
            </div>
            <div class="p-3 md:p-4">
              <div class="mb-2 md:mb-4 font-medium text-base md:text-lg">{{ slotProps.data.name }}</div>
              <div class="mt-0 font-semibold text-sm md:text-base">{{ slotProps.data.email }}</div>
              <div class="mt-3 md:mt-4">
                <Button icon="pi pi-envelope" severity="secondary" outlined />
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>

  </div>
</template>
<script setup>
const selected = ref(0);

const thingsToDo = [
  {
    category: 'Restaurants',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
    alt: '',
    name: 'Sandton Sun & Towers',
    description: 'An iconic 5-star landmark...',
    phone: '+27 71 558 9858',
    email: 'SandtonSun.Hotessa@southernsun.com',
    website: 'https://www.southernsun.com/sandton-sun-and-towers'
  },

  {
    category: 'Restaurants',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
    alt: '',
    name: 'Restaurants',
    description: 'An iconic 5-star landmark...',
    phone: '+27 71 558 9858',
    email: 'SandtonSun.Hotessa@southernsun.com',
    website: 'https://www.southernsun.com/sandton-sun-and-towers'
  },

  {
    category: 'Restaurants',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',

    alt: '',
    name: 'Restaurants',
    description: 'An iconic 5-star landmark...',
    phone: '+27 71 558 9858',
    email: 'SandtonSun.Hotessa@southernsun.com',
    website: 'https://www.southernsun.com/sandton-sun-and-towers'
  },

  {
    category: 'Attractions',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',

    alt: '',
    name: 'Nelson Mandela Square',
    description: 'Cultural and shopping destination...',
    phone: '+27 11 123 4567',
    email: 'info@mandelasquare.co.za',
    website: 'https://www.nelsonmandelasquare.co.za'
  },

  {
    category: 'Attractions',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',

    alt: '',
    name: 'Attractions',
    description: 'Cultural and shopping destination...',
    phone: '+27 11 123 4567',
    email: 'info@mandelasquare.co.za',
    website: 'https://www.nelsonmandelasquare.co.za'
  },

  {
    category: 'Attractions',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',

    alt: '',
    name: 'Nelson Mandela Square',
    description: 'Cultural and shopping destination...',
    phone: '+27 11 123 4567',
    email: 'info@mandelasquare.co.za',
    website: 'https://www.nelsonmandelasquare.co.za'
  },

  {
    category: 'Amenities',
    img: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',

    alt: '',
    name: 'Nelson Mandela Square',
    description: 'Cultural and shopping destination...',
    phone: '+27 11 123 4567',
    email: 'info@mandelasquare.co.za',
    website: 'https://www.nelsonmandelasquare.co.za'
  },

]

const categories = [
  { name: 'Restaurants' },
  { name: 'Amenities' },
  { name: 'Attractions' }
];

const filteredThings = computed(() => {
  return thingsToDo.filter(item => item.category === categories[selected.value].name)
})

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);


</script>

<style scoped>

</style>
