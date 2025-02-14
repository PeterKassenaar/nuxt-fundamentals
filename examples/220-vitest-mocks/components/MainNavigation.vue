<template>
  <header class="shadow-sm bg-white">
    <!-- Main navigation -->
    <nav class="container mx-auto flex justify-between p-4">
      <nuxt-link to="/">
        <img src="../assets/img/vue-logo.png" alt="Vue Logo">
      </nuxt-link>

      <ul class="flex gap-4">
        <li>
          <nuxt-link to="/" class="font-bold">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/history" class="font-bold">History</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts" class="font-bold">Posts</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
img {
  max-width: 80px;
}
</style>
