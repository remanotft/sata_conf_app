<template>
  <div>
    <h1>THINGS TO DO</h1>
    <!-- underline -->
    <div class="underline"></div>

    <!-- Tab Selector-->
    <div class="relative flex justify-evenly gap-1 bg-black px-2 py-0.5 rounded-md text-white">
      <div v-for="(item, index) in categories" :key="index" @click="selected = index"
        class="px-2 py-2 text-center cursor-pointer">
        <div class="font-semibold"> <span :class="selected === index ? 'text-green-500' : 'text-white'"> {{
          item.name.toUpperCase() }} </span></div>
      </div>
    </div>

    <!-- Carousel -->
    <Carousel :value="filteredThings" :numVisible="1" :numScroll="1" circular :autoplayInterval="3000">
      <template #item="{ data }">
       
        <!-- content -->
        <div class="flex flex-col items-center shadow m-2 border border-gray-200 rounded">
          
          <!-- image -->
          <img src="/assets/images/Sandton Sun and Towers.png" :alt="data.name" class="w-full h-48 object-cover" />

            <!-- name -->
            <div class="font-semibold text-lg">{{ data.name }}</div>
            <div class="text-gray-500 text-sm">{{ data.email }}</div>
            <div class="text-gray-500 text-sm">{{ data.phone }}</div>

            <!-- icon -->
            <div class="flex justify-end mt-2">
              <button class="bg-gray-100 p-2 rounded-full">
                <a class="text-gray-500 pi pi-envelope" :href="data.website"></a>
              </button>
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
    img: '/assets/images/Sandton Sun and Towers.png',
    alt: '',
    name: 'Sandton Sun & Towers',
    description: 'An iconic 5-star landmark...',
    phone: '+27 71 558 9858',
    email: 'SandtonSun.Hotessa@southernsun.com',
    website: 'https://www.southernsun.com/sandton-sun-and-towers'
  },

  {
    category: 'Restaurants',
    img: '/assets/images/Sandton Sun and Towers.png',
    alt: '',
    name: 'Cilantro',
    description: 'An iconic 5-star landmark...',
    phone: '+27 71 558 9858',
    email: 'SandtonSun.Hotessa@southernsun.com',
    website: 'http://www.cilantros.co.za/'
  },

  {
    category: 'Attractions',
    img: '/assets/images/Sandton Sun and Towers.png',
    alt: '',
    name: 'Nelson Mandela Square',
    description: 'Cultural and shopping destination...',
    phone: '+27 11 123 4567',
    email: 'info@mandelasquare.co.za',
    website: 'https://www.nelsonmandelasquare.co.za'
  },

  {
    category: 'Attractions',
    img: '/assets/images/Sandton Sun and Towers.png',
    alt: '',
    name: 'Nelson Mandela Square',
    description: 'Cultural and shopping destination...',
    phone: '+27 11 123 4567',
    email: 'info@mandelasquare.co.za',
    website: 'https://www.nelsonmandelasquare.co.za'
  }
]

const categories = [
  { name: 'Restaurants' },
  { name: 'Amenities' },
  { name: 'Attractions' }
];

const filteredThings = computed(() => {
  return thingsToDo.filter(item => item.category === categories[selected.value].name)
})


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
];
</script>
