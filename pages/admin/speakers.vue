<template>
	<div>
		<div class="pb-8">

			<div class="flex justify-between items-center">
				<div class="-mt-4">
					<Breadcrumb :home="home" :model="items">
						<template #item="{ item, props }">
							<NuxtLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
								<a class="" :href="href" v-bind="props.action" @click="navigate">
									<span :class="[item.icon, 'text-color']" />
									<span class="font-semibold text-base" style="color: var(--color-primary);">{{
										item.label }}</span>
								</a>
							</NuxtLink>
							<a v-else :href="item.url" :target="item.target" v-bind="props.action">
								<span class="text-surface-700 dark:text-surface-0 text-base">{{ item.label }}</span>
							</a>
						</template>
					</Breadcrumb>
				</div>
			</div>

			<div class="flex justify-between items-center pt-4 px-16">
				<h2 style="font-size: xx-large; font-weight: 500;">SPEAKERS</h2>
				<Button class="w-56" style="background-color: var(--color-primary); color: white; font-weight: 700;">
					ADD SPEAKER
				</Button>
			</div>
			<div>
				<Button @click="getAllSpeakers" class="w-56" style="background-color: var(--color-primary); color: white; font-weight: 700;">
					GET SPEAKERS
				</Button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'admin'
});

const { assignUserData } = useMyAuthStore();
const { getAllSpeakers } = useMySpeakersStore();

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