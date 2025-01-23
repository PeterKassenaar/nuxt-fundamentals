<script setup lang="ts">
import {ref, onMounted} from 'vue';

// TypeScript interface for Posts. Remove this if you're using plain JavaScript.
import type {Post} from "@/types/Post";

// URL to fetch data from. Note: no ref() needed, as it doesn't have to be reactive. It is always the same.
const url = 'https://jsonplaceholder.typicode.com/posts';


// Reactive variables
const posts = ref<Post[]>([]); // store the posts
const isLoading = ref(true); // handle loading state
const error = ref<string | null>(null); // handle possible error state

// Fetch posts when the component mounts
const fetchPosts = async () => {
  try {
    // we can also use the useFetch() composable as a wrapper around baked-in fetch()
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    posts.value = await response.json();
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

// Execute fetch when the component is mounted
onMounted(fetchPosts);
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">All posts</h2>
    <!--    UI, based on loading state and retrieved posts. Composed with v-if and v-else-if.-->
    <!-- Loading state -->
    <div v-if="isLoading">Loading posts...</div>

    <!-- Error state -->
    <div v-else-if="error">
      {{ error }}
    </div>

    <!-- Posts list -->
    <ul v-else>
      <li
          v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/posts/${post.id}`">
          {{ post.id }} - {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
