<template>
	<div>
		<h1 class="font-extrabold md:font-extrabold md:text-3xl">THINGS TO DO</h1>
		<div class="underline"></div>

		<!-- Tab Selector -->
		<div class="flex justify-center pt-2">
			<div class="flex rounded-lg md:w-[30rem] text-sm todo-tab-selector">
				<div v-for="(item, index) in categories" :key="index" @click="selected = index" :class="[
					'flex-1 px-4 py-2 text-center cursor-pointer font-semibold transition-all duration-300',
					selected === index ? 'bg-black text-green-500' : 'bg-white text-black',
					index !== categories.length - 1 ? 'border-r border-black' : '',
					index === 0 ? 'rounded-l-sm' : '',
					index === categories.length - 1 ? 'rounded-r-sm' : ''
				]">
					{{ item.name.toUpperCase() }}
				</div>
			</div>
		</div>

		<!-- Carousel -->
		<div v-if="selected === 0">
			<Carousel :data-key="filteredThings.id" :value="filteredThings" :numVisible="3" :numScroll="3" circular :autoplayInterval="3000"
				:responsiveOptions="responsiveOptions">
				<template #item="slotProps">
					<div class="p-2 md:p-5">
						<div class="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
							<!-- Image -->
							<div class="w-full">
								<img :src="slotProps.data.imageUrl" :alt="slotProps.data.name"
									class="rounded-t-lg w-full h-48 md:h-72 object-cover" />
							</div>

							<!-- Content -->
							<div class="flex flex-col justify-between space-y-2 p-3">
								<div>
									<!-- Name -->
									<div class="items-center font-medium md:text-lg text-2xl">
										{{ slotProps.data.name }}
									</div>

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
												<a :href="slotProps.data.website" target="_blank"
													rel="noopener noreferrer">
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
		<div v-if="selected === 1">
			<Carousel :data-key="filteredThings.id" :value="filteredThings" :numVisible="3" :numScroll="3" circular :autoplayInterval="3000"
				:responsiveOptions="responsiveOptions">
				<template #item="slotProps">
					<div class="p-2 md:p-5">
						<div class="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
							<!-- Image -->
							<div class="w-full">
								<img :src="slotProps.data.imageUrl" :alt="slotProps.data.name"
									class="rounded-t-lg w-full h-48 md:h-72 object-cover" />
							</div>

							<!-- Content -->
							<div class="flex flex-col justify-between space-y-2 p-3">
								<div>
									<!-- Name -->
									<div class="items-center font-medium md:text-lg text-2xl">
										{{ slotProps.data.name }}
									</div>

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
												<a :href="slotProps.data.website" target="_blank"
													rel="noopener noreferrer">
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
		<div v-if="selected === 2">
			<Carousel :data-key="filteredThings.id" :value="filteredThings" :numVisible="3" :numScroll="3" circular :autoplayInterval="3000"
				:responsiveOptions="responsiveOptions">
				<template #item="slotProps">
					<div class="p-2 md:p-5">
						<div class="flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
							<!-- Image -->
							<div class="w-full">
								<img :src="slotProps.data.imageUrl" :alt="slotProps.data.name"
									class="rounded-t-lg w-full h-48 md:h-72 object-cover" />
							</div>

							<!-- Content -->
							<div class="flex flex-col justify-between space-y-2 p-3">
								<div>
									<!-- Name -->
									<div class="items-center font-medium md:text-lg text-2xl">
										{{ slotProps.data.name }}
									</div>

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
												<a :href="slotProps.data.website" target="_blank"
													rel="noopener noreferrer">
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

	</div>
</template>

<script setup>


const { thingsToDoList } = storeToRefs(useMyTodoStore());
const { getAllThingsToDo } = useMyTodoStore();

const selected = ref(0);

onMounted(async () => {
	await getAllThingsToDo();
});

const categories = computed(() => {
	if (!thingsToDoList.value?.result) return [];

	const uniqueCategories = [...new Set(
		thingsToDoList.value.result.map(item => item.category)
	)];

	return uniqueCategories.map(name => ({ name }));
});

const filteredThings = computed(() => {
	if (!thingsToDoList.value?.result || categories.value.length === 0) return [];

	const categoryName = categories.value[selected.value]?.name;
	return thingsToDoList.value.result.filter(item => item.category === categoryName);
});

const responsiveOptions = ref([
	{
		breakpoint: '1400px',
		numVisible: 4,
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

<style scoped>
.underline {
	height: 2px;
	background-color: #000;
	margin-bottom: 1rem;
}
</style>