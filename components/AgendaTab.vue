<template>
  <div class="">
    <div class="flex justify-center mb-2">
      <h1 class="font-extrabold md:font-extrabold md:text-3xl">CONFERENCE AGENDA</h1>
    </div>
    <div class="md:h-1 underline"></div>

    <div class="tab-selector-container">
      <!-- Tab Selector-->
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
          width: `${100/uniqueDays.length}%`,
          left: `${selectedDay * (100/uniqueDays.length)}%`
        }"></div>
      </div>
    </div>

    <!-- Content section remains the same -->
    <div class="mt-5">
      <div class="gap-4 md:gap-16 md:px-72 schedule-list">
        <div v-for="(item, index) in filteredEvents" :key="index" class="schedule-card">
          <!-- Header -->
          <div class="schedule-header">
            <h2 class="font-medium text-sm md:text-lg schedule-title">{{ item.activity.toUpperCase() }}</h2>
          </div>

          <!-- Time & Participants row -->
          <div class="schedule-meta">
            <div class="text-xs md:text-lg meta-item">
              <i class="pi pi-clock icon" />
              <strong>{{ item.startTime }} - {{ item.endTime }}</strong>
            </div>
            <div class="meta-separator" />
            <div class="text-xs md:text-lg meta-item">
              <i class="pi pi-users icon" />
              <strong>Participants: {{ item.participants.length }}</strong>
            </div>
          </div>

          <!-- Participants -->
          <div class="schedule-body">
            <div class="info-block text-xs">
              <span class="font-medium md:text-lg info-label">Participants:</span>
              <ul class="participants-list">
                <li v-for="(participant, pIndex) in item.participants" :key="pIndex" class="p-10 text-xs md:text-lg">
                  {{ participant }}
                </li>
              </ul>
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
  await getAgendaItems()
})

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
    participants: item.participants.replace(/^\{\[|\]\}$/g, '').split(',')
  }))
})

// Filter events for the selected day
const filteredEvents = computed(() => {
  if (uniqueDays.value.length === 0) return []
  
  const currentDayId = uniqueDays.value[selectedDay.value]?.dayId
  return allEvents.value.filter(event => event.day === currentDayId)
})
</script>