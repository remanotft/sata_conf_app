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
				<h2 style="font-size: x-large; font-weight: 650;">THINGS TO DO</h2>
				<button @click="showAddToDoItemModal"
					class="w-52 h-10 text-white font-montserrat font-semibold bg-black">Add
					Things To Do</button>
			</div>

			<!-- THINGS TO DO TABLE -->
			<div class="pt-10">
				<DataTable ref="dt" :value="thingsToDoList.result" dataKey="id" scrollable scroll-height="600px">
					<Column field="id" header="ID" style="min-width: 2rem" class="font-montserrat font-medium">
					</Column>
					<Column field="name" header="Name" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="description" header="Description" style="min-width: 30rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="phoneNo" header="Phone No." style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="email" header="Email" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="website" header="Website" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="imageUrl" header="Image URL" style="min-width: 10rem"
						class="font-montserrat font-medium">
						<template #body="slotProps">
							<a target="_blank" class=" text-blue-700" :href="slotProps.data.imageUrl">{{ slotProps.data.imageUrl }}</a>
						</template>
					</Column>
					<Column field="altText" header="Alt. Text" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
					<Column field="category" header="Category" style="min-width: 10rem"
						class="font-montserrat font-medium">
					</Column>
				</DataTable>
			</div>
		</Panel>
	</div>

	<!-- ADD THINGS TO DO MODAL -->
	<div>
		<Dialog v-model:visible="agendaAddModalVisible" modal header="Add Things To Do" :style="{ width: '35rem' }"
			style="--p-dialog-border-radius: 0">
			<form @submit.prevent="addThingsToDo" class="space-y-6" action="">
				<div>
					<label for="name" class="block mb-2 text-sm font-bold text-gray-900">
						Name
					</label>
					<InputText type="text" v-model="name" class="w-full" required />
				</div>
				<div>
					<label for="description" class="block mb-2 text-sm font-bold text-gray-900">
						Description
					</label>
					<Textarea type="text" v-model="description" class="w-full" required />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div>
						<label for="phoneNo" class="block mb-2 text-sm font-bold text-gray-900">
							Phone No.
						</label>
						<InputText type="text" v-model="phoneNo" class="w-full" required />
					</div>
					<div>
						<label for="email" class="block mb-2 text-sm font-bold text-gray-900">
							Email
						</label>
						<InputText type="email" v-model="email" class="w-full" required />
					</div>
				</div>
				<div>
					<label for="website" class="block mb-2 text-sm font-bold text-gray-900">
						Website
					</label>
					<InputText type="text" v-model="website" class="w-full" required />
				</div>
				<div>
					<label for="imageUrl" class="block mb-2 text-sm font-bold text-gray-900">
						Image URL
					</label>
					<InputText type="text" v-model="imageUrl" class="w-full" required />
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div>
						<label for="altText" class="block mb-2 text-sm font-bold text-gray-900">
							Alternative Text
						</label>
						<InputText type="text" v-model="altText" class="w-full" />
					</div>
					<div>
						<label for="category" class="block mb-2 text-sm font-bold text-gray-900">
							Category
						</label>
						<Select v-model="categoryID" :options="Categories" optionLabel="name" optionValue="id"
							class="w-full h-10" />
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
const { showAddToDoItemModal, addThingsToDo, getAllThingsToDo } = useMyTodoStore();
const { agendaAddModalVisible, imageUrl, altText, name, description, phoneNo, email, website, categoryID, thingsToDoList } = storeToRefs(useMyTodoStore());

onMounted(async () => {
	assignUserData();
	getAllThingsToDo();
});


const Categories = ref([
	{
		id: 1,
		name: 'Restaurants'
	},
	{
		id: 2,
		name: 'Amenities'
	},
	{
		id: 3,
		name: 'Attractions'
	}
]);

const home = ref({
	icon: 'pi pi-home',
	route: '/admin'
});

const items = ref([
	{ label: 'Admin' },
	{ label: 'Things To Do', route: '/admin/todo' }
]);

</script>

<style></style>