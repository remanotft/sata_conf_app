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
			<div class="md:flex justify-between items-center pt-4 px-12">
				<h2 style="font-size: x-large; font-weight: 650;">AGENDA</h2>
				<button @click="showAddAgentModal"
					class="w-52 h-10 text-white font-montserrat font-semibold bg-black">Add
					Agenda Item</button>
			</div>
		</Panel>
	</div>

	<!-- CREATE SPEAKER MODAL -->
	<div>
		<Dialog v-model:visible="agendaAddModalVisible" modal header="Add Speaker" :style="{ width: '40rem' }"
			style="--p-dialog-border-radius: 0">
			<form @submit.prevent="createAgendaItem" class="space-y-6" action="">
				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div>
						<label for="day" class="block mb-2 text-sm font-bold text-gray-900">
							Day
						</label>
						<Select v-model="day" :options="AgendaDays" optionLabel="name" optionValue="name"
							class="w-40 h-10" />
					</div>
				</div>
				<div>
					<FloatLabel variant="in">
						<DatePicker class="w-96 text-xs" v-model="date" inputId="over_label" showIcon
							iconDisplay="input" dateFormat="yy-mm-dd" />
						<label for="over_label">Date</label>
					</FloatLabel>
				</div>
				<div class="grid gap-6 mb-6 md:grid-cols-2">
					<div class="flex-auto">
						<label for="datepicker-12h" class="font-bold text-sm block mb-2"> Start Time </label>
						<DatePicker id="datepicker-12h" v-model="startTime" timeOnly fluid />
					</div>
					<div class="flex-auto">
						<label for="datepicker-12h" class="font-bold text-sm block mb-2"> End Time </label>
						<DatePicker id="datepicker-12h" v-model="endTime" timeOnly fluid />
					</div>
				</div>
				<div class="grid grid-cols-5 gap-10">
					<div class="col-span-4">
						<label for="linkedIn" class="block mb-2 text-sm font-bold text-gray-900">
							Activity
						</label>
						<InputText type="text" v-model="activity" class="w-full" required />
					</div>
					<div class="col-span-1">
						<label for="linkedIn" class="block mb-2 text-sm font-bold text-gray-900">
							Break?
						</label>
						<Checkbox v-model="isBreak" binary />
					</div>
				</div>
				<div>
					<div>
						<label for="linkedIn" class="block mb-2 text-sm font-bold text-gray-900">
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
	layout: 'admin'
});

const { assignUserData } = useMyAuthStore();
const { showEditAgendaModal, showAddAgentModal, createAgendaItem, getAgendaItems } = useMyAgendaStore();
const { agendaAddModalVisible, agendaEditModalVisible, day, date, startTime, endTime, duration, isBreak, activity, participants, splitParticipants } = storeToRefs(useMyAgendaStore());

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