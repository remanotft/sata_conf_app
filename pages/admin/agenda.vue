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
				<h2 style="font-size: x-large; font-weight: 650;">AGENDA</h2>
				<button @click="showAddAgentModal"
					class="w-36 md:w-52 h-8 md:h-10 text-white text-xs md:text-sm font-montserrat font-semibold bg-black">Add
					Agenda Item</button>
			</div>

			<!-- AGENDA ITEMS TABLE -->
			<div class="pt-10">
				<DataTable ref="dt" :value="agendaList.result" dataKey="id" scrollable scroll-height="600px">
					<Column field="id" header="ID" style="min-width: 2rem" class="font-montserrat font-medium">
					</Column>
					<Column field="day" header="Day" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="date" header="Date" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="startTime" header="Start Time" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="endTime" header="End Time" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="actvity" header="Actvity" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="isBreak" header="Break?" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="participants" header="Participants" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column style="min-width: 4rem">
						<template #body="slotProps">
							<div class=" cursor-pointer">
								<i @click="deleteAgendaItem(slotProps.data.id)"
									class="pi pi-trash text-red-700 hover:text-red-500"></i>
							</div>
						</template>
					</Column>
				</DataTable>
			</div>
		</Panel>
	</div>

	<!-- CREATE SPEAKER MODAL -->
	<div>
		<Dialog v-model:visible="agendaAddModalVisible" modal header="Add Speaker" :style="{ width: '40rem' }"
			style="--p-dialog-border-radius: 0">
			<form @submit.prevent="createAgendaItem" class="space-y-6" action="">
				<div class="grid gap-6 mb-6 md:grid-cols-3 items-center">
					<div class="col-span-1">
						<label for="day" class="block mb-2 text-base font-bold text-gray-900">
							Day
						</label>
						<Select v-model="day" :options="AgendaDays" optionLabel="name" optionValue="name"
							class="w-40 h-10 text-base" />
					</div>
					<div class="col-span-2">
						<span class=" text-base font-bold text-gray-900">Date:</span> {{ setDate }}
					</div>
				</div>
				<!-- <div>
					<FloatLabel variant="in">
						<DatePicker class="w-96 text-xs" v-model="date" inputId="over_label" showIcon
							iconDisplay="input" dateFormat="yy-mm-dd" />
						<label for="over_label">Date</label>
					</FloatLabel>
				</div> -->
				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div class="flex-auto">
						<label for="datepicker-12h" class="font-bold text-base block mb-2"> Start Time </label>
						<DatePicker id="datepicker-12h" v-model="startTime" timeOnly fluid />
					</div>
					<div class="flex-auto">
						<label for="datepicker-12h" class="font-bold text-base block mb-2"> End Time </label>
						<DatePicker id="datepicker-12h" v-model="endTime" timeOnly fluid />
					</div>
				</div>
				<div class="grid grid-cols-5 gap-10">
					<div class="col-span-4">
						<label for="linkedIn" class="block mb-2 text-base font-bold text-gray-900">
							Activity
						</label>
						<InputText type="text" v-model="activity" class="w-full" required />
					</div>
					<div class="col-span-1">
						<label for="linkedIn" class="block mb-2 text-base font-bold text-gray-900">
							Break?
						</label>
						<Checkbox v-model="isBreak" binary />
					</div>
				</div>
				<div>
					<div>
						<label for="linkedIn" class="block mb-2 text-base font-bold text-gray-900">
							Participants
						</label>
						<Textarea type="text" v-model="participants" class="w-full" required />
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
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'admin',
	middleware: ['auth-user']
});

const { assignUserData } = useMyAuthStore();
const { showEditAgendaModal, showAddAgentModal, createAgendaItem, getAgendaItems, deleteAgendaItem } = useMyAgendaStore();
const { agendaAddModalVisible, agendaEditModalVisible, day, date, startTime, endTime, duration, isBreak, activity, participants, splitParticipants, agendaList, setDate } = storeToRefs(useMyAgendaStore());

onMounted(async () => {
	assignUserData();
	getAgendaItems();
});


const home = ref({
	icon: 'pi pi-home',
	route: '/admin'
});

const items = ref([
	{ label: 'Admin' },
	{ label: 'Agenda', route: '/admin/agenda' }
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