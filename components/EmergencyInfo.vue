<template>
  <div>

    <!-- Title -->
    <h1 class="font-extrabold text-white md:text-2xl">EMERGENCY INFO</h1>
    <div class="underline"></div>

    <!-- Emergency Info Cards -->
    <!-- Emergency Info Cards -->
    <div class="flex md:flex-row flex-col md:justify-start gap-6 mt-6">
      <div v-for="(info, index) in emergencyInfo" :key="index"
        class="flex items-center gap-4 bg-neutral-900 shadow-lg mx-auto px-6 py-4 rounded-xl w-full md:max-w-xl">
        <!-- Icon -->
        <div class="bg-green-600 p-3 rounded-full">
          <i :class="info.icon" class="text-white text-xl"></i>
        </div>

        <!-- Info -->
        <div class="text-left">
          <div class="mb-1 font-bold text-white text-sm md:text-base">{{ info.name }}</div>

          <div v-if="info.Address" class="mb-1 text-gray-300 text-xs md:text-sm">
            <span class="font-bold text-white">Address:</span> {{ info.Address }}
          </div>

          <div v-if="info.Phone" class="text-gray-300 text-xs md:text-sm">
            <span class="font-bold text-white">Phone:</span> {{ info.Phone }}
          </div>

          <div v-if="info.CourtneySmith" class="text-gray-300 text-xs md:text-sm">
            <span class="font-bold text-white">Courtney Smith:</span> {{ info.CourtneySmith }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const emergencyInfo = [
  {
    name: 'Saps Sandton Police Station',
    Address: '2 Summit Rd, Morningside, Sandton, 2196',
    Phone: '011 722 4200',
    icon: 'pi pi-shield'
  },
  {
    name: 'Sandton Fire Station',
    Address: 'Linden St &, Grayston Dr, Sandown, Sandton',
    Phone: '011 472 1599',
    icon: 'pi pi-shield'
  },
  {
    name: 'Mediclinic Morningside Hospital',
    Address: 'Rivonia Rd, Morningside, Sandton, 2057',
    Phone: '086 100 5555',
    icon: 'pi pi-heart'
  },
  {
    name: 'Conference transfers',
    icon: 'pi pi-car',
    CourtneySmith: '072 000 0000'
  }
];
</script>
