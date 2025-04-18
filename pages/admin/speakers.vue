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
				<h2 style="font-size: x-large; font-weight: 650;">SPEAKERS</h2>
				<button @click="showAddSpeakerModal"
					class="w-36 md:w-52 h-8 md:h-10 text-white text-xs md:text-sm font-montserrat font-semibold bg-black">Add
					Speakers</button>
				<!-- <Button @click="showAddSpeakerModal" class="w-56 h-10"
					style="background-color: var(--color-primary); color: white; font-weight: 700;">
					ADD SPEAKER
				</Button> -->
			</div>

			<!-- SPEAKERS TABLE -->
			<div class="pt-10">
				<DataTable ref="dt" :value="speakersList.result" dataKey="id" scrollable scroll-height="600px">
					<Column field="id" header="ID" style="min-width: 2rem" class="font-montserrat font-medium">
					</Column>
					<Column field="firstName" header="First Name" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="lastName" header="Last Name" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="title" header="Title" style="min-width: 10rem" class="font-montserrat font-medium">
					</Column>
					<Column field="company" header="Company" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="linkedIn" header="LinkedIn Link" style="min-width: 10rem"
						class="font-montserrat font-medium">
						<template #body="slotProps">
							<a target="_blank" class=" text-blue-700" :href="slotProps.data.linkedIn">{{ slotProps.data.linkedIn }}</a>
						</template>
					</Column>
					<Column style="min-width: 4rem">
						<template #body="slotProps">
							<div class=" cursor-pointer">
								<i @click="showEditSpeakerModal(slotProps.data)"
									class="pi pi-pen-to-square text-green-700 hover:text-green-500"></i>
							</div>
						</template>
					</Column>
				</DataTable>
			</div>
		</Panel>

		<!-- CREATE SPEAKER MODAL -->
		<div>
			<Dialog v-model:visible="speakerAddModalVisible" modal header="Add Speaker" :style="{ width: '45rem' }"
				style="--p-dialog-border-radius: 0">
				<form @submit.prevent="createSpeaker" class="space-y-6" action="">
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label for="firstName" class="block mb-2 text-sm font-medium text-gray-900">
								First Name
							</label>
							<InputText type="text" v-model="firstName" class="w-full" required />
						</div>
						<div>
							<label for="lastName" class="block mb-2 text-sm font-medium text-gray-900">
								Last Name
							</label>
							<InputText type="text" v-model="lastName" class="w-full" required />
						</div>
					</div>
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label for="title" class="block mb-2 text-sm font-medium text-gray-900">
								Title
							</label>
							<InputText type="text" v-model="title" class="w-full" />
						</div>
						<div>
							<label for="company" class="block mb-2 text-sm font-medium text-gray-900">
								Company
							</label>
							<InputText type="text" v-model="company" class="w-full" />
						</div>
					</div>
					<div>
						<div>
							<label for="linkedIn" class="block mb-2 text-sm font-medium text-gray-900">
								LinkedIn Link
							</label>
							<InputText type="text" v-model="linkedIn" class="w-full" required />
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

		<!-- EDIT SPEAKER MODAL -->
		<div>
			<Dialog v-model:visible="speakerEditModalVisible" modal
				:header="selectedSpeaker.firstName + ' ' + selectedSpeaker.lastName"
				:style="{ width: '45rem' }" style="--p-dialog-border-radius: 0">
				<div class="flex justify-center">
					<img :src="selectedSpeaker.imageUrl" alt="" class="border rounded-full w-28 md:w-48">
				</div>
				<UploadSpeakerAvatar />
				<div class="pt-10">
					<form @submit.prevent="updateSpeaker" class="space-y-6" action="">
						<div class="grid gap-6 mb-6 md:grid-cols-2">
							<div>
								<label for="firstName" class="block mb-2 text-sm font-medium text-gray-900">
									First Name
								</label>
								<InputText type="text" v-model="selectedSpeaker.firstName" class="w-full" required />
							</div>
							<div>
								<label for="lastName" class="block mb-2 text-sm font-medium text-gray-900">
									Last Name
								</label>
								<InputText type="text" v-model="selectedSpeaker.lastName" class="w-full" required />
							</div>
						</div>
						<div class="grid gap-6 mb-6 md:grid-cols-2">
							<div>
								<label for="title" class="block mb-2 text-sm font-medium text-gray-900">
									Title
								</label>
								<InputText type="text" v-model="selectedSpeaker.title" class="w-full" required />
							</div>
							<div>
								<label for="company" class="block mb-2 text-sm font-medium text-gray-900">
									Company
								</label>
								<InputText type="text" v-model="selectedSpeaker.company" class="w-full" />
							</div>
						</div>
						<div>
							<div>
								<label for="linkedIn" class="block mb-2 text-sm font-medium text-gray-900">
									LinkedIn Link
								</label>
								<InputText type="text" v-model="selectedSpeaker.linkedIn" class="w-full" required />
							</div>
						</div>
						<div class="flex justify-end">
							<button type="submit" class="w-52 h-10 text-white font-montserrat font-semibold bg-black">
								Update
							</button>
						</div>
					</form>
				</div>
			</Dialog>
		</div>
	</div>
</template>

<script lang="ts" setup>
import UploadSpeakerAvatar from '~/components/admin/speakers/UploadSpeakerAvatar.vue';

definePageMeta({
	layout: 'admin',
	middleware: ['auth-user']
});

const { assignUserData } = useMyAuthStore();
const { getAllSpeakers, createSpeaker, updateSpeaker, showEditSpeakerModal, showAddSpeakerModal } = useMySpeakersStore();
const { speakerAddModalVisible, speakerEditModalVisible, firstName, lastName, title, linkedIn, company, speakersList, selectedSpeaker } = storeToRefs(useMySpeakersStore());



onMounted(async () => {
	assignUserData();
	getAllSpeakers();
});

const home = ref({
	icon: 'pi pi-home',
	route: '/admin'
});

const items = ref([
	{ label: 'Admin' },
	{ label: 'Speakers', route: '/admin/speakers' }
]);

</script>

<style></style>