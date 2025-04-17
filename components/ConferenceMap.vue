<template>
	<div>
		<h1 class="p-4 font-extrabold md:font-extrabold md:text-3xl">CONFERENCE Map</h1>

		<div class="relative mx-auto max-w-5xl">

			<!-- Static Map Image with Logos Included -->
			<img
				src="/assets/images/final/Floor Map Populated.png"
				alt="Conference Map"
				class="w-full"
			/>

			<div
				v-for="booth in booths"
				:key="booth.id"
				class="absolute cursor-pointer"
				:style="{
					left: `${booth.position.x}%`,
					top: `${booth.position.y}%`,
					width: `${booth.width}%`,
					height: `${booth.height}%`,
					transform: 'translate(-50%, -50%)'
				}"
				@click="openBoothDetails(booth)">
				<div class="border border-red-500 rounded-lg w-full h-full"></div>
			</div>
		</div>

		<!-- Dialog stays the same -->
		<Dialog v-model:visible="visible" pt:root:class="!bg-transparent !border-0" pt:mask:class="backdrop-blur-sm"
			style="--p-dialog-border-radius: 0;">
			<template #container="{ closeCallback }">
				<div class="flex flex-col gap-6 mx-auto px-8 py-8 rounded-2xl w-full max-w-sm"
					style="background-color: #000">
					<!-- Header -->
					<div class="inline-flex flex-col items-center gap-2 text-center">
						<img :src="selectedBooth.logoUrl" :alt="selectedBooth.name"
							class="bg-white/10 p-2 rounded-full w-20 h-20 object-contain" />
						<h3 class="font-bold text-green-500 text-2xl">{{ selectedBooth.name }}</h3>
					</div>

					<!-- Info -->
					<div class="flex flex-col gap-3 text-white text-sm">
						<div class="flex items-center gap-2 text-white">
							<i class="text-white pi pi-envelope" />
							<p class="font-semibold">Email:</p>
							<p class="ml-auto text-right break-words">{{ selectedBooth.email }}</p>
						</div>

						<div class="flex items-center gap-2">
							<i class="text-white pi pi-map-marker" />
							<p class="font-semibold">Stand:</p>
							<p class="ml-auto text-right">{{ selectedBooth.standNumber }}</p>
						</div>
					</div>

					<!-- Button -->
					<div class="flex items-center gap-4 pt-2">
						<Button label="Close" @click="closeCallback" text
							class="hover:!bg-white/10 !p-4 !border !border-white/30 w-full !text-white" />
					</div>
				</div>
			</template>
		</Dialog>
	</div>
</template>


<script setup>
import { ref } from 'vue';

const visible = ref(false);
const selectedBooth = ref(null);

function openBoothDetails(booth) {
	selectedBooth.value = booth;
	visible.value = true;
}

const booths = ref([
  {
    id: 'expo3',
    name: 'Hwawei',
    email: '',
    standNumber: '1',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Huawei.png',
    position: { x: 43, y: 39 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Providence',
    email: 'mana@providencesoft.com',
    standNumber: '2',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Providence.png',
    position: { x: 51, y: 37 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Amdocs',
    email: 'Sathish.Chandrasekaran@Amdocs.com',
    standNumber: '3',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Amdocs.png',
    position: { x: 43, y: 45 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Open Serve',
    email: '',
    standNumber: '',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Openserve.png',
    position: { x: 52, y: 34 },
    width: 17,
    height: 6
  },
  {
    id: 'expo1',
    name: 'BCX',
    email: '',
    standNumber: '',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/BCX.png',
    position: { x: 73, y: 30 },
    width: 6,
    height: 6
  },
  {
    id: 'expo1',
    name: 'Bamtelcom',
    email: 'manelisi@bamtelecoms.co.za',
    standNumber: '5',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/BAM Telecoms.png',
    position: { x: 68, y: 36 },
    width: 6,
    height: 6
  },
  {
    id: 'expo1',
    name: 'EPOCKET',
    email: '',
    standNumber: '6',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/ePocket.png',
    position: { x: 77, y: 36 },
    width: 6,
    height: 6
  },
  {
    id: 'expo1',
    name: 'DIF - GIZ and HAUS',
    email: '',
    standNumber: '7',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Giz.png',
    position: { x: 68, y: 42 },
    width: 6,
    height: 6
  },
  {
    id: 'expo1',
    name: 'Quadrupleplay',
    email: '',
    standNumber: '8',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Quadrupleplay.png',
    position: { x: 77, y: 42 },
    width: 6,
    height: 6
  },
  {
    id: 'expo1',
    name: 'Africa Beyond',
    email: 'amom@ab4ir.org',
    standNumber: '9',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Africa+Beyond+4IR.png',
    position: { x: 68, y: 48 },
    width: 6,
    height: 6
  },
  {
    id: 'expo1',
    name: 'Tanzania Telecommunication Corporation',
    email: 'esther.kamulali@ttcl.co.tz',
    standNumber: '10',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/TTCL.png',
    position: { x: 77, y: 48 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Mauritius Telecom',
    email: ' ',
    standNumber: '11',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Mauritius+Telecom.png',
    position: { x: 36, y: 59 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'BofiNet',
    email: 'Chawada@bofinet.co.bw',
    standNumber: '12',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/BofiNet.png',
    position: { x: 44, y: 59 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Inspur Group',
    email: 'xujianwei01@inspur.com',
    standNumber: '13',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Inspur.png',
    position: { x: 52, y: 59 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Auko Designs',
    email: 'aukodesigns@gmail.com',
    standNumber: '14',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Auko+Designs.png',
    position: { x: 36, y: 67 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Telecom Namibia',
    email: 'shipenaa@telecom.na',
    standNumber: '8',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Telecom+Namibia.png',
    position: { x: 44, y: 65 },
    width: 6,
    height: 6
  },
  {
    id: 'expo3',
    name: 'Telkom',
    email: '',
    standNumber: '',
    logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Updated+Logos/Telkom.png',
    position: { x: 30, y: 64 },
    width: 7,
    height: 11
  }
]);


</script>

<style scoped>
.absolute.cursor-pointer:hover {
  box-shadow: 0 0 0 2px #00ff00aa;
}
</style>