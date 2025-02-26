<script setup lang="ts">
const num = useState('randomNumber') // use the SAME KEY as the parent component. This acts as a Getter.
</script>

<template>
  <h2>ReadNumber </h2>
  <p>Reading the random number, stored via <code>useState()</code>. We choose NOT to update the state from this
    component, it only reads the state</p>
  <h2>{{ num }}</h2>
</template>

<style scoped>

</style>
