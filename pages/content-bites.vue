<template>
	<div>
		<div class="pt-10">
			<h1 class="font-extrabold md:font-extrabold md:text-3xl">Video Gallery</h1>
			<div class="md:h-1 underline-2"></div>

			<!-- Tab Selector -->
			<div class="flex justify-center">
				<div
					class="relative flex justify-evenly gap-2 bg-black mb-8 px-4 py-2 rounded-lg md:w-[30rem] text-white text-sm">
					<div v-for="(day, index) in days" :key="index" @click="selectedDay = index"
						class="px-2 text-center cursor-pointer">
						<div class="font-semibold">
							<span class="md:text-xl"
								:class="selectedDay === index ? 'text-green-500' : 'text-white'">DAY {{
									day.number }}</span>
						</div>
						<div class="mt-0.5 text-white text-xs">{{ day.date }}</div>
					</div>
					<!-- Green Indicator -->
					<div class="bottom-0 absolute bg-green-500 h-1 transition-all duration-300" :style="{
						width: `${(100 / days.length)}%`,
						left: `${selectedDay * ((100 / days.length))}%`
					}"></div>
				</div>
			</div>

			<div class="p-5">

				<!-- Video Galleria -->
				<Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="filteredVideos"
					:responsiveOptions="responsiveOptions" :circular="true" :fullScreen="true"
					:showItemNavigators="true" :showThumbnails="false" containerStyle="max-width: 100%">
					<template #item="slotProps">
						<div class="p-5 px-6" style="background-color: black;">
							<div class="md:w-[60vw] video-wrapper">
								<iframe class="video-container" :src="slotProps.item.embedUrl" frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen></iframe>
							</div>
							<div class="space-y-1 shadow-md mt-2 p-3 text-white" style="background-color: black;">
								<div class="font-semibold text-sm">
									<p class="text-gray-400">Speaker:</p> {{ slotProps.item.speaker }}
								</div>
								<div class="font-medium text-sm">
									<p class="text-gray-400">Topic:</p> {{ slotProps.item.topic }}
								</div>
								<p class="mt-1 text-gray-200 text-xs line-clamp-2">
									<span class="text-gray-400">Description:</span> {{ slotProps.item.description }}
								</p>
							</div>
						</div>
					</template>

					<!-- Galleria thumbnails -->
					<template #thumbnail="slotProps">
						<img :src="slotProps.item.thumbnail" :alt="slotProps.item.altText" class="thumbnail" />
					</template>


				</Galleria>


				<!-- Thumbnails -->
				<div v-if="videos" class="gap-4 grid grid-cols-2 md:grid-cols-6">
					<div v-for="(video, index) of filteredVideos" :key="index" class="">
						<img :src="video.thumbnail" :alt="video.altText" class="cursor-pointer"
							@click="videoClick(index)" />
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>

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

const contentBiteVideo = computed(() => {
	if (!contentBites.value?.result) return []

	return contentBites.value.result.map(item => ({
		id: item.id,
		day: `day${item.day.replace('Day ', '')}`,
		videoUrl: item.videoUrl,
		speaker: item.speaker,
		topic: item.topic,
		is_active: item.is_active,
	}))
})

const uniqueDays = computed(() => {
	if (!contentBites.value?.result) return []

	// Get unique day entries
	const dayMap = new Map()

	contentBites.value.result.forEach(item => {
		const dayNumber = item.day.replace('Day ', '')

		if (!dayMap.has(dayNumber)) {
			dayMap.set(dayNumber, {
				dayNumber,
				dayId: `day${dayNumber}`
			})
		}
	})

	return Array.from(dayMap.values())
		.sort((a, b) => parseInt(a.dayNumber) - parseInt(b.dayNumber))
})

const days = [
	{ number: '01', id: 'day1' },
	{ number: '02', id: 'day2' },
	{ number: '03', id: 'day3' }
];

const selectedDay = ref(0);

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

const filteredVideos = computed(() => {
	const currentDayId = days[selectedDay.value].id;
	return videos.value.filter(video => video.day === currentDayId);
});

definePageMeta({
	layout: 'event-layout'
})

const activeIndex = ref(0);
const displayCustom = ref(false);

const videoClick = (index) => {
	activeIndex.value = index;
	displayCustom.value = true;
};

</script>

<style scoped>
.video-wrapper {
	position: relative;
	padding-bottom: 56.25%;
}

.video-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
