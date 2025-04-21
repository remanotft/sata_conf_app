<template>
	<div class="">
		<div class="flex justify-center mb-2 pt-8">
			<h1 class="font-extrabold md:font-extrabold md:text-3xl">CONFERENCE AGENDA</h1>
		</div>
		<div class="md:h-1 underline"></div>

		<!-- Tab Selector-->
		<div class="tab-selector-container">
			<div class="md:w-[30rem] text-white text-sm tab-selector">
				<div v-for="(day, index) in uniqueDays" :key="index" @click="selectedDay = index"
					class="px-2 text-center cursor-pointer">
					<div class="font-semibold">
						<span class="md:text-xl" :class="selectedDay === index ? 'text-green-500' : 'text-white'">
							DAY {{ day.dayNumber }}
						</span>
					</div>
					<div class="mt-0.5 text-white text-xs">{{ day.formattedDate }}</div>
				</div>

				<!-- Green Indicator -->
				<div class="bottom-0 absolute bg-green-500 h-1 transition-all duration-300" :style="{
					width: `${(100 / uniqueDays.length)}%`,
					left: `${selectedDay * ((100 / uniqueDays.length))}%`
				}"></div>
			</div>
		</div>

		<!-- Content section -->
		<div v-if="loading">
			<div class="card flex justify-center">
				<ProgressSpinner style="--p-progressspinner-color-one: #1e9d57; --p-progressspinner-color-two: #000; --p-progressspinner-color-three: #fff; --p-progressspinner-color-four: #1e9d57"/>
			</div>
		</div>
		<div v-cloak class="mt-5">
			<div class="gap-4 md:gap-16 md:px-72 schedule-list">
				<div v-for="(item, index) in filteredEvents" :key="index">

					<!--  break -->
					<div v-if="item.isBreak" class="w-full">
						<div class="py-2 text-white text-center" style="background-color: black;">
							<p class="font-semibold uppercase text-sm md:text-lg">{{ item.activity }}</p>
							<div class="flex justify-center gap-1 p-2 text-xs md:text-lg meta-item">
								<i class="pi pi-clock icon" />
								<strong>{{ item.startTime }} - {{ item.endTime }}</strong>
							</div>
						</div>
					</div>

					<!-- schedule card -->
					<div v-else class="schedule-card">
						<!-- Header -->
						<div class="schedule-header">
							<h2 class="font-medium text-sm md:text-lg schedule-title">
								{{ item.activity.toUpperCase() }}
							</h2>
						</div>

						<!-- Time & Participants row -->
						<div class="schedule-meta">
							<div class="flex justify-center gap-1 items-center text-xs md:text-lg meta-item">
								<i class="pi pi-clock icon" />
								<strong>{{ item.startTime }} - {{ item.endTime }}</strong>
							</div>
							<!-- <div class="meta-separator" /> -->
							<div class="text-xs md:text-lg meta-item">
								<!-- <i class="pi pi-users icon" />
								<strong>Participants: {{ calculateParticipants(item) }}</strong> -->
							</div>
						</div>

						<div class="schedule-body">
							<!-- Participants -->
							<div v-if="item.participants.length" class="info-block text-xs">
								<!-- <h5 class="font-bold text-sm info-label">Participants:</h5> -->
								<ul>
									<div class="px-2 pt-2 font-medium">
										<li v-for="(participant, pIndex) in item.participants" :key="pIndex"
											class="w-full text-base md:text-xl flex justify-center">
											{{ participant }}
										</li>
									</div>
								</ul>
							</div>

							<!-- facilitators -->
							<div v-if="item.facilitators.length" class="info-block pt-2">
								<h5 class="font-bold text-xl md:text-2xl info-label flex justify-center">Facilitators
								</h5>
								<ul>
									<div class="px-2 font-medium">
										<li v-for="(facilitator, pIndex) in item.facilitators" :key="pIndex"
											class="w-full text-base md:text-xl flex justify-center">
											{{ facilitator }}
										</li>
									</div>
								</ul>
							</div>

							<!-- panelMembers -->
							<div v-if="item.panelMembers.length" class="info-block">
								<h5 class="font-bold text-xl md:text-2xl info-label flex justify-center">Panel Members
								</h5>
								<ul>
									<div class="px-2 font-medium">
										<li v-for="(panelMember, pIndex) in item.panelMembers" :key="pIndex"
											class="w-full text-base md:text-xl flex justify-center">
											{{ panelMember }}
										</li>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>


				<div v-if="filteredEvents.length === 0" class="py-6 text-gray-500 text-center">
					No events scheduled for this day.
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { agendaList } = storeToRefs(useMyAgendaStore())
const { getAgendaItems } = useMyAgendaStore()

onMounted(async () => {
	await getAgendaItems();
	loading.value = false;
});

const loading = ref(true);

const calculateParticipants = (participants) => {
	let a = [];

	a.push(participants);

	return a.reduce((total, group) => {
		if (group.partipantFlag) {
			total += group.participants.length;
		}
		if (group.facilitatorFlag) {
			total += group.facilitators.length;
		}
		if (group.panelMemberFlag) {
			total += group.panelMembers.length;
		}
		return total;
	}, 0);
}

const noOfParticipants = ref(0);
const selectedDay = ref(0)

const uniqueDays = computed(() => {
	if (!agendaList.value?.result) return []

	// Get unique day entries
	const dayMap = new Map()

	agendaList.value.result.forEach(item => {
		const dayNumber = item.day.replace('Day ', '')

		if (!dayMap.has(dayNumber)) {
			// Format the date (2025-04-14 → April 14)
			const date = new Date(item.date)
			const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })

			dayMap.set(dayNumber, {
				dayNumber,
				formattedDate,
				dayId: `day${dayNumber}`
			})
		}
	})


	return Array.from(dayMap.values())
		.sort((a, b) => parseInt(a.dayNumber) - parseInt(b.dayNumber))
})


const allEvents = computed(() => {
	if (!agendaList.value?.result) return []

	return agendaList.value.result.map(item => ({
		id: item.id,
		day: `day${item.day.replace('Day ', '')}`,
		startTime: item.startTime,
		endTime: item.endTime,
		activity: item.actvity,
		isBreak: item.isBreak,
		partipantFlag: item.partipantFlag,
		facilitatorFlag: item.facilitatorFlag,
		panelMemberFlag: item.panelMemberFlag,
		participants: item.participants ?
			item.participants.replace(/^\{\[|\]\}$/g, '').split(',').map(p => p.trim()) : [],

		facilitators: item.facilitators ?
			item.facilitators.replace(/^\{\[|\]\}$/g, '').split(',').map(p => p.trim()) : [],

		panelMembers: item.panelMembers ?
			item.panelMembers.replace(/^\{\[|\]\}$/g, '').split(',').map(p => p.trim()) : [],
	}))
})

// Filter events for the selected day
const filteredEvents = computed(() => {
	if (uniqueDays.value.length === 0) return []

	const currentDayId = uniqueDays.value[selectedDay.value]?.dayId
	return allEvents.value.filter(event => event.day === currentDayId)
});

</script>
<style></style>