<template>
	<div>
		<h1 class="font-extrabold md:font-extrabold md:text-3xl">Image Gallery</h1>
		<div class="md:h-1 underline-2"></div>

		<div class="flex justify-center">

			<!-- Tab Selector-->
			<div
				class="relative flex justify-evenly gap-2 bg-black mb-8 md:p- px-5 py-2 rounded-lg md:w-[30rem] text-white text-sm">
				<div v-for="(day, index) in uniqueDays" :key="index" @click="selectedDay = index"
					class="px-2 text-center cursor-pointer">
					<div class="font-semibold">
						<span class="md:text-xl" :class="selectedDay === index ? 'text-green-500' : 'text-white'">
							{{ day.dayNumber }} </span>
					</div>
					<!-- <div class="mt-0.5 text-white text-xs">{{ day.date }}</div> -->
				</div>

				<!-- Green Indicator -->
				<div class="bottom-0 absolute bg-green-500 h-1 transition-all duration-300" :style="{
					width: `${(100 / uniqueDays.length)}%`,
					left: `${selectedDay * ((100 / uniqueDays.length))}%`
				}"></div>
			</div>
		</div>

		<!-- Image Gallery -->
		<Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="filteredEvents"
			:responsiveOptions="responsiveOptions" :circular="true" :fullScreen="true" :showItemNavigators="true"
			:showThumbnails="false" containerStyle="max-width: 80%">
			<template #item="slotProps">
				<div>
					<div>
						<img :src="slotProps.item.imageUrl" :alt="slotProps.item.altText"
							class="" />
					</div>
				</div>
			</template>
			<template #thumbnail="slotProps">
				<img :src="slotProps.item.imageUrl" :alt="slotProps.item.altText" class="thumbnail" />
			</template>
		</Galleria>

		<div v-if="eventImages" class="gap-4 grid grid-cols-2 md:grid-cols-4">
			<div v-for="(image, index) of filteredEvents" :key="index" class="aspect-square">
				<img :src="image.imageUrl" :alt="image.altText" class="w-full h-full object-cover cursor-pointer"
					@click="imageClick(index)" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const images = ref([
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
		day: 'day1',
		alt: 'Description for Image 1',
		title: 'Title 1'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
		day: 'day1',
		alt: 'Description for Image 2',
		title: 'Title 2'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
		day: 'day1',
		alt: 'Description for Image 3',
		title: 'Title 3'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
		day: 'day1',
		alt: 'Description for Image 4',
		title: 'Title 4'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
		day: 'day2',
		alt: 'Description for Image 5',
		title: 'Title 5'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg',
		day: 'day2',
		alt: 'Description for Image 6',
		title: 'Title 6'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg',
		day: 'day2',
		alt: 'Description for Image 7',
		title: 'Title 7'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria8.jpg',
		day: 'day2',
		alt: 'Description for Image 8',
		title: 'Title 8'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria9.jpg',
		day: 'day2',
		alt: 'Description for Image 9',
		title: 'Title 9'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
		day: 'day2',
		alt: 'Description for Image 10',
		title: 'Title 10'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg',
		day: 'day3',
		alt: 'Description for Image 11',
		title: 'Title 11'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg',
		day: 'day3',
		alt: 'Description for Image 12',
		title: 'Title 12'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria13.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria13.jpg',
		day: 'day3',
		alt: 'Description for Image 13',
		title: 'Title 13'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria14.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria14.jpg',
		day: 'day3',
		alt: 'Description for Image 14',
		title: 'Title 14'
	},
	{
		itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria15.jpg',
		thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria15.jpg',
		day: 'day3',
		alt: 'Description for Image 15',
		title: 'Title 15'
	}
])


const activeIndex = ref(0);
const responsiveOptions = ref([
	{
		breakpoint: '1024px',
		numVisible: 5
	},
	{
		breakpoint: '768px',
		numVisible: 3
	},
	{
		breakpoint: '560px',
		numVisible: 1
	}
]);
const displayCustom = ref(false);

const imageClick = (index) => {
	activeIndex.value = index;
	displayCustom.value = true;
};

// Days data 
const selectedDay = ref(0)
const days = [
	{ number: '01', id: 'day1' },
	{ number: '02', id: 'day2' },
	{ number: '03', id: 'day3' }
]

const uniqueDays = computed(() => {
	if (!imageGalleryItems.value?.result) return []

	// Get unique day entries
	const dayMap = new Map()

	imageGalleryItems.value.result.forEach(item => {
		const dayNumber = item.day.replace('Day ', '')

		if (!dayMap.has(dayNumber)) {
			dayMap.set(dayNumber, {
				dayNumber,
				dayId: `day${dayNumber}`,
			})
		}
	})

	return Array.from(dayMap.values())
		.sort((a, b) => parseInt(a.dayNumber) - parseInt(b.dayNumber))
})

const eventImages = computed(() => {
	if (!imageGalleryItems.value?.result) return []

	return imageGalleryItems.value.result.map(item => ({
		id: item.id,
		day: `day${item.day.replace('Day ', '')}`,
		imageUrl: item.imageUrl,
		altText: item.altText,
		description: item.description,
		is_active: item.is_active,
	}))
})

//  filters events based on selected day
const filteredEvents = computed(() => {
	if (uniqueDays.value.length === 0) return []

	const currentDayId = uniqueDays.value[selectedDay.value]?.dayId
	return eventImages.value.filter(image => image.day === currentDayId)
});

const { getImageGalleryItems } = useMyMediaStore()
const { imageGalleryItems } = storeToRefs(useMyMediaStore())

onMounted(async () => {
	await getImageGalleryItems();
})


</script>

<style scoped></style>