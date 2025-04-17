<template>
  <div>

    <!-- Title -->
    <h1 class="font-extrabold text-white md:text-2xl">EMERGENCY INFO</h1>
    <div class="underline"></div>

    <!-- Emergency Info Cards -->
    <div class="flex md:flex-row flex-col md:justify-around gap-6 mt-6">
      <div v-for="(info, index) in emergencyInfo" :key="index"
        class="flex flex-wrap items-start gap-4 bg-neutral-900 px-6 py-4 rounded-lg w-full break-words">

        <!-- Icon -->
        <div class="bg-green-600 p-3 rounded-full shrink-0">
          <i :class="info.icon" class="text-white text-lg"></i>
        </div>

        <!-- Info -->
        <div class="w-full text-left">
          <div class="mb-1 font-bold text-sm md:text-base">{{ info.name }}</div>
          <div class="mb-1 text-gray-300 text-xs md:text-sm">
            <strong class="font-extrabold">Address:</strong> {{ info.Address }}
          </div>
          <div class="text-gray-300 text-xs md:text-sm">
            <strong class="font-bold">Phone:</strong> {{ info.Phone }}
          </div>
          <div class="text-gray-300 text-xs md:text-sm">
            <strong class="font-bold">Phone:</strong> {{ info.CourtneySmith }}
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
    Address: 'Rivonia Rd, Morningside, Sandton, 2057',
    Phone: '086 100 5555',
    CourtneySmith: '078 546 9514'
  }
];
</script>
