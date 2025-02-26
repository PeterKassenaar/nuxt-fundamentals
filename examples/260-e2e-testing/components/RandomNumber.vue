<script setup lang="ts">
// Helper function: generate a random number between 0 and 100.000
const getRandomNum = () => Math.floor(Math.random() * 100000)

// The 'num' variable is stored in the state. It survives a
// component reload.
const num = useState<number>('randomNumber', () => getRandomNum())

// Handle button click to refresh the number
const refresh = () => num.value = getRandomNum()
</script>

<template>
  <h2>Random number generator; <code>e2e-testing</code> with <code>playwright</code></h2>
  <p>Click to see a different random number. The number is stored in 'state' management using the Nuxt-specific <code>useState()</code>
    composable. The state is <strong>global</strong> to the Nuxt app, meaning we can retrieve the state in other
    components.</p>
  <h3>{{ num }}</h3>
  <button @click="refresh">Refresh</button>
</template>

<style scoped>

</style>
