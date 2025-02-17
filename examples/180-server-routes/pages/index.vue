<template>
  <h2 class="text-2xl font-bold">Home page from Index Component</h2>
  <p class="text-base">This is a very minimal homepage</p>
  <p class="text-base">Some Text: lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, beatae
    culpa cupiditate dolorem esse
    ex hic iure modi natus necessitatibus obcaecati omnis quaerat, quidem rem repudiandae sunt ullam vitae.</p>
  <hr class="my-4">
  <h2 class="text-2xl font-bold">Fetch Cities via Server Side Route </h2>
  <p>See Chrome DevTools for results</p>
  <p>
    <button @click="fetchCities"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
      fetch cities
    </button>
  </p>
</template>
<script setup lang="ts">

const fetchCities = async () => {
  const cities = await $fetch<string[]>('/api/cities');
  console.log('Fetched cities: ', JSON.stringify(cities));
}

</script>
