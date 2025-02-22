<!--error.vue-->
<script setup lang="ts">
// 1. using the `useError()` composable
const error= useError()

// 2. Clearing the error message
const handleClear = () => {
  clearError({
    redirect: '/'
  })
}
</script>

<template>
  <div class="mt-8 p-4 max-w-sm mx-auto text-center border border-gray-200 rounded-lg shadow">
    <h2 class="mt-8 text-8xl">Ooops....</h2>
    <p class="mt-8 text-4xl">
      {{ error?.message }}
    </p>
    <p class="mt-8 mb-8 text-8xl">
      {{ error?.statusCode }}
    </p>
    <button class="btn btn-green" @click="handleClear()">Go home...</button>
  </div>
</template>

<style scoped>
/* Workshop: this TailwindCSS code is copy/pasted from PostDetail.vue. Configure Tailwind so that this is
 only defined once in the application and we can reuse .btn, .btn-green and so on everwhere
 in the application.
 */
.btn {
  @apply py-2 px-4 rounded;
}

.btn-green {
  @apply bg-green-500 text-white;
}

.btn-green:hover {
  @apply bg-green-700;
}
</style>
