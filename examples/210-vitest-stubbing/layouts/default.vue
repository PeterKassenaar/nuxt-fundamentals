<template>
  <div class="container mx-auto p-4">
    <MainNavigation/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import MainNavigation from "@/components/MainNavigation.vue";
</script>
