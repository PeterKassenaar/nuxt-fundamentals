<script setup lang="ts">

// Define the `msg` prop with a type of `string`
// Auto-imported by Nuxt
const props = withDefaults(
    defineProps<{
      readonly msg: string;
    }>(),
    {
      msg: 'hello world', // Default value for the `msg` prop
    }
);

// simple counter variable
const count = ref(0);
</script>

<template>
<h2>Simple Hello world example</h2>
  <p>
    My count is {{ count}}
  </p>
  <p>
    <button @click="count++">count++</button>
  </p>
  <p>
    My message (prop) is: {{ msg }}
  </p>
</template>

<style scoped>

</style>
