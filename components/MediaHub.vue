<template>
	<div>
		<div class="md:pb-12 md:pt-2">
			<h1 class="font-extrabold md:font-extrabold md:text-3xl">MEDIA HUB</h1>
			<div class="underline-2"></div>

			<!-- image gallery preview -->
			<div class="carousel-container md:pt-6" v-if="eventImages.length > 0">

				<swiper :modules="[SwiperEffectCoverflow, SwiperNavigation, SwiperPagination]" :slides-per-view="2"
					:centered-slides="true" :loop="true" :effect="'coverflow'" :navigation="true"
					:pagination="{ clickable: true }" :cover-flow-effect="{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
						slideShadows: false
					}">
					<swiper-slide v-for="(image, index) in eventImages" :key="index" class="swiper-slide">
						<img :src="image.imageUrl" class="slide-image" />
					</swiper-slide>
				</swiper>
			</div>

			<!-- See more Button -->
			<div class="flex justify-center pb-12">
				<NuxtLink to="/media-hub" class="mt-8 btn md:w-80 md:text-lg">View Image Gallery <i
						class="pi pi-arrow-right pl-2 text-xs"></i></NuxtLink>
			</div>
		</div>


		<!-- Video Gallery Preview -->
		<div class="pt-6 md:pt-16" style="background-color: #000;">
			<div class="flex justify-center mb-2">
				<h1 class="font-extrabold md:font-extrabold md:text-3xl text-white">CONTENT BITES</h1>
			</div>

			<div class="underline-2"></div>

			<Carousel :value="contentBiteVideo" :numVisible="1" :numScroll="1" circular
				:responsiveOptions="responsiveOptions" class="w-full md:max-w-5xl mx-auto" :showIndicators="true">
				<template #item="{ data }">
					<div class="md:p-6">
						<div class="shadow-md rounded-lg overflow-hidden video-wrapper">
							<iframe class="video-container" :src="data.videoUrl" frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen></iframe>
						</div>
					</div>
				</template>
			</Carousel>

			<div class="flex justify-center items-center md:pb-6">
				<NuxtLink to="/content-bites" class="my-8 btn md:w-80 text-white md:text-lg">View All Content Bites <i
						class="pi pi-arrow-right pl-2 text-xs"></i></NuxtLink>
			</div>
		</div>

	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { useMyContent_bitesStore } from '~/stores/media-hub/content_bites';
import { useMyImage_galleryStore } from '~/stores/media-hub/image_gallery';

const SwiperEffectCoverflow = EffectCoverflow;
const SwiperNavigation = Navigation;
const SwiperPagination = Pagination;

// Responsive configuration for the carousel
const responsiveOptions = ref([
	{
		breakpoint: '1024px',
		numVisible: 1,
		numScroll: 1
	},
	{
		breakpoint: '768px',
		numVisible: 1,
		numScroll: 1
	},
	{
		breakpoint: '560px',
		numVisible: 1,
		numScroll: 1
	}
]);

const contentBiteVideo = computed(() => {
	if (!ContentBitesList.value?.result) return []

	return ContentBitesList.value.result
		.slice(0, 3)  //Limit to 3 videos
		.map(item => {
			let videoId = '';

			if (item.videoUrl.includes('watch?v=')) {
				videoId = item.videoUrl.split('watch?v=')[1].split('&')[0];
			} else if (item.videoUrl.includes('embed/')) {
				videoId = item.videoUrl.split('embed/')[1].split('?')[0];
			}

			const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';
			const thumbnail = videoId
				? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
				: '';

			return {
				id: item.id,
				day: `day${item.day.replace('Day ', '')}`,
				videoUrl: embedUrl,
				speaker: item.speaker,
				topic: item.topic,
				is_active: item.is_active,
				thumbnail,
				altText: `${item.topic} by ${item.speaker}`
			};
		});
});

const eventImages = computed(() => {
	if (!imageGalleryList.value?.result) return []

	return imageGalleryList.value.result
		.map(item => ({
			id: item.id,
			day: `day${item.day.replace('Day ', '')}`,
			imageUrl: item.imageUrl,
			altText: item.altText,
			description: item.description,
			is_active: item.is_active,
		}))
})

const { getAllContentBites } = useMyContent_bitesStore()
const { ContentBitesList } = storeToRefs(useMyContent_bitesStore())

const { getAllImageGalleryItems } = useMyImage_galleryStore()
const { imageGalleryList } = storeToRefs(useMyImage_galleryStore())

onMounted(async () => {
	await getAllImageGalleryItems();
	await getAllContentBites();

	setTimeout(() => {
		swiperInstance.value?.update();
	}, 100);


})

const images = ref([
	'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
	'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
	'https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg',
	'https://primefaces.org/cdn/primevue/images/galleria/galleria4.jpg',
	'https://primefaces.org/cdn/primevue/images/galleria/galleria6.jpg',
	'https://primefaces.org/cdn/primevue/images/galleria/galleria5.jpg',
]);

// Video data
const videos = ref([
	{
		url: 'https://www.youtube.com/watch?v=uvrpzdaQQ8Y',
		embedUrl: 'https://www.youtube.com/embed/uvrpzdaQQ8Y',
		title: 'Video 1'
	},
	{
		url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
		embedUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
		title: 'Video 2'
	},
	{
		url: 'https://www.youtube.com/watch?v=uvrpzdaQQ8Y',
		embedUrl: 'https://www.youtube.com/embed/uvrpzdaQQ8Y',
		title: 'Video 3'
	}
]);

</script>

<style scoped>
.video-wrapper {
	position: relative;
	width: 100%;
	padding-bottom: 75%;
}

.video-container {
	position: absolute;
	width: 100%;
	height: 100%;
}
</style>
