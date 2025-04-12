<template>
  <div>
    <div class="flex justify-center mb-2">
      <h1>Conference Agenda</h1>
    </div>

    <!-- Tab Selector-->
    <div class="relative flex justify-evenly gap-2 bg-black mb-8 px-4 py-1 rounded-lg text-white text-sm">
      <div v-for="(day, index) in days" :key="index" @click="selectedDay = index"
        class="px-2 text-center cursor-pointer">
        <div class="font-semibold">
          DAY <span :class="selectedDay === index ? 'text-green-500' : 'text-white'"> {{ day.number }} </span>
        </div>
        <div class="mt-0.5 text-white text-xs">{{ day.date }}</div>
      </div>

      <!-- Green Indicator -->
      <div class="bottom-0 absolute bg-green-500 h-0.5 transition-all duration-300" :style="{
        width: '33.33%',
        left: `${selectedDay * 33.33}%`
      }"></div>
    </div>

    <!-- Content -->
    <div class="mt-5">
      <div class="schedule-list">
        <div v-for="(item, index) in filteredEvents" :key="index" class="schedule-card">

          <!-- Header -->
          <div class="schedule-header">
            <h2 class="font-medium text-sm schedule-title">{{ item.activity.toUpperCase() }}</h2>
          </div>

          <!-- Time & Participants row -->
          <div class="schedule-meta">
            <div class="text-xs meta-item">
              <i class="pi pi-clock icon" />
              <span>{{ item.startTime }} - {{ item.endTime }}</span>
            </div>
            <div class="meta-separator" />
            <div class="text-xs meta-item">
              <i class="pi pi-users icon" />
              <span>Participants: {{ item.participants.length }}</span>
            </div>
          </div>

          <!-- Participants -->
          <div class="schedule-body">
            <div class="info-block text-xs">
              <span class="font-medium info-label">Participants:</span>
              <ul class="participants-list">
                <li v-for="(participant, pIndex) in item.participants" :key="pIndex" class="text-xs">
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



// Days data 
const selectedDay = ref(0)
const days = [
  { number: '01', date: 'April 17', id: 'day1' },
  { number: '02', date: 'April 18', id: 'day2' },
  { number: '03', date: 'April 19', id: 'day3' }
]

const allEvents = ref([
  // Day 1 Events
  {
    id: 1,
    day: 'day1',
    startTime: "08:00 AM",
    endTime: "09:00 AM",
    activity: "Delegates Registration",
    participants: ["Openserve Events Team", "Reception Staff", "Security Team"]
  },
  {
    id: 2,
    day: 'day1',
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    activity: "Opening Keynote",
    participants: ["CEO - Openserve", "CTO - Openserve"]
  },
  {
    id: 3,
    day: 'day1',
    startTime: "10:30 AM",
    endTime: "12:00 PM",
    activity: "Panel Discussion",
    participants: ["Moderator - Jane Smith", "Panelist - John Doe", "Panelist - Alex Johnson", "Panelist - Sarah Williams"]
  },
  // Day 2 Events
  {
    id: 4,
    day: 'day2',
    startTime: "09:00 AM",
    endTime: "10:30 AM",
    activity: "Technical Workshop",
    participants: ["Lead Engineer - Mark Davis", "Product Manager - Lisa Wong"]
  },
  {
    id: 5,
    day: 'day2',
    startTime: "11:00 AM",
    endTime: "12:30 PM",
    activity: "Future Trends Presentation",
    participants: ["Industry Analyst - Robert Chen", "Head of Innovation - Emily Parker"]
  },
  // Day 3 Events
  {
    id: 6,
    day: 'day3',
    startTime: "09:30 AM",
    endTime: "11:00 AM",
    activity: "Closing Remarks",
    participants: ["CEO - Openserve", "Board Chairman - Michael Johnson"]
  },
  {
    id: 7,
    day: 'day3',
    startTime: "11:30 AM",
    endTime: "01:00 PM",
    activity: "Networking Lunch",
    participants: ["All Attendees"]
  }
])

//  filters events based on selected day
const filteredEvents = computed(() => {
  const currentDayId = days[selectedDay.value].id
  return allEvents.value.filter(event => event.day === currentDayId)
})




// // Mapping agenda data to days array
// const days = computed(() => {
//   return agenda.value.map((event, index) => ({
//     number: (index + 1).toString().padStart(2, '0'),
//     date: new Date(event.date).toLocaleDateString(),
//     id: `day${index + 1}`,
//   }));
// });

// // Filtering events based on selected day
// const filteredEvents = computed(() => {
//   const currentDayId = days.value[selectedDay.value]?.id;
//   return agenda.value.filter(event => event.day === currentDayId);
// });


</script>
