<script setup lang="ts">
import type {Post} from "@/types/Post";

// Route params
const route = useRoute();
const id = route.params.id;

// URL to fetch data from
const detail = `https://jsonplaceholder.typicode.com/posts/${id}`;

// variable - doesn't have to be reactive (though it CAN be wrapped in a ref()), because it doesn't change during the lifetime of the component.
let post: Post | null = null;

// Fetch post function
const fetchPost = async () => {
  const response = await fetch(detail);
  if (!response.ok) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post Not Found",
      fatal: true
    });
  }
  post = await response.json();
};

// Call fetchPost in `async setup`
await fetchPost(); // This ensures Nuxt handles `createError` correctly
</script>

<!--[id].vue-->
<template>
  <div v-if="post">
    <PostDetail :post="post"/>
  </div>
</template>
