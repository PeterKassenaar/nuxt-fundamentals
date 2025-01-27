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

// Option 2: [id].vue: Use the post Title as the page title
useHead({
  title: 'Post details : ' + (post ? post['title'] : id),
  // OR: use 'nullish coalescing' operator ?? like so:
  //  title: 'Post details:' + (post?.title ?? id),
  meta: [
    {
      name: 'description',
      content: (post ? post['body'] : 'No post found')
    }
  ]
})

// Option 2a: example usage of useSeoMeta() composable:
// useSeoMeta({
//   title: 'Post details :' + (post.title ??  id),
//   ogTitle: 'Using post title as ogTitle...',
//   description: 'Description of the page/post',
//   ogDescription: 'Description that is used on the og:description meta tag',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
// See official documentation on Open Graph tags at https://ogp.me/
</script>

<!--[id].vue-->
<template>
  <div v-if="post">
    <PostDetail :post="post"/>
  </div>
</template>
