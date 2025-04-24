recent
<template>
	<div>
		<img src="/assets/images/final/Black overlay.png" alt="Top right globe"
			class="z-0 absolute opacity-20 w-1/2 max-w-[500px] -rotate-45 pointer-events-none" />

		<div class="pt-10">
			<h1 class="font-extrabold md:font-extrabold md:text-3xl">Content Bites</h1>
			<div class="md:h-1 underline-2"></div>



			<!-- Tab Selector -->
			<div class="flex justify-center">
				<div class="relative flex justify-evenly gap-2 mb-8 px-4 py-2 rounded-lg md:w-[30rem] text-white text-sm"
					style="background-color: #000;">
					<div v-for="(day, index) in uniqueDays" :key="index" @click="selectedDay = index"
						class="px-2 text-center cursor-pointer">
						<div class="font-semibold">
							<span class="md:text-xl"
								:class="selectedDay === index ? 'text-green-500' : 'text-white'">DAY {{
									day.dayNumber }}</span>
						</div>
					</div>

					<!-- Green Indicator -->
					<div class="bottom-0 absolute bg-green-500 h-1 transition-all duration-300" :style="{
						width: `${(100 / uniqueDays.length)}%`,
						left: `${selectedDay * ((100 / uniqueDays.length))}%`
					}"></div>
				</div>
			</div>

			<div class="p-5">

				<!-- Video Galleria -->
				<Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="filteredVideos"
					:responsiveOptions="responsiveOptions" :circular="true" :fullScreen="true"
					:showItemNavigators="true" :showItemNavigatorsOnHover="true" :showThumbnails="false"
					containerStyle="max-width: 100%">

					<template #item="slotProps">
						<div class="p-5 px-6 md:px-16" style="background-color: black;">
							<div class="w-full">
								<iframe class="rounded-lg w-full h-[60vh] aspect-video" :src="slotProps.item.videoUrl"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen></iframe>
							</div>

							<div class="space-y-1 mt-2 p-3 font-semibold text-white text-sm"
								style="background-color: black;">
								<div v-if="slotProps.item.speaker">
									<p>Speaker:</p> {{ slotProps.item.speaker }}
								</div>
								<div class="flex flex-col">
									<p v-if="slotProps.item.speaker">Topic:</p> {{ slotProps.item.topic }}
								</div>
								<!-- <p class="mt-1 text-xs">
									<span>Description:</span> {{ slotProps.item.description }}
								</p> -->
							</div>
						</div>
					</template>

					<!-- Galleria thumbnails -->
					<template #thumbnail="slotProps">
						<img :src="slotProps.item.thumbnail" :alt="slotProps.item.altText" class="thumbnail" />
					</template>

				</Galleria>

				<!-- Thumbnails -->
				<div v-if="contentBiteVideo" class="mx-auto max-w-7xl">
					<!-- Video grid - now shows only paginated items -->
					<div class="gap-6 grid grid-cols-1 md:grid-cols-4">
						<div v-for="(video, index) of paginatedVideos" :key="index" class="flex flex-col items-center">
							<div class="w-72 cursor-pointer" @click="videoClick(paginationStart + index)">
								<div class="relative">
									<img :src="video.thumbnail" :alt="video.altText"
										class="mx-auto rounded-md w-full cursor-pointer" />

									<!-- Youtube icon  -->
									<div class="absolute inset-0 flex justify-center items-center">
										<i class="text-red-600 text-3xl pi pi-youtube"></i>
									</div>

								</div>
								<div class="space-y-1 mt-2 pt-1 pb-2 pl-2 w-full md:h-32 text-gray-900 md:text-center">
									<div class="font-semibold text-sm" v-if="video.speaker">
										<p> Speaker:</p> <span class="pl-2">{{ video.speaker }}</span>
									</div>

									<div class="w-full font-semibold text-sm break-words whitespace-normal">
										<p v-if="video.speaker"> Topic:</p> 
										<span class="flex md:justify-center pl-2">{{ video.topic }}</span>
									</div>

								</div>
							</div>
						</div>
					</div>


				</div>

				<div class="mt-auto">
					<Paginator :rows="itemsPerPage" :totalRecords="filteredVideos.length"
						v-model:first="paginationStart" :rowsPerPageOptions="[4, 8, 12, 16]"
						@page="onPageChange($event)" class="mt-6" />
				</div>

			</div>

		</div>
	</div>
</template>

<script setup>
import { useMyContent_bitesStore } from '~/stores/media-hub/content_bites';

const selectedDay = ref(0);
const activeIndex = ref(0);
const displayCustom = ref(false);

const itemsPerPage = ref(4);
const paginationStart = ref(0);

