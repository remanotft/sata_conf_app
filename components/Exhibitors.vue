<template>
	<div class="relative bg-white text-center">
		<!-- Globe Backgrounds -->
		<!-- <img src="/assets/images/final/Black overlay.png" alt="Top left globe"
			class="z-0 absolute opacity-20 max-w-[300px] pointer-events-none" /> -->

		<img src="/assets/images/final/Black overlay.png" alt="Top right globe"
			class="z-0 absolute opacity-20 w-1/2 max-w-[300px] -rotate-45 pointer-events-none" />

		<!-- <img src="/assets/images/final/Black overlay.png" alt="Bottom left globe"
			class="bottom-52 md:top-80 xl:left-[1700px] left-24 z-0 absolute opacity-20 p-2 w-1/2 max-w-[300px] -rotate-90 pointer-events-none" /> -->

		<img src="/assets/images/final/Black overlay.png" alt="Bottom right globe"
			class="top-[980px] md:top-[700px] lg:top-[600px] xl:top-[620px] left-80 md:left-[720px] lg:left-[980px] xl:left-[1800px] z-0 absolute opacity-20 max-w-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transform" />


		<!-- Content -->
		<div class="z-10 relative py-10">
			<h1 class="p-4 font-bold md:font-bold md:text-3xl">EXHIBITORS</h1>


			<!-- Grid -->
			<div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				<div v-for="(exhibitor, index) in exhibitors" :key="index"
					class="flex flex-col items-center bg-transparent p-6">
					<img :src="exhibitor.image" :alt="exhibitor.name" class="mb-4 rounded-md w-18 md:w-28 lg:w-32 xl:w-36 object-contain" />
					<!-- <div class="font-semibold text-gray-800 text-sm">
            {{ exhibitor.name }}
          </div> -->
				</div>
			</div>

			<!-- Carousel -->
			<!-- <Carousel :value="exhibitors" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" :autoplayInterval="3000"
        showIndicators="false">
        <template #item="slotProps">
          <div class="p-4">
            <div class="flex flex-col items-center bg-transparent shadow-sm p-6 rounded-xl h-full">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="mb-4 rounded-md w-auto h-16 object-contain" />
              <div class="font-semibold text-gray-800 text-sm">{{ slotProps.data.name }}</div>
            </div>
          </div>
        </template>
</Carousel> -->
		</div>
	</div>
</template>

<script setup>

const exhibitors = ref([
	{
		name: 'Africa Beyond',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Africa-Beyond-Resized.jpg'
	},
	{
		name: 'Amdocs',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Amdocs.jpg'
	},
	{
		name: 'Auko Designs',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Auko-Designs-Resized.jpg'
	},
	{
		name: 'BAM',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BAM-Telecoms-Resized.jpg'
	},
	{
		name: 'BCX',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BCX-Logo-Resized.jpg'
	},
	{
		name: 'BofiNet',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/BofiNet.jpg'
	},
	{
		name: 'EPOCKET',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/ePocket.jpg'
	},
	{
		name: 'DIF - GIZ and HAUS',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Giz-Resized.jpg'
	},
	{
		name: 'Hwawei',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Huawei.jpg'
	},
	{
		name: 'INSPUR',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Inspur.jpg',
	},
	{
		name: 'IT Thynk',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/IT-Thynk-Resized.jpg',
	},
	{
		name: 'KhoiTech',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Khoi-Logo.jpg',
	},
	{
		name: 'Mauritius Telecom',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Mauritius+Telecom.jpg'
	},
	{
		name: 'Open Serve',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/OpenserveLogoResized.jpg'
	},
	{
		name: 'Providence',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Providence.jpg',
	},
	{
		name: 'Quadrupleplay',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Quadrupleplay.jpg',
	},
	{
		name: 'Tanzania Telecommunication Corporation',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/TTCL.jpg'
	},

	{
		name: 'Telecom Namibia',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Telecom+Namibia.jpg'
	},
	{
		name: 'Telkom',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Telkom.jpg'
	},
	{
		name: 'Vision AI',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/Vision-AI-Logo.jpg'
	},
	{
		name: 'YS Connect',
		image: 'https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/image-gallery/Logo+Symbols/JPEG+Logos/YS-Connect-Logo.jpg'
	}
])

const responsiveOptions = ref([
	{
		breakpoint: '1400px',
		numVisible: 2,
		numScroll: 1
	},
	{
		breakpoint: '1024px',
		numVisible: 2,
		numScroll: 1
	},
	{
		breakpoint: '768px',
		numVisible: 1,
		numScroll: 1
	}
])
</script>
