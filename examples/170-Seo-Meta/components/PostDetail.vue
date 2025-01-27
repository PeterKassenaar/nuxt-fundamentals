<script setup lang="ts">
const {post} = defineProps(['post'])
</script>

<template>
  <div class="grid grid-cols-2 gap-10 border border-gray-200 rounded-lg shadow">
    <div class="p-7">
      <h3 class="text-3xl my-8">Post id: #{{ post.id }}</h3>
      <p class="text-xl my-4"><strong>{{ post.title }}</strong></p>
      <nuxt-link to="/posts" class="btn btn-green">Back</nuxt-link>
    </div>
    <div class="p-7">
      <h3 class="text-3xl my-8">Message:</h3>
      <p class="text-xl my-4">{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
/* using @apply from tailwindCSS */
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
