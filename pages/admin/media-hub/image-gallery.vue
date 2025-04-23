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
				<h2 style="font-size: x-large; font-weight: 650;">IMAGE GALLERY</h2>
				<button
					class="w-36 md:w-52 h-8 md:h-10 text-white text-xs md:text-sm font-montserrat font-semibold bg-black">Add
					Image Gallery Item</button>
			</div>

			<div class="pt-10">
				<DataTable ref="dt" :value="imageGalleryList.result" dataKey="id" scrollable scroll-height="600px">
					<Column field="id" header="ID" style="min-width: 2rem" class="font-montserrat font-medium"></Column>
					<Column field="day" header="Day" style="min-width: 10rem" class="font-montserrat font-medium">
					</Column>
					<Column field="description" header="Description" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="imageUrl" header="Image URL" style="min-width: 10rem"
						class="font-montserrat font-medium">
						<template #body="slotProps">
							<a target="_blank" class=" text-blue-700" :href="slotProps.data.imageUrl">{{
								slotProps.data.imageUrl }}</a>
						</template>
					</Column>
					<Column field="altText" header="Alternative Text" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column style="min-width: 4rem">
						<template #body="slotProps">
							<div class="flex gap-4">
								<i @click="showEditImageGalleryModal(slotProps.data)"
									class="pi pi-pen-to-square text-green-700 hover:text-green-500 cursor-pointer"></i>
								<i @click="deleteImageGalleryItem(slotProps.data.id)"
									class="pi pi-trash text-red-700 hover:text-red-500 cursor-pointer"></i>
							</div>
						</template>
					</Column>
				</DataTable>
			</div>

			<!-- EDIT IMAGE GALLERY MODAL -->
			<div>
				<Dialog v-model:visible="imageGalleryEditModalVisible" modal header="Edit Image Gallery Item"
					:style="{ width: '35rem' }" style="--p-dialog-border-radius: 0">
					<form @submit.prevent="updateImageGalleryItem" class="space-y-6" action="">
						<div>
							<label for="day" class="block mb-2 text-2xl font-medium text-gray-900 text-center">
								{{ selectedImageGalleryItem.day }}
							</label>
							<div class="flex justify-center">
								<img :src="selectedImageGalleryItem.imageUrl" alt="" class="w-96 h-72">
							</div>
							<label for="description" class="block mb-2 text-base font-semibold text-gray-900 pt-6">
								Description
							</label>
							<InputText type="text" v-model="selectedImageGalleryItem.description" class="w-full"
								required />
							<label for="altText" class="block mb-2 text-base font-semibold text-gray-900 pt-4">
								Alternative Text
							</label>
							<InputText type="text" v-model="selectedImageGalleryItem.altText" class="w-full" />
						</div>
						<div class="flex justify-end">
							<button type="submit" class="w-52 h-10 text-white font-montserrat font-semibold bg-black">
								Update
							</button>
						</div>
					</form>

				</Dialog>
			</div>
		</Panel>
	</div>
</template>

<script lang="ts" setup>
import { useMyImage_galleryStore } from '~/stores/media-hub/image_gallery';

definePageMeta({
	layout: 'admin',
	middleware: ['auth-user']
});

onMounted(async () => {
	await getAllImageGalleryItems();
});

const { getAllImageGalleryItems, showEditImageGalleryModal, updateImageGalleryItem, deleteImageGalleryItem } = useMyImage_galleryStore();
const { imageGalleryList, imageGalleryEditModalVisible, selectedImageGalleryItem } = storeToRefs(useMyImage_galleryStore());

const home = ref({
	icon: 'pi pi-home',
	route: '/admin'
});

const items = ref([
	{ label: 'Admin' },
	{ label: 'Media Hub' },
	{ label: 'Image Gallery', route: '/admin/media-hub/image-gallery' }
]);

const days = ref([
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