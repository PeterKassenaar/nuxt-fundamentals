<script setup lang="ts">
const {post} = defineProps(['post'])
</script>

<template>
  <!--  Using Tailwind CSS classes here, as described in the docs.-->
  <!--  See for instance https://flowbite.com/docs/components/card/ for details -->
  <nuxt-link :to="`/posts/${post.id}`"
             class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Post number #{{ post.id }}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ post.title }}
    </p>
  </nuxt-link>
</template>