const { getAllContentBites } = useMyContent_bitesStore()
const { ContentBitesList } = storeToRefs(useMyContent_bitesStore())

onMounted(async () => {
	await getAllContentBites();
})

const uniqueDays = computed(() => {
	if (!ContentBitesList.value?.result) return []
	const dayMap = new Map()
	ContentBitesList.value.result.forEach(item => {
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

const contentBiteVideo = computed(() => {
	if (!ContentBitesList.value?.result) return []

	return ContentBitesList.value.result.map(item => {
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

const filteredVideos = computed(() => {
	if (contentBiteVideo.value.length === 0) return []

	const currentDayId = uniqueDays.value[selectedDay.value]?.dayId
	return contentBiteVideo.value.filter(video => video.day === currentDayId)
});

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

definePageMeta({
	layout: 'event-layout'
})

const paginatedVideos = computed(() => {
	const end = paginationStart.value + itemsPerPage.value;
	return filteredVideos.value.slice(paginationStart.value, end);
});

// Handle page change
const onPageChange = (event) => {
	paginationStart.value = event.first;

	if (event.rows) {
		itemsPerPage.value = event.rows;
	}
};

const videoClick = (index) => {
	activeIndex.value = paginationStart.value + index;

	displayCustom.value = true;
};


const days = [
	{ number: '01', id: 'day1' },
	{ number: '02', id: 'day2' },
	{ number: '03', id: 'day3' }
];

const videos = ref([
	{

		embedUrl: "https://www.youtube.com/embed/kmiSdKYNDQk",
		thumbnail: "https://img.youtube.com/vi/kmiSdKYNDQk/hqdefault.jpg",
		speaker: "Mpho Sithole",
		topic: "Entrepreneurship",
		description: "Mpho shares the key traits of resilient entrepreneurs and how to stay motivated.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
		speaker: "Charles Dlamini",
		topic: "Artificial Intelligence",
		description: "Charles breaks down the impact of AI on emerging markets in Africa.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/kmiSdKYNDQk",
		thumbnail: "https://img.youtube.com/vi/kmiSdKYNDQk/hqdefault.jpg",
		speaker: "Thuli Ndlovu",
		topic: "Leadership",
		description: "Thuli explores how emotional intelligence shapes modern leadership.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
		speaker: "Kabelo Maseko",
		topic: "Marketing Strategy",
		description: "Kabelo shares practical ways to build a brand with storytelling.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/kmiSdKYNDQk",
		thumbnail: "https://img.youtube.com/vi/kmiSdKYNDQk/hqdefault.jpg",
		speaker: "Nomsa Zulu",
		topic: "Finance",
		description: "Nomsa explains the fundamentals of managing business cash flow.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
		speaker: "Sipho Nkosi",
		topic: "Cybersecurity",
		description: "Sipho discusses data protection strategies for small businesses.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/kmiSdKYNDQk",
		thumbnail: "https://img.youtube.com/vi/kmiSdKYNDQk/hqdefault.jpg",
		speaker: "Zanele Mthembu",
		topic: "Startups",
		description: "Zanele dives into early-stage startup mistakes and how to avoid them.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
		speaker: "Tebogo Mahlangu",
		topic: "Product Design",
		description: "Tebogo explains human-centered design principles for digital products.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/kmiSdKYNDQk",
		thumbnail: "https://img.youtube.com/vi/kmiSdKYNDQk/hqdefault.jpg",
		speaker: "Linda Khumalo",
		topic: "Public Speaking",
		description: "Linda offers tips to communicate ideas effectively and with confidence.",
		day: "day1"
	},
	{
		embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
		speaker: "Mandla Sibanda",
		topic: "E-commerce",
		description: "Mandla shares the trends reshaping online selling and logistics in SA.",
		day: "day1"
	},

	{
		embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
		thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
		title: "Video 2",
		alt: "Second Demo Video",
		day: "day2",
		speaker: "Charles sithole",
		topic: "technology",
		description: "charles Sithole discusses the foundations of starting a successful business.",
	},
	{
		embedUrl: "https://www.youtube.com/embed/uvrpzdaQQ8Y",
		thumbnail: "https://img.youtube.com/vi/uvrpzdaQQ8Y/hqdefault.jpg",
		title: "Video 3",
		alt: "Third Demo Video",
		day: "day3",
		speaker: "Mpho sithole",
		topic: "business",
		description: "Mpho Sithole discusses the foundations of starting a successful business.",
	},
]);



</script>

<style scoped>
.video-wrapper {
	width: 100%;
	position: relative;
}

.video-container {
	width: 100%;
	height: 100%;
}
</style>
