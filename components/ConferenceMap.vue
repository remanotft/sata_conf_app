<template>
	<div>
		<h1 class="px-8 pb-4 font-extrabold md:font-extrabold md:text-3xl">CONFERENCE MAP</h1>

		<div class="relative mx-auto max-w-5xl">

			<!-- Static Map Image with Logos Included -->
			<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Conference/Without+Border+-+Expo+Floor+Map.jpg"
				alt="Conference Map" class="w-full" />
			<!-- <img src="/assets/images/final/Expo Floor Map 1.png" alt="Conference Map" class="w-full" /> -->

			<div v-for="booth in booths" :key="booth.id" class="absolute cursor-pointer" :style="{
				left: `${booth.position.x}%`,
				top: `${booth.position.y}%`,
				width: `${booth.width}%`,
				height: `${booth.height}%`,
				transform: 'translate(-50%, -50%)'
			}" @click="openBoothDetails(booth)">
				<div class="rounded-lg w-full h-full"></div>
			</div>
		</div>

		<!-- Dialog stays the same -->
		<Dialog v-model:visible="visible" pt:root:class="!border-0" :style="{ width: '45rem' }"
			style="--p-dialog-border-radius: 0;">
			<template #container="{ closeCallback }">
				<!-- Header -->
				<div class="bg-black flex justify-between items-center text-white h-20 md:h-24 px-4">
					<h5 class="text-xl md:text-2xl font-bold">{{ selectedBooth.name }}</h5>
					<i class="pi pi-times cursor-pointer hover:text-green-500" @click="closeCallback"></i>
				</div>
				<div class="flex justify-center pt-4">
					<img class="w-64 md:w-72" :src="selectedBooth.logoUrl" alt="">
				</div>
				<div class="flex flex-col">
					<div v-if="!selectedBooth.standNumber">
						<label class="font-semibold text-gray-900 text-2xl md:text-3xl text-center">
							{{ selectedBooth.expo }}
						</label>
					</div>
					<div v-else>
						<label class="font-semibold text-gray-900 text-2xl md:text-3xl text-center">
							Stand: {{ selectedBooth.standNumber }}
						</label>
					</div>
				</div>
				<div class="flex justify-center pb-8 pt-4 cursor-pointer text-blue-500 font-semibold text-lg md:text-2xl underline">
					<a target="_blank" :href="selectedBooth.website">{{ selectedBooth.websiteFriendlyName }}</a>
				</div>
				<div class="md:justify-end px-4 footer-container bg-black">
					<!-- logo -->
					<img src="/assets/images/Hosted by 1.png" alt="Logo" class="h-16">
				</div>
			</template>
		</Dialog>
	</div>
</template>


<script setup>
import { ref } from 'vue';

const visible = ref(false);
const selectedBooth = ref({});

function openBoothDetails(booth) {
	selectedBooth.value = booth;
	visible.value = true;
}

