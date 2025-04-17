<template>
  <div class="schedule-list">
    <div v-for="(item, index) in schedule" :key="index" class="schedule-card">
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
        <div class="info-block text-xs md:text-xl">
          <span class="font-medium info-label">Participants:</span>
          <ul class="participants-list">
            <li v-for="(participant, pIndex) in item.participants" :key="pIndex" class="text-xl md:">
              {{ participant }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const schedule = ref([
  {
    startTime: "08:00 AM",
    endTime: "09:00 AM",
    activity: "Delegates Registration",
    participants: ["Openserve Events Team", "Reception Staff", "Security Team"]
  },
  {
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    activity: "Opening Keynote",
    participants: ["CEO - Openserve", "CTO - Openserve"]
  },
  {
    startTime: "10:30 AM",
    endTime: "12:00 PM",
    activity: "Panel Discussion",
    participants: ["Moderator - Jane Smith", "Panelist - John Doe", "Panelist - Alex Johnson", "Panelist - Sarah Williams"]
  },
])
</script>