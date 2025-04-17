<template>
	<div>
		<div class="relative mx-auto max-w-5xl">

			<!-- Map Image -->

			<img src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/SATA-Assets/Exhibitor+Map.png"
				alt="Conference Map" class="w-full" />
			<!-- Booth Logos -->
			<div v-for="booth in booths" :key="booth.id"
				class="absolute hover:scale-110 transition-transform cursor-pointer" :style="{
					left: `${booth.position.x}%`,
					top: `${booth.position.y}%`,
					width: `${booth.size || 6}%`
				}" @click="openBoothDetails(booth)">
				<div class="p-1 rounded h-14" style="background: color #161616;">
					<img :src="booth.logoUrl" :alt="booth.name" class="w-full object-contain" />
				</div>
			</div>
		</div>

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
						<div class="flex items-center gap-2">
							<i class="text-white pi pi-envelope" />
							<span class="font-semibold text-green-500">Email:</span>
							<span class="ml-auto text-green-500 text-right break-words">{{ selectedBooth.email }}</span>
						</div>

						<div class="flex items-center gap-2">
							<i class="text-white pi pi-map-marker" />
							<span class="font-semibold text-green-500">Stand:</span>
							<span class="ml-auto text-green-500 text-right">{{ selectedBooth.standNumber }}</span>
						</div>
						<!-- 
            <div class="flex items-center gap-2">
              <i class="text-white pi pi-user" />
              <span class="font-semibold text-green-500">Member:</span>
              <span class="ml-auto text-green-500 text-right">{{ selectedBooth.member }}</span>
            </div> -->
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
		id: 'expo1',
		name: 'TechCorp',
		email: 'contact@techcorp.com',
		standNumber: '20',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/Amdocs+-+1.png',
		position: { x: 43, y: 43 }
	},
	{
		id: 'expo2',
		name: 'Telkom',
		email: 'info@nokia.com',
		standNumber: '5',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/openserve-logo-colour.png',

		position: { x: 43, y: 31 }
	},
	{
		id: 'expo3',
		name: 'Quadrupleplay',
		email: 'philisiwe@quadrupleplay.co.za',
		standNumber: '20',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Quadrupleplay.png',
		position: { x: 51, y: 31 }
	},

	{
		id: 'expo3',
		name: 'Providence',
		email: 'mana@providencesoft.com',
		standNumber: '2',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Exhibitors/Providence.png',
		position: { x: 51, y: 36 }
	},

	{
		id: 'expo1',
		name: 'Hwawei',
		email: 'contact@techcorp.com',
		standNumber: '3',
		logoUrl: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/Huawei_Standard_logo.psd',
		position: { x: 43, y: 36 }
	},

]);

</script>