<template>
  <div class="bg-black px-4 py-8 text-white">

    <!-- Title -->
    <h1 class="text-white">EMERGENCY INFO</h1>
    <div class="underline"></div>

    <!-- Emergency Info Cards -->
    <div class="flex flex-col gap-6 mt-6">
      <div
        v-for="(info, index) in emergencyInfo"
        :key="index"
        class="flex items-start gap-4 bg-neutral-900 p-4 rounded-lg"
      >
        <!-- Icon -->
        <div class="flex justify-center items-center bg-green-600 p-3 rounded-full">
          <i :class="info.icon" class="text-white text-lg"></i>
        </div>

        <!-- Info -->
        <div class="text-left">
          <div class="mb-1 font-bold text-sm">{{ info.name }}</div>
          <div class="mb-1 text-gray-300 text-xs">Address: {{ info.Address }}</div>
          <div class="text-gray-300 text-xs">Phone: {{ info.Phone }}</div>
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
  }
];
</script>