const booths = ref([
	{
		id: 1,
		expo: 'Expo-1',
		name: 'BCX',
		email: '',
		website: 'https://www.bcx.co.za',
		websiteFriendlyName: 'www.bcx.co.za',
		standNumber: null,
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BCX-Logo-Resized.jpg',
		position: { x: 76, y: 33 },
		width: 16.5,
		height: 5.5
	},
	{
		id: 2,
		expo: 'Expo-1',
		name: 'BAM Telecoms',
		email: 'manelisi@bamtelecoms.co.za',
		website: 'https://bamtelecoms.co.za',
		websiteFriendlyName: 'www.bamtelecoms.co.za',
		standNumber: '5',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BAM-Telecoms-Resized.jpg',
		position: { x: 72, y: 39 },
		width: 9,
		height: 6
	},
	{
		id: 3,
		expo: 'Expo-1',
		name: 'ePocket',
		email: 'karabo@epocket.co.za',
		website: 'https://www.epocket.co.za',
		websiteFriendlyName: 'www.epocket.co.za',
		standNumber: '6',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/ePocket.jpg',
		position: { x: 80, y: 39 },
		width: 8,
		height: 6
	},
	{
		id: 4,
		expo: 'Expo-1',
		name: 'DIF - GIZ and HAUS',
		email: 'juha.miettinen@haus.fi',
		website: 'https://www.giz.de/en/worldwide/150939.html',
		websiteFriendlyName: 'www.giz.de',
		standNumber: '7',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Giz-Resized.jpg',
		position: { x: 72, y: 44 },
		width: 9,
		height: 6
	},
	{
		id: 5,
		expo: 'Expo-1',
		name: 'Quadrupleplay',
		email: 'philisiwe@quadrupleplay.co.za',
		website: 'https://quadrupleplay.co.za',
		websiteFriendlyName: 'www.quadrupleplay.co.za',
		standNumber: '8',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Quadrupleplay.jpg',
		position: { x: 80, y: 44 },
		width: 8,
		height: 6
	},
	{
		id: 6,
		expo: 'Expo-1',
		name: 'Africa Beyond 4IR',
		email: 'amom@ab4ir.org',
		website: 'https://ab4ir.org',
		websiteFriendlyName: 'www.ab4ir.org',
		standNumber: '9',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Africa-Beyond-Resized.jpg',
		position: { x: 72, y: 50 },
		width: 9,
		height: 6
	},
	{
		id: 7,
		expo: 'Expo-1',
		name: 'Tanzania Telecommunication Corporation',
		email: 'esther.kamulali@ttcl.co.tz',
		website: 'https://www.ttcl.co.tz',
		websiteFriendlyName: 'www.ttcl.co.tz',
		standNumber: '10',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/TTCL.jpg',
		position: { x: 80, y: 50 },
		width: 8,
		height: 6
	},
	{
		id: 8,
		expo: 'Expo-2',
		name: 'Openserve',
		email: '',
		website: 'https://openserve.co.za',
		websiteFriendlyName: 'www.openserve.co.za',
		standNumber: null,
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Openserve-Map-Size.jpg',
		position: { x: 51, y: 33.5 },
		width: 17,
		height: 5
	},
	{
		id: 9,
		expo: 'Expo-2',
		name: 'Providence Software Solutions',
		email: 'mana@providencesoft.com',
		website: 'https://providencesoft.com',
		websiteFriendlyName: 'www.providencesoft.com',
		standNumber: '1',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Providence.jpg',
		position: { x: 47, y: 39.5 },
		width: 8,
		height: 6
	},
	{
		id: 10,
		expo: 'Expo-2',
		name: 'Hwawei',
		email: 'mana@providencesoft.com',
		website: 'https://www.huawei.com/za',
		websiteFriendlyName: 'www.huawei.com',
		standNumber: '2',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Huawei.jpg',
		position: { x: 55, y: 39.5 },
		width: 8,
		height: 6
	},
	{
		id: 11,
		expo: 'Expo-2',
		name: 'Amdocs',
		email: 'sathish.chandrasekaran@amdocs.com',
		website: 'https://www.amdocs.com',
		websiteFriendlyName: 'www.amdocs.com',
		standNumber: '3',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Amdocs.jpg',
		position: { x: 47, y: 45 },
		width: 8,
		height: 6
	},
	{
		id: 12,
		expo: 'Expo-2',
		name: 'IT Thynk',
		email: 'tshepo@itthynk.co.za',
		website: '',
		websiteFriendlyName: '',
		standNumber: '4',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/IT-Thynk-Resized.jpg',
		position: { x: 55, y: 45 },
		width: 8,
		height: 6
	},
	{
		id: 13,
		expo: 'Expo-3',
		name: 'Telkom',
		email: '',
		website: 'https://www.telkom.co.za',
		websiteFriendlyName: 'www.telkom.co.za',
		standNumber: null,
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Telkom.jpg',
		position: { x: 30, y: 64 },
		width: 7,
		height: 11
	},
	{
		id: 14,
		expo: 'Expo-3',
		name: 'KhoiTech',
		email: '',
		website: 'https://www.khoi.africa',
		websiteFriendlyName: 'www.khoi.africa',
		standNumber: '11',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Khoi-Logo.jpg',
		position: { x: 38, y: 61 },
		width: 9,
		height: 6
	},
	{
		id: 15,
		expo: 'Expo-3',
		name: 'BofiNet',
		email: 'chawada@bofinet.co.bw',
		website: '',
		websiteFriendlyName: '',
		standNumber: '12',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BofiNet.jpg',
		position: { x: 47, y: 61 },
		width: 9,
		height: 6
	},
	{
		id: 16,
		expo: 'Expo-3',
		name: 'Inspur Group',
		email: 'xujianwei01@inspur.com',
		website: 'https://fr.inspur.com',
		websiteFriendlyName: 'www.fr.inspur.com',
		standNumber: '13',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Inspur.jpg',
		position: { x: 55, y: 61 },
		width: 8,
		height: 6
	},
	{
		id: 17,
		expo: 'Expo-3',
		name: 'Auko Designs',
		email: 'aukodesigns@gmail.com',
		website: 'https://www.aukodesigns.co.za',
		websiteFriendlyName: 'www.aukodesigns.co.za',
		standNumber: '14',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Auko-Designs-Resized.jpg',
		position: { x: 38, y: 67 },
		width: 9,
		height: 6
	},
	{
		id: 18,
		expo: 'Expo-3',
		name: 'Telecom Namibia',
		email: 'shipenaa@telecom.na',
		website: 'https://www.telecom.na',
		websiteFriendlyName: 'www.telecom.na',
		standNumber: '15',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Telecom+Namibia.jpg',
		position: { x: 47, y: 67 },
		width: 9,
		height: 6
	},
	{
		id: 19,
		expo: 'Expo-4',
		name: 'Vision AI',
		email: '',
		website: 'https://vision-ai.tech',
		websiteFriendlyName: 'www.vision-ai.tech',
		standNumber: '17',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Vision-AI-Logo.jpg',
		position: { x: 23, y: 78 },
		width: 9,
		height: 6
	},
	{
		id: 20,
		expo: 'Expo-3',
		name: 'Mauritius Telecom',
		email: 'ram.seenundun@telecom.mu',
		website: 'https://www.telecom.mu',
		websiteFriendlyName: 'www.telecom.mu',
		standNumber: '18',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Mauritius+Telecom.jpg',
		position: { x: 32, y: 78 },
		width: 9,
		height: 6
	},
	{
		id: 21,
		expo: 'Expo-4',
		name: 'YS Connect',
		email: '',
		website: 'https://www.ysconnect.co.za',
		websiteFriendlyName: 'www.ysconnect.co.za',
		standNumber: '19',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/YS-Connect-Logo.jpg',
		position: { x: 40, y: 78 },
		width: 9,
		height: 6
	}









	// {
	// 	id: 5,
	// 	expo: 'Expo-1',
	// 	name: 'BCX',
	// 	email: '',
	// 	standNumber: null,
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BCX-Logo-Resized.jpg',
	// 	position: { x: 76, y: 33 },
	// 	width: 17,
	// 	height: 6
	// },
	// {
	// 	id: 6,
	// 	expo: 'Expo-1',
	// 	name: 'BAM Telecoms',
	// 	email: 'manelisi@bamtelecoms.co.za',
	// 	standNumber: '5',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BAM-Telecoms-Resized.jpg',
	// 	position: { x: 72, y: 38 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 7,
	// 	expo: 'Expo-1',
	// 	name: 'ePocket',
	// 	email: 'karabo@epocket.co.za',
	// 	standNumber: '6',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/ePocket.jpg',
	// 	position: { x: 80, y: 38 },
	// 	width: 8,
	// 	height: 6
	// },
	// {
	// 	id: 8,
	// 	expo: 'Expo-1',
	// 	name: 'DIF - GIZ and HAUS',
	// 	email: 'juha.miettinen@haus.fi',
	// 	standNumber: '7',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Giz-Resized.jpg',
	// 	position: { x: 72, y: 44 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 9,
	// 	expo: 'Expo-1',
	// 	name: 'Quadrupleplay',
	// 	email: 'philisiwe@quadrupleplay.co.za',
	// 	standNumber: '8',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Quadrupleplay.jpg',
	// 	position: { x: 80, y: 44 },
	// 	width: 8,
	// 	height: 6
	// },
	// {
	// 	id: 10,
	// 	expo: 'Expo-1',
	// 	name: 'Africa Beyond 4IR',
	// 	email: 'amom@ab4ir.org',
	// 	standNumber: '9',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Africa-Beyond-Resized.jpg',
	// 	position: { x: 72, y: 50 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 11,
	// 	expo: 'Expo-1',
	// 	name: 'Tanzania Telecommunication Corporation',
	// 	email: 'esther.kamulali@ttcl.co.tz',
	// 	standNumber: '10',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/TTCL.jpg',
	// 	position: { x: 80, y: 50 },
	// 	width: 8,
	// 	height: 6
	// },
	// {
	// 	id: 12,
	// 	expo: 'Expo-3',
	// 	name: 'Mauritius Telecom',
	// 	email: 'ram.seenundun@telecom.mu',
	// 	standNumber: '11',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Mauritius+Telecom.jpg',
	// 	position: { x: 38, y: 61 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 13,
	// 	expo: 'Expo-3',
	// 	name: 'BofiNet',
	// 	email: 'chawada@bofinet.co.bw',
	// 	standNumber: '12',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BofiNet.jpg',
	// 	position: { x: 47, y: 61 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 14,
	// 	expo: 'Expo-3',
	// 	name: 'Inspur Group',
	// 	email: 'xujianwei01@inspur.com',
	// 	standNumber: '13',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Inspur.jpg',
	// 	position: { x: 55, y: 61 },
	// 	width: 8,
	// 	height: 6
	// },
	// {
	// 	id: 15,
	// 	expo: 'Expo-3',
	// 	name: 'Auko Designs',
	// 	email: 'aukodesigns@gmail.com',
	// 	standNumber: '14',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Auko-Designs-Resized.jpg',
	// 	position: { x: 38, y: 67 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 16,
	// 	expo: 'Expo-3',
	// 	name: 'Telecom Namibia',
	// 	email: 'shipenaa@telecom.na',
	// 	standNumber: '8',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Telecom+Namibia.jpg',
	// 	position: { x: 47, y: 67 },
	// 	width: 9,
	// 	height: 6
	// },
	// {
	// 	id: 17,
	// 	expo: 'Expo-3',
	// 	name: 'Telkom',
	// 	email: '',
	// 	standNumber: 'Expo-3',
	// 	logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Telkom.jpg',
	// 	position: { x: 30, y: 64 },
	// 	width: 7,
	// 	height: 11
	// }
]);


</script>

<style scoped>
/* .absolute.cursor-pointer:hover {
	box-shadow: 0 0 0 2px #00ff00aa;
} */
</style>