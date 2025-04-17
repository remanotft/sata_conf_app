<template>
	<div>
		<h1 class="font-extrabold md:font-extrabold md:text-3xl">THINGS TO DO</h1>
		<div class="underline"></div>

		<!-- Tab Selector -->
		<div class="flex justify-center p-4">
			<div class="flex border border-black rounded-full md:w-[30rem] overflow-hidden text-sm">
				<div v-for="(item, index) in categories" :key="index" @click="index === 0 ? selected = index : null"
					:class="[
						'flex-1 text-center px-4 py-2 font-semibold cursor-pointer transition-all duration-300',
						selected === index ? 'bg-black text-green-500' : 'bg-white text-black',
						index !== categories.length - 1 ? 'border-r border-black' : '',
						index === 0 ? 'rounded-l-full' : '',
						index === categories.length - 1 ? 'rounded-r-full' : ''
					]">
					{{ item.name.toUpperCase() }}
				</div>
			</div>
		</div>

		<!-- Carousel -->
		<Carousel :value="filteredThings" :numVisible="3" :numScroll="1" circular :responsiveOptions="responsiveOptions"
			:showIndicators="false" :autoplayInterval="3000">
			<template #item="slotProps">
				<div class="p-2 md:p-5">
					<div class="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">

						<!-- Image -->
						<div class="w-full">
							<img :src="slotProps.data.imageUrl" :alt="slotProps.data.name"
								class="rounded-t-lg w-full h-48 md:h-48 object-cover" />
						</div>

						<!-- Content -->
						<div class="flex flex-col justify-between space-y-2 p-3">
							<div>
								<!-- Name -->
								<div class="items-center font-medium md:text-lg text-2xl">
									{{ slotProps.data.name }}
								</div>

								<!-- Description -->
								<!-- <div class="h-28 overflow-y-auto text-gray-600 text-sm md:text-base">
                  {{ slotProps.data.description }}
                </div> -->

								<!-- Contact Info -->
								<div class="space-y-1 mt-2 text-gray-700 text-sm md:text-base">
									<div class="font-semibold">
										<i class="p-2 text-gray-600 text-base pi pi-envelope"></i>
										<a :href="`mailto:${slotProps.data.email}`" class="hover:underline">
											{{ slotProps.data.email }}
										</a>
									</div>
									<div class="flex justify-between font-semibold">
										<div>
											<i class="p-2 text-gray-600 text-base pi pi-phone"></i>
											<a :href="`tel:${slotProps.data.phoneNo}`" class="hover:underline">
												{{ slotProps.data.phoneNo }}
											</a>
										</div>
										<div class="pt-2">
											<a :href="slotProps.data.website" target="_blank" rel="noopener noreferrer">
												<i class="text-blue-500 text-sm pi pi-external-link"></i>
											</a>
										</div>
									</div>
								</div>
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

// const filteredThings = computed(() => {
//     if (!thingsToDoList.value?.result || !categories.value.length) return [];

//     return thingsToDoList.value.result.filter(item => 
//         item.category === categories.value[selected.value]?.name
//     );
// });

const filteredThings = computed(() => {
	if (!thingsToDoList.value?.result || !categories.value.length) return [];

	console.log("Current selected category:", categories.value[selected.value]?.name);
	console.log("Available items:", thingsToDoList.value.result);

	return thingsToDoList.value.result.filter(item => {
		const categoryMatches = item.category === categories.value[selected.value]?.name;
		console.log(`Item ${item.name}, category: ${item.category}, matches: ${categoryMatches}`);
		return categoryMatches;
	});
});


const filteredEvents = computed(() => {
	if (uniqueDays.value.length === 0) return []

	const currentDayId = uniqueDays.value[selectedDay.value]?.dayId
	return allEvents.value.filter(event => event.day === currentDayId)
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
		numVisible: 4,
		numScroll: 1,
	},
	{
		breakpoint: '575px',
		numVisible: 1,
		numScroll: 1,
	},
]);


</script>

<style>
.tab {
	background-color: white;
	color: black;
	transition: all 0.3s ease;
}

.tab-selected {
	background-color: black;
	color: #16E14E;
}
</style>


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