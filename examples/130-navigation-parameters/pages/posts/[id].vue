<script setup lang="ts">
import type {Post} from "~/types/Post";

const route = useRoute()
const id = route.params.id

// URL to fetch data from. This repetition can be avoided by using a store, or composable. But it works for now.
const postDetail = `https://jsonplaceholder.typicode.com/posts/${id}`;
// Reactive variables
const post = ref<Post | null>(null); // store the posts
const isLoading = ref(true); // handle loading state
const error = ref<string | null>(null); // handle possible error state

// Fetch posts when the component mounts
const fetchPost = async () => {
  try {
    // we can also use the useFetch() composable as a wrapper around baked-in fetch()
    const response = await fetch(postDetail);
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    post.value = await response.json();
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

// Execute fetch when the component is mounted
onMounted(fetchPost);
</script>

<template>
  <h2>Post number : {{ id }}</h2>
  <ul v-if="!isLoading && post" class="list-group">
    <li class="list-group-item">
      {{ post.id }}
    </li>
    <li class="list-group-item">
      <strong>{{ post.title }}</strong>
    </li>
    <li class="list-group-item">
      <p>{{ post.body }}</p>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/posts" class="btn btn-info btn-lg">Back</nuxt-link>
    </li>
  </ul>
</template>
