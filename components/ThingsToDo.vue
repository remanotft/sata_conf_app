<template>
  <div>
    <h1 class="font-extrabold md:font-extrabold md:text-3xl">THINGS TO DO</h1>
    <div class="underline"></div>

    <!-- Tab Selector -->
    <div class="tab-selector-container">
      <div class="md:w-[30rem] text-white text-sm tab-selector">
        <div v-for="(item, index) in categories" :key="index" @click="selected = index"
          class="px-2 py-2 text-center cursor-pointer">
          <div class="font-semibold">
            <span :class="selected === index ? 'text-green-500' : 'text-white'">
              {{ item.name.toUpperCase() }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <Carousel :value="filteredThings" :numVisible="3" :numScroll="1" circular :responsiveOptions="responsiveOptions"
      :autoplayInterval="3000">
      <template #item="slotProps">
        <div class="p-2 sm:p-3 md:p-4 h-[520px]">
          <div class="flex flex-col bg-white shadow-md rounded-lg h-full overflow-hidden">

            <!-- Image -->
            <div class="w-full">
              <img :src="slotProps.data.imageUrl" :alt="slotProps.data.name"
                class="rounded-t-lg w-full h-40 md:h-48 object-cover" />
            </div>

            <!-- Content -->
            <div class="flex flex-col flex-1 justify-between space-y-2 p-3 md:p-4">
              <div>
                <!-- Name -->
                <div class="font-medium text-base md:text-lg">
                  {{ slotProps.data.name }}
                </div>

                <!-- Description -->
                <div class="text-gray-600 text-sm md:text-base">
                  {{ slotProps.data.description }}
                </div>

                <!-- Contact Info -->
                <div class="space-y-1 mt-2 text-gray-700 text-sm md:text-base">
                  <div class="font-semibold">
                    <a :href="`mailto:${slotProps.data.email}`" class="hover:underline">
                      {{ slotProps.data.email }}
                    </a>
                  </div>
                  <div class="font-semibold">
                    <a :href="`tel:${slotProps.data.phoneNo}`" class="hover:underline">
                      {{ slotProps.data.phoneNo }}
                    </a>
                  </div>
                
                </div>
              </div>

              <div class="pt-2">
                <a :href="slotProps.data.website" target="_blank" rel="noopener noreferrer">
                  <Button icon="pi pi-envelope" label="Visit Website" severity="secondary" outlined
                    class="w-full md:w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>

const { thingsToDoList } = storeToRefs(useMyTodoStore())
const { getAllThingsToDo } = useMyTodoStore()

onMounted(async () => {
  await getAllThingsToDo()
})

const selected = ref(0);

const categories = computed(() => {
  if (!thingsToDoList.value?.result) return [];

  const uniqueCategories = [...new Set(
    thingsToDoList.value.result.map(item => item.category)
  )];

  return uniqueCategories.map(name => ({ name }));
});

const filteredThings = computed(() => {
  if (!thingsToDoList.value?.result || !categories.value.length) return [];

  return thingsToDoList.value.result.filter(
    item => item.category === categories.value[selected.value]?.name
  );
});

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

<style scoped></style>


<!-- const thingsToDo = [
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

] -->