<template>
	<div>
		<Panel class="h-screen md:h-[830px] shadow-md" style="--p-panel-border-radius: 0">
			<div class="-mt-4">
				<Breadcrumb :home="home" :model="items">
					<template #item="{ item, props }">
						<NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
							<a class="" :href="href" v-bind="props.action" @click="navigate">
								<span :class="[item.icon, 'text-color']" />
								<span class="font-semibold text-sm" style="color: var(--color-primary);">{{
									item.label }}</span>
							</a>
						</NuxtLink>
						<a v-else :href="item.url" :target="item.target" v-bind="props.action">
							<span class="text-surface-700 dark:text-surface-0 text-sm">{{ item.label }}</span>
						</a>
					</template>
				</Breadcrumb>
			</div>
			<div class="flex justify-between items-center pt-4 md:px-12">
				<h2 style="font-size: x-large; font-weight: 650;">CONTENT BITES</h2>
				<button @click="showAddContentBitesModal"
					class="w-36 md:w-52 h-8 md:h-10 text-white text-xs md:text-sm font-montserrat font-semibold bg-black">Add
					Content Bite Item</button>
			</div>

			<div class="pt-10">
				<DataTable ref="dt" :value="ContentBitesList.result" dataKey="id" scrollable scroll-height="600px">
					<Column field="id" header="ID" style="min-width: 2rem" class="font-montserrat font-medium">
					</Column>
					<Column field="day" header="Day" style="min-width: 10rem" class="font-montserrat font-medium">
					</Column>
					<Column field="speaker" header="Speaker" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="topic" header="Topic" style="min-width: 10rem" class="font-montserrat font-medium">
					</Column>
					<Column field="videoUrl" header="Video URL" style="min-width: 10rem"
						class="font-montserrat font-medium">
						<template #body="slotProps">
							<a target="_blank" class=" text-blue-700" :href="slotProps.data.videoUrl">{{
								slotProps.data.videoUrl }}</a>
						</template>
					</Column>
					<Column style="min-width: 4rem">
						<template #body="slotProps">
							<div class=" cursor-pointer">
								<i @click="showEditContentBitesModal(slotProps.data)"
									class="pi pi-pen-to-square text-green-700 hover:text-green-500"></i>
							</div>
						</template>
					</Column>
				</DataTable>
			</div>
		</Panel>

		<!-- ADD CONTENT BITE MODAL -->
		<div>
			<Dialog v-model:visible="contentBiteAddModalVisible" modal header="Add Content Bite"
				:style="{ width: '40rem' }" style="--p-dialog-border-radius: 0">
				<form @submit.prevent="addContentBite" class="space-y-6" action="">
					<div class="grid gap-6 mb-6 md:grid-cols-3 items-center">
						<div class="col-span-1">
							<label for="day" class="block mb-2 text-base font-bold text-gray-900">
								Day
							</label>
							<Select v-model="day" :options="AgendaDays" optionLabel="name" optionValue="name"
								class="w-full h-10 text-base" />
						</div>
						<div class="col-span-2">
							<label for="speaker" class="font-bold text-base block mb-2"> Speaker </label>
							<Select v-model="speaker" :options="speakers" class="w-full h-10 text-base" />
						</div>
					</div>
					<div class="grid gap-6 mb-6">
						<div>
							<label for="topic" class="font-bold text-base block mb-2"> Topic </label>
							<InputText type="text" v-model="topic" class="w-full" required />
						</div>
						<div>
							<label for="video" class="font-bold text-base block mb-2"> Video URL </label>
							<Textarea type="text" v-model="videoUrl" class="w-full" required />
						</div>
					</div>
					<div class="flex justify-end">
						<button type="submit" class="w-52 h-10 text-white font-montserrat font-semibold bg-black">
							Submit
						</button>
					</div>
				</form>

			</Dialog>
		</div>


		<!-- EDIT CONTENT BITE MODAL -->
		<div>
			<Dialog v-model:visible="contentBiteEditModalVisible" modal header="Edit Content Bite"
				:style="{ width: '40rem' }" style="--p-dialog-border-radius: 0">
				<form @submit.prevent="updateContentBite" class="space-y-6" action="">
					<div class="grid gap-6 mb-6 md:grid-cols-3 items-center">
						<div class="col-span-1">
							<label for="day" class="block mb-2 text-base font-bold text-gray-900">
								Day
							</label>
							<Select v-model="selectedContentBite.day" :options="AgendaDays" optionLabel="name" optionValue="name"
								class="w-full h-10 text-base" />
						</div>
						<div class="col-span-2">
							<label for="speaker" class="font-bold text-base block mb-2"> Speaker </label>
							<Select v-model="selectedContentBite.speaker" :options="speakers" class="w-full h-10 text-base" />
						</div>
					</div>
					<div class="grid gap-6 mb-6">
						<div>
							<label for="topic" class="font-bold text-base block mb-2"> Topic </label>
							<InputText type="text" v-model="selectedContentBite.topic" class="w-full" required />
						</div>
						<div>
							<label for="video" class="font-bold text-base block mb-2"> Video URL </label>
							<Textarea type="text" v-model="selectedContentBite.videoUrl" class="w-full" required />
						</div>
					</div>
					<div class="flex justify-end">
						<button type="submit" class="w-52 h-10 text-white font-montserrat font-semibold bg-black">
							Update
						</button>
					</div>
				</form>
			</Dialog>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useMyContent_bitesStore } from '~/stores/media-hub/content_bites';

definePageMeta({
	layout: 'admin',
	middleware: ['auth-user']
});

const { getAllSpeakers } = useMySpeakersStore();
const { getAllContentBites, showAddContentBitesModal, showEditContentBitesModal, addContentBite, updateContentBite } = useMyContent_bitesStore();
const { ContentBitesList, day, speaker, topic, videoUrl, contentBiteAddModalVisible, contentBiteEditModalVisible, selectedContentBite } = storeToRefs(useMyContent_bitesStore());

const speakersList = ref([]);
let speakers: any = [];

onMounted(async () => {
	await getAllSpeakers().then((data: any) => (speakersList.value = data.result));
	for (const speaker in speakersList.value) {
		const element = speakersList.value[speaker];
		speakers.push(element.firstName + ' ' + element.lastName);
	}
	await getAllContentBites();
});

const home = ref({
	icon: 'pi pi-home',
	route: '/admin'
});

const items = ref([
	{ label: 'Admin' },
	{ label: 'Media Hub' },
	{ label: 'Content Bites', route: '/admin/media-hub/content-bites' }
]);

const AgendaDays = ref([
	{
		id: 1,
		name: 'Day 1'
	},
	{
		id: 2,
		name: 'Day 2'
	},
	{
		id: 3,
		name: 'Day 3'
	}
]);

</script>

<style></style>